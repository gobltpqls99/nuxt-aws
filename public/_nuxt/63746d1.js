(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{441:function(t,e,n){"use strict";(function(t){n(31),n(50);var r=n(8),j=n(52),l=n.n(j),c=n(276),o=n.n(c),d=n(442);e.a={name:"detail.id",layout:"layout-default",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,l.a.get("http://3.36.171.236:3000/api/view/".concat(n.id));case 3:return r=e.sent,data=r.data,(j=data).wdate=o()(j.created).format("YYYY-MM-DD HH:mm:ss"),j.savefile&&(j.file=Object(d.a)(j.savefile),j.isImg=Object(d.b)(j.savefile)),e.abrupt("return",{list:j});case 9:case"end":return e.stop()}}),e)})))()},methods:{downloadLink:function(e){return"".concat(t.env.SERVER,"/api/download/").concat(e)}}}}).call(this,n(102))},442:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(31),n(47);var r=n(279),j=n.n(r),l=function(t){return[".jpg",".jpeg",".png",".gif"].includes(j.a.extname(t).toLocaleLowerCase())},c=function(e){return"".concat(t.env.SERVER,"/storages/").concat(e.substr(0,9),"/").concat(e)}}).call(this,n(102))},459:function(t,e,n){var map={"./af":285,"./af.js":285,"./ar":286,"./ar-dz":287,"./ar-dz.js":287,"./ar-kw":288,"./ar-kw.js":288,"./ar-ly":289,"./ar-ly.js":289,"./ar-ma":290,"./ar-ma.js":290,"./ar-sa":291,"./ar-sa.js":291,"./ar-tn":292,"./ar-tn.js":292,"./ar.js":286,"./az":293,"./az.js":293,"./be":294,"./be.js":294,"./bg":295,"./bg.js":295,"./bm":296,"./bm.js":296,"./bn":297,"./bn-bd":298,"./bn-bd.js":298,"./bn.js":297,"./bo":299,"./bo.js":299,"./br":300,"./br.js":300,"./bs":301,"./bs.js":301,"./ca":302,"./ca.js":302,"./cs":303,"./cs.js":303,"./cv":304,"./cv.js":304,"./cy":305,"./cy.js":305,"./da":306,"./da.js":306,"./de":307,"./de-at":308,"./de-at.js":308,"./de-ch":309,"./de-ch.js":309,"./de.js":307,"./dv":310,"./dv.js":310,"./el":311,"./el.js":311,"./en-au":312,"./en-au.js":312,"./en-ca":313,"./en-ca.js":313,"./en-gb":314,"./en-gb.js":314,"./en-ie":315,"./en-ie.js":315,"./en-il":316,"./en-il.js":316,"./en-in":317,"./en-in.js":317,"./en-nz":318,"./en-nz.js":318,"./en-sg":319,"./en-sg.js":319,"./eo":320,"./eo.js":320,"./es":321,"./es-do":322,"./es-do.js":322,"./es-mx":323,"./es-mx.js":323,"./es-us":324,"./es-us.js":324,"./es.js":321,"./et":325,"./et.js":325,"./eu":326,"./eu.js":326,"./fa":327,"./fa.js":327,"./fi":328,"./fi.js":328,"./fil":329,"./fil.js":329,"./fo":330,"./fo.js":330,"./fr":331,"./fr-ca":332,"./fr-ca.js":332,"./fr-ch":333,"./fr-ch.js":333,"./fr.js":331,"./fy":334,"./fy.js":334,"./ga":335,"./ga.js":335,"./gd":336,"./gd.js":336,"./gl":337,"./gl.js":337,"./gom-deva":338,"./gom-deva.js":338,"./gom-latn":339,"./gom-latn.js":339,"./gu":340,"./gu.js":340,"./he":341,"./he.js":341,"./hi":342,"./hi.js":342,"./hr":343,"./hr.js":343,"./hu":344,"./hu.js":344,"./hy-am":345,"./hy-am.js":345,"./id":346,"./id.js":346,"./is":347,"./is.js":347,"./it":348,"./it-ch":349,"./it-ch.js":349,"./it.js":348,"./ja":350,"./ja.js":350,"./jv":351,"./jv.js":351,"./ka":352,"./ka.js":352,"./kk":353,"./kk.js":353,"./km":354,"./km.js":354,"./kn":355,"./kn.js":355,"./ko":356,"./ko.js":356,"./ku":357,"./ku.js":357,"./ky":358,"./ky.js":358,"./lb":359,"./lb.js":359,"./lo":360,"./lo.js":360,"./lt":361,"./lt.js":361,"./lv":362,"./lv.js":362,"./me":363,"./me.js":363,"./mi":364,"./mi.js":364,"./mk":365,"./mk.js":365,"./ml":366,"./ml.js":366,"./mn":367,"./mn.js":367,"./mr":368,"./mr.js":368,"./ms":369,"./ms-my":370,"./ms-my.js":370,"./ms.js":369,"./mt":371,"./mt.js":371,"./my":372,"./my.js":372,"./nb":373,"./nb.js":373,"./ne":374,"./ne.js":374,"./nl":375,"./nl-be":376,"./nl-be.js":376,"./nl.js":375,"./nn":377,"./nn.js":377,"./oc-lnc":378,"./oc-lnc.js":378,"./pa-in":379,"./pa-in.js":379,"./pl":380,"./pl.js":380,"./pt":381,"./pt-br":382,"./pt-br.js":382,"./pt.js":381,"./ro":383,"./ro.js":383,"./ru":384,"./ru.js":384,"./sd":385,"./sd.js":385,"./se":386,"./se.js":386,"./si":387,"./si.js":387,"./sk":388,"./sk.js":388,"./sl":389,"./sl.js":389,"./sq":390,"./sq.js":390,"./sr":391,"./sr-cyrl":392,"./sr-cyrl.js":392,"./sr.js":391,"./ss":393,"./ss.js":393,"./sv":394,"./sv.js":394,"./sw":395,"./sw.js":395,"./ta":396,"./ta.js":396,"./te":397,"./te.js":397,"./tet":398,"./tet.js":398,"./tg":399,"./tg.js":399,"./th":400,"./th.js":400,"./tk":401,"./tk.js":401,"./tl-ph":402,"./tl-ph.js":402,"./tlh":403,"./tlh.js":403,"./tr":404,"./tr.js":404,"./tzl":405,"./tzl.js":405,"./tzm":406,"./tzm-latn":407,"./tzm-latn.js":407,"./tzm.js":406,"./ug-cn":408,"./ug-cn.js":408,"./uk":409,"./uk.js":409,"./ur":410,"./ur.js":410,"./uz":411,"./uz-latn":412,"./uz-latn.js":412,"./uz.js":411,"./vi":413,"./vi.js":413,"./x-pseudo":414,"./x-pseudo.js":414,"./yo":415,"./yo.js":415,"./zh-cn":416,"./zh-cn.js":416,"./zh-hk":417,"./zh-hk.js":417,"./zh-mo":418,"./zh-mo.js":418,"./zh-tw":419,"./zh-tw.js":419};function r(t){var e=j(t);return n(e)}function j(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=j,t.exports=r,r.id=459},460:function(t,e,n){},479:function(t,e,n){"use strict";n(460)},520:function(t,e,n){"use strict";n.r(e);var r=n(441).a,j=(n(479),n(29)),l=n(59),c=n.n(l),o=n(474),d=n(464),m=n(424),v=n(516),f=n(467),h=n(523),k=n(517),component=Object(j.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-wrapper"},[n("v-card",{staticClass:"card-wrapper",attrs:{color:"white",elevation:"2"}},[n("v-card-title",[t._v(t._s(t.list.title))]),n("v-divider"),n("v-card-subtitle",{staticClass:"my-4 card-subtitle"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("span",{staticClass:"subtitle-2"},[t._v("작성자:")]),n("span",{staticClass:"subtitle-1 ml-2"},[t._v(t._s(t.list.writer))])]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("span",{staticClass:"subtitle-2"},[t._v("작성일:")]),n("span",{staticClass:"subtitle-1 ml-2"},[t._v(t._s(t.list.wdate))])]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("span",{staticClass:"subtitle-2"},[t._v("조회수:")]),n("span",{staticClass:"subtitle-1 ml-2"},[t._v(t._s(t.list.readnum))])])],1)],1),n("v-divider"),n("v-card-text",{staticClass:"card-content",domProps:{innerHTML:t._s(t.list.content)}}),t.list.savefile?n("div",[t.list.isImg?n("div",[n("v-img",{staticClass:"imgx",attrs:{src:t.list.file}})],1):t._e(),n("div",{staticClass:"my-4"},[n("v-divider",{staticClass:"mb-3"}),n("span",{staticClass:"subtitle-2"},[t._v("다운로드:")]),n("a",{staticClass:"subtitle-1 ml-2",attrs:{href:t.downloadLink(t.list.id)}},[t._v(t._s(t.list.orifile))])],1)]):t._e()],1),n("nuxt-link",{attrs:{to:"/"}},[n("v-btn",{staticClass:"my-4 mx-auto d-block",attrs:{color:"teal grey--text text--lighten-4"}},[t._v("LIST")])],1)],1)}),[],!1,null,"858ffa26",null);e.default=component.exports;c()(component,{VBtn:o.a,VCard:d.a,VCardSubtitle:m.a,VCardText:m.b,VCardTitle:m.c,VCol:v.a,VDivider:f.a,VImg:h.a,VRow:k.a})}}]);