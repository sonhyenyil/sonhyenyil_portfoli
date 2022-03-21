$(function(){
  //검색 아이콘 아래의 화살표를 누르면 나오는 인기 검색어의 순위를 보여주는 함수
   let count=0; 
  $('.rkb').click(function(){
    if(count == 0){
      $('.rkb').css({"background":'url(./img/rkba.png)'});
      $('.ran').stop().slideDown();
      count ++;
    }
    else if(count == 1){
      $('.rkb').css({"background":'url(./img/rkb.png)'});
      $('.ran').stop().slideUp();
      count = 0;
    }
  });
});