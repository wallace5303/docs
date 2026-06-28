---
layout: home
title: 推广文章
---

<script setup>
const articles = [
  { link: '/electron-egg-harmonyos', title: 'ElectronEgg: 桌面开发框架全新升级，轻松开发鸿蒙应用', desc: '一套代码打包 Windows / Mac / Linux，现在还能直接跑在鸿蒙（HarmonyOS）上。' },
]
</script>

# 推广文章

本地预览目录。以下为已发布的推广文章：

<ul>
  <li v-for="a in articles" :key="a.link">
    <a :href="a.link">{{ a.title }}</a>
    <p>{{ a.desc }}</p>
  </li>
</ul>

<style scoped>
ul { list-style: none; padding: 0; }
li { margin: 1.2rem 0; }
li a { font-weight: 600; font-size: 1.1rem; }
li p { color: var(--vp-c-text-2); margin: 0.3rem 0 0; }
</style>
