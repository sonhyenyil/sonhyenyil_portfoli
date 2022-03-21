$(function(){
//세션별로 각각 마우스가 올라가면 세션별 이미지 슬라이드를 위한 구문
  var img_h = $('#section_2 .img_wrap > img').height();
  var box_h = $('#section_2 .img_box').height();
  $('#section_2 .img_box').mouseover(function(){
    $('#section_2 .img_wrap > img').stop().animate({marginTop:-img_h+box_h},6000);
  }).mouseout(function(){
  	$('.img_wrap > img').stop().animate({marginTop:0},1000);
  });

  var img_h2 = $('#section_3 .img_wrap > img').height();
  var box_h2 = $('#section_3 .img_box').height();
  $('#section_3 .img_box').mouseover(function(){
    $('#section_3 .img_wrap > img').stop().animate({marginTop:-img_h2+box_h2},6000);
  }).mouseout(function(){
    $('.img_wrap > img').stop().animate({marginTop:0},1000);
  });

  var img_h3 = $('#section_4 .img_wrap > img').height();
  var box_h3 = $('#section_4 .img_box').height();
  $('#section_4 .img_box').mouseover(function(){
    $('#section_4 .img_wrap > img').stop().animate({marginTop:-img_h3+box_h3},6000);
  }).mouseout(function(){
    $('.img_wrap > img').stop().animate({marginTop:0},1000);
  });

  var img_h4 = $('#section_5 .img_wrap > img').height();
  var box_h4 = $('#section_5 .img_box').height();
  $('#section_5 .img_box').mouseover(function(){
    $('#section_5 .img_wrap > img').stop().animate({marginTop:-img_h4+box_h3},6000);
  }).mouseout(function(){
    $('.img_wrap > img').stop().animate({marginTop:0},1000);
  });
});