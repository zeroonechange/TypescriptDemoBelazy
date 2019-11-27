var currentuuurl = '';
function send(key, currentUrl, content) {
    console.log("--------inject准备发消息给content_script---------send key=" + key + "\t currentUrl=" + currentUrl + "\t content=" + content);
    window.postMessage({ cmd: 'transfer', "key": key, "currentUrl": currentUrl, "content": content }, '*');
}
function showtype(url) {
    this.currentuuurl = url;
    document.getElementById('belazy_type_chooser').style.display = "block";
    document.getElementById('belazy_nevigator').style.display = "none";
}
function btnChange(values) {
    console.log('choose selection:' + values + "\t currentuuurl=" + currentuuurl);
    if (values != null && values == "手动输入") {
        var name = prompt("请输入你的名字:", "");
        console.log('you input content:' + name);
        values = name;
    }
    if (values != null && values != '' && currentuuurl != null && currentuuurl != '') {
        window.postMessage({ cmd: 'transfer', "key": 'type', "currentUrl": currentuuurl, "content": values }, '*');
    }
}
//测试是否有效果
function showme(txt) {
    alert("helllllo---txt:" + txt);
    console.log("---------show mee--------txt:" + txt);
}
