var deviceWidth;
if(!getCookie("hidePage")){
    $(".zhongqiu-box").show();    
}
if (window.addEventListener) {
  window.addEventListener('resize', function () {
      setHtmlFontSize()
  }, false)
}
function setHtmlFontSize () {
    deviceWidth = document.documentElement.clientWidth > 1920 ? 1920 : document.documentElement.clientWidth
    document.getElementById('zqHtml').style.cssText = 'font-size:' + deviceWidth / 28.8 + 'px !important'
}
setHtmlFontSize();

setTimeout(function(){
    hidePage()
},10000)
$(".zhongqiuCLose").on("click",function(){
    hidePage();
    setCookie("hidePage", 1);
})

function hidePage(){
    $(".zhongqiu-box").hide();
    document.getElementById('zqHtml').style.cssText = ''//  页面关闭时去掉样式以免影响其他页面
}
function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function setCookie(name,value,day) {
    var exp = new Date();
    exp.setTime(exp.getTime() + day*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";path=/;expires=" + exp.toGMTString();
}