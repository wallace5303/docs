import { defineConfig } from 'vitepress'

// Standalone config for the local-preview-only `articles/` root.
// This directory sits OUTSIDE the main `docs/` srcDir, so `npm run build`
// (and the CI deploy) never processes it. Preview with: npm run article
export default defineConfig({
  title: 'ElectronEgg',
  description: '推广文章（本地预览）',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true, // article links to the main site, which isn't part of this root
})
