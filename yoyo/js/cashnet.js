//全屏滚动
$("#cashnet_main").fullpage({
    resize: true,
    navigation:true,//圆点导航
    navigationPosition: "right",
    normalScrollElements: ".popkart,.popkart-content,.nav-list",
    showActiveTooltip: true,
    slidesNavigation: true,
    controlArrows: true,
    continuousHorizontal:true,
    scrollingSpeed: 700,
    anchors: ['home', 'PC','APP'],
    loopHorizontal: true,
    controlArrows: true,
    afterLoad: function(anchorLink, index){
        $(".section .commeTit,.section .bottom-btn").addClass('zoomIn show');
        if(index == 1){
            $(".section1 .text-img .title,.section1 .text-img .content").addClass("fadeInLeftBig show");
            $(".section1 .game-img img").addClass("fadeInRightBig show");
        }
        if(index == 2){
            $('.section2 .slider-nav,.section2 .sliderBtn').addClass('fadeInUpBig show slow');
            $('.enlarge .close').fadeIn();
        }
    },
    onLeave: function(index, direction){
        $(".section .commeTit,.section .bottom-btn").removeClass('zoomIn show');
        if(index == 1){
            $(".section1 .text-img .title,.section1 .text-img .content").removeClass("fadeInLeftBig show");
            $(".section1 .game-img img").removeClass("fadeInRightBig show");
        }
        if(index == 2){
            $('.section2 .slider-nav,.section2 .sliderBtn').removeClass('slideInUp show slow').hide();
        }
    }
})
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
$(window).load(function () {
    $(".slider-nav .image .mask img").on("click",function(){
        $('.enlarge').fadeIn();
        // $('.slider-for').unslick();
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
    var phoneswiper = new Swiper('.phoneswiper',{
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides : true,
        initialSlide: 2,
        breakpoints: {
            1080: {
                slidesPerView: 2,
            }
        }
    });
})