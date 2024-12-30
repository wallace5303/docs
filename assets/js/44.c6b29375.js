(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{409:function(t,s,a){"use strict";a.r(s);var r=a(14),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("要求：ee-core: v1.2.10")]),t._v(" 及以上")]),t._v(" "),s("p",[t._v("目前框架支持两种代码加密，分别为 "),s("strong",[t._v("字节码加密")]),t._v(" 和 "),s("strong",[t._v("压缩混淆加密")])]),t._v(" "),s("h3",{attrs:{id:"命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码加密")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run encrypt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除加密的代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run clean\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并命令，package.json中修改 start 命令")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这样每次预发布时，就会生成加密的代码，避免构建时忘记")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ee-bin encrypt && ee-bin start"')]),t._v(",\n")])])]),s("h3",{attrs:{id:"打包时-过滤源代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包时-过滤源代码"}},[t._v("#")]),t._v(" 打包时，过滤源代码")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("加密，请添加 "),s("strong",[t._v('"!electron/"')])]),t._v(" "),s("p",[t._v("未加密，请删除 "),s("strong",[t._v('"!electron/"')])])]),t._v(" "),s("p",[t._v("打开package.json 或 builder.json文件，修改 "),s("strong",[t._v("build.files")]),t._v(" 数组属性，添加 "),s("strong",[t._v('"!electron/"，如下：')])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// electron-egg: v3.4.0版本，将构建配置，独立为./electron/config/builder.json 文件")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"asar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"files"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!frontend/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过滤前端源码")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!run/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!logs/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!data/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!electron/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过滤electron文件夹；如果没有使用加密功能，请删除")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),s("h3",{attrs:{id:"加密配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密配置文件"}},[t._v("#")]),t._v(" 加密配置文件")]),t._v(" "),s("blockquote",[s("p",[t._v("ee-core: v1.3.2")])]),t._v(" "),s("p",[t._v("文件 ./electron/config/bin.js")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("encrypt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'confusion'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("files")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron/**/*.(js|json)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!electron/config/encrypt.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!electron/config/nodemon.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!electron/config/builder.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!electron/config/bin.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fileExt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("confusionOptions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("compact")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stringArray")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stringArrayEncoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stringArrayCallsTransform")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("deadCodeInjection")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("numbersToExpressions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h4",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),s("ul",[s("li",[t._v("bytecode  字节码加密")]),t._v(" "),s("li",[t._v("confusion  压缩混淆加密")]),t._v(" "),s("li",[t._v("strict 先混淆加密，然后字节码加密")])]),t._v(" "),s("h4",{attrs:{id:"directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory"}},[t._v("#")]),t._v(" directory")]),t._v(" "),s("p",[t._v("需要加密的目录，将废弃，用files替代")]),t._v(" "),s("h4",{attrs:{id:"files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" files")]),t._v(" "),s("blockquote",[s("p",[t._v("ee-core: v2.1.0")])]),t._v(" "),s("p",[t._v("需要加密的文件匹配，功能更强，说明：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("files")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron/**/*.(js|json)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配 electron 目录下的 js|json文件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!electron/config/nodemon.json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过滤 electron/config/nodemon.json 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h4",{attrs:{id:"confusionoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#confusionoptions"}},[t._v("#")]),t._v(" confusionOptions")]),t._v(" "),s("ul",[s("li",[t._v("compact [Boolean] - 压缩成一行")]),t._v(" "),s("li",[t._v("stringArray [Boolean] - 删除字符串文字并将其放置在一个特殊数组中")]),t._v(" "),s("li",[t._v("stringArrayEncoding [Array] - 对stringArray的所有字符串文字进行编码，值：'none' | 'base64' | 'rc4'")]),t._v(" "),s("li",[t._v("stringArrayCallsTransform: true, // 调用的所有参数都可能被提取到不同的对象中")]),t._v(" "),s("li",[t._v("deadCodeInjection [Boolean] - 注入死代码，注：影响性能")]),t._v(" "),s("li",[t._v("deadCodeInjectionThreshold [number], // 死代码注入阈值，默认0.3")]),t._v(" "),s("li",[t._v("numbersToExpressions [Boolean], // 将数字转换为表达式")]),t._v(" "),s("li",[t._v("target [String], // 设置运行环境")])]),t._v(" "),s("h3",{attrs:{id:"加密后文件位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密后文件位置"}},[t._v("#")]),t._v(" 加密后文件位置")]),t._v(" "),s("p",[t._v("加密后，文件在 ./public/electron 里面，请注意业务代码中，文件引入路径。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("dev环境（或 未使用加密功能的prod环境）使用 ./electron 代码；")]),t._v(" "),s("p",[t._v("prod环境使用 ./public/electron 代码。")])]),t._v(" "),s("h3",{attrs:{id:"方式一-字节码加密-bytecode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式一-字节码加密-bytecode"}},[t._v("#")]),t._v(" 方式一：字节码加密 - bytecode")]),t._v(" "),s("p",[t._v("什么是字节码加密？")]),t._v(" "),s("p",[t._v("字节码是一种源码编译后的中间表示，类似汇编，是虚拟机执行的指令。逆向（反）编译的难度和传统编译型语言差不多。")]),t._v(" "),s("h4",{attrs:{id:"代码要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码要求"}},[t._v("#")]),t._v(" 代码要求")]),t._v(" "),s("p",[t._v("控制器controller和服务层service代码要求加入toString()方法，用来识别加密后的 .jsc （class）模块。")]),t._v(" "),s("p",[t._v("如：ExampleController 控制器")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# 添加 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 方法，返回内容为 类的字符串表示\nExampleController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[class ExampleController]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n# 导出模块\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ExampleController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"构建要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建要求"}},[t._v("#")]),t._v(" 构建要求")]),t._v(" "),s("ul",[s("li",[t._v("如果交叉构建的软件运行报错，那么在对应平台构建，操作如下")]),t._v(" "),s("li",[t._v("在windows-32-bit 操作系统上构建：npm run build-w (32位)")]),t._v(" "),s("li",[t._v("在windows-64-bit 操作系统上构建：npm run build-w-64 (64位)")]),t._v(" "),s("li",[t._v("在MacOS-amd 操作系统上构建：npm run build-m")]),t._v(" "),s("li",[t._v("在MacOS-arm 操作系统上构建：npm run build-m-arm64 (m1芯片架构)")]),t._v(" "),s("li",[t._v("Linux平台分发版较多，请自行测试")])]),t._v(" "),s("h3",{attrs:{id:"方式二-压缩混淆加密-confusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式二-压缩混淆加密-confusion"}},[t._v("#")]),t._v(" 方式二：压缩混淆加密 - confusion")]),t._v(" "),s("blockquote",[s("p",[t._v("ee-core: v1.4.1")])]),t._v(" "),s("p",[t._v("配置")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# electron"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("confusionOptions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("compact")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将代码压缩为1行        ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stringArray")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除字符串文本并将其放置在特殊数组中")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stringArrayEncoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对stringArray编码 'none', 'base64', 'rc4'，增加安全性")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stringArrayCallsTransform")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用的所有参数都可能被提取到不同的对象中")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("deadCodeInjection")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否注入死代码，代码体积变大。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("deadCodeInjectionThreshold")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 死代码注入阈值，默认0.3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("numbersToExpressions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将数字转换为表达式")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置运行环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"代码要求-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码要求-2"}},[t._v("#")]),t._v(" 代码要求")]),t._v(" "),s("p",[t._v("无")]),t._v(" "),s("h4",{attrs:{id:"构建要求-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建要求-2"}},[t._v("#")]),t._v(" 构建要求")]),t._v(" "),s("ul",[s("li",[t._v("可在windows-64-bit 操作系统上，同时构建 32位 和 64位应用。")]),t._v(" "),s("li",[t._v("其它如上。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("如果加密生成的代码无法运行，请多次 执行 "),s("strong",[t._v("npm run encrypt")])]),t._v(" "),s("p",[t._v("原因：加密后代码混淆很大，可能触发某些关键字或者字符编码，导致代码无法正常读取。")])]),t._v(" "),s("h3",{attrs:{id:"方式三-压缩混淆加密-strict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式三-压缩混淆加密-strict"}},[t._v("#")]),t._v(" 方式三：压缩混淆加密 strict")]),t._v(" "),s("blockquote",[s("p",[t._v("ee-core: v1.4.0")])]),t._v(" "),s("p",[t._v("先 压缩混淆加密，然后 字节码加密，代码更加安全。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("问题同上")])])])}),[],!1,null,null,null);s.default=n.exports}}]);