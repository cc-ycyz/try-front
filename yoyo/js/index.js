//全屏滚动
$('#index_main').fullpage({
    resize: true,
    navigation:false,//圆点导航
    navigationPosition: "right",
    normalScrollElements: ".popkart,.popkart-content,.nav-list",
    showActiveTooltip: true,
    slidesNavigation: true,
    controlArrows: true,
    continuousHorizontal:true,
    scrollingSpeed: 700,
    anchors: ['home', 'cash','poker', 'advantages', 'contact'],
    loopHorizontal: true,
    controlArrows: true,
    afterLoad: function(anchorLink, index){
        $(".nav-list .nav-item").removeClass("active");
        $(".section .commeTit,.section .bottom-btn").addClass('zoomIn show');
        if(index == 1){
            $(".nav-list .nav-item.home").addClass("active");
        }
        if(index == 2){
            $(".nav-list .nav-item.introduction").addClass("active");
            $(".introduction .dropdown-menu li:first-child").addClass("active").siblings().removeClass("active");

            $(".section2 .img-box img").addClass('fadeInLeftBig show');
            $(".section2 .game .game-item").addClass('zoomIn show');
        }
        if(index == 3){
            $(".nav-list .nav-item.introduction").addClass("active");
            $(".introduction .dropdown-menu li:last-child").addClass("active").siblings().removeClass("active");

            $(".section3 .game .game-item").addClass('fadeInUpBig show');
            $(".section3 .img-box .terminal img").addClass('fadeInRightBig show');
            $(".section3 .img-box .reflection img").addClass('zoomIn show');
        }
        if(index == 4){
            if(clientWidths <= 1080) {
                $(".section4 .list .list-item").addClass('fadeInUpBig d-flex');
            }else{
                $(".section4 .list .list-item").addClass('fadeInUpBig show');
            }
        }
        if(index == 5){
            $(".section5 .line").addClass('zoomIn show');
            $(".section5 .info-item .title").addClass('fadeInLeftBig show');
            $(".section5 .info-list").addClass("zoomIn d-flex")
        }
    },
    onLeave: function(index, direction){
        $(".section .commeTit,.section .bottom-btn").removeClass('zoomIn show');
        if(index == 2){
            $(".section2 .img-box img").removeClass('fadeInLeftBig show');
            $(".section2 .game .game-item").removeClass('zoomIn show');
        }
        if(index == 3){
            $(".section3 .game .game-item").removeClass('fadeInUpBig show');
            $(".section3 .img-box .terminal img").removeClass('fadeInRightBig show');
            $(".section3 .img-box .reflection img").removeClass('zoomIn show');
        }
        if(index == 4){
            if(clientWidths <= 1080) {
                $(".section4 .list .list-item").removeClass('fadeInUpBig d-flex');
            }else{
                $(".section4 .list .list-item").removeClass('fadeInUpBig show');
            }
        }
        if(index == 5){
            $(".section5 .line").removeClass('zoomIn show');
            $(".section5 .info-item .title").removeClass('fadeInLeftBig show');
            $(".section5 .info-list").removeClass("zoomIn d-flex")
        }
    }
})
$(window).load(function () {
    //首页轮播
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay: {
            disableOnInteraction: false,
            delay: 3000,
        },
        effect:"fade",//淡入淡出效果
        parallax:"true",//产生视觉差
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },    
    })
});
