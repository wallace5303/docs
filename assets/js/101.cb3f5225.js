(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{431:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("ee-core：v2.0.3")])]),t._v(" "),a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("系统config配置模块，可以 获取/设置 system.json库中的数据。")]),t._v(" "),a("h3",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ee-core/config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"第三方使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方使用"}},[t._v("#")]),t._v(" 第三方使用")]),t._v(" "),a("ol",[a("li",[t._v("创建配置文件\n在项目根目录创建 ./electron/config/config.default.js 文件，"),a("a",{attrs:{href:"https://github.com/dromara/electron-egg/blob/demo/electron/config/config.default.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("config示例代码"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("使用方法同上")])]),t._v(" "),a("h3",{attrs:{id:"config位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config位置"}},[t._v("#")]),t._v(" config位置")]),t._v(" "),a("p",[t._v("见文档："),a("RouterLink",{attrs:{to:"/pages/ad7faa/"}},[t._v("system.json")])],1),t._v(" "),a("h3",{attrs:{id:"api列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api列表"}},[t._v("#")]),t._v(" API列表")]),t._v(" "),a("h3",{attrs:{id:"all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all"}},[t._v("#")]),t._v(" all()")]),t._v(" "),a("p",[t._v("获取所有配置数据。")]),t._v(" "),a("h3",{attrs:{id:"setall-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setall-config"}},[t._v("#")]),t._v(" setAll(config)")]),t._v(" "),a("ul",[a("li",[t._v("config [Object] - 包含全部配置数据的对象")])]),t._v(" "),a("p",[t._v("保存所有配置。比如，修改过config对象中的某个属性后，重新setAll(config)，把数据保存在json数据库中。\n注：尽量不要修改系统配置中的数据，以免引发异常。")]),t._v(" "),a("h3",{attrs:{id:"getvalue-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getvalue-key"}},[t._v("#")]),t._v(" getValue(key)")]),t._v(" "),a("ul",[a("li",[t._v("key [String] - 系统配置中对象属性")])]),t._v(" "),a("p",[t._v("根据属性获取值。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ee-core/config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取http服务配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" httpConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'httpServer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取升级配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" updateConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'addons.autoUpdater'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"setvalue-key-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setvalue-key-value"}},[t._v("#")]),t._v(" setValue(key, value)")]),t._v(" "),a("ul",[a("li",[t._v("key [String] - 系统配置中对象属性")]),t._v(" "),a("li",[t._v("value [any] - 系统配置中对象属性的值")])]),t._v(" "),a("p",[t._v("设置某个属性的值。")])])}),[],!1,null,null,null);a.default=n.exports}}]);