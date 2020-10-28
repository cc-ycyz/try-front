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
            $('.text').addClass('show');
            $('.adaption').addClass('show');
            $('.lefttop').addClass('fadeInLeftBig show');
			$('.righttop').addClass('fadeInDownBig show');
			$('.leftbottom').addClass('fadeInUpBig show');
			$('.rightbottom').addClass('fadeInRightBig show');
            $('.text h1').addClass('slideInLeft show');
            $('.text h2').addClass('slideInRight show');
            $('.text h3').addClass('zoomIn show');
		}
		if(index == 2){
            $(".lefttext").addClass('show');
            $(".lefttext .secondTxt").addClass('slideInLeft');
            $(".rectangle").addClass('fadeInLeftBig show');
			$(".rocket").addClass('fadeInUpBig show');
			$(".phone").addClass('fadeInRightBig show');
			$(".phonemid").addClass('delay-2s fadeInLt show');
			$(".phonetop").addClass('delay-3s fadeInLt show');    
		}
		if(index == 3){
            $(".lefttext").addClass('show');
            $(".lefttext .secondTxt").addClass('slideInLeft');
            $(".section3 .games").addClass('fadeInLeft show');
		}
		if(index == 4){
            $(".lefttext").addClass('show');
            $(".lefttext .secondTxt").addClass('slideInRight');		
            $(".operation").addClass('slideInLeft show');		
		}
	},
	onLeave: function(index, direction){
        if(index == 1){
            $('.text').removeClass('show');
            $('.adaption').removeClass('show');
            $('.lefttop').removeClass('fadeInLeftBig show');
            $('.righttop').removeClass('fadeInDownBig show');
			$('.leftbottom').removeClass('fadeInUpBig show');
			$('.rightbottom').removeClass('fadeInRightBig show');
            $('.text h1').removeClass('slideInLeft show');
            $('.text h2').removeClass('slideInRight show');
            $('.text h3').removeClass('zoomIn show');
		}
		if(index == 2){
            $(".lefttext").removeClass('show');
			$(".lefttext .secondTxt").removeClass('slideInLeft');
            $(".rectangle").removeClass('fadeInLeftBig show');
			$(".rocket").removeClass('fadeInUpBig show');
			$(".phone").removeClass('fadeInRightBig show');
			$(".phonemid").removeClass('delay-2s fadeInLt show');
			$(".phonetop").removeClass('delay-3s fadeInLt show'); 
		}
		if(index == 3){
            $(".lefttext").removeClass('show');
            $(".lefttext .secondTxt").removeClass('slideInLeft');
            $(".section3 .games").removeClass('fadeInLeft show');            		
		}
		if(index == 4){
            $(".lefttext").removeClass('show');
			$(".lefttext .secondTxt").removeClass('slideInRight');		
            $(".operation").removeClass('slideInLeft show');
		}
	}
})