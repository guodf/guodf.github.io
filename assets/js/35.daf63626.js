(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{259:function(a,t,e){"use strict";e.r(t);var s=e(1),l=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"理解mysql字符集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解mysql字符集"}},[a._v("#")]),a._v(" 理解MySql字符集")]),a._v(" "),e("h3",{attrs:{id:"字符集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符集"}},[a._v("#")]),a._v(" 字符集")]),a._v(" "),e("p",[e("strong",[a._v("字符集即为字符编码的集合。")])]),a._v(" "),e("p",[a._v("常用的编码格式为："),e("code",[a._v("ASCII")]),a._v(" "),e("code",[a._v("Unicode-8")]),a._v(" "),e("code",[a._v("Unicode-16")]),a._v(" "),e("code",[a._v("Unicode-32")]),a._v(" "),e("code",[a._v("GB2312")]),a._v(" 等 ,")]),a._v(" "),e("p",[a._v("其中"),e("code",[a._v("GB2312")]),a._v("主要用于【简体汉字】的编码,而"),e("code",[a._v("BIG5")]),a._v("是【繁体汉字】的编码格式，不同的语言文字都有自己的编码格式，其中"),e("code",[a._v("Unicode")]),a._v("编码是一种通用的编码格式，目的是为了同时兼容不同的语言文字编码。")]),a._v(" "),e("h3",{attrs:{id:"字符序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符序"}},[a._v("#")]),a._v(" 字符序")]),a._v(" "),e("p",[e("strong",[a._v("字符序即字符编码集合中每个字符的顺序。")])]),a._v(" "),e("p",[a._v("例如：A的十进制可以表示为65，a为97，其中65<97也就是说在字符集中A的顺序在a的前面，但这只是对计算机而言的，因为计算机认识的是二进制语言，对于人来说我们可以理解为A=a，只是书写的形式不同而已。")]),a._v(" "),e("p",[a._v("在字符集中每一个字符都有它自己的顺序，不存在两个字符拥有相同的字符编码。但在数据库中不同，mysql也是如此，所以才会定义出字符序的概念，A与a编码不同，但在数据库中我们可以按照字符序把这两个字符看做相同的，那么也就是说当你选择了不同的字符序时可能A与a表现出来的大小关系也会随着变化。")]),a._v(" "),e("h3",{attrs:{id:"mysql中的字符集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql中的字符集"}},[a._v("#")]),a._v(" MySql中的字符集")]),a._v(" "),e("p",[a._v("MySql是一款关系型数据库，它存储的数据不应该受限于特定的语言文字，所以它支持不同字符集。")]),a._v(" "),e("p",[a._v("通常在数据的存储过程中，为了管理的方便，会将数据不同的数据集合做一下归类，比如：一个数据库是有一个或多个database构成，那么多个table又构成了一个database，table又是由行构成，行的最小单位又为列，列才是我们真正存储数据的地方：要储存必然离不开编码的问题。所以MySQL中我们可以按照这种虚拟关系对：database，table，column分别设置字符集，而它们使用字符集的优先关系为：column > table > database。")]),a._v(" "),e("h3",{attrs:{id:"设置修改mysql中的字符集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置修改mysql中的字符集"}},[a._v("#")]),a._v(" 设置修改MySql中的字符集")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("MySql默认字符集")]),a._v(" "),e("p",[a._v("在安装MySql的时候我们可以通过源码编译的方式设置字符集，当然这种安装方式比较难就不做说明了，真实的环境中这么做的好处并不明显。")])]),a._v(" "),e("li",[e("p",[a._v("修改MySql默认字符集")]),a._v(" "),e("p",[a._v("通过配置文件修改默认字符集，如果在创建database的时候我们没有指定字符集，则该设置会默认应用于database上。")]),a._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 该配置项会修改默认的字符集编码格式\n[mysqld]\ncharacter-set-server=utf8\n")])])])]),a._v(" "),e("li",[e("p",[a._v("通过环境变量设置字符集")]),a._v(" "),e("p",[a._v("这种方式也不常用，更何况这个docker盛行的年代，如果需要请自行google一下吧。")])]),a._v(" "),e("li",[e("p",[a._v("设置database的字符集")]),a._v(" "),e("div",{staticClass:"language-mysql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CREATE DATABASE test CHARACTER SET utf8 COLLATE utf8_general_ci\n# 修改现有数据库的字符集\nalter database test character set utf8 collate utf8_bin\n")])])])]),a._v(" "),e("li",[e("p",[a._v("这是table的字符集")]),a._v(" "),e("div",{staticClass:"language-mysql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CREATE TABLE [table](\n\n id varchar(40),\n\n str varchar(40)\n\n)  CHARSET=utf8mb4 COLLATE=utf8mb4_bin\n\n# 修改现有表的字符集\nalter table [table] CONVERT TO CHARACTER SET utf8 COLLATE utf8_bin\n")])])])]),a._v(" "),e("li",[e("p",[a._v("设置column的字符集")]),a._v(" "),e("div",{staticClass:"language-mysql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CREATE TABLE [table](\n\n id varchar(40),\n\n str varchar(40) charset utf8mb4 collate utf8mb4_bin \n) \n# 修改现有列字符集\nalter table [table] change str str varchar(100) character set utf8 collate utf8_bin\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"其它帮助项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其它帮助项"}},[a._v("#")]),a._v(" 其它帮助项")]),a._v(" "),e("p",[e("strong",[a._v("查看支持的字符集")])]),a._v(" "),e("div",{staticClass:"language-mysql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 两种方法查看支持的字符集\n方法一： \nshow character set;\n//方法二：\nuse information_schema;\nselect * from character_sets;\n\n# 两种方式查看支持的字符序\n# 方式一:\nshow collation;\n# 方式二:\nuse information_schema;\nselect * from collations;\n")])])]),e("p",[e("strong",[a._v("查看MySql字符集")])]),a._v(" "),e("div",{staticClass:"language-mysql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 查看字符集\nshow variables like 'character_set_server';\n\n# 查看字符序\nshow variables like 'collation_server';\n")])])]),e("p",[e("strong",[a._v("查看数据库字符集")])]),a._v(" "),e("div",{staticClass:"language-mysql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("show create database [dbname];\n")])])]),e("p",[e("strong",[a._v("查看表字符集")])]),a._v(" "),e("div",{staticClass:"language-mysql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("show create table [table]\n")])])]),e("p",[e("strong",[a._v("查看列字符集")])]),a._v(" "),e("div",{staticClass:"language-mysql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("show full columns from [table]\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);