(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{284:function(t,a,s){"use strict";s.r(a);var e=s(1),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"fnv哈希算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fnv哈希算法"}},[t._v("#")]),t._v(" FNV哈希算法")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"fnv版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fnv版本"}},[t._v("#")]),t._v(" FNV版本")]),t._v(" "),s("p",[t._v("FNV哈希分为3个版本："),s("code",[t._v("fnv-0")]),s("em",[t._v("（已废弃）")]),t._v(","),s("code",[t._v("FNV-1")]),t._v(","),s("code",[t._v("FNV-1a")])]),t._v(" "),s("h3",{attrs:{id:"算法实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法实现"}},[t._v("#")]),t._v(" 算法实现")]),t._v(" "),s("h4",{attrs:{id:"fnv-0算法公式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fnv-0算法公式"}},[t._v("#")]),t._v(" FNV-0算法公式")]),t._v(" "),s("div",{staticClass:"language-fnv line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hash = 0\n   for each byte_of_data to be hashed\n   \t\thash = hash * FNV_prime\n   \t\thash = hash ^ octet_of_data\nreturn hash\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h4",{attrs:{id:"fnv-1算法公式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fnv-1算法公式"}},[t._v("#")]),t._v(" FNV-1算法公式")]),t._v(" "),s("div",{staticClass:"language-fnv line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hash = FNV_offset_basis\n   for each byte_of_data to be hashed\n   \t\thash = hash * FNV_prime\n   \t\thash = hash ^ byte_of_data\nreturn hash\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"fnv-1a算法公式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fnv-1a算法公式"}},[t._v("#")]),t._v(" FNV-1a算法公式")]),t._v(" "),s("div",{staticClass:"language-fnv line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hash = FNV_offset_basis\n   for each byte_of_data to be hashed\n   \t\thash = hash ^ byte_of_data\n   \t\thash = hash * FNV_prime\nreturn hash\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h4",{attrs:{id:"fnv公式参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fnv公式参数说明"}},[t._v("#")]),t._v(" FNV公式参数说明")]),t._v(" "),s("h5",{attrs:{id:"_1-fnv-offset-basis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-fnv-offset-basis"}},[t._v("#")]),t._v(" 1. FNV_offset_basis")]),t._v(" "),s("p",[t._v("这个参数的值是固定的，根据不同的位数选择不同的值作为hash的首次填充值")]),t._v(" "),s("table",[s("thead",[s("tr",{staticClass:"header"},[s("th",[t._v("位数")]),t._v(" "),s("th",[t._v("十进制值")])])]),t._v(" "),s("tbody",[s("tr",{staticClass:"odd"},[s("td",[t._v("32")]),t._v(" "),s("td",[t._v("2166136261")])]),t._v(" "),s("tr",{staticClass:"even"},[s("td",[t._v("64")]),t._v(" "),s("td",[t._v("14695981039346656037")])]),t._v(" "),s("tr",{staticClass:"odd"},[s("td",[t._v("128")]),t._v(" "),s("td",[t._v("144066263297769815596495629667062367629")])]),t._v(" "),s("tr",{staticClass:"even"},[s("td",[t._v("256")]),t._v(" "),s("td",[t._v("100029257958052580907070968620625704837"),s("br"),t._v("092796014241193945225284501741471925557")])]),t._v(" "),s("tr",{staticClass:"odd"},[s("td",[t._v("512")]),t._v(" "),s("td",[t._v("965930312949666949800943540071631046609\n041874567263789610837432943446265799458\n293219771643844981305189220653980578449\n5328239340083876191928701583869517785")])]),t._v(" "),s("tr",{staticClass:"even"},[s("td",[t._v("1024")]),t._v(" "),s("td",[t._v("14197795064947621068722070641403218320\n88062279544193396087847491461758272325\n22967323037177221508640965212023555493\n65628174669108571814760471015076148029\n75596980407732015769245856300321530495\n71501574036444603635505054127112859663\n61610267868082893823963790439336411086\n884584107735010676915")])])])]),t._v(" "),s("h5",{attrs:{id:"_2-fnv-prime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-fnv-prime"}},[t._v("#")]),t._v(" 2. FNV_prime")]),t._v(" "),s("p",[s("em",[t._v("还没有看懂，不过这不影响我们实现通用32位，64位的FNV算法")])]),t._v(" "),s("table",[s("thead",[s("tr",{staticClass:"header"},[s("th",[t._v("位数")]),t._v(" "),s("th",[t._v("十进制值")])])]),t._v(" "),s("tbody",[s("tr",{staticClass:"odd"},[s("td",[t._v("32")]),t._v(" "),s("td",[t._v("16777619")])]),t._v(" "),s("tr",{staticClass:"even"},[s("td",[t._v("64")]),t._v(" "),s("td",[t._v("1099511628211")])]),t._v(" "),s("tr",{staticClass:"odd"},[s("td",[t._v("128")]),t._v(" "),s("td",[t._v("309485009821345068724781371")])]),t._v(" "),s("tr",{staticClass:"even"},[s("td",[t._v("256")]),t._v(" "),s("td",[t._v("374144419156711147060143317175368453031918731002211")])]),t._v(" "),s("tr",{staticClass:"odd"},[s("td",[t._v("512")]),t._v(" "),s("td",[t._v("358359158748448673689190764\n890951084499463279557543925\n583998256154206699388825751\n26094039892345713852759")])]),t._v(" "),s("tr",{staticClass:"even"},[s("td",[t._v("1024")]),t._v(" "),s("td",[t._v("501645651011311865543459881\n103527895503076534540479074\n430301752383111205510814745\n150915769222029538271616265\n187852689524938529229181652\n437508374669137180409427187\n316048473796672026038921768\n4476157468082573\n")])])])]),t._v(" "),s("h5",{attrs:{id:"_3-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-hash"}},[t._v("#")]),t._v(" 3. hash")]),t._v(" "),s("p",[t._v("hash后的最总结果")]),t._v(" "),s("h5",{attrs:{id:"_4-byte-of-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-byte-of-data"}},[t._v("#")]),t._v(" 4. byte_of_data")]),t._v(" "),s("p",[t._v("8位无符号整数")]),t._v(" "),s("h5",{attrs:{id:"_5-hashed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-hashed"}},[t._v("#")]),t._v(" 5. hashed")]),t._v(" "),s("p",[t._v("要加密的数据，需要转换成"),s("code",[t._v("byte_of_data[]")]),t._v("然后循环"),s("code",[t._v("^")]),t._v("计算")])])}),[],!1,null,null,null);a.default=_.exports}}]);