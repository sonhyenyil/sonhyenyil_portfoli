$(function(){
	$(".nav_home").hover(function(){
		$(".nav_home_list").stop().slideToggle();
	});

	$(".nav_blog").hover(function(){
		$(".nav_blog_list").stop().slideToggle();
	});

	$(".nav_page").hover(function(){
		$(".nav_page_list").stop().slideToggle();
	});
});

