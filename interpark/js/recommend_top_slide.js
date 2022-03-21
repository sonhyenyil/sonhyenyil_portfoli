$(function(){
  $('.book_slide .prev').mouseover(function(){
    $('.book_slide .prev img').attr('src','img/main/slide_left_a.png');
  }).mouseout(function(){
    $('.book_slide .prev img').attr('src','img/main/slide_left.png');
  });
  $('.book_slide .next').mouseover(function(){
    $('.book_slide .next img').attr('src','img/main/slide_right_a.png');
  }).mouseout(function(){
    $('.book_slide .next img').attr('src','img/main/slide_right.png');
  });
  $('.book_slide .next').click(function(){
  	$('.recommend_book > a:first').appendTo('.recommend_book');
  	$('recommend_book').css({marginLeft:0});
  });
  $('.book_slide .prev').click(function(){
  	$('.recommend_book > a:last').prependTo('.recommend_book');
  	$('recommend_book').css({marginLeft:0});
  });
});