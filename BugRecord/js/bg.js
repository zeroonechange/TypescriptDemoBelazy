!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e){function n(t,e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.onreadystatechange=function(){console.log("----status:"+n.readyState),4==n.readyState&&200==n.status&&e(n.responseText)},n.send()}function o(t){return t||""}var a;document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("belazy_final_re");document.getElementById("belazy_table");t.addEventListener("click",function(){n("http://meeting.1card1.cn/api/remove",function(t){"success"==JSON.parse(t)&&chrome.notifications.create(null,{type:"basic",iconUrl:"icon.png",title:"通知",message:"成功清空数据库，刷新当前页面!"},function(t){setTimeout(function(){chrome.notifications.clear(t)},1e3)}),location.reload()})})}),n("http://meeting.1card1.cn/api/getlist",function(t){a=t,console.log(a),function(t){console.log("---------showView--------");let e=JSON.parse(t),n="",a="",r=0;for(var c=0;c<e.length;c++){var s=e[c];"内部因素"==s.type&&r++;var l=o(s.record),i=o(s.reason),d=o(s.solution);n+=`\n      <tr>\n      <td>\n       <a href='${s.url}' target="_blank">${s.id}</a> \n      </td>\n      <td>\n        <span class="label label-primary"  style="width:80px;">${s.type}</span>\n      </td>\n      <td>${l}</td>\n      <td>${i}</td>\n      <td>${d}</td>\n    </tr>\n      `}a="\n  </tbody>\n  ",r>0&&(document.getElementById("belazy_count").innerHTML="内部因素 X"+r,document.getElementById("belazy_count").className="label label-rounded label-error"),document.getElementById("belazy_table").innerHTML="\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>编号</th>\n\t\t\t\t<th>类型</th>\n\t\t\t\t<th>描述</th>\n\t\t\t\t<th>原因</th>\n\t\t\t\t<th>解决方案</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n  "+n+a}(a)}),chrome.runtime.onMessage.addListener(function(t,e,n){console.log("后台收到来自content-script的消息："),function(t,e,n,o){console.log("-------\x3e  websss");let a=new XMLHttpRequest;var r;a.open("post","http://meeting.1card1.cn/api/update",!0),"type"==t&&(t="type_name"),console.log("改变前的编号"+e),e=e.replace(/[^0-9]/gi,""),console.log("改变后的编号"+e),a.setRequestHeader("Content-Type","application/json"),r=JSON.stringify({key:t,url:e,content:n}),a.onreadystatechange=function(){console.log("----status:"+a.readyState),4==a.readyState&&200==a.status&&(o(a.responseText),"success"==a.responseText&&chrome.notifications.create(null,{type:"basic",iconUrl:"icon.png",title:"通知",message:"操作成功!"}))},a.send(r)}(t.data.key,t.data.currentUrl,t.data.content,function(e){console.log("与服务器交互: "+e),n("服务器返回:"+e+"------------后台收到消息的自动回复-------------"+JSON.stringify(t.data))})})}});