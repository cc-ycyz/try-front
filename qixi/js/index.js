var deviceWidth;
if(!getCookie("hidePage")){
    $(".qixi-box").show();    
}
if (window.addEventListener) {
  window.addEventListener('resize', function () {
      setHtmlFontSize()
  }, false)
}
function setHtmlFontSize () {
    deviceWidth = document.documentElement.clientWidth > 1920 ? 1920 : document.documentElement.clientWidth
    document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 19.2 + 'px !important'
}
setHtmlFontSize();
/**
 *打字机
 *   */
var text = '年年乞与人间巧不道人间巧已多';
var textN = '未会牵牛意若何须邀织女弄金梭'
var con = $('.qixi-verseD');
var conN = $('.qixi-verseU');
var tId = null;
function start(dom,text,time){
    var index = 0;
    dom.text('');
    setTimeout(function(){
        tId=setInterval(function(){
            dom.append(text.charAt(index));
            if(index == 6){
                dom.append('<span>&nbsp;</span>');                
            }
            if(index++ === text.length){
                return false
            }
        },200);
    },time)
}
start(con,text,5000);
start(conN,textN,2000);
setTimeout(function(){
    hidePage()
},10000)
$(".qixiCLose").on("click",function(){
    hidePage();
    setCookie("hidePage", 1);
})

function hidePage(){
    $(".qixi-box").hide();
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