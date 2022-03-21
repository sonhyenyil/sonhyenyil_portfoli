$(function(){

  $('.sp_section > .prev').mouseover(function(){
  	$('.sp_section > .prev > img').attr('src','img/main/slide_left_a.png');
  }).mouseout(function(){
  	$('.DVD_section > .prev > img').attr('src','img/main/slide_left.png');
  });

  $('.sp_section > .next').mouseover(function(){
  	$('.sp_section > .next > img').attr('src','img/main/slide_right_a.png');
  }).mouseout(function(){
  	$('.sp_section > .next > img').attr('src','img/main/slide_right.png');
  });

  $('.sp_section > .next').click(function(){
  	$('.sp_section > .sp_section_main').stop().animate({marginLeft:-313},500,function(){
  		$('.sp_section > .sp_section_main > li:first').appendTo('.sp_section > .sp_section_main');
  		$('.sp_section > .sp_section_main').css('marginLeft','0px');
  	});
  });

  $('.sp_section > .prev').click(function(){
  	$('.sp_section > .sp_section_main > li:last').prependTo('.sp_section > .sp_section_main');
  	$('.sp_section > .sp_section_main').css('marginLeft','-313px');
  	$('.sp_section > .sp_section_main').stop().animate({marginLeft:0},500)
  });

});