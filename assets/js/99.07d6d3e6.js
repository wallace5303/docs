(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{426:function(t,a,s){"use strict";s.r(a);var n=s(7),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("ee-core：v2.1.0")])]),t._v(" "),a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("ChildPoolJob基于node.js"),a("strong",[t._v("子进程")]),t._v("实现。可以创建一批进程常驻内存，传递任务后直接执行，没有创建、销毁进程的性能开销。")]),t._v(" "),a("h3",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ChildPoolJob "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ee-core/jobs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChildPoolJob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"api列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api列表"}},[t._v("#")]),t._v(" API列表")]),t._v(" "),a("h3",{attrs:{id:"pool-children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-children"}},[t._v("#")]),t._v(" pool.children")]),t._v(" "),a("p",[t._v("类属性，返回通过run() / runPromise() 创建的实例对象集合。")]),t._v(" "),a("h3",{attrs:{id:"pool-max"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-max"}},[t._v("#")]),t._v(" pool.max")]),t._v(" "),a("p",[t._v("类属性，最大进程数")]),t._v(" "),a("h3",{attrs:{id:"pool-strategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-strategy"}},[t._v("#")]),t._v(" pool.strategy")]),t._v(" "),a("p",[t._v("类属性，进程选举算法，默认 'polling' 轮询")]),t._v(" "),a("h3",{attrs:{id:"pool-weights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-weights"}},[t._v("#")]),t._v(" pool.weights")]),t._v(" "),a("p",[t._v("类属性，权重")]),t._v(" "),a("h3",{attrs:{id:"pool-lb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-lb"}},[t._v("#")]),t._v(" pool.LB")]),t._v(" "),a("p",[t._v("类属性，负载均衡器")]),t._v(" "),a("h3",{attrs:{id:"pool-create-number-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-create-number-3"}},[t._v("#")]),t._v(" pool.create(number = 3)")]),t._v(" "),a("ul",[a("li",[t._v("number [Int] - 要创建的进程数量")])]),t._v(" "),a("p",[t._v("创建一个池子，返回 pids")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pids")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"pool-run-filepath-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-run-filepath-params"}},[t._v("#")]),t._v(" pool.run(filepath, params = {})")]),t._v(" "),a("ul",[a("li",[t._v("filepath [String] - ./jobs 目录的相对路径；或者绝对路径。")]),t._v(" "),a("li",[t._v("params [Object] - 传递的参数")])]),t._v(" "),a("p",[t._v("从进程池中选举出一个进程，然后执行一个job文件。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("electron"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" timerTask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./jobs/example/timer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jobId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"pool-runpromise-filepath-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-runpromise-filepath-params"}},[t._v("#")]),t._v(" pool.runPromise(filepath, params = {})")]),t._v(" "),a("p",[t._v("run()的异步语法")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("# 示例文件\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("electron"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 通过进程池执行任务\n */")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doJobByPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("jobId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" channel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'controller.example.timerJobProgress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步-执行任务及监听进度")]),t._v("\n    pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runPromise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./jobs/example/timer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jobId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("task")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'job-timer-progress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[main-process] [ChildPoolJob] timerTask, from TimerJob data:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送数据到渲染进程")]),t._v("\n        event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"pool-getpids"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-getpids"}},[t._v("#")]),t._v(" pool.getPids()")]),t._v(" "),a("p",[t._v("获取当前pids数组。")]),t._v(" "),a("h3",{attrs:{id:"pool-getchildbypid-pid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-getchildbypid-pid"}},[t._v("#")]),t._v(" pool.getChildByPid(pid)")]),t._v(" "),a("ul",[a("li",[t._v("pid [Int]")])]),t._v(" "),a("p",[t._v("通过pid获取一个子进程对象")]),t._v(" "),a("h3",{attrs:{id:"pool-killall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool-killall"}},[t._v("#")]),t._v(" pool.killAll()")]),t._v(" "),a("p",[t._v("关闭所有进程。")]),t._v(" "),a("h3",{attrs:{id:"eventemitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventemitter"}},[t._v("#")]),t._v(" EventEmitter")]),t._v(" "),a("p",[t._v("ChildPoolJob继承于events模块，因此实例化后的对象，可以使用EventEmitter所有方法")]),t._v(" "),a("h3",{attrs:{id:"forkprocess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forkprocess"}},[t._v("#")]),t._v(" ForkProcess")]),t._v(" "),a("p",[t._v("通过run() / runPromise() 返回的进程对象。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myProc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./jobs/example/timer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jobId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n# or\npool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runPromise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./jobs/example/timer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jobId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("myProc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  myProc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'job-timer-progress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"myproc-emitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myproc-emitter"}},[t._v("#")]),t._v(" myProc.emitter")]),t._v(" "),a("p",[t._v("实例化后的"),a("a",{attrs:{href:"https://nodejs.org/docs/latest-v16.x/api/events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("EventEmitter"),a("OutboundLink")],1),t._v("模块对象。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runPromise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./jobs/example/timer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jobId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("myProc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  myProc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'job-timer-progress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"myproc-child"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myproc-child"}},[t._v("#")]),t._v(" myProc.child")]),t._v(" "),a("p",[t._v("通过"),a("a",{attrs:{href:"https://nodejs.org/docs/latest-v16.x/api/child_process.html#child_processforkmodulepath-args-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("child_process"),a("OutboundLink")],1),t._v("模块，"),a("a",{attrs:{href:"https://nodejs.org/docs/latest-v16.x/api/child_process.html#child_processforkmodulepath-args-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork"),a("OutboundLink")],1),t._v("出来的进程对象。")]),t._v(" "),a("h4",{attrs:{id:"myproc-pid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myproc-pid"}},[t._v("#")]),t._v(" myProc.pid")]),t._v(" "),a("p",[t._v("子进程pid")]),t._v(" "),a("h4",{attrs:{id:"myproc-dispatch-cmd-jobpath-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myproc-dispatch-cmd-jobpath-params"}},[t._v("#")]),t._v(" myProc.dispatch(cmd, jobPath = '', params = {})")]),t._v(" "),a("p",[t._v("分发任务")]),t._v(" "),a("h4",{attrs:{id:"myproc-kill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myproc-kill"}},[t._v("#")]),t._v(" myProc.kill()")]),t._v(" "),a("ul",[a("li",[t._v("timeout [Int] - 默认 1000ms")])]),t._v(" "),a("p",[t._v("kill子进程")]),t._v(" "),a("h4",{attrs:{id:"myproc-sleep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myproc-sleep"}},[t._v("#")]),t._v(" myProc.sleep()")]),t._v(" "),a("p",[t._v("sleep（仅Unix平台)")]),t._v(" "),a("h4",{attrs:{id:"myproc-wakeup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myproc-wakeup"}},[t._v("#")]),t._v(" myProc.wakeup()")]),t._v(" "),a("p",[t._v("wakeup (仅Unix平台)")])])}),[],!1,null,null,null);a.default=r.exports}}]);