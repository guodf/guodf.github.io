(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{257:function(t,l,e){"use strict";e.r(l);var a=e(1),o=Object(a.a)({},(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"volatile的疑惑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile的疑惑"}},[t._v("#")]),t._v(" volatile的疑惑")]),t._v(" "),e("p",[t._v("今天看到volatile这个关键字，msdn搜索了一下没有看明白（"),e("a",{attrs:{href:"https://msdn.microsoft.com/zh-cn/library/7a2f3ay4(v=vs.80).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("看msdn的解释"),e("OutboundLink")],1),t._v("）。")]),t._v(" "),e("p",[e("strong",[t._v("看完msdn后自己得出的结论：")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("阻止编译器对指定的变量优化，也就保证每次访问都不使用cache（直接从原始地址读取，保证是最新的值）")]),t._v(" "),e("p",[t._v("什么是cache：为了提升性能，clr会对每个线程进行本地缓存，这就导致多线程中变量可能出现不一致，直到每次cache超时才会从变量的原始地址获取新值，而使用volatile标记的变量则会阻止使用cache")])]),t._v(" "),e("li",[e("p",[t._v("使用volatile标记的类型如果是基元类型则是线程安全的，非基于类型则需要使用线程同步")])])]),t._v(" "),e("p",[e("strong",[t._v("经过C++同事的解释，得出一下结论：")])]),t._v(" "),e("ol",[e("li",[t._v("volatile标记的变量并不是线程安全的，只是相对与普通的变量来说相对安全一些（C++中可能是这样，C#不清楚）")]),t._v(" "),e("li",[t._v("对变量访问的执行速度：未volatile标记的变量 > volatile标记的变量 > 使用线程同步技术访问变量")])])])}),[],!1,null,null,null);l.default=o.exports}}]);