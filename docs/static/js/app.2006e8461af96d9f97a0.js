webpackJsonp([1],{Kffc:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("zL8q"),a=s.n(n),r=s("UMRm"),l=s.n(r),i=(s("tvR6"),s("7+uW")),o=s("mvHQ"),u=s.n(o),d=s("mtWM"),c=s.n(d).a.create({baseURL:"http://new.whoer.net/v2/"});var j={getLanguages:function(){return c.get("/languages")}},p=s("//Fk"),f=s.n(p);var m={getTranslations:function(){return new f.a(function(t){setTimeout(function(){t({data:JSON.parse('[{"created":1525279758,"id":1,"name":"test","snippet":"Тест!","updated":1525396608},{"created":1525279781,"id":2,"name":"cat","snippet":"Кошка","updated":1525279852},{"created":1525279795,"id":3,"name":"dog","snippet":"Собака","updated":1525279857},{"created":1525279809,"id":4,"name":"phone","snippet":"Телефон","updated":1525279860},{"created":1525279826,"id":5,"name":"browser","snippet":"Браузер","updated":1525279865},{"created":1525279842,"id":6,"name":"russia","snippet":"Россия","updated":1525279869},{"created":1525279941,"id":7,"name":"vpn_connect","snippet":"Подключение к VPN сети","updated":1525279956},{"created":1525309583,"id":8,"name":"bla","snippet":"Бла","updated":1525396491},{"created":1525428156,"id":11,"name":"blaha","snippet":"Бляха-муха","updated":1525428156},{"created":1525430469,"id":12,"name":"blaham","snippet":"Бляха-муха","updated":1525430469},{"created":1525430823,"id":13,"name":"blahamh","snippet":"Бляха-муха-ха","updated":1525430823},{"created":1525431291,"id":14,"name":"blahamhh","snippet":"Бляха-муха-ха-ха","updated":1525431291},{"created":1525431313,"id":15,"name":"blahamhhj","snippet":"asdfghjksdfl;","updated":1525438062}]')})},500)})}},h=s("PJh5"),g=s.n(h);var v={name:"TranslationsEditor",filters:{date:function(t){var e=g()(t);return e._isValid?e.format("DD.MM.YYYY, HH:mm"):t}},data:function(){return{languageList:[],translations:null,currentLanguage:null}},mounted:function(){var t=this;this.loadLanguages().then(this.setFirstLanguageAsCurrent).then(this.loadTranslations).catch(function(){return t.$notify.error({title:"Ошибка",message:"Не удалось загрузить данные"})})},methods:{selectLanguage:function(t){this.currentLanguage=t,this.translations=null,this.loadTranslations(this.currentLanguage)},loadLanguages:function(){var t=this;return j.getLanguages().then(function(e){var s=e.data;return t.languageList=s,s})},setFirstLanguageAsCurrent:function(t){return this.currentLanguage=t[0],this.currentLanguage},loadTranslations:function(t){var e=this;return m.getTranslations(t.code).then(function(t){var s=t.data;e.translations=s})},deleteTranslation:function(t){this.$notify.info({title:"Удаление",message:u()(t)})},updateTranslation:function(t){this.$notify.info({title:"Редактирование",message:t.snippet})}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"translation-editor"},[s("div",{staticClass:"translation-editor__header"},[t._l(t.languageList,function(e){return s("el-button",{key:e.code,attrs:{type:e===t.currentLanguage?"success":"default",title:e.name},on:{click:function(s){t.selectLanguage(e)}}},[t._v(t._s(e.code))])}),t._v(" "),s("el-button",{staticClass:"translation-editor__add-translation",attrs:{disabled:!t.currentLanguage,type:"success",icon:"el-icon-edit"}},[t._v("Новый перевод")])],2),t._v(" "),s("div",{staticClass:"translation-editor__content"},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:null===t.translations,expression:"translations === null"}],staticStyle:{width:"100%"},attrs:{data:t.translations}},[s("el-table-column",{attrs:{prop:"id",label:"Id",width:"40"}}),t._v(" "),s("el-table-column",{attrs:{prop:"name",label:"Name",width:"220"}}),t._v(" "),s("el-table-column",{attrs:{label:"Snippet"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"Введите"},on:{change:function(e){t.updateTranslation(n)}},model:{value:n.snippet,callback:function(e){t.$set(n,"snippet",e)},expression:"row.snippet"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"Created",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v("\n          "+t._s(t._f("date")(s.created))+"\n        ")]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"Updated",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v("\n          "+t._s(t._f("date")(s.updated))+"\n        ")]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("el-button",{attrs:{icon:"el-icon-delete",circle:""},on:{click:function(e){t.deleteTranslation(n)}}})]}}])})],1)],1)])},staticRenderFns:[]};var k={name:"App",components:{TranslationsEditor:s("VU/8")(v,b,!1,function(t){s("Kffc")},null,null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("TranslationsEditor")],1)},staticRenderFns:[]};var y=s("VU/8")(k,w,!1,function(t){s("Vl4W")},null,null).exports;i.default.config.productionTip=!1,i.default.use(a.a,{locale:l.a}),new i.default({el:"#app",components:{App:y},template:"<App/>"})},Vl4W:function(t,e){},tvR6:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(r(t))}function r(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.2006e8461af96d9f97a0.js.map