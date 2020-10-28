//nav 
// $(".navbar_nav li").hover(function(){
// 	$(this).addClass("animated zoomIn")
// })
//移动端展开nav
$('#navToggle').on('click',function(){
	$('.m_nav').addClass('open');
})
//关闭nav
$('.m_nav .top .closed').on('click',function(){
	$('.m_nav').removeClass('open');
})
//二级导航  移动端
$(".m_nav .ul li").click(function() {
	$(this).children("div.dropdown_menu").slideToggle('slow')
    $(this).siblings('li').children('.dropdown_menu').slideUp('slow');				
});
//img 
$("img").attr("ondragstart","return false;");
$("body").attr("onselectstart","return false;")
$(".slideBox .slideimg .content p").attr("onselectstart","return true;")
$(window).load(function () {
	$(".loading").fadeOut();
});