//全屏滚动
$("#chess_main").fullpage({
    resize: true,
    navigation:true,//圆点导航
    navigationPosition: "right",
    normalScrollElements: ".popkart,.popkart-content,.nav-list",
    showActiveTooltip: true,
    slidesNavigation: true,
    controlArrows: true,
    continuousHorizontal:true,
    scrollingSpeed: 700,
    anchors: ['home', 'PassionateSummer','GoldenSupremacy', 'RedCarnival', 'NightScene', 'BlackSuccubus'],
    loopHorizontal: true,
    controlArrows: true,
    afterLoad: function(anchorLink, index){
        $(".section .commetit,.section .tits,.section .bottom-btn").addClass('zoomIn show');
        $(".section .img-box img").addClass('fadeInLeftBig show');
        $(".section .function").addClass('fadeInRightBig show');
        if(index == 1){
            $(".section1 .text-img .title,.section1 .text-img .content").addClass("fadeInLeftBig show");
            $(".section1 .game-img .top").addClass("fadeInRightBig show");
            $(".section1 .game-img .item img").addClass("fadeInUpBig show");
        }
    },
    onLeave: function(index, direction){
        $(".section .commetit,.section .tits,.section .bottom-btn").removeClass('zoomIn show');
        $(".section .img-box img").removeClass('fadeInLeftBig show');
        $(".section .function").removeClass('fadeInRightBig show');
        if(index == 1){
            $(".section1 .text-img .title,.section1 .text-img .content").removeClass("fadeInLeftBig show");
            $(".section1 .game-img .top").removeClass("fadeInRightBig show");
            $(".section1 .game-img .item img").removeClass("fadeInUpBig show");
        }
    }
})