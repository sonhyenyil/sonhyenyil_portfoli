$(function(){
  let slide_count =0;
  //prev 클릭시 위쪽 구체의 위치변경 및 이미지 변경
  $('.reco2_content > .next').click(function(){
  	slide_count++;
  	if(slide_count>1){
  		slide_count=0;
  	}
    $('.reco2_content a:first').appendTo('.reco2_img');
    $('.reco2_content .circle').css('background-color','#fff');
    $('.reco2_content .circle').eq(slide_count).css('background-color','#F77652');
  });
  //next 클릭시 위쪽 구체의 위치변경 및 이미지 변경
  $('.reco2_content > .prev').click(function(){
  	slide_count--;
  	if(slide_count<0){
  		slide_count =1;
  	}
    $('.reco2_content a:last').prependTo('.reco2_img');
    $('.reco2_content').css({marginLeft:0});
    $('.reco2_content .circle').css('background-color','#fff');
    $('.reco2_content .circle').eq(slide_count).css('background-color','#F77652');
  });

  $('.reco2_content > .circle').eq(0).click(function(){
    slide_count = 0;
    $('.reco2_content a:first img').attr('src','img/main/main_ad6.jpg');
    $('.reco2_content a:last img').attr('src','img/main/main_ad7.jpg');
    $('.reco2_content .circle').css('background-color','#fff');
    $('.reco2_content .circle').eq(slide_count).css('background-color','#F77652');
  });
  $('.reco2_content > .circle').eq(1).click(function(){
  	slide_count = 1;
  	$('.reco2_content a:first img').attr('src','img/main/main_ad7.jpg');
    $('.reco2_content a:last img').attr('src','img/main/main_ad6.jpg');
    $('.reco2_content .circle').css('background-color','#fff');
    $('.reco2_content .circle').eq(slide_count).css('background-color','#F77652');
  });
  //화살표에 마우스가 올라가면 바꿔주는 구문
  $('.reco2_content > .prev').mouseover(function(){
  $('.reco2_content > .prev > img').attr('src','img/main/slide_left_a.png');
 }).mouseout(function(){
  $('.reco2_content > .prev > img').attr('src','img/main/slide_left.png');
 });

 $('.reco2_content > .next').mouseover(function(){
  $('.reco2_content > .next > img').attr('src','img/main/slide_right_a.png');
 }).mouseout(function(){
  $('.reco2_content > .next > img').attr('src','img/main/slide_right.png');
 });
});