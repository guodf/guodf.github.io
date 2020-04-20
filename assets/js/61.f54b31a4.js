(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{476:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"记一次sqlserver骚操作-递归"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#记一次sqlserver骚操作-递归"}},[s._v("#")]),s._v(" 记一次SqlServer骚操作——递归")]),s._v(" "),t("p",[s._v("​\t最进需要用到sql递归更新数据的问题，因为需要兼容Sql Server 2000的语法，所以在Sql Server2008前后有两种不同的写法，这里简单记录一下。")]),s._v(" "),t("h2",{attrs:{id:"创建一个测试表，并灌入一些数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个测试表，并灌入一些数据"}},[s._v("#")]),s._v(" 创建一个测试表，并灌入一些数据")]),s._v(" "),t("div",{staticClass:"language-mssql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CREATE TABLE Test\n(\n\tId INT,\n\tPId int\n)\n\nINSERT INTO Test VALUES(1,null)\nINSERT INTO Test VALUES(2,1)\nINSERT INTO Test VALUES(3,2)\nINSERT INTO Test VALUES(4,3)\n-- 1<<2<<3<<4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"兼容mssql2008以下的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容mssql2008以下的版本"}},[s._v("#")]),s._v(" 兼容MSSQL2008以下的版本")]),s._v(" "),t("h3",{attrs:{id:"正向查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正向查找"}},[s._v("#")]),s._v(" 正向查找")]),s._v(" "),t("div",{staticClass:"language-mssql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("--首先我们将需要递归查到的元素写入#temp临时表\nSELECT Id INTO #temp FROM Test WHERE Id=1\nWHILE @@ROWCOUNT > 0\nBEGIN\n--查找子后写入临时表，并排除已经在临时表中的Id\n\tINSERT INTO #temp SELECT Id FROM Test WHERE PId IN (SELECT Id FROM #temp) AND Id NOT IN (SELECT Id FROM\t#temp)\nEND\nSELECT * FROM #temp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"反向查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反向查找"}},[s._v("#")]),s._v(" 反向查找")]),s._v(" "),t("div",{staticClass:"language-mssql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SELECT Id,PId INTO #temp FROM Test\tWHERE Id=4\nWHILE @@ROWCOUNT > 0\nBEGIN \n\tINSERT INTO\t#temp SELECT Id,PId FROM Test WHERE Id IN (SELECT PId FROM #temp) AND Id NOT IN (SELECT Id FROM #temp)\nEND\nSELECT * FROM #temp\t\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"mssql2008以后的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mssql2008以后的版本"}},[s._v("#")]),s._v(" MSSQL2008以后的版本")]),s._v(" "),t("h3",{attrs:{id:"正向查找-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正向查找-2"}},[s._v("#")]),s._v(" 正向查找")]),s._v(" "),t("div",{staticClass:"language-mssql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("WITH #temp AS\n(\n--首先我们将需要递归查到的元素写入#temp临时表 \n\tSELECT Id FROM Test WHERE Id=1\n\tUNION ALL\n--查找子后写入临时表，并排除已经在临时表中的Id\n\tSELECT a.Id FROM Test a\n\tINNER JOIN #temp b ON a.PId= b.Id\n)\nSELECT * FROM #temp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"反向查找-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反向查找-2"}},[s._v("#")]),s._v(" 反向查找")]),s._v(" "),t("div",{staticClass:"language-mssql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("WITH #temp AS\n(\n\tSELECT Id,PId FROM Test WHERE Id=4\n\tUNION ALL\n\tSELECT a.Id,a.Pid FROM Test a\n\tINNER JOIN #temp b ON a.Id= b.PId\n)\nSELECT * FROM #temp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);