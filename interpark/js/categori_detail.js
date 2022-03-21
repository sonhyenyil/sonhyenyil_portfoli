$(function(){

//카테고리별 세부사항을 나타내기 위한 스크립트 구문
  $('.domestic_book').click(function(){
  	//다른 3개의 세부사항을 hide하여 다른 세부사항을 눌렀을 경우 한번에 여러개가 열리지 않도록 구현 
  	$('.form_essay > div').hide();
  	$('.essay_prose > ul').hide();
  	$('.korea_essay > ul').hide();
    $('.domestic_book > ul').slideToggle();
  });

  $('.form_essay').click(function(){
  	$('.domestic_book > ul').hide();
  	$('.essay_prose > ul').hide();
  	$('.korea_essay > ul').hide();
    $('.form_essay > div').slideToggle();
  });
  $('.essay_prose').click(function(){
  	$('.domestic_book > ul').hide();
  	$('.form_essay > div').hide();
  	$('.korea_essay > ul').hide();
    $('.essay_prose > ul').slideToggle();
  });
  $('.korea_essay').click(function(){
  	$('.domestic_book > ul').hide();
  	$('.form_essay > div').hide();
  	$('.essay_prose > ul').hide();
    $('.korea_essay > ul').slideToggle();
  });
});