$(function(){

  $('.CD_section > .prev').mouseover(function(){
  	$('.CD_section > .prev > img').attr('src','img/main/slide_left_a.png');
  }).mouseout(function(){
  	$('.CD_section > .prev > img').attr('src','img/main/slide_left.png');
  });

  $('.CD_section > .next').mouseover(function(){
  	$('.CD_section > .next > img').attr('src','img/main/slide_right_a.png');
  }).mouseout(function(){
  	$('.CD_section > .next > img').attr('src','img/main/slide_right.png');
  });

  $('.CD_section > .next').click(function(){
  	$('.CD_section > .CD_main').stop().animate({marginLeft:-313},500,function(){
  		$('.CD_section > .CD_main > li:first').appendTo('.CD_section > .CD_main');
  		$('.CD_section > .CD_main').css('marginLeft','0px');
  	});
  });

  $('.CD_section > .prev').click(function(){
  	$('.CD_section > .CD_main > li:last').prependTo('.CD_section > .CD_main');
  	$('.CD_section > .CD_main').css('marginLeft','-313px');
  	$('.CD_section > .CD_main').stop().animate({marginLeft:0},500)
  });

});