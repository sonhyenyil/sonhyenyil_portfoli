$(function(){

  $('.DVD_section > .prev').mouseover(function(){
  	$('.DVD_section > .prev > img').attr('src','img/main/slide_left_a.png');
  }).mouseout(function(){
  	$('.DVD_section > .prev > img').attr('src','img/main/slide_left.png');
  });

  $('.DVD_section > .next').mouseover(function(){
  	$('.DVD_section > .next > img').attr('src','img/main/slide_right_a.png');
  }).mouseout(function(){
  	$('.DVD_section > .next > img').attr('src','img/main/slide_right.png');
  });

  $('.DVD_section > .next').click(function(){
  	$('.DVD_section > .DVD_main').stop().animate({marginLeft:-313},500,function(){
  		$('.DVD_section > .DVD_main > li:first').appendTo('.DVD_section > .DVD_main');
  		$('.DVD_section > .DVD_main').css('marginLeft','0px');
  	});
  });

  $('.DVD_section > .prev').click(function(){
  	$('.DVD_section > .DVD_main > li:last').prependTo('.DVD_section > .DVD_main');
  	$('.DVD_section > .DVD_main').css('marginLeft','-313px');
  	$('.DVD_section > .DVD_main').stop().animate({marginLeft:0},500)
  });

});