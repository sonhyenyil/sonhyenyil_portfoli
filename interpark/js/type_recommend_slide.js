$(function(){
  //마우스가 올라가고 내려갈때 화살표에 대한 구문
  $('.type_recommend_mid .prev').mouseover(function(){
  	$('.type_recommend_mid .prev img').attr('src','img/main/slide_left_a.png');
  }).mouseout(function(){
  	$('.type_recommend_mid .prev img').attr('src','img/main/slide_left.png');
  });
  $('.type_recommend_mid .next').mouseover(function(){
  	$('.type_recommend_mid .next img').attr('src','img/main/slide_right_a.png');
  }).mouseout(function(){
  	$('.type_recommend_mid .next img').attr('src','img/main/slide_right.png');
  });
  //슬라이드시 필요한 구문 문학분야
    $('.type_recommend_mid .prev').click(function(){
      $('.book_list').css({marginLeft:-955});
      $('.book_list > .literature1 > div:first').appendTo('.literature1');
      $('.book_list').css({marginLeft:20});
    });
    $('.type_recommend_mid .next').click(function(){
      $('.book_list').css({marginLeft:955});
      $('.book_list > .literature1 > div:last').prependTo('.literature1');
      $('.book_list').css({marginLeft:20});
    });

  //슬라이드시 필요한 구문 인문/교양분야
    $('.type_recommend_mid .prev').click(function(){
      $('.book_list').css({marginLeft:-955});
      $('.book_list > .hu_cul > div:first').appendTo('.hu_cul');
      $('.book_list').css({marginLeft:20});
    });
    $('.type_recommend_mid .next').click(function(){
      $('.book_list').css({marginLeft:955});
      $('.book_list > .hu_cul > div:last').prependTo('.hu_cul');
      $('.book_list').css({marginLeft:20});
    }); 	
  
  //슬라이드시 필요한 구문 경제/실용분야
  $('.type_recommend_mid .prev').click(function(){
      $('.book_list').css({marginLeft:-955});
      $('.book_list > .eco_pra > div:first').appendTo('.eco_pra');
      $('.book_list').css({marginLeft:20});
    });
    $('.type_recommend_mid .next').click(function(){
      $('.book_list').css({marginLeft:955});
      $('.book_list > .eco_pra > div:last').prependTo('.eco_pra');
      $('.book_list').css({marginLeft:20});
    });   

  //슬라이드시 필요한 구문 유아/아동 분야
  $('.type_recommend_mid .prev').click(function(){
      $('.book_list').css({marginLeft:-955});
      $('.book_list > .kid_child > div:first').appendTo('.kid_child');
      $('.book_list').css({marginLeft:20});
    });
    $('.type_recommend_mid .next').click(function(){
      $('.book_list').css({marginLeft:955});
      $('.book_list > .kid_child > div:last').prependTo('.kid_child');
      $('.book_list').css({marginLeft:20});
    });  

  //슬라이드시 필요한 학습/어학 분야
  $('.type_recommend_mid .prev').click(function(){
      $('.book_list').css({marginLeft:-955});
      $('.book_list > .lean_lang > div:first').appendTo('.lean_lang');
      $('.book_list').css({marginLeft:20});
    });
    $('.type_recommend_mid .next').click(function(){
      $('.book_list').css({marginLeft:955});
      $('.book_list > .lean_lang > div:last').prependTo('.lean_lang');
      $('.book_list').css({marginLeft:20});
    });

  //외국도서 분야
  $('.type_recommend_mid .prev').click(function(){
      $('.book_list').css({marginLeft:-955});
      $('.book_list > .foreign > div:first').appendTo('.foreign');
      $('.book_list').css({marginLeft:20});
    });
    $('.type_recommend_mid .next').click(function(){
      $('.book_list').css({marginLeft:955});
      $('.book_list > .foreign > div:last').prependTo('.foreign');
      $('.book_list').css({marginLeft:20});
    });

  //CD/DVD 분야
  $('.type_recommend_mid .prev').click(function(){
      $('.book_list').css({marginLeft:-955});
      $('.book_list > .cd_dvd > div:first').appendTo('.cd_dvd');
      $('.book_list').css({marginLeft:20});
    });
    $('.type_recommend_mid .next').click(function(){
      $('.book_list').css({marginLeft:955});
      $('.book_list > .cd_dvd > div:last').prependTo('.cd_dvd');
      $('.book_list').css({marginLeft:20});
    });

});