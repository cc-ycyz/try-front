(function($) {
	$.member = {
		langFunc:function(language){
			return di18n = new DI18n({
				locale: language,
				isReplace: true,
				messages: {
					en: i18n_en,
					zh: i18n_zh,
					tc: i18n_tc,
                    vi: i18n_vi,
                    th: i18n_th
				}
			});
		}
    }
})(jQuery);
var language = getCookie('language');//本地存储语言
if(!language || language == 'undefined'){
    language = 'en';
}
var langClass = "#check-language .lang-"+language
$(langClass).addClass("active").siblings().removeClass("active");
var di18n = $.member.langFunc(language);
$("html").attr("lang",language);
$("#check-language li").on("click",function(){
    var languages = getCookie('language');//本地存储语言
    var lang = $(this).data('lang');
    if(languages !=lang){
        setCookie('language',lang);
        $.member.langFunc(lang);
        $("html").attr("lang",lang);
	    window.location.reload(true);
    }
})
$(".controlBtn .buttonTop").on("click",function(){
    $.fn.fullpage.moveSectionUp()
});
$(".controlBtn .buttonBto").on("click",function(){
    $.fn.fullpage.moveSectionDown();
});
// if(getCookie('pop') == 1){
//     $("#popkart").hide();
// }else{
//     $("#popkart").show();
// }
$("#popkart").show();
$("#popkart .close").on("click",function(){
    $("#popkart").hide();
    setCookie("pop",1)
})
var clientWidths = document.documentElement.clientWidth;
$(window).load(function () {
    //wap导航
    $(".menu-btn").on("click",function(){
        $(".nav-list").fadeToggle();
    })
    $(".nav-list .nav-item .arrow").on("click",function(){
        if(!$(this).siblings(".dropdown-menu").is(":visible")){
            $(this).addClass("downicon")
        }else{
            $(this).removeClass("downicon")
        }
        $(this).siblings(".dropdown-menu").fadeToggle()
    })
    $(".nav-list .nav-item a.jump").on("click",function(){
        if(clientWidths <= 1080) {
            $(".nav-list").fadeOut();
        }
    })
    $(".loading").fadeOut();
    //添加链接
    var os = function() {
        var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone, 
        isAndroid = /(?:Android)/.test(ua), 
        isFireFox = /(?:Firefox)/.test(ua), 
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
        return {
             isTablet: isTablet,
             isPhone: isPhone,
             isAndroid : isAndroid,
             isPc : isPc
        };
    }();
    if(os.isPc){
        // $(".section5 .container .pk-button").attr("href","https://pkplus.org/wapview/download")
    }else{
        // $(".section5 .container .pk-button").attr("href","https://pkplus.org/wap#/download")
    }
})
function orient() {
    //;
    if (window.orientation == 0 || window.orientation == 180) {
        $("body").attr("class", "portrait");  //当竖屏的时候为body增加一个class
        orientation = 'portrait';
        return false;
    }
    else if (window.orientation == 90 || window.orientation == -90) {
        $("body").attr("class", "landscape"); //当横屏的时候为body移除这个class
        orientation = 'landscape';
        // alert("请使用竖屏体验!")
        return false;
    }
}
$(function(){
    orient();
});
$(window).bind( 'orientationchange', function(e){
    orient();
});

adaptive(document, window);//初始加载自适应
function adaptive(doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function() {
		var clientWidth = docEl.clientWidth;
		if(!clientWidth) return;
		if(clientWidth > 1080) {
            docEl.style.fontSize = '10px';
        }
        
};
if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
//随浏览器大小自适应
window.onresize = function() {
    adaptive(document, window);
    window.location.reload();
}
//cookie 
function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

//读取cookies
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]);
    else
        return null;
}