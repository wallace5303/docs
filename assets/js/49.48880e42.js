(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{379:function(_,v,i){"use strict";i.r(v);var e=i(7),l=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"更新记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新记录"}},[_._v("#")]),_._v(" 更新记录")]),_._v(" "),v("h3",{attrs:{id:"_3-7-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-0"}},[_._v("#")]),_._v(" 3.7.0")]),_._v(" "),v("ol",[v("li",[_._v("【增加】新增 config/bin.js配置文件，统一处理 ee-bin 功能配置项。")]),_._v(" "),v("li",[_._v("【增加】新增 ee-bin dev 命令，同时启动 frontend electron 服务。")]),_._v(" "),v("li",[_._v("【增加】新增 ee-bin start 命令，使用node spawn启动electron。")]),_._v(" "),v("li",[_._v("【增加】新增 ee-bin build 命令，构建出包含renderer进程数据的process。")]),_._v(" "),v("li",[_._v("【增加】新增 ee-core boot、failure页面，优化开发体验。")]),_._v(" "),v("li",[_._v("【增加】新增 ee-core jsondb支持修改数据存储目录。")]),_._v(" "),v("li",[_._v("【增加】新增 ee-bin rd 参数，支持dist、target参数。")]),_._v(" "),v("li",[_._v("【增加】新增 ee-bin rd 参数，支持dist、target参数。")]),_._v(" "),v("li",[_._v("【增加】新增 demo分支，（frontend）loading动画、登录窗口效果、加载本机图片效果。")]),_._v(" "),v("li",[_._v("【增加】新增 demo分支，（electron）jsondb目录切换功能、java插件状态检查功能。")]),_._v(" "),v("li",[_._v("【优化】优化 ee-bin 命令的log提示，增加颜色效果。")]),_._v(" "),v("li",[_._v("【优化】优化 ee-core config.openDevTools 支持传参。")]),_._v(" "),v("li",[_._v("【优化】优化 http服务listen 参数。")]),_._v(" "),v("li",[_._v("【优化】优化 开发体验。")]),_._v(" "),v("li",[_._v("【修复】修复 getPort 端口获取bug。")]),_._v(" "),v("li",[_._v("【删除】删除 app.on('activate')、 app.on('second-instance')。")]),_._v(" "),v("li",[_._v("【升级】升级ee-core -> v2.5.0、升级ee-bin -> 1.2.0")])]),_._v(" "),v("h3",{attrs:{id:"_3-6-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-0"}},[_._v("#")]),_._v(" 3.6.0")]),_._v(" "),v("ol",[v("li",[_._v("【增加】新增 ee-bin 库，安装到dev依赖，减少安装包大小。")]),_._v(" "),v("li",[_._v("【增加】demo分支用 vue3 + vite重写，备份demo为demo-vue2。")]),_._v(" "),v("li",[_._v("【优化】优化rd命令，参数可扩展，错误提示优化。")]),_._v(" "),v("li",[_._v("【优化】优化encrypt命令，可指定config文件，输出目录。")]),_._v(" "),v("li",[_._v("【优化】优化clean命令，可指定删除目录。")]),_._v(" "),v("li",[_._v("【优化】优化icon命令，可单独安装依赖库，避免某些系统无法安装而报错。")]),_._v(" "),v("li",[_._v("【优化】去除devtool生产环境的校验。")]),_._v(" "),v("li",[_._v("【废弃】ee-core bin脚本去除，用ee-bin代替。")]),_._v(" "),v("li",[_._v("【升级】升级ee-core到v2.4.0")])]),_._v(" "),v("h3",{attrs:{id:"_3-5-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-0"}},[_._v("#")]),_._v(" 3.5.0")]),_._v(" "),v("ol",[v("li",[_._v("【增加】新增ee-core icon 命令，一键生成应用所有类型的logo。")]),_._v(" "),v("li",[_._v("【优化】优化logo名称，以兼容新的icon命令。")]),_._v(" "),v("li",[_._v("【优化】优化rd命令，在public/dist不存在时，自动创建。")]),_._v(" "),v("li",[_._v("【优化】优化rd命令，兼容不同版本的文件删除功能。")]),_._v(" "),v("li",[_._v("【优化】优化demo示例，job、view、window等功能代码。")]),_._v(" "),v("li",[_._v("【优化】优化ipcRenderer.js 导出Renderer对象。")]),_._v(" "),v("li",[_._v("【修复】修复Mac平台主进程在file模式下，异常问题。")]),_._v(" "),v("li",[_._v("【升级】升级ee-core到v2.3.0")])]),_._v(" "),v("h3",{attrs:{id:"_3-4-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-0"}},[_._v("#")]),_._v(" 3.4.0")]),_._v(" "),v("ol",[v("li",[_._v("【增加】主进程mainserver支持加载静态资源，支持入口文件配置。")]),_._v(" "),v("li",[_._v("【增加】config模块，增加isWebProtocol()/isFileProtocol()。")]),_._v(" "),v("li",[_._v("【升级】升级electron到v21.4.4")]),_._v(" "),v("li",[_._v("【升级】升级@electron/rebuild到v3.2.13")]),_._v(" "),v("li",[_._v("【升级】demo分支，升级better-sqlite3到v8.4.0")]),_._v(" "),v("li",[_._v("【修复】修复service多层调用。")]),_._v(" "),v("li",[_._v("【优化】将打包配置独立出builder.json文件，精简package.json内容。")])]),_._v(" "),v("h3",{attrs:{id:"_3-3-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-0"}},[_._v("#")]),_._v(" 3.3.0")]),_._v(" "),v("ol",[v("li",[_._v("【增加】新增main模块，支持第三方框架或项目引入ee-core，使用其 100+ API。")]),_._v(" "),v("li",[_._v("【增加】新增addon模块，可以在controller、preload、用户自定义模块等，使用addon实例。")]),_._v(" "),v("li",[_._v("【增加】新增services模块，可以在controller、preload、用户自定义模块等，使用service实例。")]),_._v(" "),v("li",[_._v("【增加】elecron模块，增加 window模块，提供createMainWindow()/restoreMainWindow()。")]),_._v(" "),v("li",[_._v("【增加】elecron模块，增加 app模块，提供create()/quit()。")]),_._v(" "),v("li",[_._v("【增加】ps模块，增加 initMode()/mode()/verifyMode()/isFrameworkMode()/isModuleMode()。")]),_._v(" "),v("li",[_._v("【优化】将main.js中业务移动到electron/index.js中，实现全局代码加密。")]),_._v(" "),v("li",[_._v("【优化】demo中所有this.app依赖替换为模块化api。")]),_._v(" "),v("li",[_._v("【优化】开发环境加载前端失败，优化错误提示。")])]),_._v(" "),v("h3",{attrs:{id:"_3-2-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-0"}},[_._v("#")]),_._v(" 3.2.0")]),_._v(" "),v("ol",[v("li",[_._v("【优化】新增demo分支，用来展示功能效果。")]),_._v(" "),v("li",[_._v("【优化】简化master分支，仅保留必要依赖。")]),_._v(" "),v("li",[_._v("【增加】demo分支优化分类（框架、系统、硬件、特效）并增加打印机demo、视频播放demo。")]),_._v(" "),v("li",[_._v("【修复】ee-core 日志模块，修复跨天记录异常问题。")]),_._v(" "),v("li",[_._v("【增加】ee-core utils模块，增加 machineIdSync() / machineId() 。")]),_._v(" "),v("li",[_._v("【增加】ee-core utils/get-port模块，增加 GetPort()。")])]),_._v(" "),v("h3",{attrs:{id:"_3-1-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-0"}},[_._v("#")]),_._v(" 3.1.0")]),_._v(" "),v("ol",[v("li",[_._v("【增加】Utils模块mac功能：getMAC / isMAC")]),_._v(" "),v("li",[_._v("【增加】Utils模块IP功能：publicIpv4 / publicIpv6")]),_._v(" "),v("li",[_._v("【增加】Job模块childJob功能：createProcess / getPids / execPromise")]),_._v(" "),v("li",[_._v("【增加】Job模块childJobPool功能：create / run / runPromise / getChildByPid /\ngetChild / getPids / killAll")]),_._v(" "),v("li",[_._v("【增加】exception模块：main/child/renderer进程捕获异常后是否退出")]),_._v(" "),v("li",[_._v("【增加】ps模块：getEncryptDir / isEncrypted / exitChildJob / isChildJob / isChildPoolJob")]),_._v(" "),v("li",[_._v("【增加】Utils模块：co / deprecate / extend / get-port / time")]),_._v(" "),v("li",[_._v("【增加】tools模块：加密文件过滤及匹配")]),_._v(" "),v("li",[_._v("【增加】bin模块：clean 清理加密文件")])]),_._v(" "),v("h3",{attrs:{id:"_3-0-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-0"}},[_._v("#")]),_._v(" 3.0.0")]),_._v(" "),v("ol",[v("li",[_._v("框架核心ee-core重构,升级到2.0.1")]),_._v(" "),v("li",[_._v("整体架构由 单业务进程&大对象 模型， 转变为：单业务进程&模块化&多任务。")]),_._v(" "),v("li",[_._v("ee-core模块划分：")]),_._v(" "),v("li",[_._v("addon：插件，不提供api")]),_._v(" "),v("li",[_._v("bin：脚本，提供api")]),_._v(" "),v("li",[_._v("config：配置，提供api")]),_._v(" "),v("li",[_._v("const：常量，提供api")]),_._v(" "),v("li",[_._v("controller：控制器类，提供api")]),_._v(" "),v("li",[_._v("core：核心，不提供api")]),_._v(" "),v("li",[_._v("ee：全局对象，提供api")]),_._v(" "),v("li",[_._v("electron：electron功能，提供api")]),_._v(" "),v("li",[_._v("exception：异常处理，提供api")]),_._v(" "),v("li",[_._v("httpclient：curl请求，提供api")]),_._v(" "),v("li",[_._v("jobs：任务，提供api")]),_._v(" "),v("li",[_._v("loader：加载器，提供api")]),_._v(" "),v("li",[_._v("log：日志，提供api")]),_._v(" "),v("li",[_._v("message：消息，提供api")]),_._v(" "),v("li",[_._v("oldUtils：旧的类库，提供api")]),_._v(" "),v("li",[_._v("ps：进程，提供api")]),_._v(" "),v("li",[_._v("service：服务层类，提供api")]),_._v(" "),v("li",[_._v("socket：通信，提供api")]),_._v(" "),v("li",[_._v("tools：工具，提供api")]),_._v(" "),v("li",[_._v("utils：类库，提供api")])]),_._v(" "),v("h3",{attrs:{id:"_2-5-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-0"}},[_._v("#")]),_._v(" 2.5.0")]),_._v(" "),v("ol",[v("li",[_._v("增加开发模式自定义协议头")]),_._v(" "),v("li",[_._v("增加sqlite数据库db文件自定义目录")]),_._v(" "),v("li",[_._v("增加sqlite数据库动态切库demo")]),_._v(" "),v("li",[_._v("增加远程web使用教程及demo")]),_._v(" "),v("li",[_._v("删除loading文件、ci/cd配置文件")]),_._v(" "),v("li",[_._v("删除ee-core中无用的constant")]),_._v(" "),v("li",[_._v("升级ee-core到1.5.0")])]),_._v(" "),v("h3",{attrs:{id:"_2-4-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-0"}},[_._v("#")]),_._v(" 2.4.0")]),_._v(" "),v("ol",[v("li",[_._v("增加混淆/bytecode加密配置opt,提升安全性")]),_._v(" "),v("li",[_._v("增加插件的方式重写托盘、唤醒、升级、安全、扩展等功能")]),_._v(" "),v("li",[_._v("增加java服务插件，感谢“zuihou”提供的PR")]),_._v(" "),v("li",[_._v("增加jave服务demo，jar等完整用例")]),_._v(" "),v("li",[_._v("增加Utils库函数：getEnv/getAppUserDataDir/getHomeDir/getBaseDir/\ngetRootDir/getAppVersion/getExecDir/getAddonConfig/\ngetMainServerConfig/getHttpServerConfig/getSocketServerConfig")]),_._v(" "),v("li",[_._v("移除多余代码")]),_._v(" "),v("li",[_._v("升级ee-core到1.4.1")])]),_._v(" "),v("h3",{attrs:{id:"_2-3-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-0"}},[_._v("#")]),_._v(" 2.3.0")]),_._v(" "),v("ol",[v("li",[_._v("增加addon插件模块，开发者可以自由扩展app对象")]),_._v(" "),v("li",[_._v("内置window插件，实现多窗口通信")]),_._v(" "),v("li",[_._v("增加上传文件demo")]),_._v(" "),v("li",[_._v("增加多窗口通信demo，实现子窗口与主进程通信、子窗口之间互相通信")]),_._v(" "),v("li",[_._v("增加插件config配置")]),_._v(" "),v("li",[_._v("优化title显示")]),_._v(" "),v("li",[_._v("增加更强大obfuscator混淆功能，提供strict类型")]),_._v(" "),v("li",[_._v("移除uglify混淆及包")]),_._v(" "),v("li",[_._v("升级ee-core到1.4.0")])]),_._v(" "),v("h3",{attrs:{id:"_2-2-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1"}},[_._v("#")]),_._v(" 2.2.1")]),_._v(" "),v("ol",[v("li",[_._v("增加http服务请求过滤配置")]),_._v(" "),v("li",[_._v("优化http服务开启后，浏览器默认请求报错")]),_._v(" "),v("li",[_._v("将开发环境热启动配置加入config")]),_._v(" "),v("li",[_._v("构建包支持windows免安装版、arm64版")]),_._v(" "),v("li",[_._v("构建包支持linux arm64版、armv7l版、rpm包、pacman包")]),_._v(" "),v("li",[_._v("关闭上下文隔离配置")])]),_._v(" "),v("h3",{attrs:{id:"_2-2-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-0"}},[_._v("#")]),_._v(" 2.2.0")]),_._v(" "),v("ol",[v("li",[_._v("修复加密配置")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-9"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-9"}},[_._v("#")]),_._v(" 2.1.9")]),_._v(" "),v("ol",[v("li",[_._v("增加bytecode字节码加密的配置文件")]),_._v(" "),v("li",[_._v("增加加密类型、目录、文件后缀可扩展")]),_._v(" "),v("li",[_._v("sqlite功能可选")]),_._v(" "),v("li",[_._v("增加上下文隔离")]),_._v(" "),v("li",[_._v("修复win7系统下开发异常")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-8"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-8"}},[_._v("#")]),_._v(" 2.1.8")]),_._v(" "),v("ol",[v("li",[_._v("安全性更新")]),_._v(" "),v("li",[_._v("支持bytecode字节码加密")]),_._v(" "),v("li",[_._v("优化压缩混淆加密")]),_._v(" "),v("li",[_._v("将废弃compress、restore命令，使用encrypt替代")]),_._v(" "),v("li",[_._v("mainServer增加option支持")]),_._v(" "),v("li",[_._v("限制控制器业务必须为class文件")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-7"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-7"}},[_._v("#")]),_._v(" 2.1.7")]),_._v(" "),v("ol",[v("li",[_._v("增加ssl，支持https")]),_._v(" "),v("li",[_._v("优化http服务的路由写法")]),_._v(" "),v("li",[_._v("优化utils部分函数 && 修复错误。")]),_._v(" "),v("li",[_._v("优化http返回状态码")]),_._v(" "),v("li",[_._v("去除ee-core中延迟加载功能")]),_._v(" "),v("li",[_._v("去除ee-core中无效代码")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-6"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-6"}},[_._v("#")]),_._v(" 2.1.6")]),_._v(" "),v("ol",[v("li",[_._v("增加sqlite数据库")]),_._v(" "),v("li",[_._v("增加sqlite增删改查demo")]),_._v(" "),v("li",[_._v("增加http服务body，支持表单、文件等")]),_._v(" "),v("li",[_._v("修复热重启bug")]),_._v(" "),v("li",[_._v("升级ee-core到1.2.8")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-5"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5"}},[_._v("#")]),_._v(" 2.1.5")]),_._v(" "),v("ol",[v("li",[_._v("增加ee-core命令")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4"}},[_._v("#")]),_._v(" 2.1.4")]),_._v(" "),v("ol",[v("li",[_._v("增加开发环境代码热重载")]),_._v(" "),v("li",[_._v("增加菜单栏配置属性")]),_._v(" "),v("li",[_._v("增加配置选项，开启/关闭硬件加速")]),_._v(" "),v("li",[_._v("优化启动")]),_._v(" "),v("li",[_._v("修复linux系统构建的deb包，安装后图标显示问题")]),_._v(" "),v("li",[_._v("升级electron-builder到23.0.3")]),_._v(" "),v("li",[_._v("升级ee-core到1.2.6")]),_._v(" "),v("li",[_._v("升级electron到13.6.9")]),_._v(" "),v("li",[_._v("移除loading页")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2"}},[_._v("#")]),_._v(" 2.1.2")]),_._v(" "),v("ol",[v("li",[_._v("ipc通信增加 invoke/handle 模型")]),_._v(" "),v("li",[_._v("ipcRender增加 invoke异步/sendSync同步方法")]),_._v(" "),v("li",[_._v("优化ee-core代码")]),_._v(" "),v("li",[_._v("优化storage demo")]),_._v(" "),v("li",[_._v("优化ipc通信 同步、异步、双向通信demo")]),_._v(" "),v("li",[_._v("替换所有前端ipcCall为ipcInvoke")]),_._v(" "),v("li",[_._v("修复ipc并发请求问题")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1"}},[_._v("#")]),_._v(" 2.1.1")]),_._v(" "),v("ol",[v("li",[_._v("修复托盘窗口关闭问题")]),_._v(" "),v("li",[_._v("修复ee-core窗口事件")]),_._v(" "),v("li",[_._v("优化mac系统应用坞点击显示")]),_._v(" "),v("li",[_._v("优化单应用模式")]),_._v(" "),v("li",[_._v("优化代码加密")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-0"}},[_._v("#")]),_._v(" 2.1.0")]),_._v(" "),v("ol",[v("li",[_._v("增加内置http server服务，支持配置host、端口、跨域等属性")]),_._v(" "),v("li",[_._v("增加http服务相关demo")]),_._v(" "),v("li",[_._v("增加socket服务相关demo")]),_._v(" "),v("li",[_._v("优化内置socket server服务，支持开启/关闭")]),_._v(" "),v("li",[_._v("优化前端主菜单、子菜单")]),_._v(" "),v("li",[_._v("升级前端组件库")]),_._v(" "),v("li",[_._v("升级store包")]),_._v(" "),v("li",[_._v("一些代码优化")])]),_._v(" "),v("h3",{attrs:{id:"_2-0-6"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-6"}},[_._v("#")]),_._v(" 2.0.6")]),_._v(" "),v("ol",[v("li",[_._v("增加socket service options，支持path,connectTimeout,maxHttpBufferSize,cors等属性")]),_._v(" "),v("li",[_._v("修复任务栏显示问题")]),_._v(" "),v("li",[_._v("修复socket跨域问题")]),_._v(" "),v("li",[_._v("修复构建应用失败问题")])]),_._v(" "),v("h3",{attrs:{id:"_2-0-5"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-5"}},[_._v("#")]),_._v(" 2.0.5")]),_._v(" "),v("ol",[v("li",[_._v("增加生命周期函数 appReady()")]),_._v(" "),v("li",[_._v("增加dll调用方法")]),_._v(" "),v("li",[_._v("增加Utils工具类方法，获取额外资源目录")]),_._v(" "),v("li",[_._v("增加socket.koa属性")]),_._v(" "),v("li",[_._v("修复co包异常")]),_._v(" "),v("li",[_._v("优化软件调用demo")])]),_._v(" "),v("h3",{attrs:{id:"_2-0-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-3"}},[_._v("#")]),_._v(" 2.0.3")]),_._v(" "),v("ol",[v("li",[_._v("增加html模式，前端支持多个html页面")]),_._v(" "),v("li",[_._v("增加socket服务，第三方应用可调用EE应用")]),_._v(" "),v("li",[_._v("增加全局config属性: userHome、appVersion、isPackaged、execDir")]),_._v(" "),v("li",[_._v("增加Utils工具类方法，获取socket端口，socket频道")]),_._v(" "),v("li",[_._v("优化应用创建逻辑")]),_._v(" "),v("li",[_._v("优化配置文件")]),_._v(" "),v("li",[_._v("优化pkg方法")]),_._v(" "),v("li",[_._v("优化动态端口获取")])]),_._v(" "),v("h3",{attrs:{id:"_2-0-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-0"}},[_._v("#")]),_._v(" 2.0.0")]),_._v(" "),v("ol",[v("li",[_._v("框架重构")]),_._v(" "),v("li",[_._v("增加控制器")]),_._v(" "),v("li",[_._v("增加服务器")]),_._v(" "),v("li",[_._v("增加ipc")]),_._v(" "),v("li",[_._v("增加socket")]),_._v(" "),v("li",[_._v("增加storage")]),_._v(" "),v("li",[_._v("增加全局app对象")]),_._v(" "),v("li",[_._v("增加预加载")]),_._v(" "),v("li",[_._v("增加核心npm包")]),_._v(" "),v("li",[_._v("增加....  太多了")])]),_._v(" "),v("h3",{attrs:{id:"_1-16-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-16-3"}},[_._v("#")]),_._v(" 1.16.3")]),_._v(" "),v("ol",[v("li",[_._v("增加手动更新 和 强制更新")]),_._v(" "),v("li",[_._v("修复ipc监听")]),_._v(" "),v("li",[_._v("限制一个窗口")]),_._v(" "),v("li",[_._v("更新demo")])]),_._v(" "),v("h3",{attrs:{id:"_1-16-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-16-2"}},[_._v("#")]),_._v(" 1.16.2")]),_._v(" "),v("ol",[v("li",[_._v("忘记更新什么了")])]),_._v(" "),v("h3",{attrs:{id:"_1-16-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-16-1"}},[_._v("#")]),_._v(" 1.16.1")]),_._v(" "),v("ol",[v("li",[_._v("代码压缩与混淆，增加安全性")]),_._v(" "),v("li",[_._v("新logo")]),_._v(" "),v("li",[_._v("文档更新")])]),_._v(" "),v("h3",{attrs:{id:"_1-16-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-16-0"}},[_._v("#")]),_._v(" 1.16.0")]),_._v(" "),v("ol",[v("li",[_._v("增加lowdb数据库实例代码")]),_._v(" "),v("li",[_._v("更新npm源")]),_._v(" "),v("li",[_._v("更新electron版本")]),_._v(" "),v("li",[_._v("打包过滤frontend")])]),_._v(" "),v("h3",{attrs:{id:"_1-15-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-15-0"}},[_._v("#")]),_._v(" 1.15.0")]),_._v(" "),v("ol",[v("li",[_._v("增加chrome扩展程序（重点）")]),_._v(" "),v("li",[_._v("增加web(html)内容嵌入")]),_._v(" "),v("li",[_._v("增加多窗口打开")]),_._v(" "),v("li",[_._v("增加桌面通知")]),_._v(" "),v("li",[_._v("增加电源监控")]),_._v(" "),v("li",[_._v("增加获取显示器信息")]),_._v(" "),v("li",[_._v("增加系统主题设置")]),_._v(" "),v("li",[_._v("修改功能分类")]),_._v(" "),v("li",[_._v("删除非必要代码")])]),_._v(" "),v("h3",{attrs:{id:"_1-14-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-14-0"}},[_._v("#")]),_._v(" 1.14.0")]),_._v(" "),v("ol",[v("li",[_._v("视图样式重构")]),_._v(" "),v("li",[_._v("demo增加分类")]),_._v(" "),v("li",[_._v("demo界面优化，重新排版")]),_._v(" "),v("li",[_._v("增加选择文件夹目录")]),_._v(" "),v("li",[_._v("增加ipc通信模块与apis模块语法统一")]),_._v(" "),v("li",[_._v("增加路由分类")]),_._v(" "),v("li",[_._v("增加ipc支持长通信，服务端持续向页面发消息")]),_._v(" "),v("li",[_._v("增加操作系统弹框demo")]),_._v(" "),v("li",[_._v("删除非必要代码")]),_._v(" "),v("li",[_._v("修复拉伸窗口空白")])]),_._v(" "),v("h3",{attrs:{id:"_1-13-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-13-0"}},[_._v("#")]),_._v(" 1.13.0")]),_._v(" "),v("ol",[v("li",[_._v("修复自动更新")]),_._v(" "),v("li",[_._v("支持将任意网站打包成桌面软件")]),_._v(" "),v("li",[_._v("优化启动时白屏问题")]),_._v(" "),v("li",[_._v("安全检查，防止inspect debug")]),_._v(" "),v("li",[_._v("自动升级支持多平台更新")]),_._v(" "),v("li",[_._v("部分代码优化")])]),_._v(" "),v("h3",{attrs:{id:"_1-12-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-0"}},[_._v("#")]),_._v(" 1.12.0")]),_._v(" "),v("ol",[v("li",[_._v("崩溃上报")]),_._v(" "),v("li",[_._v("调用第三方软件 及 demo实现")]),_._v(" "),v("li",[_._v("名称设置")]),_._v(" "),v("li",[_._v("方法注释说明")])]),_._v(" "),v("h3",{attrs:{id:"_1-11-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-0"}},[_._v("#")]),_._v(" 1.11.0")]),_._v(" "),v("ol",[v("li",[_._v("唤醒应用功能")]),_._v(" "),v("li",[_._v("优化代码")])]),_._v(" "),v("h3",{attrs:{id:"_1-10-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-0"}},[_._v("#")]),_._v(" 1.10.0")]),_._v(" "),v("ol",[v("li",[_._v("优化代码结构，功能模块更加合理。")]),_._v(" "),v("li",[_._v("升级electron核心到12版本。")]),_._v(" "),v("li",[_._v("升级electron-builder，支持Mac M1芯片架构。")]),_._v(" "),v("li",[_._v("增加快捷键功能模块并提供demo。")]),_._v(" "),v("li",[_._v("修复ejs bug。")]),_._v(" "),v("li",[_._v("修复引入路径。")]),_._v(" "),v("li",[_._v("优化自动升级重复代码、废弃旧的api。")])])])}),[],!1,null,null,null);v.default=l.exports}}]);