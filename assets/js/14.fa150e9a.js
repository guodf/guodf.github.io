(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{283:function(s,a,e){"use strict";e.r(a);var t=e(1),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"android开发常见问题汇总"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android开发常见问题汇总"}},[s._v("#")]),s._v(" Android开发常见问题汇总")]),s._v(" "),e("h3",{attrs:{id:"不同编辑器对so文件引用目录的的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同编辑器对so文件引用目录的的区别"}},[s._v("#")]),s._v(" 不同编辑器对so文件引用目录的的区别")]),s._v(" "),e("p",[s._v("由于eclipse与idea编辑器的区别，有专门对应的解决办法，下面提供gradle的通用解决办法：")]),s._v(" "),e("p",[e("code",[s._v("build.gradle")])]),s._v(" "),e("div",{staticClass:"language-gradle line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//修改build.gradle文件，添加如下代码将libs作为so文件的查找目录\nandroid{\n    sourceSets{\n        main{\n            jniLibs.srcDirs=['libs']\n        }\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"res与assets目录的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#res与assets目录的区别"}},[s._v("#")]),s._v(" res与assets目录的区别")]),s._v(" "),e("ul",[e("li",[s._v("res目录存方的资源文件会根据代码的引用自动生成对应的R.java代码，没有引文的资源文件不会发布到apk包中。")]),s._v(" "),e("li",[s._v("assets目录的文件会始终发布到apk包中。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);