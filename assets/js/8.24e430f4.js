(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("ul",[s("li",[t._v("推荐 node.js >= 14.21.1")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/1f0f51/"}},[t._v("node.js 安装教程")])],1)]),t._v(" "),s("h3",{attrs:{id:"下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# gitee\ngit clone https://gitee.com/dromara/electron-egg.git\n\n# github\ngit clone https://github.com/dromara/electron-egg.git\n")])])]),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("有问题先看文档："),s("RouterLink",{attrs:{to:"/pages/23649b/"}},[s("strong",[t._v("常见问题")])])],1),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"npm",active:""}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置国内镜像源(加速)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("disturl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com/-/binary/node\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果下载electron慢，配置如下（或者挂个VPN）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("electron_mirror")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com/-/binary/electron/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入目录 ./electron-egg/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果还是提示 electron 没安装，进入 node_modules/electron 目录下，再npm install")]),t._v("\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"pnpm"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解决幽灵依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" node-linker hoisted\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置国内镜像源(加速)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("disturl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com/-/binary/node\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果下载electron慢，配置如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("electron_mirror")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com/-/binary/electron/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入目录 ./electron-egg/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])])],1),t._v(" "),s("h3",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),s("p",[t._v("框架集成了许多功能demo示例，方便开发者快速入门。查看"),s("RouterLink",{attrs:{to:"/pages/132909/"}},[t._v("demo文档")])],1),t._v(" "),s("h3",{attrs:{id:"生成软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成软件"}},[t._v("#")]),t._v(" 生成软件")]),t._v(" "),s("p",[t._v("见教程："),s("RouterLink",{attrs:{to:"/pages/ad838d/"}},[s("strong",[t._v("构建可执行程序")])])],1),t._v(" "),s("h3",{attrs:{id:"window-7-系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-7-系统"}},[t._v("#")]),t._v(" window 7 系统")]),t._v(" "),s("p",[t._v("微软已经停止对 win7系统支持。需要支持win7的，请使用以下开发环境")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("electron "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("版本\nnode.js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("版本\nelectron-builder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22.10")]),t._v(".5\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);