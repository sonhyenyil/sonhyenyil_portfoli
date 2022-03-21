$(function(){
  $('.name > i').mouseover(function(){
  	$('.name > p').show();
  }).mouseout(function(){
  	$('.name > p').hide();
  });

  $('.phone_number > i').mouseover(function(){
  	$('.phone_number > p').show();
  }).mouseout(function(){
  	$('.phone_number > p').hide();
  });

  $('.e-mail > i').mouseover(function(){
  	$('.e-mail > p').show();
  }).mouseout(function(){
  	$('.e-mail > p').hide();
  });

});