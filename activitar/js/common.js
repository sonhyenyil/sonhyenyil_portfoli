$(function(){
  $(".header_menu_icon").click(function(){
    $("#header_nav").slideToggle();

    $(window).resize(function(){
      if(window.innerWidth>=1030) {
      $("#header_nav").show();
    }
    if(window.innerWidth<=1030) {
      $("#header_nav").hide();
    }
    });
  });


  $(".nav_list:nth-of-type(5)").hover(function(){
     $(".nav_blog").slideToggle();
  });

});