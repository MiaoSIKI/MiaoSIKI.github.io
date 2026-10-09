# MiaoSIKI 个人主页

这是一个无需构建工具的静态站点。双击 `index.html` 即可预览，也可以直接部署到 GitHub Pages。新访客默认显示英文，右上角可以切换中英文。

## 日常更新

所有经常变化的内容都放在 [`content.js`](./content.js) 中：

- `projects`：精选项目
- `poems`：诗作
- `anime`：最近追番
- `music`：网易云歌单与歌曲推荐

不要为了增加内容复制 HTML 卡片。只需要在对应数组中复制一个对象并修改字段，页面会自动生成卡片、编号和数量。

### 增加诗作

```js
{
  title: { zh: '诗名', en: 'Poem title' },
  date: '2026.10',
  excerpt: { zh: '两到三行节选……', en: 'A short excerpt…' },
  body: { zh: '诗作全文……', en: 'Full poem…' },
  url: ''
}
```

把对象放入 `poems: []`。`body` 会显示在点击诗作后打开的阅读窗口中；`url` 可以留空。页面会按 `date` 自动从新到旧排列。

首页只随机展示 `poemDisplayCount` 首（当前为 6 首），点击“换一组诗作”可重新抽取；修改 `content.js` 顶部的该数值即可调整数量。

### 增加番剧

```js
{
  title: { zh: '作品名', en: 'Title' },
  status: 'watching',
  note: { zh: '看到第 6 集', en: 'Episode 6' },
  url: ''
}
```

`status` 支持：

- `watching`：在追
- `next`：待看
- `finished`：看完

### 更新网易云歌单

当前已经通过新版歌单接口写入歌单“想要给你推推推”的封面、介绍和完整 159 首歌曲。以后换歌单时，先修改公开分享链接：

把公开歌单分享链接粘贴到：

```js
playlistUrl: 'https://music.163.com/#/playlist?id=...'
```

歌曲列表会完整显示在页面内。点击歌名会在当前页面的播放器中播放或暂停，不会自动跳转网易云网页；歌曲 ID 会从每首歌的 `url` 自动提取。

页面按歌曲的 `fee` 权限标记自动隐藏 VIP（`1`）和需购买的歌曲（`4`）；曲目编号、筛选数量和连续播放使用同一份过滤后的列表。当前 159 首中显示 97 首，隐藏 62 首。

更新歌单后，在此目录运行 `node sync-playlist.mjs`，即可同步完整曲目和权限标记。同步成功后再发布更新的 `content.js`。这是静态站点，歌曲权限变更需要重新同步。

歌曲推荐放进 `tracks: []`：

```js
{
  id: '网易云歌曲 ID',
  title: '歌曲名',
  artist: '歌手',
  url: 'https://music.163.com/#/song?id=...'
}
```

### 增加项目

复制 `projects` 中的任意对象并修改。项目编号和页面上的项目数量会自动更新。

## 文件结构

- `content.js`：日常内容配置，主要编辑这里
- `index.html`：页面语义结构
- `styles.css`：视觉与响应式布局
- `script.js`：渲染、语言切换和交互
- `CNAME`：GitHub Pages 自定义域名
