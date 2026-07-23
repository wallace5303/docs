# AGENTS.md

本文件用于指导 Codex（Codex.ai/code）在此仓库中处理代码。

## 项目简介

这是 **electron-egg** 桌面应用框架（dromara/electron-egg）的 VitePress 文档站点。站点支持中英文：英文位于站点根路径，中文位于 `/zh/`，此外 `/zh/v4/` 下还保留了一份冻结的 v4 版本归档。站点部署在 GitHub Pages。

## 命令

```bash
npm run dev      # 启动本地开发服务器（VitePress）
npm run build    # 构建到 .vitepress/dist
npm run preview  # 预览已构建的站点
npm run migrate  # 一次性操作：将 ../v4/docs（旧 vuepress/vdoing 站点）中的 Markdown 迁移到 docs/
```

项目没有配置测试或 lint。请运行 `npm run dev`，并检查修改过的页面以验证变更。

## 部署

推送到 `main_v5` 分支时，`.github/workflows/deployV5.yml` 会执行构建，并通过 `peaceiris/actions-gh-pages` 将 `.vitepress/dist` 发布到 `dist_v5` 分支。默认工作分支是 `main_v5`，不是 `main`。

## 架构

### 内容位于 `docs/`，按数字前缀自动排序

`config.mts` 将 `srcDir` 设置为 `'docs'`。内容树中的目录和文件名都带有**数字前缀**，例如 `010.getting-started/`、`020.ipc-render.md`。所有位置的排序都由这些前缀决定——不要只按名称重新排序内容，数字前缀才是排序依据。

顶层内容目录包括：`00.docs`（主要指南）、`07.features`、`08.plugins`、`09.api`、`06.support`、`04.others`、`05.tips`。中文内容位于 `docs/zh/`，目录结构与英文内容一致。v4 归档位于 `docs/zh/v4/`。

### 侧边栏由程序生成，不要手工编写

`.vitepress/buildData.mjs` 会在构建时遍历 `docs/` 目录，生成并导出 `sidebarEn`、`sidebarZh` 和 `sidebarZhV4`，供 `config.mts` 使用。关键机制如下：

- 只有 `INCLUDE_DIRS` 中列出的目录才会按数组中的顺序成为顶层侧边栏分组；第一个分组默认展开，其余分组默认折叠。
- 目录的**显示名称**来自 `displayNameMapEn`、`displayNameMapZh` 和 `displayNameMapZhV4`。映射键是去掉数字前缀后的目录名。未出现在映射中的新目录会退回显示去除前缀后的 slug，因此应在映射中添加易读的名称。
- 页面的**链接文本**来自各 `.md` 文件 frontmatter 中的 `title`，没有时会退回使用文件名。每个内容页面都必须在 frontmatter 中包含 `title`，否则侧边栏会显示原始文件名。

添加、重命名或删除目录及页面时，无需手动修改侧边栏；下次开发或构建时会自动重新生成。只有新增目录名称时才需要更新显示名称映射。

### 多语言与路由

`config.mts` 定义了两个语言区域：`root`（英文，路由以 `/` 开头）和 `zh`（中文，路由以 `/zh/` 开头）。导航栏 `navEn`、`navZh` 在 `config.mts` 中手工维护，各语言使用不同的侧边栏。`cleanUrls: true` 会去掉 `.html` 后缀。项目启用了 `ignoreDeadLinks: true`，因此失效链接不会导致构建失败，请手动检查链接。

### 主题

`.vitepress/theme/index.ts` 扩展了 VitePress 默认主题，并在每个文档页面的 `doc-before` 插槽中注入 `WwAds.vue` 广告组件。`custom.css` 将旧 vdoing 站点的强调色（`#11A8CD`）迁移为 VitePress 品牌变量。`WwAds.vue` 还会在延迟 3 秒后显示将站点加入广告拦截白名单的提示。

`config.mts` 中的 `head` 会向每个页面注入 Google Analytics、百度统计、WWAds 加载器和 favicon。

## 内容约定

- Frontmatter 保持精简：必须包含 `title`（用于侧边栏文本）；首页可选添加 `layout: home`，例如 `docs/index.md`、`docs/zh/index.md`、`docs/zh/v4/index.md`。
- 图片和静态资源放在 `docs/public/` 中，并在 Markdown 中以 `/img/...` 的形式引用。
- 新增页面时，应遵循同级文件的数字前缀命名方式，确保页面出现在侧边栏的正确位置。

## 迁移脚本（`scripts/`）

这些一次性工具用于将旧 vuepress/vdoing 站点（`../v4/docs`）的内容迁移到 VitePress：

- `migrate.mjs`（`npm run migrate`）——复制 `.md` 文件，重写 frontmatter（保留 `title`、`permalink`，移除 `date`、`article`），将 `$withBase(...)` 图片引用转换为普通路径，并复制 `public/` 资源。该脚本会写入中文内容及对应的英文占位副本。
- `rename-dirs.mjs` / `rename-files.mjs`——通过硬编码映射批量将中文目录名和文件名重命名为对应的英文名称。
- `remove-permalink.mjs`——从 frontmatter 中移除 `permalink`。

这些脚本仅用于历史迁移，不参与构建。`baiduPush.sh` 用于将 `urls.txt` 推送到百度以进行 SEO 收录，需要手动运行，并要求该文件存在。
