webpackJsonp([1],{0:function(t,e){},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},D9Pa:function(t,e){},EdDm:function(t,e){},GK12:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar is-primary"},[r("div",{staticClass:"navbar-brand"},[r("a",{staticClass:"navbar-item"},[t._v("BrowserTorrent")]),t._v(" "),r("div",{staticClass:"navbar-burger burger",class:{"is-active":t.navIsActive},attrs:{"data-target":"navItems"},on:{click:t.toggleMenu}},[r("span"),t._v(" "),r("span"),t._v(" "),r("span")])]),t._v(" "),r("div",{staticClass:"navbar-menu",class:{"is-active":t.navIsActive},attrs:{id:"navItems"}},[t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-start"},[e("a",{staticClass:"navbar-item",attrs:{href:"/brotorrent"}},[this._v("HOME")])])}]};var o=r("VU/8")({name:"navbar",data:function(){return{navIsActive:!1}},methods:{toggleMenu:function(){this.navIsActive=!this.navIsActive}}},n,!1,function(t){r("Su97")},"data-v-9e989614",null).exports,s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"container"},[r("div",{staticClass:"content has-text-centered"},[r("p",[r("strong",[t._v("BrowserTorrent")]),t._v(" by Dhiraj, Umesh, and Anish.\n      ")]),t._v(" "),r("p",[t._v("\n        This program is "),r("strong",[t._v("open source")]),t._v("."),r("a",{attrs:{href:"https://github.com/dhirajs1997/BrowserTorrent",target:"_blank"}},[t._v(" Help us improve this program on Github.")])]),t._v(" "),r("p",{attrs:{id:"donate"}},[t._v("Donate us on Ethereum at")]),t._v(" "),r("p",{attrs:{id:"donateLink"}},[r("a",[t._v("0x87B560DbE9958839995f33B773cd389B666e11fD")])])])])])}]};var i=r("VU/8")({name:"footerdetails"},s,!1,function(t){r("D9Pa")},null,null).exports,l=r("RkmY"),d=r.n(l),c={name:"download-form",data:function(){return{modalVisible:!1,downloadStarted:!1,magnetURI:null}},methods:{toggleModal:function(){this.modalVisible=!this.modalVisible},toggleProgressbar:function(){this.downloadStarted=!this.downloadStarted},download:function(){if(null==this.magnetURI||""==this.magnetURI||" "==this.magnetURI)alert("Please give INPUT");else{var t=function(t){document.getElementById("logs");logs.innerHTML+=t+"<br />"};this.toggleProgressbar(),console.log("Clicked me!"),(e=new d.a).destroy();var e=new d.a;console.log(e),e.add(this.magnetURI,function(r){console.log("above ready"),document.getElementById("fileLength").innerHTML="File Size: <strong>"+(e.torrents[0].length/1048576).toFixed(2)+"MB</strong>";var a=setInterval(function(){document.getElementById("progressBar").value=100*r.progress,document.getElementById("downloadSpeed").innerHTML="Download Speed: <strong>"+r.downloadSpeed/1024+"KBps</strong>",document.getElementById("progressText").innerHTML=" Progress: <strong>"+(100*r.progress).toFixed(1)+"%</strong>"},5e3);r.files.forEach(function(e){console.log(e.name),e.getBlobURL(function(r,a){if(r)return t(r.message);t('<a href="'+a+'" download="'+e.name+'">Download full file: '+e.name+"</a>")})}),r.on("ready",function(){console.log("test")}),r.on("done",function(){console.log("Done downloading"),document.getElementById("progressBar").value=100,document.getElementById("progressText").innerHTML=" Progress: 100%. <strong>Click on files below to download.</strong>";clearInterval(a)})})}}}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container content is-fluid"},[r("div",{staticClass:"modal",class:{"is-active":t.modalVisible}},[r("div",{staticClass:"modal-background",on:{click:t.toggleModal}}),t._v(" "),r("div",{staticClass:"modal-card"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("footer",{staticClass:"modal-card-foot"},[r("button",{staticClass:"button is-success",on:{click:t.toggleModal}},[t._v("OK")])])])]),t._v(" "),t.downloadStarted?t._e():r("div",[r("form",{attrs:{action:"/torrent",method:"post"}},[r("div",{staticClass:"field has-text-centered"},[r("label",{staticClass:"label"},[t._v("Enter torrent ID or magnetURI")]),t._v(" "),r("div",{staticClass:"field is-horizontal has-addons has-addons-centered"},[r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.magnetURI,expression:"magnetURI"}],staticClass:"input is-medium",attrs:{name:"torrentid",required:""},domProps:{value:t.magnetURI},on:{input:function(e){e.target.composing||(t.magnetURI=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"control"},[r("button",{staticClass:"button is-info is-outlined is-medium",attrs:{type:"submit",name:"torrent-submit"},on:{click:function(e){return e.preventDefault(),t.download(e)}}},[t._v("Download")])])])])])]),t._v(" "),t.downloadStarted?r("div",{staticClass:"container is-fluid has-text-centered"},[r("p",{attrs:{id:"progressText"}},[t._v("Downloading...")]),t._v(" "),r("p",{attrs:{id:"fileLength"}}),t._v(" "),r("p",{attrs:{id:"downloadSpeed"}}),t._v(" "),r("progress",{staticClass:"progress is-danger is-medium",attrs:{id:"progressBar",value:"0",max:"100"}})]):t._e(),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"container has-text-centered",staticStyle:{"margin-top":"40px"}},[r("p",[t._v("Not sure how to download using BrowserTorrent.")]),t._v(" "),r("a",{on:{click:t.toggleModal}},[t._v("Click here to learn.")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title has-text-centered"},[this._v("Beginners guide to torrenting")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"modal-card-body"},[r("ul",[r("li",[t._v("Choose the torrent of your liking.")]),t._v(" "),r("li",[t._v("Copy the magnet link or the infohash of your torrent.")]),t._v(" "),r("blockquote",[t._v("\n            eg.\n            "),r("a",{attrs:{href:"magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent",target:"_blank"}},[t._v("Copy my address.")]),t._v(" (Magnet link to Sintel, a free movie.)\n          ")]),t._v(" "),r("li",[t._v("Paste the link in the given input box.")]),t._v(" "),r("li",[t._v("Click on download.")]),t._v(" "),r("li",[t._v("Relax while the files are being downloaded.")]),t._v(" "),r("li",[t._v("The downloaded files will be displayed on your browser window.")]),t._v(" "),r("li",[t._v("Click to download instantaneously.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("p",{attrs:{id:"logs"}})])}]};var m={name:"App",components:{"app-header":o,"app-footer":i,"download-form":r("VU/8")(c,p,!1,function(t){r("EdDm")},"data-v-7f2c1368",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("download-form"),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var v=r("VU/8")(m,u,!1,function(t){r("jcyo")},null,null).exports,f=r("/ocq"),g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var h=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},g,!1,function(t){r("Ugm9")},"data-v-694cd902",null).exports;a.a.use(f.a);var b=new f.a({routes:[{path:"/",name:"HelloWorld",component:h}]});r("GK12"),a.a.use(d.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:b,components:{App:v},template:"<App/>"})},Su97:function(t,e){},Ugm9:function(t,e){},asDE:function(t,e){t.exports={".3gp":"video/3gpp",".aac":"audio/aac",".aif":"audio/x-aiff",".aiff":"audio/x-aiff",".atom":"application/atom+xml",".avi":"video/x-msvideo",".bmp":"image/bmp",".bz2":"application/x-bzip2",".conf":"text/plain",".css":"text/css",".csv":"text/plain",".diff":"text/x-diff",".doc":"application/msword",".flv":"video/x-flv",".gif":"image/gif",".gz":"application/x-gzip",".htm":"text/html",".html":"text/html",".ico":"image/vnd.microsoft.icon",".ics":"text/calendar",".iso":"application/octet-stream",".jar":"application/java-archive",".jpeg":"image/jpeg",".jpg":"image/jpeg",".js":"application/javascript",".json":"application/json",".less":"text/css",".log":"text/plain",".m3u":"audio/x-mpegurl",".m4a":"audio/mp4",".m4v":"video/mp4",".manifest":"text/cache-manifest",".markdown":"text/x-markdown",".mathml":"application/mathml+xml",".md":"text/x-markdown",".mid":"audio/midi",".midi":"audio/midi",".mov":"video/quicktime",".mp3":"audio/mpeg",".mp4":"video/mp4",".mp4v":"video/mp4",".mpeg":"video/mpeg",".mpg":"video/mpeg",".odp":"application/vnd.oasis.opendocument.presentation",".ods":"application/vnd.oasis.opendocument.spreadsheet",".odt":"application/vnd.oasis.opendocument.text",".oga":"audio/ogg",".ogg":"application/ogg",".pdf":"application/pdf",".png":"image/png",".pps":"application/vnd.ms-powerpoint",".ppt":"application/vnd.ms-powerpoint",".ps":"application/postscript",".psd":"image/vnd.adobe.photoshop",".qt":"video/quicktime",".rar":"application/x-rar-compressed",".rdf":"application/rdf+xml",".rss":"application/rss+xml",".rtf":"application/rtf",".svg":"image/svg+xml",".svgz":"image/svg+xml",".swf":"application/x-shockwave-flash",".tar":"application/x-tar",".tbz":"application/x-bzip-compressed-tar",".text":"text/plain",".tif":"image/tiff",".tiff":"image/tiff",".torrent":"application/x-bittorrent",".ttf":"application/x-font-ttf",".txt":"text/plain",".wav":"audio/wav",".webm":"video/webm",".wma":"audio/x-ms-wma",".wmv":"video/x-ms-wmv",".xls":"application/vnd.ms-excel",".xml":"application/xml",".yaml":"text/yaml",".yml":"text/yaml",".zip":"application/zip"}},eiNb:function(t,e){t.exports={_from:"webtorrent",_id:"webtorrent@0.98.24",_inBundle:!1,_integrity:"sha512-05dgvK865VlGeIyU1PLZCXQ5yYl+Ak5aMl6j2EpL4G9kvVuqr7p95dDd1trciCkuoVrcZJPE1mE9W7BLHhfjZA==",_location:"/webtorrent",_phantomChildren:{"end-of-stream":"1.4.1",ms:"2.0.0",once:"1.4.0"},_requested:{type:"tag",registry:!0,raw:"webtorrent",name:"webtorrent",escapedName:"webtorrent",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/webtorrent/-/webtorrent-0.98.24.tgz",_shasum:"357a1c502795d284cff2a60b3691b2b65e1ab60f",_spec:"webtorrent",_where:"C:\\webdev\\Vue\\BrowserTorrent",author:{name:"WebTorrent, LLC",email:"feross@webtorrent.io",url:"https://webtorrent.io"},browser:{"./lib/server.js":!1,"./lib/tcp-pool.js":!1,"bittorrent-dht/client":!1,"fs-chunk-store":"memory-chunk-store","load-ip-set":!1,net:!1,os:!1,ut_pex:!1},browserify:{transform:["package-json-versionify"]},bugs:{url:"https://github.com/webtorrent/webtorrent/issues"},bundleDependencies:!1,dependencies:{"addr-to-ip-port":"^1.4.2",bitfield:"^2.0.0","bittorrent-dht":"^8.0.0","bittorrent-protocol":"^2.1.5","chunk-store-stream":"^2.0.2","create-torrent":"^3.24.5",debug:"^3.1.0","end-of-stream":"^1.1.0","fs-chunk-store":"^1.6.2","immediate-chunk-store":"^1.0.8",inherits:"^2.0.1","load-ip-set":"^1.2.7","memory-chunk-store":"^1.2.0",mime:"^2.2.0",multistream:"^2.0.5","package-json-versionify":"^1.0.2","parse-torrent":"^5.8.0",pump:"^3.0.0","random-iterate":"^1.0.1",randombytes:"^2.0.3","range-parser":"^1.2.0","readable-stream":"^2.1.4","render-media":"^2.8.0","run-parallel":"^1.1.6","run-parallel-limit":"^1.0.3","safe-buffer":"^5.0.1","simple-concat":"^1.0.0","simple-get":"^2.2.1","simple-peer":"^9.0.0","simple-sha1":"^2.0.8",speedometer:"^1.0.0","stream-to-blob":"^1.0.0","stream-to-blob-url":"^2.1.0","stream-with-known-length-to-buffer":"^1.0.0","torrent-discovery":"^8.3.1","torrent-piece":"^1.1.0",uniq:"^1.0.1","unordered-array-remove":"^1.0.2",ut_metadata:"^3.0.8",ut_pex:"^1.1.1",xtend:"^4.0.1","zero-fill":"^2.2.3"},deprecated:!1,description:"Streaming torrent client",devDependencies:{airtap:"0.0.4",babili:"^0.1.4","bittorrent-tracker":"^9.4.0",brfs:"^1.4.3",browserify:"^16.0.0","cross-spawn":"^6.0.3",electron:"^1.7.8",finalhandler:"^1.0.0","network-address":"^1.1.0","run-series":"^1.1.4","serve-static":"^1.11.1",standard:"*",tape:"^4.6.0","webtorrent-fixtures":"^1.5.0"},engines:{node:">=4"},homepage:"https://webtorrent.io",keywords:["bittorrent","bittorrent client","download","mad science","p2p","peer-to-peer","peers","streaming","swarm","torrent","web torrent","webrtc","webrtc data","webtorrent"],license:"MIT",main:"index.js",name:"webtorrent",repository:{type:"git",url:"git://github.com/webtorrent/webtorrent.git"},scripts:{build:"browserify -s WebTorrent -e ./ | babili > webtorrent.min.js","build-debug":"browserify -s WebTorrent -e ./ > webtorrent.debug.js",size:"npm run build && cat webtorrent.min.js | gzip | wc -c",test:"standard && npm run test-node && npm run test-browser","test-browser":"airtap -- test/*.js test/browser/*.js","test-browser-local":"airtap --local -- test/*.js test/browser/*.js","test-node":"tape test/*.js test/node/*.js","update-authors":"./bin/update-authors.sh"},version:"0.98.24"}},jcyo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.306122a196f94f7a1d87.js.map