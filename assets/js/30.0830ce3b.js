(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{393:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("前端与主进程（业务层）ipc通信")]),t._v(" "),s("h3",{attrs:{id:"ipcrenderer-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipcrenderer-js"}},[t._v("#")]),t._v(" ipcRenderer.js")]),t._v(" "),s("p",[t._v("文件位置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./frontend/src/utils/ipcRenderer.js\n")])])]),s("p",[t._v("内容")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Renderer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("require "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("electron "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * ipc\n * 官方api说明：https://www.electronjs.org/zh/docs/latest/api/ipc-renderer\n * \n * 属性/方法\n * ipc.invoke(channel, param) - 发送异步消息（invoke/handle 模型）\n * ipc.sendSync(channel, param) - 发送同步消息（send/on 模型）\n * ipc.on(channel, listener) - 监听 channel, 当新消息到达，调用 listener\n * ipc.once(channel, listener) - 添加一次性 listener 函数\n * ipc.removeListener(channel, listener) - 为特定的 channel 从监听队列中删除特定的 listener 监听者\n * ipc.removeAllListeners(channel) - 移除所有的监听器，当指定 channel 时只移除与其相关的所有监听器\n * ipc.send(channel, ...args) - 通过channel向主进程发送异步消息\n * ipc.postMessage(channel, message, [transfer]) - 发送消息到主进程\n * ipc.sendTo(webContentsId, channel, ...args) - 通过 channel 发送消息到带有 webContentsId 的窗口\n * ipc.sendToHost(channel, ...args) - 消息会被发送到 host 页面上的 <webview> 元素\n */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * ipc\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ipc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipcRenderer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 是否为EE环境\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isEE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ipc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isEE\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"ipc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipc"}},[t._v("#")]),t._v(" ipc")]),t._v(" "),s("p",[t._v("等于electron官方的api")]),t._v(" "),s("h3",{attrs:{id:"isee"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isee"}},[t._v("#")]),t._v(" isEE")]),t._v(" "),s("p",[t._v("是否为EE环境。可用此属性区别前端页面是在服务器环境还是用户电脑环境。")]),t._v(" "),s("h3",{attrs:{id:"废弃-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#废弃-api"}},[t._v("#")]),t._v(" （废弃）API")]),t._v(" "),s("h3",{attrs:{id:"废弃-ipcinvoke-route-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#废弃-ipcinvoke-route-params"}},[t._v("#")]),t._v(" （废弃）$ipcInvoke(route, params)")]),t._v(" "),s("ul",[s("li",[t._v("介绍：发送异步消息（invoke/handle 模型）")]),t._v(" "),s("li",[t._v("返回：Promise")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# 回调语法\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleInvoke")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$ipcInvoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipcApiRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipcInvokeMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'异步-回调'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n# async"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v("语法\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleInvoke2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$ipcInvoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipcApiRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipcInvokeMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'异步'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"废弃-ipcsendsync-route-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#废弃-ipcsendsync-route-params"}},[t._v("#")]),t._v(" （废弃）$ipcSendSync(route, params)")]),t._v(" "),s("ul",[s("li",[t._v("介绍：发送同步消息（send/on 模型）")]),t._v(" "),s("li",[t._v("返回：任意类型")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# 语法\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$ipcSendSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipcApiRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipcSendSyncMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'同步'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"废弃-ipc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#废弃-ipc"}},[t._v("#")]),t._v(" （废弃）$ipc")]),t._v(" "),s("ul",[s("li",[t._v("介绍：全局ipc对象，等价于electron官方提供的 ipcRender")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("该对象包含如下方法：\non\nonce\nremoveListener\nremoveAllListeners\nsend\ninvoke\nsendSync\npostMessage\nsendTo\nsendToHost\nIpcRendererEvent\n")])])]),s("p",[t._v("详细说明见："),s("a",{attrs:{href:"https://www.electronjs.org/zh/docs/latest/api/ipc-renderer#ipcrendereronchannel-listener",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.electronjs.org/zh/docs/latest/api/ipc-renderer#ipcrendereronchannel-listener"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"废弃-ipc-send-route-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#废弃-ipc-send-route-params"}},[t._v("#")]),t._v(" （废弃）$ipc.send(route, params)")]),t._v(" "),s("ul",[s("li",[t._v("介绍：ipc的send属性，向主进程发送异步消息，可以发送任意参数。")]),t._v(" "),s("li",[t._v("返回：结果在 $ipc.on()监听的路由中")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# 使用\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" params "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'开始'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$ipc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipcApiRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipcSendMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"废弃-ipc-on-route-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#废弃-ipc-on-route-listener"}},[t._v("#")]),t._v(" （废弃）$ipc.on(route, listener)")]),t._v(" "),s("ul",[s("li",[t._v("介绍：ipc的on属性，监听 route；当新消息到达，将调用listener")]),t._v(" "),s("li",[t._v("返回：callback")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$ipc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipcApiRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ipcSendMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用后端的另一个接口")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipcApiRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron-egg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);