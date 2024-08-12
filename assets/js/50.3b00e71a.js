(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{381:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("ee-bin: v1.6.0")])]),t._v(" "),s("blockquote",[s("p",[t._v("ee-core: v2.10.1")])]),t._v(" "),s("blockquote",[s("p",[t._v("go 1.20.4")])]),t._v(" "),s("p",[s("code",[t._v("go")]),t._v(" 凭借着简单、高效、跨平台等优势，迅速成为开发者最喜爱的语言之一。")]),t._v(" "),s("p",[s("code",[t._v("electron-egg")]),t._v(" 深度集成了go，并通过 "),s("code",[t._v("ee-go")]),t._v(" mod，让开发者非常方便的进程业务开发，而无需关注复杂的系统环境。")]),t._v(" "),s("p",[t._v("如果您将核心业务用go来开发，那么它将拥有堪比"),s("code",[t._v("c#")]),t._v("、"),s("code",[t._v("qt")]),t._v("一样流畅的使用体验。")]),t._v(" "),s("blockquote",[s("p",[t._v("注：为了简化开发，请升级ee-core >= 2.10.1")])]),t._v(" "),s("h3",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("ul",[s("li",[t._v("推荐 go 1.20.4")]),t._v(" "),s("li",[t._v("注：go 1.20 是支持win7、macOS 10.x 的最后一个版本")])]),t._v(" "),s("h3",{attrs:{id:"下载安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[t._v("#")]),t._v(" 下载安装")]),t._v(" "),s("ol",[s("li",[t._v("下载项目")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitee")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/dromara/electron-egg.git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# github")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/dromara/electron-egg.git\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("切换 "),s("code",[t._v("demo")]),t._v(" 分支")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" demo-go remotes/origin/demo\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("安装 前端、electron、go 依赖")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根目录安装electron依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入前端目录安装依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./frontend \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入go目录安装依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/go\ngo mod tidy\n")])])]),s("h3",{attrs:{id:"在electron中如何运行go的可执行程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在electron中如何运行go的可执行程序"}},[t._v("#")]),t._v(" 在electron中如何运行go的可执行程序")]),t._v(" "),s("p",[t._v("提供两种启动方式。1：通过配置启动；2：通过cross模块的API来启动。")]),t._v(" "),s("h4",{attrs:{id:"方式一-配置模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式一-配置模式"}},[t._v("#")]),t._v(" 方式一：配置模式")]),t._v(" "),s("p",[t._v("请查看文档："),s("RouterLink",{attrs:{to:"/pages/9fd5ba/"}},[s("strong",[t._v("配置")])])],1),t._v(" "),s("p",[t._v("执行命令"),s("code",[t._v("npm run dev-electron")]),t._v("时，会自动拉起go项目/程序。")]),t._v(" "),s("h4",{attrs:{id:"方式二-api模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式二-api模式"}},[t._v("#")]),t._v(" 方式二：API模式")]),t._v(" "),s("p",[t._v("创建go服务")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件 electron/service/cross.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createGoServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// method 1: Use the default Settings")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//const entity = await Cross.run(serviceName);")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// method 2: Use custom configuration")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" serviceName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" opt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 程序名称，一般填写可执行程序名")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'goapp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cmd")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtraResourcesDir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'goapp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("directory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtraResourcesDir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--port=7073'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 程序退出时，是否退出electron应用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appExit")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Cross"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serviceName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server name:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"跟随软件启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跟随软件启动"}},[t._v("#")]),t._v(" 跟随软件启动")]),t._v(" "),s("p",[t._v("如果你希望桌面软件运行时就启动"),s("code",[t._v("go")]),t._v("服务，有以下两种方式。")]),t._v(" "),s("p",[t._v("一：通过"),s("code",[t._v("config.default.js")]),t._v("中的配置："),s("RouterLink",{attrs:{to:"/pages/9fd5ba/"}},[s("strong",[t._v("查看")])])],1),t._v(" "),s("p",[t._v("二：在"),s("code",[t._v("预加载")]),t._v("模块，直接引入"),s("code",[t._v("Services")]),t._v("并调用。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件 electron/preload/index.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*************************************************\n ** preload为预加载模块，该文件将会在程序启动时加载 **\n *************************************************/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Addon "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ee-core/addon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Services "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ee-core/services'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 预加载模块入口\n */")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接调用")]),t._v("\n  Services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cross'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createGoServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);