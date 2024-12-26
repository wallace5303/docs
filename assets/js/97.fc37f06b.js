(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{461:function(t,s,a){"use strict";a.r(s);var r=a(14),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("要求：ee-core: v1.2.10\n目前框架支持两种代码加密，分别为 "),s("strong",[t._v("字节码加密")]),t._v(" 和 "),s("strong",[t._v("压缩混淆加密。")])]),t._v(" "),s("h3",{attrs:{id:"打包时-过滤源代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包时-过滤源代码"}},[t._v("#")]),t._v(" 打包时，过滤源代码")]),t._v(" "),s("p",[t._v("注：未使用加密，请删除 "),s("strong",[t._v('"!electron/"')]),t._v(" 。\n打开package.json文件，修改 "),s("strong",[t._v("build.files")]),t._v(" 数组属性，添加 "),s("strong",[t._v('"!electron/"，如下：')])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"asar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"files"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!frontend/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过滤前端源码")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!run/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!logs/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!data/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!electron/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过滤electron文件夹；如果没有使用加密功能，请删除")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),s("h3",{attrs:{id:"加密配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密配置文件"}},[t._v("#")]),t._v(" 加密配置文件")]),t._v(" "),s("blockquote",[s("p",[t._v("ee-core: v1.3.2")])]),t._v(" "),s("p",[t._v("文件 ./electron/config/encrypt.js")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bytecode'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加密类型：bytecode | confusion | strict")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("directory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要加密的目录")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),t._v("      \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fileExt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要加密的文件后缀，暂时只支持js，后续待扩展")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("confusionOptions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),s("ul",[s("li",[t._v("bytecode  字节码加密")]),t._v(" "),s("li",[t._v("confusion  压缩混淆加密")]),t._v(" "),s("li",[t._v("strict 先混淆加密，然后字节码加密")])]),t._v(" "),s("h3",{attrs:{id:"加密后文件位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密后文件位置"}},[t._v("#")]),t._v(" 加密后文件位置")]),t._v(" "),s("p",[t._v("加密后，文件在 ./public/electron 里面，请注意业务代码中，文件引入路径。")]),t._v(" "),s("p",[t._v("注：dev环境（或 未使用加密功能的prod环境）使用 ./electron 代码，prod环境使用 ./public/electron代码。")]),t._v(" "),s("h3",{attrs:{id:"方式一-字节码加密-bytecode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式一-字节码加密-bytecode"}},[t._v("#")]),t._v(" 方式一：字节码加密 - bytecode")]),t._v(" "),s("p",[t._v("什么是字节码加密？\n字节码是一种源码编译后的中间表示，类似汇编，是虚拟机执行的指令。逆向（反）编译的难度和传统编译型语言差不多。")]),t._v(" "),s("h3",{attrs:{id:"代码要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码要求"}},[t._v("#")]),t._v(" 代码要求：")]),t._v(" "),s("p",[t._v("控制器controller和服务层service代码要求加入toString()方法，用来识别加密后的 .jsc （class）模块。如：ExampleController 控制器")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# 添加 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 方法，返回内容为 类的字符串表示\nExampleController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[class ExampleController]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n# 导出模块\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ExampleController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"构建要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建要求"}},[t._v("#")]),t._v(" 构建要求：")]),t._v(" "),s("ul",[s("li",[t._v("如果交叉构建的软件运行报错，那么在对应平台构建，操作如下")]),t._v(" "),s("li",[t._v("在windows-32-bit 操作系统上构建：npm run build-w (32位)")]),t._v(" "),s("li",[t._v("在windows-64-bit 操作系统上构建：npm run build-w-64 (64位)")]),t._v(" "),s("li",[t._v("在MacOS-amd 操作系统上构建：npm run build-m")]),t._v(" "),s("li",[t._v("在MacOS-arm 操作系统上构建：npm run build-m-arm64 (m1芯片架构)")]),t._v(" "),s("li",[t._v("Linux平台分发版较多，请自行测试")])]),t._v(" "),s("h3",{attrs:{id:"方式二-压缩混淆加密-confusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式二-压缩混淆加密-confusion"}},[t._v("#")]),t._v(" 方式二：压缩混淆加密 - confusion")]),t._v(" "),s("blockquote",[s("p",[t._v("ee-core: v1.4.0")])]),t._v(" "),s("p",[t._v("当使用此版本时，框架使用 javascript-obfuscator 加密代码，非常强大，效果好。")]),t._v(" "),s("p",[t._v("混淆配置")]),t._v(" "),s("blockquote",[s("p",[t._v("ee-core: v1.4.1")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# electron"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("encrypt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("confusionOptions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("compact")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将代码压缩为1行        ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stringArray")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除字符串文本并将其放置在特殊数组中")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stringArrayEncoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'base64'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对stringArray编码 'none', 'base64', 'rc4'，增加安全性")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("deadCodeInjection")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否注入死代码，代码体积变大。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"代码要求-无"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码要求-无"}},[t._v("#")]),t._v(" 代码要求：无")]),t._v(" "),s("h3",{attrs:{id:"构建要求-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建要求-2"}},[t._v("#")]),t._v(" 构建要求：")]),t._v(" "),s("ul",[s("li",[t._v("可在windows-64-bit 操作系统上，同时构建 32位 和 64位应用。")]),t._v(" "),s("li",[t._v("其它如上。")])]),t._v(" "),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("p",[t._v("如果加密生成的代码无法运行，请多次 执行 "),s("strong",[t._v("npm run encrypt")]),t._v("\n原因：加密后代码混淆很大，可能触发某些关键字或者字符编码，导致代码无法正常读取。")]),t._v(" "),s("h3",{attrs:{id:"方式三-压缩混淆加密-strict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式三-压缩混淆加密-strict"}},[t._v("#")]),t._v(" 方式三：压缩混淆加密 strict")]),t._v(" "),s("blockquote",[s("p",[t._v("需要：ee-core: v1.4.0")])]),t._v(" "),s("p",[t._v("先 压缩混淆加密，然后 字节码加密，代码更加安全。")]),t._v(" "),s("h3",{attrs:{id:"注意-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意-2"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("p",[t._v("问题同上")])])}),[],!1,null,null,null);s.default=n.exports}}]);