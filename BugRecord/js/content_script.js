!function(e){function t(t){for(var o,r,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)r=s[d],i[r]&&u.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(p&&p(t);u.length;)u.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={1:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;a.push([1,0]),n()}([,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);var i=window.location.pathname;console.log("currentUrl---\x3e"+i),o(function(){o("body").mouseup(function(e){o("#tbl th").each(function(){var e=o(this).text();alert(e)});var t=document.getElementById("belazy-hint");if(t){var n=e.pageX,a=e.pageY,r=t.offsetLeft,s=t.offsetTop,l=t.offsetLeft+t.offsetWidth,c=t.offsetTop+t.offsetHeight;console.log("x="+n+"\t y="+a+"\t divx1="+r+"\t divx2="+l+"\t divy1="+s+"\t divy2="+c),(n<r||n>l||a<s||a>c)&&(console.log("--------remove------"),document.body.removeChild(t))}else{var p=window.getSelection().toString().trim();if(p&&p.length>0){!function(e){e=e||"js/inject.js";var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.src=chrome.extension.getURL(e),t.onload=function(){this.parentNode.removeChild(this)},document.body.appendChild(t)}(null);let t=e.pageX,n=e.pageY,o=e.offsetX,a=e.offsetY;console.log("---\x3e  left="+t+"\t top="+n+"\t ll="+o+"\t rr="+a);var d=document.createElement("div");d.id="belazy-hint",d.className="belazyLogo",d.style.position="absolute",d.style.left=t+"px",d.style.top=n-50+"px",d.style.background="#F0F0F0";let r=chrome.runtime.id;console.log("current chrome id = "+r),d.innerHTML=`\n                <div id="belazy_nevigator">\n                <a href="javascript:showtype('${i}')">\n                    <img src="chrome-extension://${r}/image/type.png" style="CURSOR: hand" title="bug类型" class="belazyimg" />\n                </a>\n                <a href="javascript:send('record','${i}','${p}')">\n                    <img src="chrome-extension://${r}/image/record.png" style="CURSOR: hand" title="bug描述" class="belazyimg" />\n                </a>\n                <a href="javascript:send('reason','${i}','${p}')">\n                    <img src="chrome-extension://${r}/image/why.png" style="CURSOR: hand" title="bug原因" class="belazyimg" />\n                </a>\n                <a href="javascript:send('solution','${i}','${p}')">\n                    <img src="chrome-extension://${r}/image/solve.png" style="CURSOR: hand" title="解决方案" class="belazyimg" />\n                </a>\n            </div>\n         \n            <div id="belazy_type_chooser" style="display:none;">\n                <select id="belazy_type_choose" onchange="javascript:btnChange(this[selectedIndex].value)">\n                    <option value="">选择类型</option>\n                    <option value="外部因素">外部因素</option>\n                    <option value="内部因素">内部因素</option>\n                    <option value="操作问题">操作问题</option>\n                    <option value="重复BUG">重复BUG</option>\n                    <option value="设计缺陷">设计缺陷</option>\n                    <option value="不予解决">不予解决</option>\n                    <option value="继续跟进">继续跟进</option>\n                    <option value="手动输入">手动输入</option>\n                </select>\n             </div>\n                `,document.body.appendChild(d)}}})}),window.addEventListener("message",function(e){console.log("content_script收到来自inject的消息：",e.data),e.data&&"transfer"==e.data.cmd&&(console.log("-content_script准备发消息给后台---"),chrome.runtime.sendMessage({greeting:"你好，我是content-script呀，我主动发消息给后台!",data:e.data},function(e){console.log("content_script收到来自后台的回复："+e)}))},!1)}]);