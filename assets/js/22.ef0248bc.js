(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{284:function(t,e,a){"use strict";a.r(e);var i=a(1),v=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"futter入门到精通"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#futter入门到精通","aria-hidden":"true"}},[t._v("#")]),t._v(" Futter入门到精通")]),t._v(" "),a("p",[t._v("​\t一切皆widget，widget是UI绘制的原子单元。")]),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("文笔不行写不出高深的理论，只能借鉴引用高人的高论了，下面文章的一些连接来自一些国内/外高人的原创或者翻译文章。站在巨人的肩上，就是的是把别人的知识变成自己的。")])],1),t._v(" "),a("h3",{attrs:{id:"app生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" App生命周期")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("resumed  进入app，即app获得焦点时触发")])]),t._v(" "),a("li",[a("p",[t._v("inactive  非活动状态，例如被其它程序打断的情况下触发，可以按返回键重新打开应用的状态")])]),t._v(" "),a("li",[a("p",[t._v("paused   暂停状态，程序被切换到后台，需要主动切换程序，返回键无效的情况")])]),t._v(" "),a("li",[a("p",[t._v("suspending  按照官网解释理解不了与paused的区别")])])]),t._v(" "),a("p",[t._v("下面文章可以帮助理解：")]),t._v(" "),a("ul",[a("li",[t._v("App生命周期由哪些状态：https://api.flutter.dev/flutter/dart-ui/AppLifecycleState-class.html")]),t._v(" "),a("li",[t._v("App生命周期测试用例：https://github.com/flutter/flutter/blob/master/examples/layers/services/lifecycle.dart")])]),t._v(" "),a("h3",{attrs:{id:"widget生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widget生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" Widget生命周期")]),t._v(" "),a("p",[t._v("​\t此生命周期比较多，理解几个常用的，剩下的用到再理解：")]),t._v(" "),a("p",[t._v("​\t"),a("font",{attrs:{color:"red"}},[t._v("除非State"),a("T",[t._v(".mounted==true，否则不应该调用setState方法，因为state还没有被创建到状态树上，在initState中加载数据时要判断该属性值。")])],1)],1),t._v(" "),a("ol",[a("li",[t._v("createState 创建State"),a("T",[t._v("实例")])],1),t._v(" "),a("li",[t._v("initState  这里经常会执行一些初始化操作，比如加载数据")]),t._v(" "),a("li",[t._v("build 绘制widget ，通过setState触发build的重新执行")]),t._v(" "),a("li",[t._v("dispose  销毁，这里执行一些页面退出时的销毁工作")])]),t._v(" "),a("p",[t._v("下面时一些参考文章：")]),t._v(" "),a("ul",[a("li",[t._v("https://api.flutter.dev/flutter/widgets/State-class.html")]),t._v(" "),a("li",[t._v("https://www.jianshu.com/p/05af657c13b0")]),t._v(" "),a("li",[t._v("https://juejin.im/post/5d1209e6e51d454d56535822")]),t._v(" "),a("li",[t._v("https://segmentfault.com/a/1190000015211309")])]),t._v(" "),a("h3",{attrs:{id:"widget教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widget教程","aria-hidden":"true"}},[t._v("#")]),t._v(" Widget教程")]),t._v(" "),a("p",[t._v("基础篇看这个就够了（英文好真是占尽优势）：")]),t._v(" "),a("p",[t._v("​\thttps://book.flutterchina.club/chapter3/")]),t._v(" "),a("p",[t._v("高级教程（同样时程序员为什么差距就那么大）：")]),t._v(" "),a("p",[t._v("​\thttps://juejin.im/post/5d1af0aee51d454fbf540a52")])])}),[],!1,null,null,null);e.default=v.exports}}]);