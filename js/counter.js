var _jsq_image = new Image();
function _jsq_encode(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(a){if(a==null||a==undefined||a=="")return"";var b=new Array();var c,chr2,chr3;var d,enc2,enc3,enc4;var i=0;a=_utf8_encode(a);while(i<a.length){c=a[i++];chr2=a[i++];chr3=a[i++];d=c>>2;enc2=((c&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64}else if(isNaN(chr3)){enc4=64}b.push(_keyStr.charAt(d)+_keyStr.charAt(enc2)+_keyStr.charAt(enc3)+_keyStr.charAt(enc4))}return escape(b.join(''))};_utf8_encode=function(a){a=a.replace(/\r\n/g,"\n");var b=new Array();var d=0;for(var n=0;n<a.length;n++){var c=a.charCodeAt(n);if(c<128){b[d++]=c}else if((c>127)&&(c<2048)){b[d++]=(c>>6)|192;b[d++]=(c&63)|128}else{b[d++]=(c>>12)|224;b[d++]=((c>>6)&63)|128;b[d++]=(c&63)|128}}return b}}
function _jsq_(treeid, pagename, newsid, owner)
{
    if(window.top != window)
        return;
    
    var c = navigator.appName=='Netscape'?screen.pixelDepth:screen.colorDepth;
    var e = new _jsq_encode();
    var r = '&e=1&w='+screen.width + '&h='+ screen.height+'&treeid='+treeid+'&refer='+e.encode(document.referrer)+ '&pagename='+e.encode(pagename)+'&newsid='+newsid;
    _jsq_image.src = "/system/resource/code/datainput.jsp?owner="+owner+ r;
}

if(window.addEventListener){
    window.addEventListener("load",loadFn,false);
}
else{
    window.attachEvent('onload',loadFn);
}
function loadFn(){
    var userAgent = navigator.userAgent.toLowerCase();
    var isIE = /(msie\s|trident.*rv:)([\w.]+)/.test(userAgent);
    if(isIE){
        var popBoxDiv = document.createElement("div");
        popBoxDiv.innerHTML='<a style="text-align: center;width: 15px;height: 20px;position: fixed;right: 20px;margin-top: 8px;border-radius: 5px;text-decoration: none;" href="javascript:void(0)" onclick="closePopBox()">x</a><div style="font-size:15px;color:#ff0000;text-align:center;line-height:36px;"> <b>为保证网站访问效果，如果您正在使用360浏览器，请切换到极速模式。推荐使用Chrome或Edge浏览器。</b></div>'
        popBoxDiv.id='popBox';
        popBoxDiv.style.cssText='background-color: #ffff00;z-index: 9999;height: 36px;position: fixed;opacity: 5;right: 0;left: 0; top: 0;margin: auto;display:block'
        document.body.appendChild(popBoxDiv);
    }
}
function closePopBox() {
    var popBox = document.getElementById("popBox");
    if(popBox){
        popBox.style.display = "none";
    }
}