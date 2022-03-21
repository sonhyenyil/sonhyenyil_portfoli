$(function(){
  $('.group_list_wrap').mouseover(function(){
    $('.group_list').stop().slideDown(500);
  }).mouseout(function(){
  	$('.group_list').stop().slideUp(500);
  });
});