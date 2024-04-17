---
home: true
heroImage: /img/logo.png
heroText: Electron-Egg
tagline: 一个入门简单、跨平台、企业级桌面软件开发框架
actionText: 🚀开始使用
actionLink: /pages/8ef798/

bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
defaultMode: light
features: # 可选的
  - title: 入门简单
    details: 只需懂 JavaScript
  - title: 跨平台
    details: windows、Mac、Linux
  - title: 开源免费
    details: GitHub、Gitee

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
# notices: # 可选的
#     - id: Electron-Egg-v3
#       title: 🚀 Electron-Egg-v3 发布！
#       content: '<div><p>2023-04</p><ul><li>四大嵌套查询支持</li><li>共计二十余项新特性及优化</li><li>bug修复等</li></ul></div><p style="text-align: right;"><a href="/pages/2934a3/">查看详情</a></p>'
#       isHtmlContent: true
---
<!-- <Notice :data="$frontmatter.notices"/> -->

<p align="center">
  <a class="become-sponsor" href="/pages/fe2b29/">成为赞助商</a>
</p>

<style>
.become-sponsor {
  padding: 8px 20px;
  display: inline-block;
  color: #11a8cd;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #11a8cd;
}

.friends-item {
  width: 10em;
  height:3em;
  flex:1;
  text-align: center;
  display: inline-block;
  margin: 5px;
  border: 1px solid var(--borderColor);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 8px;
  padding: 10px;
}

.friends-item-img {
  object-fit: contain;
  max-width:150px !important;
  height: 100%;
}
</style>

<br/>
<p align="center">
  <a href="https://gitee.com/dromara/electron-egg" target="_blank"><img src='https://gitee.com/dromara/electron-egg/badge/star.svg?theme=gvp' alt='Gitee stars' class="no-zoom"></a>
  <a href="https://github.com/dromara/electron-egg" target="_blank"><img src='https://img.shields.io/github/stars/dromara/electron-egg' alt='GitHub stars' class="no-zoom"></a>
  <!-- <a href="https://www.npmjs.com/package/ee-core" target="_blank"><img src="https://img.shields.io/npm/v/ee-core" alt="npm" class="no-zoom"></a> -->
</p>

<br/>
<p align="center">
  <a href="http://t.nxw.so/9WhEz" target="_blank"><img src="https://wallace5303.gitee.io/ee/images/ee-v3/yinmai/ym-p5.png" alt="npm" class="no-zoom" style="width: 600px;border-radius: 2px;"></a>
</p>
<br/>
<p align="center">
  <a href="http://t.nxw.so/9iE0G" target="_blank"><img src="https://wallace5303.gitee.io/ee/images/ee-v3/zydoc/zy-logo-4.png" alt="npm" class="no-zoom" style="width: 600px;border-radius: 2px;"></a>
</p>

<!-- <br/>
<p align="center">
  <a href="https://dromara.org/" target="_blank"><img src="https://plus.hutool.cn/images/dromara/dromara.png" alt="npm" class="no-zoom" style="width: 300px;border-radius: 2px;"></a>
</p> -->

## 🌳 特别用户
::: cardList 2
```yaml
- name: Zyplayer-doc
  desc: 私有化部署知识库
  link: http://doc.zyplayer.com/?from=electron-egg
  bgColor: '#f1f1f1'
  textColor: '#2A3344'
- name: Dromara 社区
  desc: 让每一位开源爱好者，体会到开源的快乐。
  link: https://github.com/dromara
  bgColor: '#f1f1f1'
  textColor: '#2A3344'  
```
:::

<!-- AD -->
<div class="wwads-cn wwads-horizontal page-wwads" data-id="236"></div>
<style>
.page-wwads{
  width:100%!important;
  min-height: 0;
  margin: 0;
  height: 100%;
}
.page-wwads .wwads-img img{
  width:80px!important;
}
.page-wwads .wwads-poweredby{
  width: 40px;
  position: absolute;
  right: 25px;
  bottom: 3px;
}
.wwads-content .wwads-text, .page-wwads .wwads-text{
  height: 100%;
  padding-top: 5px;
  display: block;
}
</style>

<br/>

## 🍬特性
- **跨平台**：一套代码，可以打包成windows版、Mac版、Linux版、国产UOS、Deepin、麒麟等。
- **架构**：单业务进程/模块化/多任务(进程，线程，渲染进程)，让开发大型项目变的简单。
- **简单高效**: 只需学习 js 语言。
- **前端独立** 支持任何前端技术，如：vue、react、html、vite 等等。
- **工程化**：可以用前端、服务端的开发思维，来编写桌面软件。
- **高性能**：事件驱动、非阻塞式IO。
- **功能丰富**：配置、通信、任务、插件、数据库、升级、打包、工具... 应有尽有。
- **安全**：支持字节码加密、压缩混淆加密。
- **功能demo**：桌面软件常见功能，框架集成或提供demo。

## ✈️ 使用场景

### 1. 🚀 常规桌面软件
- 🚖 Windows平台 - demo

    ![](https://wallace5303.gitee.io/ee/images/ee-v3/ee-win-home.png)

- 🚍 MacOS平台 - demo    
    ![](https://wallace5303.gitee.io/ee/images/ee-v3/ee-mac-home.png)

- 🚔 Linux平台 - 国产UOS、Deepin - demo
    ![](https://wallace5303.gitee.io/ee/images/electron-egg/uos-home.png)

- 🚔 Linux平台 - ubuntu - demo
    ![](https://wallace5303.gitee.io/ee/images/electron-egg/ubuntu-db.png)

### 🚐 2. vue、react、angular、web 转换成桌面软件
- 🚙 vue-ant-design（本地）

    ![](https://wallace5303.gitee.io/ee/images/electron-egg/vue-antd.png)

- 🚙 禅道项目管理（web项目地址）

    ![](https://wallace5303.gitee.io/ee/images/electron-egg/ee-project-7.png)

### 🚂 3. 游戏（h5相关技术开发）
- 🚊 忍者100层

    ![](https://wallace5303.gitee.io/ee/images/electron-egg/ee_game_1.png)

### 🚂 4. 用户案例
- 🐸 远控
    ![](https://wallace5303.gitee.io/ee/images/ee-v3/rq/rq-1.png)
    ![](https://wallace5303.gitee.io/ee/images/ee-v3/rq/rq-2.png)

- 🐸 壁纸
    ![](https://wallace5303.gitee.io/ee/images/electron-egg/aw/aw-3.png)

- 🐸 英雄联盟助手
    ![](https://wallace5303.gitee.io/ee/images/electron-egg/serendipity/lol-zhanji.png)

<!-- ## 安全 
<a href="https://www.murphysec.com/dr/htY0sMYDQaDn4X8iXp" alt="OSCS Status"><img src="https://www.oscs1024.com/platform/badge/dromara/easy-es.git.svg?size=small"/></a>

我们已接入[OSCS墨菲安全扫描](https://www.murphysec.com/dr/htY0sMYDQaDn4X8iXp)，ee源码中未被扫描出任何风险项，超越100%的项目，确保人畜无害！ 大家可放心使用，当然如果您仍不放心，我们推荐您在使用前下载ee源码亲自阅读一番，我们是100%开源，是否有风险您一看便知。

<br/>
<br/> -->

## 🎉致谢

**Electron-Egg** 自从2020年开源以来，获得了很多人的支持。目前社区群总计超千人，收获Star超 **4000+**。

这离不开社区小伙伴的支持和意见以及PR,感谢你们! 

我们会继续朝着：**让所有开发者都能学会桌面软件研发** 的理念，继续前进。

<br/>
<br/>

## 🏡代码托管

<a href='https://gitee.com/dromara/electron-egg' target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

<a href="https://github.com/dromara/electron-egg" target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<br/>
<br/>

## 🤝 Dromara 组织项目

<div>
    <a class="friends-item" href="https://gitee.com/dromara/electron-egg" target="_blank">
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/electron-egg.png')" alt="私有化部署知识库">
    </a>
    <a class="friends-item" href="http://doc.zyplayer.com/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/zyplayer-doc.png')" alt="一个入门简单、跨平台、企业级桌面软件开发框架">
    </a> 
    <a class="friends-item" href="https://easy-es.cn/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/easy-es.png')" alt="🚀傻瓜级ElasticSearch搜索引擎ORM框架">
    </a>
    <a class="friends-item" href="https://hutool.cn/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/hutool.svg')" alt="🍬小而全的Java工具类库，使Java拥有函数式语言般的优雅，让Java语言也可以“甜甜的”。">
    </a>
    <a class="friends-item" href="https://sa-token.dev33.cn/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/sa-token.png')" alt="一个轻量级 java 权限认证框架，让鉴权变得简单、优雅！">
    </a>
    <a class="friends-item" href="https://gitee.com/dromara/liteFlow" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/lite-flow.png')" alt="轻量，快速，稳定，可编排的组件式流程引擎">
    </a>
    <a class="friends-item" href="https://hertzbeat.com/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/hertzbeat-logo.png')" alt="易用友好的云监控系统">
    </a>
    <a class="friends-item" href="http://forest.dtflyx.com/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/forest-logo.png')" alt="Forest能够帮助您使用更简单的方式编写Java的HTTP客户端" >
    </a>
    <a class="friends-item" href="https://gitee.com/dromara/Raincat" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/raincat-logo.png')" alt="强一致性分布式事务解决方案。">
    </a>
    <a class="friends-item" href="https://gitee.com/dromara/myth" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/myth-logo.png')" alt="可靠消息分布式事务解决方案。">
    </a>
    <a class="friends-item" href="https://su.usthe.com/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/sureness-logo.png')" alt="面向 REST API 的高性能认证鉴权框架">
    </a>
    <a class="friends-item" href="https://www.jeesuite.com/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/mendmix-logo.png')" alt="开源分布式云原生架构一站式解决方案">
    </a>
    <a class="friends-item" href="https://gitee.com/dromara/northstar" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/northstar-logo.png')" alt="Northstar盈富量化交易平台">
    </a>
    <a class="friends-item" href="http://maxkey.top/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/maxkey-logo.png')" alt="业界领先的身份管理和认证产品">
    </a>
    <a class="friends-item" href="https://www.herodotus.cn/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/dantecloud.png')" alt="Dante-Cloud 是一款企业级微服务架构和服务能力开发平台。">
    </a>
    <a class="friends-item" href="https://dynamictp.cn/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/dynamictp-logo.png')" alt="🔥🔥🔥 基于配置中心的轻量级动态可监控线程池">
    </a>
    <a class="friends-item" href="https://async.sizegang.cn/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/gobrs-async.png')" alt="🔥 配置极简功能强大的异步任务动态编排框架">
    </a>
    <a class="friends-item" href="https://gitee.com/dromara/koalas-rpc" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/koalas-logo.png')" alt="企业生产级百亿日PV高可用可拓展的RPC框架。">
    </a>
    <a class="friends-item" href="https://gitee.com/dromara/TLog" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/tlog-logo.png')" alt="一个轻量级的分布式日志标记追踪神器，10分钟即可接入，自动对日志打标签完成微服务的链路追踪">
    </a>
    <a class="friends-item" href="https://jpom.top/" target="_blank" >
        <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/link/jpom-logo.png')" alt="一款简而轻的低侵入式在线构建、自动部署、日常运维、项目监控软件">
    </a>
</div>

<br/>
<br/>

## 🧲友情链接
<div>
  <a class="friends-item" href="ttps://gitee.com" target="_blank" >
      <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/external/gitee-logo.png')" >
  </a>
  <a class="friends-item" href="https://www.oschina.net" target="_blank" >
      <img class="no-zoom friends-item-img hover-alt" :src="$withBase('/img/external/oschina-logo.png')" >
  </a>
</div>

<br/>
<br/>

