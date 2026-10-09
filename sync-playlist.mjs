// Run `node sync-playlist.mjs` after changing your NetEase playlist.
import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';

const contentPath = new URL('./content.js', import.meta.url);
const source = await readFile(contentPath, 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context);
const content = context.window.SITE_CONTENT;
const playlistId = content.music.playlistUrl.match(/[?&]id=(\d+)/)?.[1];
if (!playlistId) throw new Error('Missing playlist ID');
const request = async (url) => {
  const response = await fetch(url, { headers: { Referer: 'https://music.163.com/' }, signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`NetEase HTTP ${response.status}`);
  const data = await response.json();
  if (data.code !== 200) throw new Error(`NetEase code ${data.code}`);
  return data;
};
const detail = await request(`https://music.163.com/api/v6/playlist/detail?id=${playlistId}&n=1000&s=8`);
const ids = detail.playlist.trackIds.map((track) => track.id);
if (ids.length !== detail.playlist.trackCount) throw new Error('Incomplete playlist; content was not changed');
const songs = new Map();
for (let start = 0; start < ids.length; start += 100) {
  const batch = ids.slice(start, start + 100);
  const result = await request(`https://music.163.com/api/song/detail/?ids=${encodeURIComponent(JSON.stringify(batch))}`);
  for (const song of result.songs) songs.set(song.id, song);
}
if (songs.size !== ids.length) throw new Error('Missing song details; content was not changed');
content.music.tracks = ids.map((id) => {
  const song = songs.get(id);
  if (!Number.isInteger(song.fee)) throw new Error(`Missing fee for ${id}`);
  return { id: String(id), title: song.name, artist: (song.artists || song.ar).map((artist) => artist.name).join(' / '), fee: song.fee, url: `https://music.163.com/#/song?id=${id}` };
});
const prefix = source.slice(0, source.indexOf('window.SITE_CONTENT ='));
await writeFile(contentPath, prefix + 'window.SITE_CONTENT = ' + JSON.stringify(content, null, 2) + ';\n');
const visible = content.music.tracks.filter((track) => ![1, 4].includes(track.fee));
console.log(`Synced ${ids.length} tracks; ${visible.length} visible; ${ids.length - visible.length} VIP/paid tracks hidden.`);
