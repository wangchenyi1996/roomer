(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dbcaf63"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,c,a=String(i(e)),s=r(n),l=a.length;return s<0||s>=l?t?"":void 0:(o=a.charCodeAt(s),o<55296||o>56319||s+1===l||(c=a.charCodeAt(s+1))<56320||c>57343?t?a.charAt(s):o:t?a.slice(s,s+2):c-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),o=n("79e5"),c=n("be13"),a=n("2b4c"),s=n("520a"),l=a("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=a(t),d=!o((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=d?!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!e})):void 0;if(!d||!v||"replace"===t&&!u||"split"===t&&!f){var g=/./[p],h=n(c,p,""[t],(function(t,e,n,r,i){return e.exec===s?d&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),b=h[0],m=h[1];r(String.prototype,t,b),i(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"460c":function(t,e,n){},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,a="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[a]||0!==e[a]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(c=function(t){var e,n,c,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(e=f[a]),c=i.call(f,t),s&&c&&(f[a]=f.global?c.index+c[0].length:e),l&&c&&c.length>1&&o.call(c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"719c":function(t,e,n){t.exports=n.p+"img/login-top.8d32f6c3.png"},a481:function(t,e,n){"use strict";var r=n("cb7c"),i=n("4bf8"),o=n("9def"),c=n("4588"),a=n("0390"),s=n("5f1b"),l=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,g){return[function(r,i){var o=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=g(n,t,this,e);if(i.done)return i.value;var f=r(t),p=String(this),d="function"===typeof e;d||(e=String(e));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var x=[];while(1){var y=s(f,p);if(null===y)break;if(x.push(y),!b)break;var w=String(y[0]);""===w&&(f.lastIndex=a(p,o(f.lastIndex),m))}for(var C="",j=0,$=0;$<x.length;$++){y=x[$];for(var O=String(y[0]),E=l(u(c(y.index),p.length),0),_=[],k=1;k<y.length;k++)_.push(v(y[k]));var P=y.groups;if(d){var S=[O].concat(_,E,p);void 0!==P&&S.push(P);var T=String(e.apply(void 0,S))}else T=h(O,p,E,_,P,e);E>=j&&(C+=p.slice(j,E)+T,j=E+O.length)}return C+p.slice(j)}];function h(t,e,r,o,c,a){var s=r+t.length,l=o.length,u=d;return void 0!==c&&(c=i(c),u=p),n.call(a,u,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":a=c[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var p=f(u/10);return 0===p?n:p<=l?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):n}a=o[u-1]}return void 0===a?"":a}))}}))},a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("div",{staticClass:"login-top",on:{click:t.goHome}},[r("img",{attrs:{src:n("719c"),width:"100%"}}),t._m(0),r("div",[t._v("首页")])]),r("div",{staticClass:"main"},[r("div",{staticClass:"ip1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.telphone,expression:"telphone"}],staticClass:"inputs",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.telphone},on:{input:function(e){e.target.composing||(t.telphone=e.target.value)}}})]),r("div",{staticClass:"u-f u-f-sbc ip2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"inputs",attrs:{type:"text",placeholder:"请输入手机验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),r("span",{style:t.rightPhone?"color:#54cbcc;font-size:14px;font-weight:bold;":"color:#ccc;font-size:14px;font-weight:bold;",on:{click:t.getCode}},[t._v(t._s(t.codeTime?"已发送("+t.codeTime+"s)":t.codeMsg))])]),r("van-button",{staticClass:"login-btn",attrs:{loading:t.flag,disabled:t.dis,"loading-text":"登录中...",block:"",round:"",hairline:"",color:"#54cbcc",text:"登录"},on:{click:t.login}}),r("div",{staticClass:"u-f u-f-ajc weixin-login"},[t._v("第三方登录")]),r("div",{staticClass:"u-f"},[r("div",{staticClass:"login-type u-f u-f-ajc"},[r("svg-icon",{attrs:{iconClass:"weixin1",className:"icon"}})],1),r("div",{staticClass:"login-type u-f u-f-ajc"},[r("svg-icon",{attrs:{iconClass:"xinlang",className:"icon"}})],1),r("div",{staticClass:"login-type u-f u-f-ajc"},[r("svg-icon",{attrs:{iconClass:"qq",className:"icon"}})],1)]),t._m(1)],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"u-f u-f-ajc"},[n("img",{attrs:{src:"https://public.danke.com.cn/public-20180202-FtmNbHV0EwA33J9vBf4y7Y2N9jpo",width:"15",height:"15"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-desc"},[n("span",[t._v("登录即代表你同意")]),n("span",[t._v("《用户使用条款》")]),n("span",[t._v("《隐私保护政策》")])])}],o=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("bd86")),c=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"Login",data:function(){return{codeTime:0,codeMsg:"获取验证码",telphone:"",code:"",flag:!1,dis:!1}},computed:{rightPhone:function(){return/^1(3|4|5|7|8|9)\d{9}$/.test(this.telphone)}},created:function(){},methods:s({},Object(c["b"])("ziroom",["saveUser"]),{goHome:function(){this.$router.replace("/home")},getCode:function(){var t=this;11==this.telphone.length?(this.$toast({message:"验证码发送成功",duration:1500}),this.codeTime>0?this.$toast({message:"验证码发送频繁",duration:1500}):this.codeTime||(this.codeTime=10,this.intervalId=setInterval((function(){t.codeTime--,t.codeTime<=0&&(t.codeMsg="重新获取验证码",clearInterval(t.intervalId))}),1e3))):this.$toast({message:"手机号码格式不正确",duration:1500})},login:function(){var t=this;11==this.telphone.length?this.code?(this.flag=!0,this.dis=!0,this.$toast({message:"登录成功",duration:1500,onClose:function(){var e={telphone:t.telphone,isLogin:!0,label:"LV.1",faceImg:"http://lc-3resyvee.cn-n1.lcfile.com/a467b3c7d2f1f38538aa/dog.jpg"};t.saveUser(e);var n=t.$route.query||"/my";t.$router.replace(n)}})):this.$toast({message:"验证码不能为空",duration:1500}):this.$toast({message:"手机号码格式不正确",duration:1500})}})},u=l,f=(n("fab7"),n("2877")),p=Object(f["a"])(u,r,i,!1,null,"634fc3a2",null);e["default"]=p.exports},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},fab7:function(t,e,n){"use strict";var r=n("460c"),i=n.n(r);i.a}}]);