$(function(){

	$(".header_menu_icon").click(function(){
		$(".header_nav").slideToggle();
	 $(window).resize(function(){
	 	if(window.innerWidth>=1294) {
	 	  $(".header_nav").show();
	 	}
	 	if(window.innerWidth<=1294) {
	 	  $(".header_nav").hide();
	 	}

	 });
	});
})