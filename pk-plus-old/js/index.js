//全屏滚动
$(".slick").hide();
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
            $('.hands').addClass('fadeInDownBig show');
        }
        if(index == 2){
            $(".section2 .text").addClass('fadeInDownBig show');
            $(".slick").addClass('fadeInUpBig');
            $(".slick").show();
        }
        if(index == 3){
            $(".section3 .text").addClass('fadeInDownBig show');
            $(".thired").addClass('fadeInUpBig show');
        }
        if(index == 4){
            $(".text").addClass('fadeInDownBig show');
            $(".security .leftbg").addClass('bounceInLeft show');
            $(".security ul").addClass('show');
            $(".security ul li").addClass('fadeIn delay-1s');
        }
    },
    onLeave: function(index, direction){
        if(index == 1){
            $('.hands').removeClass('fadeInDownBig show');
        }
        if(index == 2){
            $(".text").removeClass('fadeInDownBig show');
            $(".slick").removeClass('fadeInUpBig');
            $(".slick .animated").removeClass('changeBig active');
            $(".slick").hide();
        }
        if(index == 3){
            $(".text").removeClass('fadeInDownBig show');
            $(".thired").removeClass('fadeInUpBig show');
        }
        if(index == 4){
            $(".text").removeClass('fadeInDownBig show');
            $(".security .leftbg").removeClass('bounceInLeft show');
            $(".security ul").removeClass('show');
            $(".security ul li").removeClass('fadeIn delay-1s');
        }
    }
})

//第二屏
$(function(){
    $(".slick .animated").on("click",function() {
        var item = $(this).index();
        $(this).addClass("changeBig active").siblings().removeClass("changeBig active");
        switch (item) {
            case 0:
                $(".slickone").addClass("zindex9").siblings().removeClass("zindex9");
                $(".slicktwo").addClass("zindex8").siblings().removeClass("zindex8");
                $(".slickthree").addClass("zindex7").siblings().removeClass("zindex7");
                $(".slickfour").addClass("zindex6").siblings().removeClass("zindex6");
                break;                
            case 1:
                $(".slickone").addClass("zindex8").siblings().removeClass("zindex8");
                $(".slicktwo").addClass("zindex9").siblings().removeClass("zindex9");
                $(".slickthree").addClass("zindex7").siblings().removeClass("zindex7");
                $(".slickfour").addClass("zindex6").siblings().removeClass("zindex6");
                break;
            case 2:
                $(".slickone").addClass("zindex6").siblings().removeClass("zindex6");
                $(".slicktwo").addClass("zindex7").siblings().removeClass("zindex7");
                $(".slickthree").addClass("zindex9").siblings().removeClass("zindex9");
                $(".slickfour").addClass("zindex8").siblings().removeClass("zindex8");
                break;
            default:
                $(".slickone").addClass("zindex6").siblings().removeClass("zindex6");
                $(".slicktwo").addClass("zindex7").siblings().removeClass("zindex7");
                $(".slickthree").addClass("zindex8").siblings().removeClass("zindex8");
                $(".slickfour").addClass("zindex9").siblings().removeClass("zindex9");
        }
    })
})