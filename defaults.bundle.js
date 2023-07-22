(()=>{"use strict";var t,e,n={28:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,'* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\nbody {\n\theight: 100vh;\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template: 60px 1fr 120px / 1fr;\n}\nheader {\n\tbox-shadow: 1px 1px 3px #ccc;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-left: 2rem;\n}\nmain {\n\tdisplay: grid;\n\tgrid-template-columns: 240px 1fr;\n}\nnav {\n\tborder-right: 1px solid #ccc;\n\tpadding-top: 1rem;\n}\nnav ul {\n\tlist-style-type: none;\n\tdisplay: block;\n}\nnav ul li {\n\twidth: 90%;\n\tmargin: 0 auto;\n}\nnav ul li button {\n\tborder: none;\n\twidth: 100%;\n\theight: 40px;\n\tpadding: 4px 8px;\n\tmargin: 1px;\n\tbackground-color: #aaa;\n\tfont-size: 21px;\n\tcolor: #fff;\n\tborder-radius: 4px;\n}\nnav ul li button:hover {\n\tbackground-color: #111111;\n}\n.projects li {\n\tmargin-right: 0;\n}\nfooter {\n\ttext-align: center;\n\tpadding-top: 2rem;\n}\n.github {\n\tfont-weight: 900;\n\tcolor: #111111;\n\ttext-decoration: none;\n}\n.active {\n\tbackground-color: #111111;\n\tfont-weight: 700;\n}\nbutton img {\n\tdisplay: inline;\n\theight: 32px;\n}\n.plus {\n\tdisplay: block;\n\twidth: 32px;\n\theight: 32px;\n\tpadding: 0;\n\tborder-radius: 0 0 100px 100px;\n\tmargin: 0 auto;\n}\nform.add-project {\n\tborder: 2px solid #ccc;\n\tpadding: .2rem;\n\tmargin: .4rem;\n\tfont-size: 18px;\n\tdisplay: none;\n}\nform.add-project input[type="text"] {\n\tpadding: .4rem .8rem;\n\twidth: 100%;\n\toutline: none;\n\tborder: 2px solid #ccc;\n\tborder-radius: 4px;\n\tfont-size: 21px;\n}\nform.add-project input[type="text"]:focus {\n\tborder: 2px solid #000;\n}\nform.add-project input[type="submit"] {\n\tfont-size: 21px;\n\tfont-weight: 700;\n\tpadding: .2rem .6rem;\n\tmargin: 1px;\n}\nbutton.add-task, button.add-note {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 4px 8px;\n\tfont-weight: 700;\n\tmargin: 1rem;\n\tborder: 2px solid black;\n\tborder-radius: 4px;\n}\n.overlay {\n\tposition: absolute;\n\tmargin: 0 auto;\n\twidth: 100%;\n\tleft: 0;\n\ttop: 0;\n\theight: 100vh;\n\tz-index: 0;\n}\n.add-task-form, .add-note-form{\n\tborder: 2px solid black;\n\twidth: 550px;\n\tpadding: 20px 100px;\n\tz-index: 2;\n\tposition: absolute;\n\tmargin: 0 auto;\n\tleft: 30%;\n\tdisplay: grid;\n\tdisplay: none;\n\tbackground-color: #aaa;\n}\n.add-task-form input, .add-note-form input {\n\tpadding: 8px 1rem;\n\tborder: 1px solid black;\n\tmargin: 3px;\n}\nform.show {\n\tdisplay: grid;\n\tz-index: 2;\n}\n.items {\n\twidth: 80%;\n\tmin-height: 300px;\n\tmargin: 0 auto;\n\tbackground-color: #ddd;\n}\n.btns {\n\tdisplay: flex;\n\tgap: 1rem;\n}\nbutton.hide {\n\tdisplay: none;\n}\ndiv.items {\n\tmargin-top: 3rem;\n}',""]);const u=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},882:(t,e,n)=>{function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}n.d(e,{Z:()=>r})},946:(t,e,n)=>{function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,{Z:()=>r})},257:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(13),a=n(882);function o(t,e){(0,a.Z)(2,arguments);var n=(0,r.Z)(t).getTime(),o=(0,r.Z)(e.start).getTime(),i=(0,r.Z)(e.end).getTime();if(!(o<=i))throw new RangeError("Invalid interval");return n>=o&&n<=i}},535:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(2),a=n(946),o=n(13),i=n(882);function u(t,e){if((0,i.Z)(2,arguments),!e||"object"!==(0,r.Z)(e))return new Date(NaN);var n=e.years?(0,a.Z)(e.years):0,u=e.months?(0,a.Z)(e.months):0,s=e.weeks?(0,a.Z)(e.weeks):0,d=e.days?(0,a.Z)(e.days):0,c=e.hours?(0,a.Z)(e.hours):0,l=e.minutes?(0,a.Z)(e.minutes):0,f=e.seconds?(0,a.Z)(e.seconds):0,h=function(t,e){return(0,i.Z)(2,arguments),function(t,e){(0,i.Z)(2,arguments);var n=(0,o.Z)(t),r=(0,a.Z)(e);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}(t,-(0,a.Z)(e))}(function(t,e){return(0,i.Z)(2,arguments),function(t,e){(0,i.Z)(2,arguments);var n=(0,o.Z)(t),r=(0,a.Z)(e);if(isNaN(r))return new Date(NaN);if(!r)return n;var u=n.getDate(),s=new Date(n.getTime());return s.setMonth(n.getMonth()+r+1,0),u>=s.getDate()?s:(n.setFullYear(s.getFullYear(),s.getMonth(),u),n)}(t,-(0,a.Z)(e))}(t,u+12*n),d+7*s),m=1e3*(f+60*(l+60*c));return new Date(h.getTime()-m)}},13:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(2),a=n(882);function o(t){(0,a.Z)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===(0,r.Z)(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var s=t[u],d=r.base?s[0]+r.base:s[0],c=o[d]||0,l="".concat(d," ").concat(c);o[d]=c+1;var f=n(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var m=a(h,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=n(o[i]);e[u].references--}for(var s=r(t,a),d=0;d<o.length;d++){var c=n(o[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},472:(t,e,n)=>{n.d(e,{B0:()=>st,I$:()=>dt,dn:()=>ut,q:()=>V,$Z:()=>lt});var r=n(2),a=n(882),o=n(13);var i=n(946);function u(t){(0,a.Z)(1,arguments);var e=(0,o.Z)(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function s(t){(0,a.Z)(1,arguments);var e=(0,o.Z)(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=u(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var d=u(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=d.getTime()?n:n-1}var d={};function c(){return d}function l(t,e){var n,r,u,s,d,l,f,h;(0,a.Z)(1,arguments);var m=c(),g=(0,i.Z)(null!==(n=null!==(r=null!==(u=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==u?u:m.weekStartsOn)&&void 0!==r?r:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=(0,o.Z)(t),v=p.getUTCDay(),w=(v<g?7:0)+v-g;return p.setUTCDate(p.getUTCDate()-w),p.setUTCHours(0,0,0,0),p}function f(t,e){var n,r,u,s,d,f,h,m;(0,a.Z)(1,arguments);var g=(0,o.Z)(t),p=g.getUTCFullYear(),v=c(),w=(0,i.Z)(null!==(n=null!==(r=null!==(u=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(f=d.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==u?u:v.firstWeekContainsDate)&&void 0!==r?r:null===(h=v.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(p+1,0,w),b.setUTCHours(0,0,0,0);var y=l(b,e),x=new Date(0);x.setUTCFullYear(p,0,w),x.setUTCHours(0,0,0,0);var T=l(x,e);return g.getTime()>=y.getTime()?p+1:g.getTime()>=T.getTime()?p:p-1}function h(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const m=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return h("yy"===e?r%100:r,e.length)},g=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):h(n+1,2)},p=function(t,e){return h(t.getUTCDate(),e.length)},v=function(t,e){return h(t.getUTCHours()%12||12,e.length)},w=function(t,e){return h(t.getUTCHours(),e.length)},b=function(t,e){return h(t.getUTCMinutes(),e.length)},y=function(t,e){return h(t.getUTCSeconds(),e.length)},x=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return h(Math.floor(r*Math.pow(10,n-3)),e.length)};var T={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return m(t,e)},Y:function(t,e,n,r){var a=f(t,r),o=a>0?a:1-a;return"YY"===e?h(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):h(o,e.length)},R:function(t,e){return h(s(t),e.length)},u:function(t,e){return h(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return h(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return h(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return g(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return h(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var u=function(t,e){(0,a.Z)(1,arguments);var n=(0,o.Z)(t),r=l(n,e).getTime()-function(t,e){var n,r,o,u,s,d,h,m;(0,a.Z)(1,arguments);var g=c(),p=(0,i.Z)(null!==(n=null!==(r=null!==(o=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(s=e.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==r?r:null===(h=g.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1),v=f(t,e),w=new Date(0);return w.setUTCFullYear(v,0,p),w.setUTCHours(0,0,0,0),l(w,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(u,{unit:"week"}):h(u,e.length)},I:function(t,e,n){var r=function(t){(0,a.Z)(1,arguments);var e=(0,o.Z)(t),n=u(e).getTime()-function(t){(0,a.Z)(1,arguments);var e=s(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),u(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):h(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):p(t,e)},D:function(t,e,n){var r=function(t){(0,a.Z)(1,arguments);var e=(0,o.Z)(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):h(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return h(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return h(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return h(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return v(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):w(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y(t,e)},S:function(t,e){return x(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return k(a);case"XXXX":case"XX":return S(a);default:return S(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return k(a);case"xxxx":case"xx":return S(a);default:return S(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+C(a,":");default:return"GMT"+S(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+C(a,":");default:return"GMT"+S(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return h(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return h((r._originalDate||t).getTime(),e.length)}};function C(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+h(o,2)}function k(t,e){return t%60==0?(t>0?"-":"+")+h(Math.abs(t)/60,2):S(t,e)}function S(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+h(Math.floor(a/60),2)+n+h(a%60,2)}const M=T;var D=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},E=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Z={p:E,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return D(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",D(a,e)).replace("{{time}}",E(o,e))}};const P=Z;var U=["D","DD"],q=["YY","YYYY"];function N(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var L={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function W(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var Y,j={date:W({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:W({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:W({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},O={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function F(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function H(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return i=t.valueCallback?t.valueCallback(d):d,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const z={code:"en-US",formatDistance:function(t,e,n){var r,a=L[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:j,formatRelative:function(t,e,n,r){return O[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:F({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:F({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:F({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:F({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:F({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Y.matchPattern);if(!n)return null;var r=n[0],a=t.match(Y.parsePattern);if(!a)return null;var o=Y.valueCallback?Y.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Q=/^'([^]*?)'?$/,R=/''/g,B=/[a-zA-Z]/;function G(t,e,n){var u,s,d,l,f,h,m,g,p,v,w,b,y,x,T,C,k,S;(0,a.Z)(2,arguments);var D=String(e),E=c(),Z=null!==(u=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:E.locale)&&void 0!==u?u:z,L=(0,i.Z)(null!==(d=null!==(l=null!==(f=null!==(h=null==n?void 0:n.firstWeekContainsDate)&&void 0!==h?h:null==n||null===(m=n.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==f?f:E.firstWeekContainsDate)&&void 0!==l?l:null===(p=E.locale)||void 0===p||null===(v=p.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==d?d:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=(0,i.Z)(null!==(w=null!==(b=null!==(y=null!==(x=null==n?void 0:n.weekStartsOn)&&void 0!==x?x:null==n||null===(T=n.locale)||void 0===T||null===(C=T.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==y?y:E.weekStartsOn)&&void 0!==b?b:null===(k=E.locale)||void 0===k||null===(S=k.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==w?w:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Z.localize)throw new RangeError("locale must contain localize property");if(!Z.formatLong)throw new RangeError("locale must contain formatLong property");var Y=(0,o.Z)(t);if(!function(t){if((0,a.Z)(1,arguments),!function(t){return(0,a.Z)(1,arguments),t instanceof Date||"object"===(0,r.Z)(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=(0,o.Z)(t);return!isNaN(Number(e))}(Y))throw new RangeError("Invalid time value");var j=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(Y),O=function(t,e){return(0,a.Z)(2,arguments),function(t,e){(0,a.Z)(2,arguments);var n=(0,o.Z)(t).getTime(),r=(0,i.Z)(e);return new Date(n+r)}(t,-(0,i.Z)(e))}(Y,j),F={firstWeekContainsDate:L,weekStartsOn:W,locale:Z,_originalDate:Y};return D.match(I).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,P[e])(t,Z.formatLong):t})).join("").match(A).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(Q))?o[1].replace(R,"'"):a;var u,s=M[i];if(s)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===q.indexOf(u))||N(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==U.indexOf(t)}(r)||N(r,e,String(t)),s(O,r,Z.localize,F);if(i.match(B))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}var J=n(535),X=n(257),$=n(794),K=n(130);function _(){return JSON.parse(localStorage.getItem("projects"))}localStorage.setItem("projects","[]");const V=[],tt=document.querySelector(".nome"),et=document.querySelector(".items"),nt=new $.IK("Default"),rt=new $.iQ("Test Task",new Date,"high",'Click "add task" button to add another task.');function at(t){const e=document.querySelector(".notes"),n=document.createElement("div"),r=t.notes;e.innerHTML="",r.forEach((function(t,e){const r=document.createElement("h1"),a=document.createElement("p");r.textContent=t.title,a.textContent=t.text,n.appendChild(r),n.appendChild(a)})),e.appendChild(n)}function ot(t){const e=document.querySelector(".tasks"),n=document.createElement("div"),r=t.tasks;e.innerHTML="",r.forEach((function(t,e){const r=document.createElement("p"),a=document.createElement("p"),o=document.createElement("p"),i=document.createElement("p"),u=document.createElement("hr");r.textContent=`Nome da tarefa: ${t.title}`,a.textContent=`Due:  ${G(t.due,"iii LLL dd, yyyy")}`,o.textContent=`Priority:  ${t.priority}`,i.textContent=`Details: ${t.details}`,n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(i),n.appendChild(u)})),e.appendChild(n)}function it(){K.k2.innerHTML="";const t=document.createDocumentFragment();V.forEach((function(e,n){if(n>0){const r=document.createElement("button"),a=document.createElement("li");a.setAttribute("data-index",n),r.innerHTML=e.name,a.appendChild(r),t.appendChild(a)}})),K.k2.appendChild(t),document.querySelectorAll("ul.projects>li>button").forEach(((t,e)=>{e++,t.addEventListener("click",(()=>{lt(),ut(V[e],e)}))}))}function ut(t,e){et.setAttribute("data-project",t.name),et.setAttribute("data-index",e),tt.textContent=t.name,ot(t),at(t)}function st(){const t=new Date,e=new $.IK("daily");V.forEach((function(n,r){n.tasks.forEach((function(n,r){G(t,"MM-dd-yyyy")===G(n.due,"MM-dd-yyyy")&&e.tasks.push(n)}))})),ut(e,0),ct()}function dt(){new Date;const t=new $.IK("Weekly"),e=(0,J.Z)(new Date,{days:1}),n=(0,J.Z)(e,{days:-7});V.forEach((function(r,a){r.tasks.forEach((function(r,a){(0,X.Z)(r.due,{start:e,end:n})&&t.tasks.push(r)}))})),ut(t,0),ct()}function ct(){K.pR.classList.add("hide"),K.bH.classList.add("hide")}function lt(){K.pR.classList.remove("hide"),K.bH.classList.remove("hide")}nt.tasks.push(rt),function(t){let e=_();e.push(t),localStorage.setItem("projects",JSON.stringify(e))}(nt),console.log(_()),V.push(nt),it(),K.EK.addEventListener("submit",(t=>{t.preventDefault();const e=document.querySelector("#project-name").value,n=new $.IK(e);V.push(n),(0,K.aL)(),it(),t.target.reset()})),K.FR.addEventListener("submit",(t=>{t.preventDefault();const e=document.querySelector("#title").value,n=document.querySelector("#due").value,r=document.querySelector("#priority").value,a=document.querySelector("#details").value,o=new $.iQ(e,n,r,a),i=document.querySelector(".items").dataset.index;V[i].tasks.push(o),ot(V[i]),(0,K.zd)(),t.target.reset()})),K.wA.addEventListener("submit",(t=>{t.preventDefault();const e=document.querySelector("#nt-title").value,n=document.querySelector("#nt-text").value,r=new $.jC(e,n),a=document.querySelector(".items").dataset.index;V[a].notes.push(r),(0,K.zd)(),at(V[a]),t.target.reset()})),K.ZJ.addEventListener("click",K.aL),K.pR.addEventListener("click",(()=>{(0,K.BQ)(K.FR)})),K.bH.addEventListener("click",(()=>{(0,K.BQ)(K.wA)})),K.IJ.addEventListener("click",K.zd)},794:(t,e,n)=>{n.d(e,{IK:()=>r,iQ:()=>a,jC:()=>o});class r{tasks=[];notes=[];constructor(t){this.name=t}addTask(t){this.tasks.push(t)}removeTask(t){this.tasks=this.tasks.filter((t=>{}))}addNote(t){this.notes.push(t)}removeNote(t){this.notes=this.notes.filter((t=>{}))}}class a{constructor(t,e,n,r){this.title=t,this.due=new Date(e),this.priority=n,this.details=r}edit(t,e,n,r){this.title=t,this.due=new Date(e),this.priority=n,this.details=r}}class o{constructor(t,e){this.title=t,this.text=e}edit(t,e){this.title=t,this.text=e}}},130:(t,e,n)=>{n.d(e,{wA:()=>b,EK:()=>v,FR:()=>w,bH:()=>C,ZJ:()=>x,pR:()=>T,zd:()=>q,n5:()=>S,BQ:()=>U,IJ:()=>y,k2:()=>k,px:()=>M,aL:()=>P,ib:()=>D});var r=n(379),a=n.n(r),o=n(795),i=n.n(o),u=n(569),s=n.n(u),d=n(565),c=n.n(d),l=n(216),f=n.n(l),h=n(589),m=n.n(h),g=n(28),p={};p.styleTagTransform=m(),p.setAttributes=c(),p.insert=s().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=f(),a()(g.Z,p),g.Z&&g.Z.locals&&g.Z.locals,n.p;const v=document.querySelector("form.add-project"),w=document.querySelector("form.add-task-form"),b=document.querySelector("form.add-note-form"),y=document.querySelector(".o"),x=document.querySelector("button.plus"),T=document.querySelector("button.add-task"),C=document.querySelector("button.add-note"),k=document.querySelector("ul.projects"),S=document.querySelector("button.home"),M=document.querySelector("button.today"),D=document.querySelector("button.week"),E=document.querySelector("#due"),Z=new Date;function P(){v.classList.toggle("show")}function U(t){y.classList.toggle("overlay"),t.classList.toggle("show")}function q(){w.classList.remove("show"),b.classList.remove("show"),y.classList.remove("overlay")}E.value=Z.toISOString().substr(0,10)},2:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{Z:()=>r})}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,a),o.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!t;)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),a.nc=void 0,t=a(130),(0,(e=a(472)).dn)(e.q[0],0),t.n5.addEventListener("click",(function(){(0,e.$Z)(),(0,e.dn)(e.q[0],0)})),t.px.addEventListener("click",(function(){(0,e.B0)()})),t.ib.addEventListener("click",(function(){(0,e.I$)()}))})();