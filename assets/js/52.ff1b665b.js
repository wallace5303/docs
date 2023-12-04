(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{381:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("当你开发完成之后，需要构建相应的资源或程序，并通过预览模式（未打包的prod环境），检查你的程序是否运行正常。")]),s._v(" "),a("h3",{attrs:{id:"构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[s._v("#")]),s._v(" 构建")]),s._v(" "),a("h4",{attrs:{id:"静态资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源"}},[s._v("#")]),s._v(" 静态资源")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("./public")]),s._v(" 目录，electron 生产环境使用。")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前端资源")]),s._v("\n./public/dist \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一些页面")]),s._v("\n./public/html \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一些图片")]),s._v("\n./public/images \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssl证书")]),s._v("\n./public/ssl \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[s._v("./go/public")]),s._v(" 目录，由 "),a("code",[s._v("move")]),s._v(" 命令生成；go 生产环境使用，会打包进程go的可执行程序中。")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 程序基础信息")]),s._v("\n./go/public/package.json \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置")]),s._v("\n./go/public/config\n\n./go/public/dist \n./go/public/html \n./go/public/images \n./go/public/ssl \n")])])]),a("h4",{attrs:{id:"生成-go-程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-go-程序"}},[s._v("#")]),s._v(" 生成 go 程序")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("首先生成前端资源并移动，"),a("RouterLink",{attrs:{to:"/pages/a75f3c/"}},[a("strong",[s._v("查看教程")])]),s._v("中，"),a("code",[s._v("构建前端资源并移动")]),s._v(" 部分。")],1)]),s._v(" "),a("li",[a("p",[s._v("把静态资源嵌入到go 并 构建程序。")])])]),s._v(" "),a("p",[s._v("配置 "),a("code",[s._v("package.json")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构建 windows 平台程序")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"build-go-w"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ee-bin move --flag=go_static,go_config,go_package,go_images && ee-bin build --cmds=go_build_w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构建 macOS 平台程序")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"build-go-m"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ee-bin move --flag=go_static,go_config,go_package,go_images && ee-bin build --cmds=go_build_m"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构建 linux 平台程序")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"build-go-l"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ee-bin move --flag=go_static,go_config,go_package,go_images && ee-bin build --cmds=go_build_l"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("举例说明：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build-go-w \n")])])]),a("p",[s._v("该命令执行 配置中的:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('"ee-bin move --flag=go_static,go_config,go_package,go_images && ee-bin build --cmds=go_build_w"\n')])])]),a("p",[s._v("它包含两个命令：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("ee-bin move")]),s._v(" 把 "),a("code",[s._v("public/")]),s._v("中的资源，移动到 "),a("code",[s._v("./go/public/")]),s._v("，它会被嵌入go的可执行程序中。")]),s._v(" "),a("li",[a("code",[s._v("ee-bin build")]),s._v(" 用来生产go的可执行程序。")])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("程序位置 "),a("code",[s._v("./build/extraResources/goapp")])])]),s._v(" "),a("h4",{attrs:{id:"预发布模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预发布模式"}},[s._v("#")]),s._v(" 预发布模式")]),s._v(" "),a("p",[s._v("测试一下功能是否正常（当前环境变量为：prod）")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run start \n")])])]),a("h4",{attrs:{id:"生成桌面软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成桌面软件"}},[s._v("#")]),s._v(" 生成桌面软件")]),s._v(" "),a("p",[s._v("请参见："),a("RouterLink",{attrs:{to:"/pages/ad838d/"}},[a("strong",[s._v("生成软件")])])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);