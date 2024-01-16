(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{358:function(t,a,r){"use strict";r.r(a);var s=r(7),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("ee-core: v1.4.0")])]),t._v(" "),a("blockquote",[a("p",[t._v("ee-core: v2.0.3 版后，尽量使用模块化api，减少对this.app依赖")])]),t._v(" "),a("h3",{attrs:{id:"废弃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#废弃"}},[t._v("#")]),t._v(" 废弃")]),t._v(" "),a("p",[t._v("请使用"),a("code",[t._v("cross模块")]),t._v("，提供统一的API。")]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// electron/config/config.default.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 插件功能\n */")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addons "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("javaServer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否启用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认端口（如果端口被使用，则随机获取一个）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("jreVersion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jre1.8.0_201'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 额外资源目录下 jre 文件夹名称")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("opt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-server -Xms512M -Xmx512M -Xss512k -Dspring.profiles.active=prod -Dserver.port=${port} -Dlogging.file.path=\"${path}\" '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java-app.jar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 额外资源目录下 jar 名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"安装table-parser包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装table-parser包"}},[t._v("#")]),t._v(" 安装table-parser包")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i table-parser\n")])])]),a("h3",{attrs:{id:"官方下载-jre"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方下载-jre"}},[t._v("#")]),t._v(" 官方下载 jre")]),t._v(" "),a("p",[t._v("将jre解压到：build/extraResources 目录")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle java"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"编译-spring-boot-为可执行jar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译-spring-boot-为可执行jar"}},[t._v("#")]),t._v(" 编译 spring boot 为可执行jar")]),t._v(" "),a("p",[t._v("将jar放到： build/extraResources 目录")]),t._v(" "),a("h3",{attrs:{id:"通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通信"}},[t._v("#")]),t._v(" 通信")]),t._v(" "),a("p",[t._v("前端代码发送http请求与jar服务通信")]),t._v(" "),a("h3",{attrs:{id:"展示demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#展示demo"}},[t._v("#")]),t._v(" 展示demo")]),t._v(" "),a("ol",[a("li",[t._v("下载 jre 和 jar")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/wallace5303/electron-egg/releases/tag/v2.4.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("资源："),a("a",{attrs:{href:"https://github.com/wallace5303/electron-egg/releases/download/v2.4.0/java-res.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("java-res.zip"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("注意：请根据你的操作系统，选择正确的jre 并解压")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("将资源放到 build/extraResources 目录")]),t._v(" "),a("li",[t._v("运行ee程序，菜单->其它->java服务")])])])}),[],!1,null,null,null);a.default=e.exports}}]);