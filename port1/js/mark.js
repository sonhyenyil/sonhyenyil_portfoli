$(function(){
  //위쪽 협력업체의 로고가 일정시간마다 변하게 해주는 함수
  let mark_count = 0;
  function mark_change(){
  	$('.mark a img').stop().hide();
  	$('.mark a img').eq(mark_count).stop().fadeIn();
    mark_count++;
    if(mark_count > $('.mark a:last').index()){
  	   mark_count = 0;
    }
  }
  setInterval(mark_change,9000);

});
