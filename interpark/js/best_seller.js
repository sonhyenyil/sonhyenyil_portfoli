$(function(){
  $('.week').click(function(){
    $('.today_best > li').hide();
    $('.week').css('border-bottom-style','hidden');
    $('.week').css('background','rgba(200,200,200,0.0)');
    $('.today').css('background','rgba(200,200,200,0.8)');
    $('.today').css('border-bottom-style','solid');
    $('.week_wrap').show();
  });
  $('.today').click(function(){
    $('.week_wrap').hide();
    $('.today').css('border-bottom-style','hidden');
     $('.week').css('background','rgba(200,200,200,0.8)');
     $('.today').css('background','rgba(200,200,200,0.0)');
    $('.week').css('border-bottom-style','solid');
    $('.today_best > li').show();
  });
});