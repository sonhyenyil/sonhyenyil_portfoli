$(function(){
 
  //portfolio의 각 지역을 클릭시 클릭된 글씨의 크기와 이미지를 변경해주는 함수
  let port_count = 0;
  $('.place li').eq(0).click(function(){
    clearInterval(port_c);
    port_c = setInterval(port_change,5000);
    $('.p_img').css({"opacity":"0"}).attr("src", "img/port_1.jpg").stop().animate({"opacity":"1"},800);
    $('.place li').css({"font-size":"17px"});
    $(this).css({"font-size":"25px"});
    port_count=0;
  });

  $('.place li').eq(1).click(function(){
    clearInterval(port_c);
    port_c = setInterval(port_change,5000);
    $('.p_img').css({"opacity":"0"}).attr("src", "img/port_2.jpg").stop().animate({"opacity":"1"},800);
    $('.place li').css({"font-size":"17px"});
    $(this).css({"font-size":"25px"});
    port_count=1;
  });

  $('.place li').eq(2).click(function(){
    clearInterval(port_c);
    port_c = setInterval(port_change,5000);
    $('.p_img').css({"opacity":"0"}).attr("src", "img/port_3.jpg").stop().animate({"opacity":"1"},800);
    $('.place li').css({"font-size":"17px"});
    $(this).css({"font-size":"25px"});
    port_count=2;
  });

  $('.place li').eq(3).click(function(){
    clearInterval(port_c);
    port_c = setInterval(port_change,5000);
    $('.p_img').css({"opacity":"0"}).attr("src", "img/port_4.jpg").stop().animate({"opacity":"1"},800);
    $('.place li').css({"font-size":"17px"});
    $(this).css({"font-size":"25px"});
    port_count=3;
  });
 
  //일정 시간마다 이미지와 글씨 크기를 자동으로 바꿔주기 위한 함수
  function port_change(){
    port_count++
    if(port_count>$('.place li:last').index()){
      port_count = 0;
    }
    $('.p_img').css({"opacity":"0"}).attr("src", "img/port_"+(port_count+1)+".jpg").stop().animate({"opacity":"1"});
    $('.place li').css({"font-size":"17px"});
    $('.place li').eq(port_count).css({"font-size":"25px"});
  }
  let port_c = setInterval(port_change,5000);
  
});