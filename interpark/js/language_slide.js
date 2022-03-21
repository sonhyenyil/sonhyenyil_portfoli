$(function(){
  $('.language').mouseover(function(){
    $('.language img').attr('src','img/common/arrow_up.png');
    $('.language_list').stop().slideDown();
  }).mouseout(function(){
    $('.language img').attr('src','img/common/arrow_down.png');
    $('.language_list').stop().slideUp();
  });
});