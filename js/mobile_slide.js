$(function(){
  var m_img_h = $('#section_3 .mobile_page > img').height();
  var m_box_h = $('.mobile_page').height();
  $('#section_3 > .mobile').mouseover(function(){
    $('#section_3 .mobile_page > img').stop().animate({marginTop:-m_img_h+m_box_h},6000);
  }).mouseout(function(){
  	$('#section_3 .mobile_page > img').stop().animate({marginTop:0},2000);
  });

  var m_img_h2 = $('#section_5 .mobile_page > img').height();
  var m_box_h2 = $('.mobile_page').height();
  $('#section_5 > .mobile').mouseover(function(){
    $('#section_5 .mobile_page > img').stop().animate({marginTop:-m_img_h2+m_box_h2},6000);
  }).mouseout(function(){
  	$('#section_5 .mobile_page > img').stop().animate({marginTop:0},2000);
  });
});