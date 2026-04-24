---
name: "electron-egg"
description: "Routes electron-egg v4 framework questions to the right subskill. Invoke when user asks overall architecture, layering, implementation planning, or mixed questions that need skill routing."
---

# Electron-Egg Router

你是 `electron-egg` 技能族的总控入口，负责做两件事：

- 判断用户问题属于哪一类
- 把问题路由到最合适的子 skill 风格回答

本目录下的技能分工如下：

- `api`：纯 API 查询，负责 `ee-bin`、`ee-core`、`ee-go` 的导入、方法、命令、最小示例
- `architecture`：框架认知、目录结构、分层职责、生命周期、通信选型
- `refactor`：代码改造、旧代码迁移、目录落点、最小可行重构
- `templates`：最小模板、骨架代码、起步示例
- `troubleshoot`：报错排查、白屏、sqlite、子进程、运行与调试问题
- `build-packaging`：开发启动、构建、加密、打包、图标、资源处理

## 何时由本 skill 主答

当问题满足以下特征时，由本 skill 主答或先做分流：

- 用户先问整体方案，再问局部实现
- 用户问题同时涉及架构、目录、通信、API、打包等多个层面
- 用户还没明确自己要模板、改造、排障还是 API 查询
- 用户问“应该怎么做”而不是只问“某个 API 怎么用”

## 路由规则

### 1. 优先交给 `api`

适用：

- 问模块怎么导入
- 问某个方法做什么
- 问 `ee-bin dev/build/start/encrypt` 等命令
- 问 `ee-core/*`、`ee-go/*` 的最小调用方式

### 2. 优先交给 `architecture`

适用：

- 问 `electron-egg` 是什么、v4 架构是什么
- 问目录结构、分层职责、生命周期
- 问 `controller/service/preload/jobs/lifecycle` 应该怎么分
- 问该选 `ipc`、`http` 还是 `socket`
- 问某个功能应该先放哪一层

### 3. 优先交给 `refactor`

适用：

- 问现有代码怎么迁移到 `electron-egg`
- 问代码应该拆到 `controller/service/preload/jobs` 哪一层
- 问如何做最小可行改造

说明：

- 如果用户是在问“如何理解分层和落点”，优先给 `architecture`
- 如果用户是在问“如何把现有代码实际拆开并迁过去”，再给 `refactor`

### 4. 优先交给 `templates`

适用：

- 问最小 demo
- 问脚手架、骨架、模板代码
- 问 `controller/service/preload/jobs/lifecycle/sqlite` 起步示例

### 5. 优先交给 `troubleshoot`

适用：

- 问报错、白屏、闪退、运行失败
- 问 sqlite 编译、子进程限制、日志排查
- 问开发期、构建期、打包后运行期问题

### 6. 优先交给 `build-packaging`

适用：

- 问 `dev/start/build` 区别
- 问构建、代码加密、图标、额外资源、打包发布
- 问不同平台的构建与打包注意事项

## 主 skill 的回答顺序

当问题还不能直接路由时，按下面顺序组织：

1. 先判断主问题是什么
2. 给用户一个总的实现结论
3. 指出应该切到哪个子 skill 风格继续展开
4. 若必须跨技能回答，先答主问题，再补次问题

优先判断顺序建议：

1. 纯 API：`api`
2. 认知、分层、目录、通信选型：`architecture`
3. 现有代码迁移与改造：`refactor`
4. 最小模板与骨架：`templates`
5. 错误排查：`troubleshoot`
6. 构建与打包：`build-packaging`

## 复合问题处理

如果用户的问题同时涉及“整体方案 + 具体 API”，按这个顺序处理：

1. 先给整体方案
2. 再给目录落点
3. 再补相关 API
4. 如果后续只剩 API 追问，切到 `api`

如果用户的问题同时涉及“功能接入 + 打包问题”，按这个顺序处理：

1. 先确认功能实现落点
2. 再确认运行阶段是 `dev`、`build` 还是 `package`
3. 最后切到 `troubleshoot` 或 `build-packaging`

如果用户的问题同时涉及“分层判断 + 最小代码”，按这个顺序处理：

1. 先用 `architecture` 判断落点
2. 再切到 `templates` 给最小骨架
3. 如果用户后续贴现有代码，再切到 `refactor`

如果用户的问题同时涉及“分层判断 + 现有代码迁移”，按这个顺序处理：

1. 先用 `architecture` 判断层级和目录
2. 再切到 `refactor` 给最小迁移步骤
3. 如果用户需要最小骨架，再补 `templates`

如果用户的问题同时涉及“构建发布 + 运行异常”，按这个顺序处理：

1. 先确认是配置选择问题还是异常排查问题
2. 如果是命令、资源、图标、平台差异，优先 `build-packaging`
3. 如果是白屏、闪退、sqlite、运行失败，优先 `troubleshoot`

## 典型多跳链路

根 skill 不只负责第一跳，还要判断常见第二跳：

### 1. `architecture -> templates`

适用：

- 用户先问功能该放哪
- 然后马上要最小代码

处理：

1. 先定层级和调用链
2. 再给最小模板

### 2. `architecture -> refactor`

适用：

- 用户先问功能该如何分层
- 然后贴出现有旧代码让你迁移

处理：

1. 先定目录和职责边界
2. 再给最小迁移步骤

### 3. `refactor -> templates`

适用：

- 用户已确认要改造
- 但还缺一份最小骨架代码

处理：

1. 先说明应改哪些文件
2. 再补对应模板

### 4. `refactor -> troubleshoot`

适用：

- 用户按改造方案落地后出现报错
- 迁移后出现白屏、sqlite、jobs、运行异常

处理：

1. 先停止继续扩改造范围
2. 先按阶段收敛问题
3. 再回头继续改造

### 5. `build-packaging -> troubleshoot`

适用：

- 用户一开始问打包发布
- 但实际已经出现构建失败或打包后运行异常

处理：

1. 先判断是流程问题还是异常问题
2. 纯流程继续 `build-packaging`
3. 出现异常立即切 `troubleshoot`

### 6. `troubleshoot -> build-packaging`

适用：

- 问题根因并不是代码错误
- 而是命令阶段、资源入包、平台配置不对

处理：

1. 先指出异常根因属于构建发布链路
2. 再切回 `build-packaging` 收口

## 多跳路由原则

- 第一跳解决“问题属于哪类”
- 第二跳解决“下一步最该补什么”
- 不在一条回答里同时展开全部子 skill 细节
- 优先保证主问题收敛，再补次问题
- 一旦进入排障链路，优先暂停继续扩实现方案

## 知识边界

本技能族的主要知识源：

- `docs/00.v4`
- `docs/09.api-v4`

如果本地文档没有明确写出：

- 不补造未出现的 API 签名
- 不把外部生态经验直接说成框架结论
- 不把第三方库问题直接归因到 `electron-egg`

## 统一术语约定

层级相关术语统一使用：

- `frontend`
- `controller`
- `service`
- `preload`
- `jobs`
- `lifecycle`

阶段相关术语统一使用：

- `dev`
- `build`
- `package`
- 打包后运行阶段

## 标准转接语句

- `这个问题先按整体方案处理，具体模块导入我再按 api 子 skill 口径补。`
- `你这里先是架构和分层问题，下面我按 architecture 子 skill 的方式收敛。`
- `这类问题需要先做分层判断和通信选型，我先按 architecture 子 skill 的决策表来答。`
- `落点先确定，最小代码我下一步切到 templates 子 skill 来补。`
- `落点已经明确，后面我按 refactor 子 skill 给你最小迁移步骤。`
- `你这里更像代码改造问题，下面我按 refactor 子 skill 的方式拆目录和步骤。`
- `你现在要的是最小起步代码，后面我直接切到 templates 子 skill 风格。`
- `这个现象已经进入排障链路了，后面我按 troubleshoot 子 skill 的检查顺序继续。`
- `这个问题先别急着改代码，我先按 troubleshoot 子 skill 的阶段排查顺序收敛。`
- `这一步属于构建和打包阶段，我后面按 build-packaging 子 skill 的口径收口。`
- `这里先不要混淆 dev、build 和 package，我先按 build-packaging 子 skill 的阶段决策表来答。`
- `这个问题表面上像打包，实际已经进入异常排查，我后面切到 troubleshoot 子 skill。`
