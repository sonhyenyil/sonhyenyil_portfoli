$(function(){
  $(".nav_home").hover(function(){
    $(".nav_home_list").slideToggle();
  });

  $(".nav_blog").hover(function(){
    $(".nav_blog_list").slideToggle();
  });

  $(".nav_page").hover(function(){
    $(".nav_page_list").slideToggle();
  });

  $(".content:nth-of-type(1) .reply").click(function(){
  	$(".content_reply").hide();
  	$(".content:nth-of-type(1) .content_reply").show();
  	$(".leave_reply").hide();
  });	

  $(".content:nth-of-type(2) .reply").click(function(){
  	$(".content_reply").hide();
  	$(".content:nth-of-type(2) .content_reply").show();
  	$(".leave_reply").hide();
  });	

  $(".content:nth-of-type(3) .reply").click(function(){
  	$(".content_reply").hide();
  	$(".content:nth-of-type(3) .content_reply").show();
  	$(".leave_reply").hide();
  });	

  $(".content:nth-of-type(4) .reply").click(function(){
  	$(".content_reply").hide();
  	$(".content:nth-of-type(4) .content_reply").show();
  	$(".leave_reply").hide();
  });	

  $(".close_btn").click(function(){
  	$(".content_reply").hide();
  	$(".leave_reply").show();
  });
});