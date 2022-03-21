$(function(){
  //초기 설정을 위한 코드
  $('.book_list > ul').hide();
  $('.book_list > ul').eq(0).show();
  $('.type_list > li').css('border-bottom-style','hidden');
  $('.type_list > li').eq(0).css('border-bottom-style','solid');
  $('.type_list > li > img').hide();
  $('.type_list > li > img').eq(0).show();

  //literature1에 마우스가 올라갔을때의 변화코드
  $('.type_list > li').eq(0).mouseover(function(){
     $('.book_list > ul').hide();
     $('.literature1').show();
     $('.type_list > li').css('border-bottom-style','hidden');
     $('.type_list > li').eq(0).css('border-bottom-style','solid');
     $('.type_list > li > img').hide();
     $('.type_list > li > img').eq(0).show();
     $('.type_recommend_mid > .next').show();
     $('.type_recommend_mid > .prev').show();
  });

  //hu_cul에 마우스가 올라갔을때의 변화코드
  $('.type_list > li').eq(1).mouseover(function(){
     $('.book_list > ul').hide();
     $('.hu_cul').show();
     $('.type_list > li').css('border-bottom-style','hidden');
     $('.type_list > li').eq(1).css('border-bottom-style','solid');
     $('.type_list > li > img').hide();
     $('.type_list > li > img').eq(1).show();
     $('.type_recommend_mid > .next').show();
     $('.type_recommend_mid > .prev').show();
  });
  
  //eco_pra에 마우스가 올라갔을때의 변화코드
  $('.type_list > li').eq(2).mouseover(function(){
     $('.book_list > ul').hide();
     $('.eco_pra').show();
     $('.type_list > li').css('border-bottom-style','hidden');
     $('.type_list > li').eq(2).css('border-bottom-style','solid');
     $('.type_list > li > img').hide();
     $('.type_list > li > img').eq(2).show();
     $('.type_recommend_mid > .next').show();
     $('.type_recommend_mid > .prev').show();
  });

  //kid_child에 마우스가 올라갔을때의 변화코드
  $('.type_list > li').eq(3).mouseover(function(){
     $('.book_list > ul').hide();
     $('.kid_child').show();
     $('.type_list > li').css('border-bottom-style','hidden');
     $('.type_list > li').eq(3).css('border-bottom-style','solid');
     $('.type_list > li > img').hide();
     $('.type_list > li > img').eq(3).show();
     $('.type_recommend_mid > .next').show();
     $('.type_recommend_mid > .prev').show();
  });

  //lean_lang에 마우스가 올라갔을때의 변화코드
  $('.type_list > li').eq(4).mouseover(function(){
     $('.book_list > ul').hide();
     $('.lean_lang').show();
     $('.type_list > li').css('border-bottom-style','hidden');
     $('.type_list > li').eq(4).css('border-bottom-style','solid');
     $('.type_list > li > img').hide();
     $('.type_list > li > img').eq(4).show();
     $('.type_recommend_mid > .next').show();
     $('.type_recommend_mid > .prev').show();
  });

  //foreign에 마우스가 올라갔을때의 변화코드
  $('.type_list > li').eq(5).mouseover(function(){
     $('.book_list > ul').hide();
     $('.foreign').show();
     $('.type_list > li').css('border-bottom-style','hidden');
     $('.type_list > li').eq(5).css('border-bottom-style','solid');
     $('.type_list > li > img').hide();
     $('.type_list > li > img').eq(5).show();
     $('.type_recommend_mid > .next').hide();
     $('.type_recommend_mid > .prev').hide();
  });

  //cd_dvd에 마우스가 올라갔을때의 변화코드
  $('.type_list > li').eq(6).mouseover(function(){
     $('.book_list > ul').hide();
     $('.cd_dvd').show();
     $('.type_list > li').css('border-bottom-style','hidden');
     $('.type_list > li').eq(6).css('border-bottom-style','solid');
     $('.type_list > li > img').hide();
     $('.type_list > li > img').eq(6).show();
     $('.type_recommend_mid > .next').show();
     $('.type_recommend_mid > .prev').show();
  });
});