$(function(){
  //베스트 카테고리의 카테고리 클릭시 클릭된 카테고리의 색을 변경시켜주는 함수
  $('#section_top_list ul li').click(function(){
    $('#section_top_list ul li').css({"background-color":"white"});
    $(this).css({"background-color":"lightgray"});
  });
  //차후 카테고리별 itemlist를 추가하고 변경해주는 코드 추가필요
});