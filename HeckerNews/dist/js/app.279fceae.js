(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],r[o]&&f.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},a=[];function o(t){return i.p+"js/"+({Ask:"Ask",Best:"Best",Job:"Job",News:"News",Show:"Show"}[t]||t)+"."+{Ask:"0ef254ba",Best:"06f5d22c",Job:"aad55152",News:"2e82b6a0",Show:"fe2dfe25"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,s){n=r[t]=[e,s]});e.push(n[2]=s);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t),a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+a+")");o.type=s,o.request=a,n[1](o)}r[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"22c6":function(t,e,n){"use strict";var s=n("75b5"),r=n.n(s);r.a},"526b":function(t,e,n){"use strict";var s=n("7986"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);var s={};n.r(s),n.d(s,"SET_SETTER_ADD_ID_TAB",function(){return K}),n.d(s,"SET_SETTER_ADD_ARTICLES_IN_TAB",function(){return z}),n.d(s,"ADD_COMENTS",function(){return F}),n.d(s,"ADD_ID_TOP",function(){return H}),n.d(s,"ADD_ARTICLES_TOP",function(){return M}),n.d(s,"SET_STEP_TOP",function(){return W}),n.d(s,"ADD_ID_BEST",function(){return G}),n.d(s,"ADD_ARTICLES_BEST",function(){return q}),n.d(s,"SET_STEP_BEST",function(){return Y}),n.d(s,"ADD_ID_ASC",function(){return Q}),n.d(s,"ADD_ARTICLES_ASC",function(){return U}),n.d(s,"SET_STEP_ASC",function(){return V}),n.d(s,"ADD_ID_SHOW",function(){return X}),n.d(s,"ADD_ARTICLES_SHOW",function(){return Z}),n.d(s,"SET_STEP_SHOW",function(){return tt}),n.d(s,"ADD_ID_JOB",function(){return et}),n.d(s,"ADD_ARTICLES_JOB",function(){return nt}),n.d(s,"SET_STEP_JOB",function(){return st}),n.d(s,"ADD_ID_NEWS",function(){return rt}),n.d(s,"ADD_ARTICLES_NEWS",function(){return at}),n.d(s,"SET_STEP_NEWS",function(){return ot});var r={};n.r(r),n.d(r,"getIdPosts",function(){return ut}),n.d(r,"getArticlesTop",function(){return pt}),n.d(r,"getArticlesBest",function(){return ft}),n.d(r,"getArticlesAsc",function(){return dt}),n.d(r,"getArticlesShow",function(){return ht}),n.d(r,"getArticlesJob",function(){return mt}),n.d(r,"getArticlesNews",function(){return _t}),n.d(r,"getComents",function(){return bt});n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-navbar"),n("transition",{attrs:{name:"fade",appear:""}},[n("app-preloader",{directives:[{name:"show",rawName:"v-show",value:!t.postsReady,expression:"!postsReady"}]})],1),n("router-view")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar is-warning is-fixed-top is-size-3",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand "},[n("a",{staticClass:"navbar-item has-text-weight-bold",attrs:{href:"#"}},[t._v("HackerNews")]),n("a",{staticClass:"navbar-burger burger ",class:{"is-active":t.navbar_show},attrs:{role:"button ","aria-label":"menu","aria-expanded":"false","data-target":"nav"},on:{click:function(e){t.navbar_show=!t.navbar_show}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"navbar-menu ",class:{"is-active":t.navbar_show},attrs:{id:"nav"}},[n("div",{staticClass:"navbar-start is-size-5"},[n("a",{staticClass:"navbar-item ",on:{click:function(e){t.navbar_show=!t.navbar_show}}},[n("router-link",{staticClass:"is-block-touch",attrs:{to:"/"}},[t._v("Top")])],1),n("a",{staticClass:"navbar-item",on:{click:function(e){t.navbar_show=!t.navbar_show}}},[n("router-link",{staticClass:"is-block-touch",attrs:{to:"/Best"}},[t._v("Best")])],1),n("a",{staticClass:"navbar-item",on:{click:function(e){t.navbar_show=!t.navbar_show}}},[n("router-link",{staticClass:"is-block-touch",attrs:{to:"/News"}},[t._v("News")])],1),n("a",{staticClass:"navbar-item",on:{click:function(e){t.navbar_show=!t.navbar_show}}},[n("router-link",{staticClass:"is-block-touch",attrs:{to:"/Ask"}},[t._v("Ask")])],1),n("a",{staticClass:"navbar-item",on:{click:function(e){t.navbar_show=!t.navbar_show}}},[n("router-link",{staticClass:"is-block-touch",attrs:{to:"/Show"}},[t._v("Show")])],1),n("a",{staticClass:"navbar-item",on:{click:function(e){t.navbar_show=!t.navbar_show}}},[n("router-link",{staticClass:"is-block-touch",attrs:{to:"/Job"}},[t._v("Job")])],1)])])])},u=[],l={name:"navbar",data:function(){return{navbar_show:!1}}},p=l,f=(n("80f7"),n("2877")),d=Object(f["a"])(p,c,u,!1,null,"05b42727",null);d.options.__file="Navbar.vue";var h=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",{staticClass:"hero is-fullheight-with-navbar is-primary"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("a",{staticClass:"button is-primary is-loading is-large"})])])])])}],b={},v=Object(f["a"])(b,m,_,!1,null,null,null);v.options.__file="Preloader.vue";var w=v.exports,g=(n("6597"),{components:{"app-navbar":h,"app-preloader":w},computed:{postsReady:function(){return this.$store.getters.postsReady}}}),S=g,T=(n("5c0b"),Object(f["a"])(S,o,i,!1,null,null,null));T.options.__file="App.vue";var O=T.exports,k=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-postsgroup",{attrs:{postsList:t.getPostsTab}})},A=[],C=n("0a0d"),x=n.n(C),y=(n("96cf"),n("3b8d")),D=n("efcf"),E=n("f7fe"),R=n.n(E),I={name:"top",data:function(){return{}},components:{"app-postsgroup":D["a"]},computed:{getPostsTab:function(){return this.$store.state.TopStoriesArticles}},methods:{handleScroll:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var e,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=window.pageYOffset,n=window.innerHeight,s=document.body.scrollHeight,!((e+n)/s>.9)){t.next=9;break}return t.next=6,this.$store.dispatch("getIdPosts","topstories");case 6:return t.next=8,this.$store.dispatch("getArticlesTop","IdTopList");case 8:this.$store.commit("SET_STEP_TOP",1);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),convertTime:function(t){return format(x()()-t)}},created:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.commit("SET_SETTER_ADD_ID_TAB","ADD_ID_TOP");case 2:return t.next=4,this.$store.commit("SET_SETTER_ADD_ARTICLES_IN_TAB","ADD_ARTICLES_TOP");case 4:if(window.addEventListener("scroll",R()(this.handleScroll,200)),0!==this.$store.state.TopStoriesArticles.length){t.next=11;break}return t.next=8,this.$store.dispatch("getIdPosts","topstories");case 8:return t.next=10,this.$store.dispatch("getArticlesTop","TopStoriesID");case 10:this.$store.commit("SET_STEP_TOP",1);case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},P=I,B=Object(f["a"])(P,j,A,!1,null,null,null);B.options.__file="Top.vue";var N=B.exports;a["a"].use(k["a"]);var $=new k["a"]({routes:[{path:"/",name:"Top",component:N},{path:"/News",name:"News",component:function(){return n.e("News").then(n.bind(null,"a2f9"))}},{path:"/Best",name:"Best",component:function(){return n.e("Best").then(n.bind(null,"883f"))}},{path:"/Ask",name:"Ask",component:function(){return n.e("Ask").then(n.bind(null,"1a7b"))}},{path:"/Job",name:"Job",component:function(){return n.e("Job").then(n.bind(null,"e658"))}},{path:"/Show",name:"Show",component:function(){return n.e("Show").then(n.bind(null,"e915"))}}]}),J=n("2f62"),L={postsReady:!1,url:"https://hacker-news.firebaseio.com/v0/",Setter_name_for_Get_ID:"",Seter_name_for_add_Articles_in_Tab:"",ComentsBox:[],TopStoriesID:[],TopStoriesArticles:[],step_Top:0,BestStoriesID:[],BestStoriesArticles:[],step_Best:0,AscStoriesID:[],AscStoriesArticles:[],step_Asc:0,NewsStoriesID:[],NewsStoriesArticles:[],step_News:0,JobStoriesID:[],JobStoriesArticles:[],step_Job:0,ShowStoriesID:[],ShowStoriesArticles:[],step_Show:0},K=function(t,e){t.Setter_name_for_Get_ID=e},z=function(t,e){t.Seter_name_for_add_Articles_in_Tab=e},F=function(t,e){t.ComentsBox.push(e)},H=function(t,e){t.TopStoriesID=e},M=function(t,e){t.postsReady=!0,t.TopStoriesArticles.push(e)},W=function(t,e){t.step_Top+=e},G=function(t,e){t.BestStoriesID=e},q=function(t,e){t.postsReady=!0,t.BestStoriesArticles.push(e)},Y=function(t,e){t.step_Best+=e},Q=function(t,e){t.AscStoriesID=e},U=function(t,e){t.postsReady=!0,t.AscStoriesArticles.push(e)},V=function(t,e){t.step_Asc+=e},X=function(t,e){t.ShowStoriesID=e},Z=function(t,e){t.postsReady=!0,t.ShowStoriesArticles.push(e)},tt=function(t,e){t.step_Show+=e},et=function(t,e){t.JobStoriesID=e},nt=function(t,e){t.postsReady=!0,t.JobStoriesArticles.push(e)},st=function(t,e){t.step_Job+=e},rt=function(t,e){t.NewsStoriesID=e},at=function(t,e){t.postsReady=!0,t.NewsStoriesArticles.push(e)},ot=function(t,e){t.step_News+=e},it=(n("ac6a"),n("bc3a")),ct=n.n(it);function ut(t,e){return lt.apply(this,arguments)}function lt(){return lt=Object(y["a"])(regeneratorRuntime.mark(function t(e,n){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,t.t0=s,t.t1="".concat(this.state.Setter_name_for_Get_ID),t.next=5,ct.a.get("".concat(this.state.url).concat(n,".json")).then(function(t){return t.data}).catch(function(t){return console.warn(t)});case 5:t.t2=t.sent,(0,t.t0)(t.t1,t.t2);case 7:case"end":return t.stop()}},t,this)})),lt.apply(this,arguments)}function pt(t){var e=this,n=t.commit;this.state.TopStoriesID.slice(0+10*this.state.step_Top,10+10*this.state.step_Top).forEach(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.a.get("".concat(e.state.url,"item/").concat(s,".json")).then(function(t){return n("".concat(e.state.Seter_name_for_add_Articles_in_Tab),t.data)}).catch(function(t){return console.warn(t)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}function ft(t){var e=this,n=t.commit;t.dispatch;this.state.BestStoriesID.slice(0+10*this.state.step_Best,10+10*this.state.step_Best).forEach(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.a.get("".concat(e.state.url,"item/").concat(s,".json")).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n("".concat(e.state.Seter_name_for_add_Articles_in_Tab),s.data));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return console.warn(t)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}function dt(t){var e=this,n=t.commit;t.dispatch;this.state.AscStoriesID.slice(0+10*this.state.step_Asc,10+10*this.state.step_Asc).forEach(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.a.get("".concat(e.state.url,"item/").concat(s,".json")).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n("".concat(e.state.Seter_name_for_add_Articles_in_Tab),s.data));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return console.warn(t)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}function ht(t){var e=this,n=t.commit;t.dispatch;this.state.ShowStoriesID.slice(0+10*this.state.step_Show,10+10*this.state.step_Show).forEach(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.a.get("".concat(e.state.url,"item/").concat(s,".json")).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n("".concat(e.state.Seter_name_for_add_Articles_in_Tab),s.data));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return console.warn(t)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}function mt(t){var e=this,n=t.commit;t.dispatch;this.state.JobStoriesID.slice(0+10*this.state.step_Job,10+10*this.state.step_Job).forEach(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.a.get("".concat(e.state.url,"item/").concat(s,".json")).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n("".concat(e.state.Seter_name_for_add_Articles_in_Tab),s.data));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return console.warn(t)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}function _t(t){var e=this,n=t.commit;t.dispatch;this.state.NewsStoriesID.slice(0+10*this.state.step_News,10+10*this.state.step_News).forEach(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.a.get("".concat(e.state.url,"item/").concat(s,".json")).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n("".concat(e.state.Seter_name_for_add_Articles_in_Tab),s.data));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return console.warn(t)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}function bt(t,e){var n=this,s=t.commit;e.map(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.a.get("".concat(n.state.url,"item/").concat(e,".json")).then(function(t){return s("ADD_COMENTS",t.data)}).catch(function(t){return console.warn(t)});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}a["a"].use(J["a"]);var vt=new J["a"].Store({state:L,getters:{postsReady:function(t){return t.postsReady},ComentsBox:function(t){return t.ComentsBox}},mutations:s,actions:r}),wt=n("9483");Object(wt["a"])("".concat("/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({router:$,store:vt,render:function(t){return t(O)}}).$mount("#app")},"5ad5":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var s=n("5e27"),r=n.n(s);r.a},"5e27":function(t,e,n){},"75b5":function(t,e,n){},7986:function(t,e,n){},"80f7":function(t,e,n){"use strict";var s=n("92e7"),r=n.n(s);r.a},"92e7":function(t,e,n){},a39b:function(t,e,n){"use strict";var s=n("5ad5"),r=n.n(s);r.a},efcf:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("transition-group",{attrs:{name:"fade"}},t._l(t.postsList,function(t,e){return n("app-post",{key:e+1,attrs:{postObj:t,index:e}})}),1)],1)},r=[],a=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"media has-background-link has-text-light notification is-marginless is-radiusless"},[n("div",{staticClass:"media-left"},[n("span",{staticClass:"is-link"},[t._v(t._s(t.index+1)+".")]),void 0!=t.postObj.kids?[n("span",{directives:[{name:"show",rawName:"v-show",value:t.postObj.kids,expression:"postObj.kids"}],staticClass:"button is-small is-light",class:{rotate:t.comentsOne},staticStyle:{cursor:"pointer"},on:{click:t.openComents}},[t._v("▼")])]:t._e()],2),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content is-marginless"},[n("p",[n("a",{staticClass:"is-size-4-desktop is-size-6-mobile is-size-5-tablet has-text-light is-hoverable",attrs:{href:t.postObj.url,target:"_blank"}},[t._v(t._s(t.postObj.title))])]),n("div",{staticClass:"tags has-addons is-marginless"},[n("span",{staticClass:"tag is-dark"},[t._v(t._s(t.postObj.score)+" points")]),n("span",{staticClass:"tag"},[t._v("by "+t._s(t.postObj.by))]),n("span",{staticClass:"tag is-success"},[t._v(t._s(t.convertTime(t.postObj.time)))]),void 0!=t.postObj.kids?[n("span",{directives:[{name:"show",rawName:"v-show",value:t.postObj.kids,expression:"postObj.kids"}],staticClass:"tag is-dark"},[t._v("comments "+t._s(t.postObj.kids.length||0))])]:t._e()],2)]),n("transition-group",{attrs:{name:"fade"}},t._l(t.postObj.kids,function(e,s){return e.type?n("app-post-kid",{directives:[{name:"show",rawName:"v-show",value:t.comentsOne,expression:"comentsOne"}],key:s+1,attrs:{comentObj:e,index2:s}}):t._e()}),1)],1)])}),o=[],i=n("7618"),c=n("0a0d"),u=n.n(c),l=n("b356"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"media has-background-link has-text-light  is-marginless is-radiusless is-size-6 comments is-padingless"},[n("div",{staticClass:"media-left"},[n("span",{staticClass:"is-link "},[t._v(t._s(t.index2+1)+".")]),void 0!=t.comentObj.kids?[n("span",{directives:[{name:"show",rawName:"v-show",value:t.comentObj.kids,expression:"comentObj.kids"}],staticClass:"button is-small is-light",staticStyle:{cursor:"pointer"},style:{rotate:t.comentsTwo},on:{click:t.openComents}},[t._v("▼")])]:t._e()],2),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("content",{staticClass:"comments__text is-size-7 is-hoverable",domProps:{innerHTML:t._s(t.comentObj.text)}}),n("div",{staticClass:"tags has-addons is-marginless"},[n("span",{staticClass:"tag"},[t._v("by "+t._s(t.comentObj.by))]),n("span",{staticClass:"tag is-success"},[t._v(t._s(t.convertTime(t.comentObj.time)))]),void 0!=t.comentObj.kids?[n("span",{staticClass:"tag is-dark"},[t._v("comments "+t._s(t.comentObj.kids.length))])]:t._e()],2)]),n("transition-group",{attrs:{name:"fade"}},t._l(t.comentObj.kids,function(e,s){return e.type?n("app-post-kid-ofKid",{directives:[{name:"show",rawName:"v-show",value:t.comentsTwo,expression:"comentsTwo"}],key:s+1,attrs:{comentKidObj:e,index3:s}}):t._e()}),1)],1)])},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"media has-background-link has-text-light is-marginless is-radiusless is-size-6 comments"},[n("div",{staticClass:"media-left"},[t._v(t._s(t.index3+1)+".")]),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("content",{staticClass:"comments__text is-size-7 is-hoverable",domProps:{innerHTML:t._s(t.comentKidObj.text)}}),n("div",{staticClass:"tags has-addons is-marginless"},[n("span",{staticClass:"tag"},[t._v("by "+t._s(t.comentKidObj.by))]),n("span",{staticClass:"tag is-success"},[t._v(t._s(t.convertTime(t.comentKidObj.time)))])])])])])},h=[],m={name:"PostKids",props:["comentKidObj","index3"],methods:{convertTime:function(t){return Object(l["format"])(u()()-t)}}},_=m,b=n("2877"),v=Object(b["a"])(_,d,h,!1,null,null,null);v.options.__file="PostKidsOfKids.vue";var w=v.exports,g={name:"PostKids",components:{"app-post-kid-ofKid":w},data:function(){return{comentsTwo:!1,commentsFetch:!1}},props:["comentObj","index2"],methods:{convertTime:function(t){return Object(l["format"])(u()()-t)},openComents:function(t){if(this.comentsTwo=!this.comentsTwo,"object"!==Object(i["a"])(this.comentObj.kids[0])&&!this.commentsFetch&&"number"===typeof this.comentObj.kids[0]){this.$store.state.ComentsBox=[],this.$store.dispatch("getComents",this.comentObj.kids);var e=this.$store.state.ComentsBox;this.comentObj.kids=e,this.commentsFetch=!0}}}},S=g,T=(n("526b"),Object(b["a"])(S,p,f,!1,null,"594d11f0",null));T.options.__file="PostKids.vue";var O=T.exports,k={name:"Post",data:function(){return{comentsOne:!1,commentsFetch:!1}},props:["postObj","index"],components:{"app-post-kid":O},methods:{convertTime:function(t){return Object(l["format"])(u()()-t)},openComents:function(t){if(this.comentsOne=!this.comentsOne,"object"!==Object(i["a"])(this.postObj.kids[0])&&!this.commentsFetch&&"number"===typeof this.postObj.kids[0]){this.$store.state.ComentsBox=[],this.$store.dispatch("getComents",this.postObj.kids);var e=this.$store.state.ComentsBox;this.postObj.kids=e,this.commentsFetch=!0}}}},j=k,A=(n("a39b"),Object(b["a"])(j,a,o,!1,null,"6bbdc35c",null));A.options.__file="Post.vue";var C=A.exports,x={name:"PostsGroup",components:{"app-post":C},props:["postsList"]},y=x,D=(n("22c6"),Object(b["a"])(y,s,r,!1,null,null,null));D.options.__file="PostsGroup.vue";e["a"]=D.exports}});