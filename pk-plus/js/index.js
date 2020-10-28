//全屏滚动
$('#index_main').fullpage({
    resize: true,
    navigation:true,//圆点导航
    slidesNavigation: true,
    controlArrows: false,
    continuousHorizontal:true,
    scrollingSpeed:1000,
    showActiveTooltip :true, 
    anchors: ['one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven','twelve'],
    loopHorizontal: true,
    afterLoad: function(anchorLink, index){
        if(index != 7){
            $(".section"+index+" .container").fadeIn();
        }
        $(".section .title h1").addClass('zoomIn');
        $(".section .title .line").addClass('zoomIn delay-0_5s');
        $(".section .title p").addClass('zoomIn');
        if(index == 1){
            $('#video').trigger('play');
            $(".scrollTop").fadeOut();
            $("#video").addClass('show');
        }
        if(index == 2){
            $(".flexBox .list").addClass('zoomIn show');
        }
        if(index == 3){
            // $(".section3 .sectionThree").addClass('slideInUp show');
        }
        if(index == 4){
            $(".section4 .sectionThree").addClass('slideInUp show');
        }
        if(index == 5){
            $('.rectangle').addClass('slideLeft fast');
            $(".pk-button").addClass('delay-1s fadeIn show'); 
            $(".phone").addClass('fadeInRightBig show');
			$(".phonemid").addClass('delay-1s fadeInLt show');
            $(".phonetop").addClass('delay-2s fadeInLt show'); 
        }
        if(index == 6){
            $('.sectionFive .imgOne').addClass('verticalOne delay-0_5s show');
            $('.sectionFive .imgOne img').addClass('horOne delay-0_5s');
            $('.sectionFive .imgTwo').addClass('verticalTwo delay-1s show');
            $('.sectionFive .imgTwo img').addClass('horTwo delay-1s');
            $('.sectionFive .imgThree').addClass('verticalThree delay-1_5s show');
            $('.sectionFive .imgThree img').addClass('horThree delay-1_5s');
            $('.sectionFive .imgFour').addClass('show');
        }
        if(index == 7){
            $('.section7 .slider-nav').addClass('slideInUp');
            $('.section7 .sliderBtn').addClass('slideInUp show');
            $(".section7 .title").fadeIn();
            $('.enlarge .close').fadeIn();
        }
        if(index == 8){
            $(".section8 .sectionThree").addClass('slideInUp show');
        }
        if(index == 9){
            /**圆圈 */
            $(".complex .circle .big").addClass('slideInUp delay-1_5s show');
            $(".complex .circle .center").addClass('slideInUp delay-1_5s show');
            $(".complex .circle .small").addClass('slideInUp delay-1s show');
            $(".complex .circle .shadow").addClass('zoomIn delay-1_5s show');
            /**头 */
            $(".complex .headImg").addClass('slideInUp slow delay-1_5s show');
            /**虚线 */
            $(".complex .otherLine .position").addClass('slideInUp delay-2s show');
            /**旋转 */
            // $(".complex .around").addClass('rotateIn slow delay-2s show');
            $(".complex .around .position").addClass('fadeIn slow delay-2s show');
        }
        if(index == 10){
            $(".section10 .tabulation .list:nth-child(1),.section10 .tabulation .list:nth-child(2),.section10 .tabulation .list:nth-child(3)").addClass('fadeIn slow delay-1s show');
            $(".section10 .tabulation .list:nth-child(4),.section10 .tabulation .list:nth-child(5),.section10 .tabulation .list:nth-child(6)").addClass('fadeIn slow delay-1_2s show');
            $(".section10 .tabulation .list:nth-child(7),.section10 .tabulation .list:nth-child(8),.section10 .tabulation .list:nth-child(9)").addClass('fadeIn slow delay-1_3s show');
        }
        if(index == 11){
            $(".section11 .sectionThree").addClass('slideInUp show');
        }
        if(index == 12){
            $(".contactUs").fadeOut();
            $(".slideBox .slideimg:nth-child(1)").addClass('fadeIn delay-1s show');
            $(".slideBox .slideimg:nth-child(2)").addClass('fadeIn delay-1_1s show');
            $(".slideBox .slideimg:nth-child(3)").addClass('fadeIn delay-1_2s show');
            $(".slideBox .slideimg:nth-child(4)").addClass('fadeIn delay-1_3s show');
        }
    },
    onLeave: function(index, direction){
        if(index != 7){
            $(".section"+index+" .container").fadeOut();            
        }
        $(".section .title h1").removeClass('zoomIn');
        $(".section .title .line").removeClass('zoomIn');
        $(".section .title p").removeClass('zoomIn');
        if(index == 1){
            $(".scrollTop").fadeIn(); 
            $("#video").removeClass('show');
        }
        if(index == 2){
            $(".flexBox .list").removeClass('zoomIn show');
        }
        if(index == 3){
            // $(".section3 .sectionThree").removeClass('slideInUp show');            
        }
        if(index == 4){
            $(".section4 .sectionThree").removeClass('slideInUp show');            
        }
        if(index == 5){
            $('.rectangle').removeClass('slideLeft fast');
            $('.enlarge .close').fadeOut();
            $(".pk-button").removeClass('delay-1s fadeIn show'); 
            $(".phone").removeClass('fadeInRightBig show');
			$(".phonemid").removeClass('delay-1s fadeInLt show');
            $(".phonetop").removeClass('delay-2s fadeInLt show'); 
        }
        if(index == 7){
            $('.section7 .slider-nav').removeClass('slideInUp');
            $('.section7 .sliderBtn').removeClass('slideInUp show');            
            $(".section7 .title").fadeOut();
        }
        if(index == 8){
            $(".section8 .sectionThree").removeClass('slideInUp show');
        }
        if(index == 10){
            $(".section10 .list").fadeOut();
        }
        if(index == 11){
            $(".section11 .sectionThree").removeClass('slideInUp show');            
        }
        if(index == 12){
            $(".contactUs").fadeIn();
            $(".slideBox .slideimg:nth-child(1)").removeClass('fadeIn delay-1s show');
            $(".slideBox .slideimg:nth-child(2)").removeClass('fadeIn delay-1_5s show');
            $(".slideBox .slideimg:nth-child(3)").removeClass('fadeIn delay-2s show');
            $(".slideBox .slideimg:nth-child(4)").removeClass('fadeIn delay-2_5s show');
        }
    },
    afterRender: function () {
        $(".scrollTop").on("click",function(){
            $.fn.fullpage.moveTo('one', 2);
        });
        $(".contactUs,.section8 .contentImg").on("click",function(){
            $.fn.fullpage.moveTo('twelve', 2);        
        })
    }
})

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
        $(".section3 .container .pk-button").attr("href","https://pkplus.org/wapview/download")
    }else{
        $(".section3 .container .pk-button").attr("href","https://pkplus.org/wap#/download")
        $("#video").remove()
    }
    //唤起QQ
    // $("#qqChat a").on("click",function(){
    //     console.log("ss")
    //     var qq = $(this).text() || '';
    //     var as = $("#qqChat a");
    //     var kefu101 = "http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes";
    //     var kefu102 = "mqqwpa://im/chat?chat_type=wpa&uin="+qq+"&version=1&src_type=web&web_src=oicqzone.com";
    //     for (var i = 0, len = $("#qqChat a").length; i < len; i++) {
    //         if (as[i].hasAttribute('data-qq')) {
    //             as[i].onclick = (function (i) {
    //                 return function (e) {
    //                     console.log(e)
    //                     var kefu = e.target ? e.target.getAttribute('data-qq') : e.srcElement.getAttribute('data-qq');
    //                     if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) {
    //                         window.open(kefu102);
    //                     }else {
    //                         window.open(kefu101);
    //                     }
    //                 }
    //             })(i);
    //         }
    //     }
    // })
    /**
     * 第三页 交互
     */
    $(".im-phone img").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
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