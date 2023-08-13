(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{373:function(t,n,s){"use strict";s.r(n);var a=s(7),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"生成exe、dmg、deb可执行文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成exe、dmg、deb可执行文件"}},[t._v("#")]),t._v(" 生成exe、dmg、deb可执行文件")]),t._v(" "),n("h3",{attrs:{id:"准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),n("ul",[n("li",[t._v("在 "),n("strong",[t._v("对应操作系统")]),t._v(" 下打包，比如：在windows下构建 xxx.exe，在MacOS下，构建xxx.dmg")]),t._v(" "),n("li",[t._v("如果使用 "),n("strong",[t._v("bytecode加密")]),t._v("，window区分32和64位，无法兼容运行；没有使用bytecode则忽略。")])]),t._v(" "),n("h3",{attrs:{id:"第一步-移动前端资源文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一步-移动前端资源文件"}},[t._v("#")]),t._v(" 第一步：移动前端资源文件")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 操作如下")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("：构建资源，如vue前端项目中npm run build\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("：根目录：npm run rd\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 预发布模式，测试一下功能是否正常 （prod环境）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("：npm run start \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解释说明")]),t._v("\nrd命令会把 frontend/dist 复制到 /public/dist "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 服务最终加载的是 /public/dist前端资源。\nfrontend目录代码不会被打包，防止源码泄露。\n")])])]),n("h3",{attrs:{id:"第二步-代码加密-必看"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二步-代码加密-必看"}},[t._v("#")]),t._v(" 第二步：代码加密 （必看）")]),t._v(" "),n("p",[t._v("如果执行过加密，会生成加密代码：/public/electron ，框架优先读取它，源代码则不生效。")]),t._v(" "),n("p",[t._v("开发阶段如果发现编写的代码不生效，请记得删除加密文件。")]),t._v(" "),n("blockquote",[n("p",[t._v("ee-core: v1.2.10")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加密")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明：encrypt命令会把 electron/ 复制到 /public/electron ; 然后对其加密。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# electron目录代码不会被打包，防止源码泄露。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run encrypt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除加密的代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run clean\n")])])]),n("p",[t._v("详细说明："),n("RouterLink",{attrs:{to:"/pages/383ba6/"}},[t._v("代码加密")])],1),t._v(" "),n("h3",{attrs:{id:"第三步-打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三步-打包"}},[t._v("#")]),t._v(" 第三步：打包")]),t._v(" "),n("h4",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("blockquote",[n("p",[t._v("electron-egg: v3.4.0\n查看 "),n("RouterLink",{attrs:{to:"/pages/2df2e6/"}},[t._v("builder.json")])],1)]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("1：请尽量让项目名唯一（electron-egg/package.json中name属性），防止和别人软件名称冲突")]),t._v(" "),n("p",[t._v("2：打包失败，请查看"),n("RouterLink",{attrs:{to:"/pages/23649b/"}},[t._v("常见问题")]),t._v("。")],1)]),t._v(" "),n("h4",{attrs:{id:"命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 准备，设置国内镜像")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果第一次构建长时间卡住，尝试删除 C:\\Users\\本机用户名\\AppData\\Local\\electron\\Cache 把这个目录清空，并重试")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("electron_builder_binaries_mirror")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com/-/binary/electron-builder-binaries/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包 （windows版）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-w\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-w-32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("位"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-w-64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-w-arm64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arm64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包 （windows 免安装版）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ee > v2.2.1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-wz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-wz-32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("位"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-wz-64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-wz-arm64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arm64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包 （mac版）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-m\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-m-arm64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m1芯片架构"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包 （linux版）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ee > v2.2.1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-l "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("位 deb包"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-l-64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 deb包"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-l-arm64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 deb包 arm64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-l-armv7l "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 deb包 armv7l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-lr-64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 rpm包"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-lp-64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位 pacman包"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("注释：如果你想了解更多平台打包功能，请参照："),n("a",{attrs:{href:"https://www.electron.build/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.electron.build/"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"第四步-找到程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第四步-找到程序"}},[t._v("#")]),t._v(" 第四步：找到程序")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 程序")]),t._v("\n目录：electron-egg/out\nWindows安装包：out/electron-egg-windows-2.0.3.exe  \nWindows免安装包：out/ee-win-3.0.1-ia32.7z\nMac软件包：out/xxxx.dmg\nLinux软件包：out/xxx.deb \n")])])]),n("h3",{attrs:{id:"经验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#经验"}},[t._v("#")]),t._v(" 经验")]),t._v(" "),n("p",[n("code",[t._v("window")]),t._v("、"),n("code",[t._v("macos")]),t._v(" 打包一般没有问题。"),n("code",[t._v("Linux")]),t._v("平台由于发行版太多，建议优先构建下面的安装包：")]),t._v(" "),n("ul",[n("li",[t._v("Ubuntu 打deb包")]),t._v(" "),n("li",[t._v("UOS统信 打deb包")]),t._v(" "),n("li",[t._v("Debian 打deb包")]),t._v(" "),n("li",[t._v("Centos 打rpm包")]),t._v(" "),n("li",[t._v("银河麒麟v10(sp1) 打deb包")])]),t._v(" "),n("h3",{attrs:{id:"其它修改"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它修改"}},[t._v("#")]),t._v(" 其它修改")]),t._v(" "),n("ol",[n("li",[t._v("修改应用名称")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改 ./package.json 中属性")]),t._v("\nname：项目名称（英文）\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# electron-egg:v3.4.0版本，将构建配置，独立为./electron/config/builder.json 文件")]),t._v("\nproductName: 可执行程序名称（英文）\nappId：软件id\nshortcutName：桌面快捷方式名称\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 软件运行时头部名称")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改 ./electron/config/config.default.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("windowsOption.title")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ee框架'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前端html的title标签也会影响该值，且优先级最高")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("logo修改，见"),n("RouterLink",{attrs:{to:"/pages/801f4c/"}},[t._v("文档")])],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);