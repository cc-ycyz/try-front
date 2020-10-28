//全屏滚动
$('#index_main').fullpage({
    slidesNavigation: true,
    controlArrows: false,
    continuousHorizontal:true,
    scrollingSpeed:1000,
    showActiveTooltip :true, 
    anchors: ['hero', 'one', 'two', 'three','four'],
    loopHorizontal: true,
    afterLoad: function(anchorLink, index){
        if(index == 1){
            $(".section1 .text").addClass('bounceInLeft show');
        }
        if(index == 2){
            $(".section2 .text").addClass('fadeInDownBig show');
        }
        if(index == 3){
            $(".section3 .text").addClass('fadeInDownBig show');
            $(".dataimg").addClass('fadeInLeftBig show');
        }
        if(index == 4){
            $(".section4 .text").addClass('fadeInDownBig show');
            $(".section4 .platformimg").addClass('fadeInUp show');
            $(".section4 .platformimg .floatimg img").addClass('infinite slideOutDownhalf delay-2s');
        }
        if(index == 5){
            $(".section5 .text").addClass('fadeInDownBig show');
            $(".section5 .platformimg").addClass('fadeInUp show');
        }
    },
    onLeave: function(index, direction){
        if(index == 1){
            $(".section1 .text").removeClass('bounceInLeft show');
        }
        if(index == 2){
            $(".section2 .text").removeClass('fadeInDownBig show');
        }
        if(index == 3){
            $(".section3 .text").removeClass('fadeInDownBig show');
            $(".dataimg").removeClass('fadeInLeftBig show');
        }
        if(index == 4){
            $(".section4 .text").removeClass('fadeInDownBig show');
            $(".section4 .platformimg").removeClass('fadeInUp show');
            $(".section4 .platformimg .floatimg img").removeClass('infinite slideOutDownhalf delay-2s');
        }
        if(index == 5){
            $(".section5 .text").removeClass('fadeInDownBig show');
            $(".section5 .platformimg").removeClass('fadeInUp show');
        }
    }
})