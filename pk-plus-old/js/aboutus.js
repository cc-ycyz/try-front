//全屏滚动
$('#index_main').fullpage({
    slidesNavigation: true,
    controlArrows: false,
    continuousHorizontal:true,
    scrollingSpeed:1000,
    showActiveTooltip :true, 
    anchors: ['hero', 'one', 'two', 'three'],
    loopHorizontal: true,
    afterLoad: function(anchorLink, index){
        if(index == 1){
            $('.section1 .text').addClass('zoomInDown show');
            $('#video').trigger('play');
        }
        if(index == 2){
            $(".lefttext").addClass('show');
            $(".lefttext .secondTxt").addClass('slideInLeft');
            $(".background").addClass('fadeIn show');
            $(".section2 .background .animated").addClass('infinite slideOutDownhalf delay-2s');
        }
        if(index == 3){
            $(".section3 .text").addClass('fadeInDownBig show');
            $(".slideBox .slideimg:nth-child(1)").addClass('fadeIn delay-1s show');
            $(".slideBox .slideimg:nth-child(2)").addClass('fadeIn delay-1_5s show');
            $(".slideBox .slideimg:nth-child(3)").addClass('fadeIn delay-2s show');
            $(".slideBox .slideimg:nth-child(4)").addClass('fadeIn delay-2_5s show');
        }
    },
    onLeave: function(index, direction){
        if(index == 1){
            $('.section1 .text').removeClass('zoomInDown show');            
        }
        if(index == 2){
            $(".lefttext").removeClass('show');
            $(".lefttext .secondTxt").removeClass('slideInLeft');
            $(".background").removeClass('fadeInRight show');
        }
        if(index == 3){
            $(".text").removeClass('fadeInDownBig show');
        }
    }
})

$(".slideBox .slideimg").mouseover(function(){
    $(this).addClass("active").siblings().removeClass("active");
})