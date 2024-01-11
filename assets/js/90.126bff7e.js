(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{420:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-生成exe、dmg、deb可执行文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成exe、dmg、deb可执行文件"}},[t._v("#")]),t._v(" 1. 生成exe、dmg、deb可执行文件")]),t._v(" "),s("h3",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("ul",[s("li",[t._v("在对应操作系统下打包，比如：在windows下构建 xxx.exe，在MacOS下，构建xxx.dmg")]),t._v(" "),s("li",[t._v("window区分32和64位系统，如果使用bytecode加密功能，则不兼容。反之，兼容。")])]),t._v(" "),s("h3",{attrs:{id:"第零步-预发布模式-测试一下功能是否正常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第零步-预发布模式-测试一下功能是否正常"}},[t._v("#")]),t._v(" 第零步：预发布模式，测试一下功能是否正常")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prod环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start \n")])])]),s("h3",{attrs:{id:"第一步-移动前端资源文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步-移动前端资源文件"}},[t._v("#")]),t._v(" 第一步：移动前端资源文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 操作如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("：构建资源，如vue前端项目中npm run build\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("：根目录：npm run rd\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解释说明")]),t._v("\nrd命令会把 frontend/dist 复制到 /public/dist "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 服务最终加载的是 /public/dist前端资源。\nfrontend目录代码不会被打包，防止源码泄露。\n")])])]),s("h3",{attrs:{id:"第二步-代码加密-必看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步-代码加密-必看"}},[t._v("#")]),t._v(" 第二步：代码加密 （必看）")]),t._v(" "),s("ul",[s("li",[t._v("如果未使用该功能，请不要过滤源代码，查看操作："),s("a",{attrs:{href:"https://www.yuque.com/u34495/mivcfg/mmr6mu",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码加密"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("如果执行过加密，会生成加密代码：/public/electron ，框架优先读取它，源代码则不生效。")])]),t._v(" "),s("p",[t._v("开发阶段如果发现编写的代码不生效，请记得删除加密文件。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("ee-core: v1.2.10")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run encrypt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解释说明")]),t._v("\nencrypt命令会把 electron/ 复制到 /public/electron "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 然后对其加密。\nelectron目录代码不会被打包，防止源码泄露。\n")])])]),s("p",[t._v("详细说明："),s("a",{attrs:{href:"https://www.yuque.com/u34495/mivcfg/mmr6mu",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码加密"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"第三步-执行打包命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步-执行打包命令"}},[t._v("#")]),t._v(" 第三步：执行打包命令")]),t._v(" "),s("p",[t._v("注1：请尽量让项目名唯一（electron-egg/package.json中name属性），防止和别人软件名称冲突\n注2：打包失败，请查看"),s("a",{attrs:{href:"https://www.yuque.com/u34495/mivcfg/gv21wi",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见问题"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包时，package.json中build.productName包名不要为中文，避免一些未知异常")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 准备，设置国内镜像")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("electron_builder_binaries_mirror")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com/-/binary/electron-builder-binaries/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包 （windows版）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-w "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("位"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-w-64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-w-arm64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arm64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包 （windows 免安装版）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ee > v2.2.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-wz "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("位"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-wz-64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-wz-arm64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arm64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包 （mac版）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-m\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-m-arm64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m1芯片架构"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包 （linux版）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ee > v2.2.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-l "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("位 deb包"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-l-64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 deb包"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-l-arm64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 deb包 arm64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-l-armv7l "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 deb包 armv7l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-lr-64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 rpm包"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-lp-64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 pacman包"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("注释：如果你想了解更多平台打包功能，请参照："),s("a",{attrs:{href:"https://www.electron.build/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.electron.build/"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"第四步-找到程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四步-找到程序"}},[t._v("#")]),t._v(" 第四步：找到程序")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("目录：electron-egg/out\n安装包：electron-egg/out/electron-egg-windows-2.0.3.exe  \n")])])]),s("h3",{attrs:{id:"_2-其它修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-其它修改"}},[t._v("#")]),t._v(" 2. 其它修改")]),t._v(" "),s("ol",[s("li",[t._v("修改应用名称")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# 修改 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json 中属性\nname：项目名称（英文）\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("productName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 可执行程序名称（英文）\nappId：软件id\nshortcutName：桌面快捷方式名称\n\n# 软件运行时头部名称\n# 修改 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("electron"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\nwindowsOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ee框架'")]),t._v("\n# 前端html的title标签也会影响该值，且优先级最高\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("修改桌面logo")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路径")]),t._v("\n./build/icons/256x256.png "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("名称和尺寸必须一致"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("windows或者Linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n./build/icons/512x512.png "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("名称和尺寸必须一致"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("windows或者Linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n./build/icons/icon.ico "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("macOs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("修改最小化托盘logo")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 路径\n./public/images/tray_logo.png (建议 32x32 或 16x16 )\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("修改左上角logo")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码位置")]),t._v("\n./electron/config/config.default.js\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("windowsOption.icon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path.join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appInfo.home, "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logo-32.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图片位置")]),t._v("\n./public/images/logo-32.png\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);