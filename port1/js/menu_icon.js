$(function(){
   //menu 아이콘에 마우스를 올리면 아래에 카테고리별 리스트가 나오게 해주는 함수
   $('.menu_icon').mouseenter(function(){
    $('.toplist_detail_wrap').stop().fadeIn("slow");
    $('.menu_icon').css({"cursor":"pointer"});
  }).mouseleave(function(){
    $('.toplist_detail_wrap').hide();
  }); 
});