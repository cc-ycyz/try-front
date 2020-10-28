//全屏滚动
$('#index_main').fullpage({
    resize: true,
    navigation:true,//圆点导航
    navigationPosition: 'left',
    navigationTooltips: ['1<span>/11</span>','2<span>/11</span>','3<span>/11</span>','4<span>/11</span>','5<span>/11</span>','6<span>/11</span>','7<span>/11</span>','8<span>/11</span>','9<span>/11</span>','10<span>/11</span>','11<span>/11</span>'],
    showActiveTooltip: true,
    slidesNavigation: true,
    controlArrows: true,
    continuousHorizontal:true,
    scrollingSpeed: 700,
    showActiveTooltip :true, 
    anchors: ['one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven'],
    loopHorizontal: true,
    controlArrows: true,
    afterLoad: function(anchorLink, index){
        $(".mouse .checkList").fadeOut();
        $(".subscript .num").text(index);
        $(".section .title").addClass('zoomIn show');
        $(".section .container").addClass('show');
        $(".section .adorn").addClass('fadeIn show');
        if(index == 1){
            $(".scrollTop").fadeOut();
            $(".controlBtn .buttonTop").addClass("unChoose");

            $(".mouse,.logo,.floatButton,.controlBtn").addClass('fadeInUpBig show');
            $(".floatButton .contactUs").removeClass("hideFloatBtn").addClass("showFloatBtn");
            $(".floatButton .scrollTop").removeClass("showFloatBtn").addClass("hideFloatBtn");
            $("#fp-nav").addClass('animated delay-2s fadeIn show');
            $(".section1 .firstInto").addClass('hidebackground show');
            $(".textBg .letter").addClass('zoomIn show');
            $(".textBg").addClass('hide003');
            $(".section1 .container").addClass('fadeInLeftBig show');
            $(".section1 .first-screen").addClass('fadeIn slow show');
        }
        if(index == 2){
            $(".section2 .container").addClass('zoomIn');
            $(".section2 .canvas").addClass('hide007 show');
            $(".section2 .centerCont .firstRow,.section2 .centerCont .secondRow,.section2 .centerCont .thirdRow,.section2 .centerCont .gameType .box").addClass('fadeInUpBig show');
        }
        if(index == 3){
            $(".section3 .content .topcont,.section3 .content .botcont").addClass('fadeInUpBig show');
        }
        if(index == 4){
            $(".section4 .sectionFour .column").addClass('fadeIn show');
        }
        if(index == 5){
            $(".section5 .container .mask,.section5 .pk-button").addClass('fadeInRightBig show');
            $(".section5 .content .phone").addClass('fadeInLeftBig show');
            $(".section5 .delTitle").addClass('zoomIn show');
            $(".section5 .content .right ul li").addClass('fadeIn show');
            if(document.documentElement.clientWidth > 1024){
                $(".section5 .content .float").addClass('fadeInRtop show');
            }else{
                $(".section5 .content .float").addClass('fadeInRtopwap show');
            }
        }
        if(index == 6){
            $(".section6 .container .mask").addClass('fadeInLeftBig show');
            $(".section6 .content .phone").addClass('fadeInRightBig show');
            if(document.documentElement.clientWidth > 1024){
                $(".section6 .content .left .rectangle").addClass('addLeft show');
                $(".section6 .content .phone .center").addClass('fadeInLcenter show');
                $(".section6 .content .phone .top").addClass('fadeInLtop show');
            }else{
                $(".section6 .content .left .rectangle").addClass('addLeftwap show');
                $(".section6 .content .phone .center").addClass('fadeInLcenterwap show');
                $(".section6 .content .phone .top").addClass('fadeInLtopwap show');
            }
            
        }
        if(index == 7){
            $('.section7 .slider-nav,.section7 .sliderBtn').addClass('fadeInUpBig show slow');
            $('.enlarge .close').fadeIn();
        }
        if(index == 8){
            $(".section8 .slider").addClass('fadeInDownBig show');
            $(".section8 .terminal .macbook,.section8 .terminal .ipad,.section8 .terminal .iphone,.section8 .terminal .applepc").addClass('fadeInUpBig show');
            $(".section8 .reflection .macbook,.section8 .reflection .ipad,.section8 .reflection .iphone,.section8 .reflection .applepc").addClass('fadeIn show');
        }
        if(index == 9){
            $(".section9 .sectionNine .column").addClass('fadeIn show');
        }
        if(index == 10){
            $(".section10 .tabulation .list,.section10 .other").addClass('fadeInUpBig show');
            $(".section10 .tabulation .list .tips").addClass('fadeIn show');
        }
        if(index == 11){
            $(".contactUs").fadeOut();
            $(".section11 .slideBox .slideimg").addClass('fadeIn show');
        }
    },
    onLeave: function(index, direction){
        $(".section .title").removeClass('zoomIn show');
        $(".section .container").removeClass('show');
        $(".section .adorn").removeClass('fadeIn show');
        if(index == 1){
            $(".scrollTop").fadeIn();
            $(".controlBtn .buttonTop").removeClass("unChoose");
            $(".floatButton .scrollTop").addClass("showFloatBtn");
            $(".section1 .firstInto").removeClass('hidebackground show');
            $(".textBg .letter").removeClass('zoomIn show');
            $(".textBg").removeClass('hide003');
            $(".section1 .container").removeClass('fadeInLeftBig show');
            $(".section1 .first-screen").removeClass('fadeIn slow show');
        }
        if(index == 2){

        }
        if(index == 3){

        }
        if(index == 4){
            $(".section4 .sectionFour .column").removeClass('fadeIn show');
        }
        if(index == 5){
            $(".section5 .container .mask,.section5 .pk-button").removeClass('fadeInRightBig show');
            $(".section5 .content .phone").removeClass('fadeInLeftBig show');
            $(".section5 .delTitle").removeClass('zoomIn show');
            $(".section5 .content .right ul li").removeClass('fadeIn show');
            if(document.documentElement.clientWidth > 1024){
                $(".section5 .content .float").removeClass('fadeInRtop show');
            }else{
                $(".section5 .content .float").removeClass('fadeInRtopwap show');
            }
        }
        if(index == 6){
            
        }
        if(index == 7){
            $('.section7 .slider-nav,.section7 .sliderBtn').removeClass('slideInUp show slow').hide();
            $(".section7 .adorn").removeClass('fadeIn show');
        }
        if(index == 8){

        }
        if(index == 10){

        }
        if(index == 11){
            $(".contactUs").fadeIn();
        }
    },
    afterRender: function () {
        $(".scrollTop").on("click",function(){
            $.fn.fullpage.moveTo('one', 2);
        });
        $(".contactUs").on("click",function(){
            $.fn.fullpage.moveTo('eleven', 2);        
        })
    }
})
$(".controlBtn .buttonTop").on("click",function(){
    $.fn.fullpage.moveSectionUp()
});
$(".controlBtn .buttonBto").on("click",function(){
    $.fn.fullpage.moveSectionDown();
});
$(".section4 .sectionFour .column").on({
    mouseover : function(){
        $(".section4 .sectionFour .column").addClass("opacity")
    } ,
    mouseout : function(){
        $(".section4 .sectionFour .column").removeClass("opacity")
    } 
});
$(".section9 .sectionNine .column").on({
    mouseover : function(){
        $(this).find(".hideText").addClass("fadeIn show")
    } ,
    mouseout : function(){
        $(this).find(".hideText").removeClass("fadeIn show")
    } 
});
$(".section9 .sectionNine .column").on("click",function(){
    if(!$(this).hasClass("active")){
        $(this).addClass("active").siblings().removeClass("active");
    }
})
$(".mouse").click(function () {
    $(".mouse .checkList").slideToggle();
});
$(".slideBox .slideimg").hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
},function(){
    $(this).removeClass("active");
});

$(window).load(function () {
    $(".loading").fadeOut();
    $(".slider-nav .image .mask img").on("click",function(){
        $('.enlarge').fadeIn();
        $('.slider-for').unslick();
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.slider-nav',
            autoplay: false,
        });
    })
    $(".enlarge .close").on("click",function(){
        $('.enlarge').fadeOut();
    });
    $('.slider-nav').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        arrows: false
    });
    $('.slider-for').slick({
        asNavFor: '.slider-nav',
    });
    $(".animated,.logo").attr("ondragstart","return false;");
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
        $(".section5 .container .pk-button").attr("href","https://pkplus.org/wapview/download")
    }else{
        $(".section5 .container .pk-button").attr("href","https://pkplus.org/wap#/download")
    }
});
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
        alert("请使用竖屏体验!")
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
		if(clientWidth > 1024) {
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