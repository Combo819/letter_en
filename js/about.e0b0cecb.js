(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0797":function(t,e,a){t.exports=a.p+"img/DSC_0319.37b708ff.jpg"},1291:function(t,e,a){t.exports=a.p+"img/DSC_0154.14e3dee7.jpg"},1771:function(t,e,a){var i={"./A Winter Story.mp3":"e9cb","./DSC_0154.jpg":"1291","./DSC_0286_4.jpg":"c05a","./DSC_0302.jpg":"54d9","./DSC_0307.jpg":"51be","./DSC_0319.jpg":"0797","./DSC_0329.jpg":"54e3","./DSC_0342.jpg":"cd1c","./DSC_0342_1.jpg":"3856","./DSC_1298_3.jpg":"5c34","./DSC_1593.jpg":"ab64","./DSC_9341.jpg":"0d21","./baseline-pause-24px (1).svg":"3e2f","./baseline-pause-24px.svg":"26b6","./logo.png":"cf05","./logo.svg":"9b19"};function r(t){var e=s(t);return a(e)}function s(t){var e=i[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id="1771"},"26b6":function(t,e,a){t.exports=a.p+"img/baseline-pause-24px.ce09c96c.svg"},"36bd":function(t,e,a){"use strict";var i=a("4bf8"),r=a("77f1"),s=a("9def");t.exports=function(t){var e=i(this),a=s(e.length),n=arguments.length,o=r(n>1?arguments[1]:void 0,a),l=n>2?arguments[2]:void 0,c=void 0===l?a:r(l,a);while(c>o)e[o++]=t;return e}},3856:function(t,e,a){t.exports=a.p+"img/DSC_0342_1.2fb786bb.jpg"},"3e2f":function(t,e,a){t.exports=a.p+"img/baseline-pause-24px (1).cd7da876.svg"},"3e51":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=this,i=e.$createElement,r=e._self._c||i;return r("div",[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{staticClass:"mt-5",attrs:{sm4:""}})],1),r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{staticClass:"mt-5",attrs:{sm4:""}},[r("span",{staticClass:"display-1 text-center"},[e._v("Since we met:")])])],1),r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{staticClass:"mt-2",attrs:{xs11:"",sm5:""}},[r("v-sheet",{staticClass:"d-flex",staticStyle:{"border-radius":"15px"},attrs:{color:"blue-grey lighten-3",height:"100"}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",[r("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"text-center display-3 font-color"},[e._v(e._s(this.days)+"天 "+e._s(this.hours)+"小时 "+e._s(this.minutes)+"分钟")]),r("span",{staticClass:"text-center display-1 font-color"},[e._v(e._s(this.days)+"Days "+e._s(this.hours)+"Hours "+e._s(this.minutes)+"Minutes")])])],1)],1)],1)],1),r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{staticClass:"mt-5",attrs:{xs10:"",sm3:""}},[r("img",{staticStyle:{"border-radius":"50%",width:"100%"},attrs:{src:a("1291"),alt:""}})])],1),r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{staticClass:"mt-5",attrs:{xs10:"",sm8:"","text-xs-center":""}},[r("span",{staticClass:"headline"},[e._v("This is a Vue program")]),r("br")])],1),r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{staticClass:"mt-5",attrs:{xs10:"",sm8:"","text-xs-center":""}},[r("span",{staticClass:"headline"},[e._v("To write a webpage")]),r("br")])],1),r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{staticClass:"mt-5",attrs:{xs10:"",sm8:"","text-xs-center":""}},[r("span",{staticClass:"headline"},[e._v("Of the story")]),r("br")])],1),r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{staticClass:"mt-5 mb-5",attrs:{"text-xs-center":"",sm4:""}},[r("v-btn",{attrs:{color:"primary",large:""},on:{click:function(){t.$router.push("/")}}},[e._v("home page")])],1)],1)],1)},r=[],s={data:function(){return{beginTime:new Date("2018-12-26T20:20:00")}},components:{},computed:{days:function(){var t=new Date-this.beginTime;return Math.floor(t/864e5)},hours:function(){var t=new Date-this.beginTime;return Math.floor(24*t/864e5)%24},minutes:function(){var t=new Date-this.beginTime;return Math.floor(24*t*60/864e5)%60}}},n=s,o=(a("d11f"),a("2877")),l=a("6544"),c=a.n(l),g=a("8336"),u=a("0e8f"),d=a("a722"),f=a("8dd9"),h=Object(o["a"])(n,i,r,!1,null,"0229ccdd",null);e["default"]=h.exports;c()(h,{VBtn:g["a"],VFlex:u["a"],VLayout:d["a"],VSheet:f["a"]})},"3f7a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[t.left?a("v-flex",{attrs:{sm10:"","text-xs-left":""}},[a("transition",{attrs:{name:"fade"}},[t.textShow?a("h1",{staticClass:"headline font-weight-light"},[t._v(t._s(t.dialog.text))]):t._e()]),a("transition",{attrs:{name:"fade"}})],1):t._e(),t.right?a("v-flex",{attrs:{sm10:"","text-xs-right":""}},[a("transition",{attrs:{name:"fade"}},[t.textShow?a("h1",{staticClass:"headline font-weight-light"},[t._v(t._s(t.dialog.text))]):t._e()]),a("transition",{attrs:{name:"fade"}})],1):t._e()],1)},r=[],s={props:["dialog"],data:function(){return{textShow:!1,left:"left"===this.dialog.position,right:"right"===this.dialog.position}},mounted:function(){var t=this;console.log(this.dialog),window.setTimeout(function(){t.textShow=!0,window.setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},0)},300)}},n=s,o=(a("c139"),a("2877")),l=a("6544"),c=a.n(l),g=a("0e8f"),u=a("a722"),d=Object(o["a"])(n,i,r,!1,null,"ef84aed8",null);e["a"]=d.exports;c()(d,{VFlex:g["a"],VLayout:u["a"]})},4905:function(t,e,a){},"51be":function(t,e,a){t.exports=a.p+"img/DSC_0307.825be993.jpg"},"54d9":function(t,e,a){t.exports=a.p+"img/DSC_0302.31d15f60.jpg"},"54e3":function(t,e,a){t.exports=a.p+"img/DSC_0329.09ea52ef.jpg"},"6c7b":function(t,e,a){var i=a("5ca1");i(i.P,"Array",{fill:a("36bd")}),a("9c6c")("fill")},"7cac":function(t,e,a){"use strict";var i=a("a914"),r=a.n(i);r.a},"89d8":function(t,e,a){},"9ede":function(t,e,a){"use strict";var i=a("a5c0"),r=a.n(i);r.a},a5c0:function(t,e,a){},a914:function(t,e,a){},ab64:function(t,e,a){t.exports=a.p+"img/DSC_1593.e8743450.jpg"},c05a:function(t,e,a){t.exports=a.p+"img/DSC_0286_4.e4482dec.jpg"},c139:function(t,e,a){"use strict";var i=a("4905"),r=a.n(i);r.a},c71d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{staticClass:"mt-5 mb-5",attrs:{sm8:"","text-xs-center":""}},[i("transition",{attrs:{name:"fade"}},[i("h1",{directives:[{name:"show",rawName:"v-show",value:t.textShow,expression:"textShow"}],staticClass:"display-1"},[t._v(t._s(t.narratage.text))])]),i("transition",{attrs:{name:"fade"}},[t.imageShow?i("v-img",{attrs:{src:a("1771")("./"+t.narratage.image)},on:{load:function(e){return t.imageLoad()}}}):t._e()],1)],1)],1)},r=[],s={props:["narratage"],data:function(){return{textShow:!1,imageShow:!1}},mounted:function(){var t=this;console.log(this.narratage),this.narratage.text?window.setTimeout(function(){t.textShow=!0,window.setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},0)},300):this.narratage.image&&(console.log(this.narratage.image),window.setTimeout(function(){t.imageShow=!0},300))},methods:{imageLoad:function(){window.setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},0)}}},n=s,o=(a("7cac"),a("2877")),l=a("6544"),c=a.n(l),g=a("0e8f"),u=a("adda"),d=a("a722"),f=Object(o["a"])(n,i,r,!1,null,"309665c1",null);e["a"]=f.exports;c()(f,{VFlex:g["a"],VImg:u["a"],VLayout:d["a"]})},cd1c:function(t,e,a){t.exports=a.p+"img/DSC_0342.0a559a10.jpg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d11f:function(t,e,a){"use strict";var i=a("89d8"),r=a.n(i);r.a},f2dc:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{attrs:{sm8:""}},[i("v-card",[i("v-img",{attrs:{src:a("c05a")},on:{mouseover:function(e){return t.mouseOverImage()},mouseleave:function(e){return t.mouseOutImage()}}},[t.hover?i("div",{staticClass:"d-flex image-mask darken-2 v-card--reveal text-xs-center",staticStyle:{height:"100%"},on:{mouseout:function(e){return t.mouseOutImage()}}},[i("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.playIcon,expression:"playIcon"}],staticClass:"play-icon",staticStyle:{width:"20%,height:50%"},attrs:{dark:"",size:"80"},on:{mouseout:function(t){t.stopPropagation()},click:function(e){return t.playMusic()}}},[t._v("play_arrow")]),i("v-layout",{directives:[{name:"show",rawName:"v-show",value:!t.playIcon,expression:"!playIcon"}],staticStyle:{},attrs:{"justify-center":"","align-center":""},on:{mouseout:function(t){t.stopPropagation()},click:function(e){return t.pauseMusic()}}},[i("v-flex",[i("img",{attrs:{src:a("26b6"),alt:"triangle with all three sides equal",width:"10%"}})])],1)],1):t._e()]),i("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[i("v-layout",{staticClass:"mt-5 mb-5",attrs:{"align-center":"","justify-center":""}},[i("v-flex",[i("transition",{attrs:{name:"fade"}},[i("h1",{directives:[{name:"show",rawName:"v-show",value:t.titleShow,expression:"titleShow"}],staticClass:"display-2 font-weight-medium"},[t._v("Apirl 13 2019")])])],1)],1),t.renderList[0]?i("Narratage",{attrs:{narratage:{text:"Harbor Park Toronto"}}}):t._e(),t.renderList[1]?i("Narratage",{attrs:{narratage:{image:"DSC_0286_4.jpg"}}}):t._e(),t.renderList[2]?i("Dialog",{attrs:{dialog:{position:"left",text:"I want to be here every day"}}}):t._e(),t.renderList[3]?i("Dialog",{attrs:{dialog:{position:"right",text:"I am a bit cold"}}}):t._e(),t.renderList[4]?i("Dialog",{attrs:{dialog:{position:"left",text:"Let's get there"}}}):t._e(),t.renderList[5]?i("Narratage",{attrs:{narratage:{text:"... ..."}}}):t._e(),t.renderList[6]?i("Narratage",{attrs:{narratage:{image:"DSC_0302.jpg"}}}):t._e(),t.renderList[7]?i("Dialog",{attrs:{dialog:{position:"left",text:"I think we should have a picture"}}}):t._e(),t.renderList[8]?i("Dialog",{attrs:{dialog:{position:"right",text:"why?"}}}):t._e(),t.renderList[9]?i("Dialog",{attrs:{dialog:{position:"left",text:"Stand under the sunset"}}}):t._e(),t.renderList[10]?i("Narratage",{attrs:{narratage:{image:"DSC_0307.jpg"}}}):t._e(),t.renderList[11]?i("Dialog",{attrs:{dialog:{position:"left",text:"Awesome!"}}}):t._e(),t.renderList[12]?i("Narratage",{attrs:{narratage:{image:"DSC_0319.jpg"}}}):t._e(),t.renderList[13]?i("Dialog",{attrs:{dialog:{position:"left",text:"Let's go to the dock"}}}):t._e(),t.renderList[14]?i("Dialog",{attrs:{dialog:{position:"right",text:"Look! There are some ducks on the water."}}}):t._e(),t.renderList[15]?i("Narratage",{attrs:{narratage:{text:"... ..."}}}):t._e(),t.renderList[16]?i("Dialog",{attrs:{dialog:{position:"right",text:"Amazing,The door is open"}}}):t._e(),t.renderList[17]?i("Dialog",{attrs:{dialog:{position:"left",text:"There are two strong and interesting guys"}}}):t._e(),t.renderList[18]?i("Dialog",{attrs:{dialog:{position:"right",text:"Do you want to join♂them"}}}):t._e(),t.renderList[19]?i("Dialog",{attrs:{dialog:{position:"left",text:"That's bad"}}}):t._e(),t.renderList[20]?i("Narratage",{attrs:{narratage:{image:"DSC_0329.jpg"}}}):t._e(),t.renderList[21]?i("Dialog",{attrs:{dialog:{position:"left",text:"Brilliant sunset"}}}):t._e(),t.renderList[22]?i("Dialog",{attrs:{dialog:{position:"left",text:"stand there, and I will shoot your outline"}}}):t._e(),t.renderList[23]?i("Dialog",{attrs:{dialog:{position:"left",text:"Best side face"}}}):t._e(),t.renderList[24]?i("Narratage",{attrs:{narratage:{text:"8:19 pm"}}}):t._e(),t.renderList[25]?i("Narratage",{attrs:{narratage:{image:"DSC_0342_1.jpg"}}}):t._e(),t.renderList[26]?i("Dialog",{attrs:{dialog:{position:"right",text:"Let's go home. Its so cold here"}}}):t._e(),t.renderList[27]?i("Dialog",{attrs:{dialog:{position:"left",text:"Why not just enjoy the sunset"}}}):t._e(),t.renderList[28]?i("Narratage",{attrs:{narratage:{text:"Turn Back"}}}):t._e(),t.renderList[29]?i("Dialog",{attrs:{dialog:{position:"left",text:" Have a cup of hot coffee?"}}}):t._e(),t.renderList[30]?i("Dialog",{attrs:{dialog:{position:"right",text:"Why"}}}):t._e(),t.renderList[31]?i("Dialog",{attrs:{dialog:{position:"right",text:"why drinking coffee this time"}}}):t._e(),t.renderList[32]?i("Narratage",{attrs:{narratage:{text:"Inside Building"}}}):t._e(),t.renderList[33]?i("Dialog",{attrs:{dialog:{position:"left",text:"Come on. Tim Hortons is there"}}}):t._e(),t.renderList[34]?i("Dialog",{attrs:{dialog:{position:"right",text:"It's quite cold"}}}):t._e(),t.renderList[35]?i("Dialog",{attrs:{dialog:{position:"right",text:"OK let's have coffee"}}}):t._e(),t.renderList[36]?i("Narratage",{attrs:{narratage:{text:"Store"}}}):t._e(),t.renderList[37]?i("Dialog",{attrs:{dialog:{position:"right",text:"Wait a minute"}}}):t._e(),t.renderList[38]?i("Dialog",{attrs:{dialog:{position:"left",text:"You like that uh?"}}}):t._e(),t.renderList[39]?i("Narratage",{attrs:{narratage:{text:"... ..."}}}):t._e(),t.renderList[40]?i("Dialog",{attrs:{dialog:{position:"right",text:"Good drinking"}}}):t._e(),t.renderList[41]?i("Dialog",{attrs:{dialog:{position:"left",text:"Uh that's good"}}}):t._e(),t.egg[0]?i("Narratage",{attrs:{narratage:{text:"Afterward"}}}):t._e(),t.egg[1]?i("Dialog",{attrs:{dialog:{position:"left",text:"What a nice day"}}}):t._e(),t.egg[2]?i("Dialog",{attrs:{dialog:{position:"left",text:"Want to enjoy the sunset here every day"}}}):t._e()],1),i("transition",{attrs:{name:"fade"}},[t.expendShow?i("v-btn",{attrs:{large:"",block:""},on:{click:function(e){return t.expendDialog()}}},[i("v-icon",{attrs:{"x-large":""}},[t._v("expand_more")])],1):t._e()],1),i("transition",{attrs:{name:"fade"}},[!t.expendShow&&t.nextBtnShow?i("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(e){return t.nextPage()}}},[t._v("\n          Next Page\n          "),i("v-icon",{attrs:{"x-large":""}},[t._v("chevron_right")])],1):t._e()],1)],1)],1)],1)},r=[],s=(a("6c7b"),a("3f7a")),n=a("c71d"),o={components:{Dialog:s["a"],Narratage:n["a"]},data:function(){return{titleShow:!1,renderList:new Array(42).fill(!1),renderIndex:2,hover:!1,bgm:this.$store.state.bgm,egg:[!1,!1],nextBtnShow:!0}},mounted:function(){var t=this;window.setTimeout(function(){t.titleShow=!0;var e=t.bgm.play();console.log(e),void 0!==e&&e.then(function(e){t.$store.commit("playMusic","play")}).catch(function(t){console.log(t)})},300)},methods:{expendDialog:function(){this.$set(this.renderList,this.renderIndex,!0),this.renderIndex++},nextPage:function(){var t=this;this.nextBtnShow=!1,window.setTimeout(function(){t.$set(t.egg,0,!0)},3e3),window.setTimeout(function(){t.$set(t.egg,1,!0)},6e3),window.setTimeout(function(){t.$set(t.egg,2,!0)},9e3),window.setTimeout(function(){t.$router.push("/time")},13e3)},mouseOverImage:function(){this.hover=!0},mouseOutImage:function(){this.hover=!1},playMusic:function(){this.bgm.play(),this.$store.commit("playMusic","play")},pauseMusic:function(){this.bgm.pause(),this.$store.commit("playMusic","pause")}},computed:{expendShow:function(){return!(this.renderIndex>=this.renderList.length)},playIcon:function(){return this.$store.state.playIcon}}},l=o,c=(a("9ede"),a("2877")),g=a("6544"),u=a.n(g),d=a("8336"),f=a("b0af"),h=a("a523"),p=a("0e8f"),m=a("132d"),x=a("adda"),v=a("a722"),_=Object(c["a"])(l,i,r,!1,null,"4b2e7818",null);e["default"]=_.exports;u()(_,{VBtn:d["a"],VCard:f["a"],VContainer:h["a"],VFlex:p["a"],VIcon:m["a"],VImg:x["a"],VLayout:v["a"]})}}]);
//# sourceMappingURL=about.e0b0cecb.js.map