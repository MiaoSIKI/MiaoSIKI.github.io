const translations = {
  zh: {
    focusLabel: '— 研究与开发', focusTitle: '研究方向 / 技术栈', focusResearch: '研究方向', focusResearchBody: '芯片物理设计：布局与优化。', focusDevelopment: '软件开发', focusDevelopmentBody: '研究复现、系统实验与 Web 小工具。',
    pageTitle: 'MiaoSIKI — 芯片、软件与日常', skip: '跳到正文', menu: '菜单', navPortfolio: '作品集', navPoetry: '诗作', navWatching: '追番', navMusic: '音乐', navContact: '联系',
    heroKicker: '— 作品集 / 2026', heroTitle: 'MiaoSIKI.<br /><em>物理设计</em><br />遇见有温度的软件。', heroBody: '我游走在算法与界面之间——复现布局研究、探索系统，也做让复杂事物变得直接的 Web 体验。',
    statusLabel: '— 状态', statusPill: 'CUHKSZ · 2026 年 10 月', statusTitle: '研究系统如何找到它的<em>形状</em>——从芯片布局到交互界面。', organization: '组织', focus: '方向', focusValue: '物理设计', stackFact: '技术栈',
    aboutLabel: '— 关于', aboutTitle: '关于 MiaoSIKI', aboutP1: '我在意那些接缝——<strong>论文如何变成代码，优化如何变成版图，系统又如何变得可以理解。</strong>', aboutP2: '最近在做 EDA 相关的研究复现，也写一些 Web 小工具。',
    stackLabel: '— 技术栈', stackTitle: '技术栈', languages: '语言', physicalDesign: '物理设计', placement: '布局', optimization: '优化', reproduction: '复现', frontend: '前端', systems: '系统', tools: '工具',
    metricsLabel: '— 索引数字', metricsTitle: '作品集数字', publicRepos: '公开仓库', selectedThreads: '精选项目', coreLanguages: '核心语言', livingPortfolio: '持续更新的主页',
    workLabel: '— 精选作品', projectCount: '04 个项目', workTitle: '精选作品', project1Desc: '复现并研究物理设计中的分配方法。', project2Desc: '探索 ePlace 与 ePlace-MS 的重新实现。', project3Desc: '为 Linux 上的 YesPlayMusic 提供多人一起听。', project4Desc: '一个持续中的 TypeScript 实验——“电子脑硬化症”。', viewRepos: '查看全部仓库 →',
    activityLabel: '— 动态', older: '较早', mapNote: '仓库地图 · 非贡献次数', recent: '最近', originalThread: '原创项目', musicProjectShort: 'Vue · 多人一起听', thisPortfolio: '这个个人主页', recentlyActive: '最近活跃', physicalStudy: '物理设计研究', tsExperiment: 'TypeScript 实验',
    logLabel: '— 项目日志', logTitle: '近期项目日志', oct2026: '2026 年 10 月', sep2026: '2026 年 9 月', aug2026: '2026 年 8 月', log1: '围绕物理设计分配问题进行复现。', log2: '持续中的 TypeScript 实验。', log3: '为 YesPlayMusic 实现协同听歌。',
    terminalWho: '→ MiaoSIKI — 在芯片与软件之间构建<br />→ 组织：CUHKSZ', academicLabel: '— 学术', currentPath: '当前', current: '当前', active: '进行中',
    poetryLabel: '— 诗作', poetryTitle: '把不能编译的部分，<em>写成诗。</em>', poetryBody: '共收录 20 首原创诗作，首页随机选出一组。点开标题可以阅读全文。', awaiting: '待收录', poemOne: '第一首诗', poemTwo: '第二首诗', poemThree: '第三首诗', poemPlaceholder: '在这里放一首诗的标题、日期和两三行节选。',
    watchingLabel: '— 最近追番', watchingTitle: '最近看的动画', watchingBody: '片单还没整理好。', watchingNow: '在追', watchingNext: '待看', watchingDone: '看完',
    musicLabel: '— 音乐推荐', playlistLabel: '来自我的网易云歌单', musicTitle: '最近循环的声音，<br /><em>留在这里。</em>', musicBody: '歌单分享链接尚未连接。加入公开歌单 ID 后，这里会展示封面、歌单入口与精选曲目。', openNetease: '打开网易云音乐 →', playlistNeeded: '需要公开歌单分享链接',
    contactLabel: '— 联系', contactTitle: '一起探索一件<em>值得理解的事。</em>', contactBody: '带来一篇论文、一个实现细节，或一个越看越有意思的问题。', openGithub: '打开 GitHub →', crafted: '认真制作'
  },
  en: {
    focusLabel: '— Research & development', focusTitle: 'Research / Software', focusResearch: 'Research', focusResearchBody: 'Chip physical design: placement and optimization.', focusDevelopment: 'Software', focusDevelopmentBody: 'Research reproductions, systems experiments, and small web tools.',
    pageTitle: 'MiaoSIKI — Silicon, software & everyday life', skip: 'Skip to content', menu: 'Menu', navPortfolio: 'portfolio', navPoetry: 'poetry', navWatching: 'watching', navMusic: 'music', navContact: 'contact',
    heroKicker: '— Portfolio / 2026', heroTitle: 'MiaoSIKI.<br /><em>Physical design</em><br />meets thoughtful software.', heroBody: 'I work between algorithms and interfaces — reproducing placement research, exploring systems, and building web experiences that make complex things feel direct.',
    statusLabel: '— Status', statusPill: 'CUHKSZ · October 2026', statusTitle: 'Studying how systems find their <em>shape</em> — from chip placement to interfaces.', organization: 'Organization', focus: 'Focus', focusValue: 'Physical design', stackFact: 'Stack',
    aboutLabel: '— About', aboutTitle: 'About MiaoSIKI', aboutP1: 'I’m interested in the seams — <strong>where a paper becomes code, where an optimization becomes a layout, and where a system becomes understandable.</strong>', aboutP2: 'Lately, I’ve been reproducing EDA research and writing small web tools.',
    stackLabel: '— Stack', stackTitle: 'Technical stack', languages: 'Languages', physicalDesign: 'Physical design', placement: 'Placement', optimization: 'Optimization', reproduction: 'Reproduction', frontend: 'Frontend', systems: 'Systems', tools: 'Tools',
    metricsLabel: '— By the index', metricsTitle: 'Portfolio index numbers', publicRepos: 'public repositories', selectedThreads: 'selected threads', coreLanguages: 'core languages', livingPortfolio: 'living portfolio',
    workLabel: '— Selected work', projectCount: '04 projects', workTitle: 'Selected work', project1Desc: 'Reproducing and examining a physical-design assignment approach.', project2Desc: 'Exploring a reimplementation of ePlace and ePlace-MS.', project3Desc: 'Multi-user listening support for YesPlayMusic on Linux.', project4Desc: 'An ongoing TypeScript experiment — “electronic brain sclerosis.”', viewRepos: 'View all repositories →',
    activityLabel: '— Activity', older: 'older', mapNote: 'repository map · not contribution counts', recent: 'recent', originalThread: 'Original thread', musicProjectShort: 'Vue · multi-user listening', thisPortfolio: 'This portfolio', recentlyActive: 'Recently active', physicalStudy: 'Physical-design study', tsExperiment: 'TypeScript experiment',
    logLabel: '— Project log', logTitle: 'Recent project log', oct2026: 'Oct 2026', sep2026: 'Sep 2026', aug2026: 'Aug 2026', log1: 'Reproduction work around physical-design assignment.', log2: 'A TypeScript experiment in progress.', log3: 'Collaborative listening for YesPlayMusic.',
    terminalWho: '→ MiaoSIKI — builder between silicon and software<br />→ Organization: CUHKSZ', academicLabel: '— Academic', currentPath: 'Currently', current: 'Current', active: 'Active',
    poetryLabel: '— Poetry', poetryTitle: 'The parts that do not compile,<br /><em>become poems.</em>', poetryBody: 'Twenty original poems are archived here; the homepage shows a random selection. Open a title to read the full text.', awaiting: 'Awaiting work', poemOne: 'Poem No. 1', poemTwo: 'Poem No. 2', poemThree: 'Poem No. 3', poemPlaceholder: 'A reserved space for the title, date, and a short excerpt.',
    watchingLabel: '— Recently watching', watchingTitle: 'What I’m watching', watchingBody: 'I haven’t put the list together yet.', watchingNow: 'Watching', watchingNext: 'Next', watchingDone: 'Finished',
    musicLabel: '— Music recommendations', playlistLabel: 'From my NetEase Cloud Music playlist', musicTitle: 'The sounds on repeat,<br /><em>kept here.</em>', musicBody: 'The playlist share link is not connected yet. With a public playlist ID, this area can show its cover, link, and selected tracks.', openNetease: 'Open NetEase Music →', playlistNeeded: 'Public playlist share link needed',
    contactLabel: '— Get in touch', contactTitle: 'Let’s explore something <em>worth understanding.</em>', contactBody: 'Bring a paper, an implementation detail, or a problem that gets more interesting the closer you look.', openGithub: 'Open GitHub →', crafted: 'crafted with intent'
  }
};

const siteContent = window.SITE_CONTENT || { projects: [], poems: [], anime: [], music: {} };
const getMusicTracks = () => (siteContent.music?.tracks || []).filter((track) => ![1, 4].includes(Number(track.fee)));
const escapeHTML = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');
const localized = (value, language) => {
  if (typeof value === 'string') return value;
  return value?.[language] || value?.zh || value?.en || '';
};
const safeURL = (value, fallback = '#') => {
  if (!value) return fallback;
  try {
    const url = new URL(value, window.location.href);
    return ['http:', 'https:', 'mailto:'].includes(url.protocol) ? url.href : fallback;
  } catch {
    return fallback;
  }
};

const getNetEaseSongId = (track = {}) => {
  const configuredId = String(track.id || '').trim();
  if (/^[0-9]+$/.test(configuredId)) return configuredId;
  const match = String(track.url || '').match(/[?&#]id=([0-9]+)/);
  return match?.[1] || '';
};
const getNetEaseMediaURL = (songId) => songId
  ? 'https://music.163.com/song/media/outer/url?id=' + encodeURIComponent(songId) + '.mp3'
  : '';
let currentTrackIndex = -1;
const getPageLanguage = () => document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
const setAudioStatus = (zh, en) => {
  const status = document.querySelector('[data-audio-status]');
  if (status) status.textContent = getPageLanguage() === 'zh' ? zh : en;
};
const updateTrackSelection = () => {
  const audio = document.querySelector('[data-audio]');
  const isPlaying = Boolean(audio && !audio.paused && !audio.ended);
  document.querySelectorAll('[data-track-index]').forEach((button) => {
    const active = Number(button.dataset.trackIndex) === currentTrackIndex;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
    const state = button.querySelector('.track-state');
    if (state) state.textContent = active && isPlaying ? '❚❚' : '▶';
  });
};
const updateNowPlaying = (language) => {
  const tracks = getMusicTracks();
  if (currentTrackIndex >= tracks.length) currentTrackIndex = -1;
  const track = currentTrackIndex >= 0 ? tracks[currentTrackIndex] : null;
  const label = document.querySelector('[data-audio-label]');
  const title = document.querySelector('[data-audio-title]');
  const artist = document.querySelector('[data-audio-artist]');
  const status = document.querySelector('[data-audio-status]');
  if (label) label.textContent = language === 'zh' ? '当前播放' : 'Now playing';
  if (title) title.textContent = track?.title || (language === 'zh' ? '选择一首歌' : 'Choose a track');
  if (artist) artist.textContent = track?.artist || (language === 'zh' ? '点击下方歌名即可在此播放' : 'Select any song below to play it here');
  if (status) status.textContent = track
    ? (language === 'zh' ? '音频由网易云音乐提供' : 'Audio provided by NetEase Cloud Music')
    : (language === 'zh' ? tracks.length + ' 首歌曲已完整列出' : 'All ' + tracks.length + ' tracks are listed below');
};
const playMusicTrack = (index) => {
  const tracks = getMusicTracks();
  const track = tracks[index];
  const audio = document.querySelector('[data-audio]');
  if (!track || !audio) return;
  const songId = getNetEaseSongId(track);
  if (!songId) {
    setAudioStatus('这首歌缺少网易云歌曲 ID', 'This track is missing its NetEase song ID');
    return;
  }
  if (currentTrackIndex === index && audio.getAttribute('src')) {
    if (audio.paused) {
      const resumed = audio.play();
      resumed?.catch(() => setAudioStatus('播放失败，歌曲可能受版权或地区限制', 'Playback failed; this track may be restricted'));
    } else {
      audio.pause();
    }
    return;
  }
  currentTrackIndex = index;
  updateNowPlaying(getPageLanguage());
  updateTrackSelection();
  audio.hidden = false;
  audio.setAttribute('src', getNetEaseMediaURL(songId));
  audio.load();
  setAudioStatus('正在连接网易云音频…', 'Connecting to NetEase audio…');
  const playback = audio.play();
  playback?.catch(() => setAudioStatus('播放失败，歌曲可能受版权或地区限制', 'Playback failed; this track may be restricted'));
};

const renderProjects = (language) => {
  const container = document.querySelector('[data-project-list]');
  if (!container) return;
  const projects = siteContent.projects || [];
  container.innerHTML = projects.map((project, index) => `
    <a href="${safeURL(project.url)}" target="_blank" rel="noreferrer">
      <span class="project-no">${String(index + 1).padStart(2, '0')}</span>
      <span class="project-copy"><strong>${escapeHTML(project.title)}</strong><small>${escapeHTML(localized(project.description, language))}</small></span>
      <span class="tags">${(project.tags || []).map((tag) => `<i>${escapeHTML(tag)}</i>`).join('')}</span>
      <span>→</span>
    </a>`).join('');

  const total = String(projects.length).padStart(2, '0');
  document.querySelectorAll('[data-project-total]').forEach((element) => { element.textContent = total; });
  document.querySelectorAll('[data-project-count]').forEach((element) => {
    element.textContent = language === 'zh' ? `${total} 个项目` : `${total} projects`;
  });
};

let displayedPoems = [];
const poemTimestamp = (poem) => Date.parse(String(poem?.date || '').trim()) || 0;
const chooseRandomPoems = (sourcePoems) => {
  const requested = Number(siteContent.poemDisplayCount) || 6;
  const count = Math.min(Math.max(requested, 1), sourcePoems.length);
  const shuffled = [...sourcePoems];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled.slice(0, count).sort((left, right) => poemTimestamp(right) - poemTimestamp(left));
};

const renderPoems = (language) => {
  const container = document.querySelector('[data-poem-grid]');
  const dialog = document.querySelector('[data-poem-dialog]');
  const shuffleButton = document.querySelector('[data-poem-shuffle]');
  const countLabel = document.querySelector('[data-poem-count]');
  if (!container) return;
  const sourcePoems = siteContent.poems || [];
  const requested = Math.min(Math.max(Number(siteContent.poemDisplayCount) || 6, 1), sourcePoems.length);
  const selectionInvalid = displayedPoems.length !== requested || displayedPoems.some((poem) => !sourcePoems.includes(poem));
  if (selectionInvalid) displayedPoems = chooseRandomPoems(sourcePoems);
  const poems = [...displayedPoems];
  const placeholderTitles = language === 'zh' ? ['第一首诗', '第二首诗', '第三首诗'] : ['Poem No. 1', 'Poem No. 2', 'Poem No. 3'];
  while (poems.length < 3) poems.push(null);

  if (shuffleButton) {
    shuffleButton.textContent = language === 'zh' ? '换一组诗作 ↻' : 'Shuffle poems ↻';
    shuffleButton.setAttribute('aria-label', language === 'zh' ? '随机换一组诗作' : 'Show another random group of poems');
    shuffleButton.onclick = () => {
      displayedPoems = chooseRandomPoems(sourcePoems);
      renderPoems(language);
    };
  }
  if (countLabel) countLabel.textContent = displayedPoems.length + ' / ' + sourcePoems.length;

  container.innerHTML = poems.map((poem, index) => {
    if (!poem) return `
      <article class="empty-card">
        <span>${String(index + 1).padStart(2, '0')}</span><time>${language === 'zh' ? '待收录' : 'Awaiting work'}</time>
        <h3>${placeholderTitles[index] || (language === 'zh' ? '新诗' : 'New poem')}</h3>
        <p>${language === 'zh' ? '在 content.js 的 poems 数组中添加内容。' : 'Add an item to the poems array in content.js.'}</p>
      </article>`;
    const href = safeURL(poem.url, '');
    const title = escapeHTML(localized(poem.title, language));
    const hasBody = Boolean(localized(poem.body, language));
    const titleControl = hasBody
      ? `<button class="poem-open" type="button" data-poem-index="${index}">${title}</button>`
      : (href ? `<a href="${href}" target="_blank" rel="noreferrer">${title}</a>` : title);
    return `
      <article class="${hasBody ? 'has-body' : ''}">
        <span>${String(index + 1).padStart(2, '0')}</span><time>${escapeHTML(poem.date || '')}</time>
        <h3>${titleControl}</h3>
        <p>${escapeHTML(localized(poem.excerpt, language))}</p>
      </article>`;
  }).join('');

  container.querySelectorAll('[data-poem-index]').forEach((button) => {
    button.addEventListener('click', () => {
      const poem = poems[Number(button.dataset.poemIndex)];
      if (!poem || !dialog) return;
      dialog.querySelector('[data-poem-title]').textContent = localized(poem.title, language);
      dialog.querySelector('[data-poem-date]').textContent = poem.date || '';
      dialog.querySelector('[data-poem-body]').textContent = localized(poem.body, language) || localized(poem.excerpt, language);
      dialog.querySelector('[data-poem-close]').setAttribute('aria-label', language === 'zh' ? '关闭诗作' : 'Close poem');
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    });
  });

  if (dialog && !dialog.dataset.bound) {
    dialog.dataset.bound = 'true';
    dialog.querySelector('[data-poem-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  }
};

const renderAnime = (language) => {
  const container = document.querySelector('[data-anime-list]');
  if (!container) return;
  const anime = siteContent.anime || [];
  const labels = language === 'zh'
    ? { watching: '在追', next: '待看', finished: '看完' }
    : { watching: 'Watching', next: 'Next', finished: 'Finished' };
  const colors = { watching: 'red', next: 'yellow', finished: 'blue' };

  if (!anime.length) {
    container.innerHTML = Object.entries(labels).map(([status, label]) => `
      <span><i class="repo-dot ${colors[status]}"></i><b>${label}</b><small>—</small></span>`).join('');
    return;
  }

  container.innerHTML = anime.map((item) => {
    const status = labels[item.status] ? item.status : 'watching';
    const href = safeURL(item.url, '');
    const tag = href ? 'a' : 'span';
    const attributes = href ? ` href="${href}" target="_blank" rel="noreferrer"` : '';
    const note = localized(item.note, language);
    return `<${tag}${attributes}><i class="repo-dot ${colors[status]}"></i><b>${escapeHTML(localized(item.title, language))}</b><small>${escapeHTML(labels[status])}${note ? ` · ${escapeHTML(note)}` : ''}</small></${tag}>`;
  }).join('');
};

const renderMusic = (language) => {
  const music = siteContent.music || {};
  const tracks = getMusicTracks();
  const title = document.querySelector('[data-music-title]');
  const description = document.querySelector('[data-music-description]');
  const playlistName = document.querySelector('[data-playlist-name]');
  const playlistLink = document.querySelector('[data-playlist-link]');
  const playlistStatus = document.querySelector('[data-playlist-status]');
  const trackList = document.querySelector('[data-track-list]');
  const trackFilter = document.querySelector('[data-track-filter]');
  const trackFilterLabel = document.querySelector('[data-track-filter-label]');
  const vinyl = document.querySelector('.vinyl');
  const coverURL = safeURL(music.coverUrl, '');
  const hasPlaylist = Boolean(music.playlistUrl);

  if (title) title.innerHTML = localized(music.title, language);
  if (description) description.textContent = localized(music.description, language);
  if (playlistName) playlistName.textContent = localized(music.playlistName, language);
  if (vinyl) {
    vinyl.classList.toggle('has-cover', Boolean(coverURL));
    if (coverURL) vinyl.style.setProperty('--cover-image', 'url("' + coverURL + '")');
    else vinyl.style.removeProperty('--cover-image');
  }
  if (playlistLink) {
    playlistLink.href = safeURL(music.playlistUrl, 'https://music.163.com/');
    playlistLink.textContent = hasPlaylist
      ? (language === 'zh' ? '打开我的歌单 →' : 'Open my playlist →')
      : (language === 'zh' ? '打开网易云音乐 →' : 'Open NetEase Music →');
  }
  if (playlistStatus) playlistStatus.textContent = hasPlaylist
    ? (language === 'zh' ? tracks.length + ' 首 · 点击歌名播放' : tracks.length + ' tracks · click a title to play')
    : (language === 'zh' ? '在 content.js 中粘贴歌单链接' : 'Paste the playlist link into content.js');

  if (trackFilterLabel) trackFilterLabel.textContent = language === 'zh' ? '筛选歌曲' : 'Filter tracks';
  if (trackFilter) {
    trackFilter.placeholder = language === 'zh' ? '输入歌名或歌手' : 'Search title or artist';
    trackFilter.setAttribute('aria-label', language === 'zh' ? '按歌名或歌手筛选' : 'Filter by title or artist');
  }
  if (!trackList) return;
  trackList.innerHTML = tracks.length
    ? tracks.map((track, index) => {
        const songId = getNetEaseSongId(track);
        const active = index === currentTrackIndex;
        return `<button class='track-button${active ? ' is-active' : ''}' type='button' data-track-index='${index}' aria-pressed='${active}'${songId ? '' : ' disabled'}><i>${String(index + 1).padStart(2, '0')}</i><span class='track-copy'><b>${escapeHTML(track.title)}</b><small>${escapeHTML(track.artist)}</small></span><span class='track-state' aria-hidden='true'>▶</span></button>`;
      }).join('')
    : `<span class='track-empty'>${language === 'zh' ? '还没有精选曲目 · 在 content.js 的 tracks 数组中添加' : 'No featured tracks yet · add them to the tracks array in content.js'}</span>`;

  const applyTrackFilter = () => {
    const query = String(trackFilter?.value || '').trim().toLocaleLowerCase();
    let visible = 0;
    trackList.querySelectorAll('[data-track-index]').forEach((button) => {
      const matches = !query || button.textContent.toLocaleLowerCase().includes(query);
      button.hidden = !matches;
      if (matches) visible += 1;
    });
    if (playlistStatus && hasPlaylist) playlistStatus.textContent = query
      ? (language === 'zh' ? visible + ' / ' + tracks.length + ' 首匹配' : visible + ' / ' + tracks.length + ' matching')
      : (language === 'zh' ? tracks.length + ' 首 · 点击歌名播放' : tracks.length + ' tracks · click a title to play');
  };
  if (trackFilter) trackFilter.oninput = applyTrackFilter;
  applyTrackFilter();

  trackList.querySelectorAll('[data-track-index]').forEach((button) => {
    button.addEventListener('click', () => playMusicTrack(Number(button.dataset.trackIndex)));
  });
  updateNowPlaying(language);
  updateTrackSelection();
};

const renderContent = (language) => {
  renderProjects(language);
  renderPoems(language);
  renderAnime(language);
  renderMusic(language);
};

const musicAudio = document.querySelector('[data-audio]');
musicAudio?.addEventListener('play', () => {
  setAudioStatus('正在播放 · 再点当前歌名可暂停', 'Playing · click the current title again to pause');
  updateTrackSelection();
});
musicAudio?.addEventListener('pause', () => {
  if (musicAudio.getAttribute('src') && !musicAudio.ended && !musicAudio.error) setAudioStatus('已暂停', 'Paused');
  updateTrackSelection();
});
musicAudio?.addEventListener('ended', () => {
  const tracks = getMusicTracks();
  const nextIndex = currentTrackIndex + 1;
  if (nextIndex < tracks.length) playMusicTrack(nextIndex);
  else {
    setAudioStatus('歌单播放完毕', 'Playlist finished');
    updateTrackSelection();
  }
});
musicAudio?.addEventListener('error', () => {
  setAudioStatus('网易云暂时无法播放这首歌，可能是版权或地区限制', 'NetEase cannot play this track here; it may have licensing or regional restrictions');
  updateTrackSelection();
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
}

const languageButton = document.querySelector('[data-lang-toggle]');
const applyLanguage = (language) => {
  const copy = translations[language];
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = copy.pageTitle;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  if (languageButton) {
    languageButton.textContent = language === 'zh' ? 'EN' : '中';
    languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  }
  renderContent(language);
  try { localStorage.setItem('miaosiki-language', language); } catch { /* File previews may block storage. */ }
};

let currentLanguage = siteContent.defaultLanguage || 'zh';
try { currentLanguage = localStorage.getItem('miaosiki-language') || currentLanguage; } catch { /* Keep the configured default. */ }
applyLanguage(currentLanguage);
languageButton?.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
  applyLanguage(currentLanguage);
});

const repoMap = document.querySelector('[data-repo-map]');
if (repoMap) {
  const highlightedCells = new Map([[14,1],[21,2],[29,1],[37,3],[46,1],[54,2],[63,4],[71,2],[79,1],[88,3],[96,1],[105,4],[114,2],[126,1],[137,3],[145,1],[154,2],[163,3]]);
  for (let index = 0; index < 168; index += 1) {
    const cell = document.createElement('span');
    cell.dataset.level = String(highlightedCells.get(index) || 0);
    repoMap.appendChild(cell);
  }
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
