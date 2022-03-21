$(function(){
  $('.mypage').mouseover(function(){
  	$('.mypage img').attr('src','img/common/arrow_up.png')
    $('.mypage_sub').stop().slideDown();
  }).mouseout(function(){
  	$('.mypage img').attr('src','img/common/arrow_down.png')
    $('.mypage_sub').stop().slideUp();
  });
});