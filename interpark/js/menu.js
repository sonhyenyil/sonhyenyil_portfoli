$(function(){
  //전체 카테리 클릭시 slideToggle하게 만드는 메뉴
  let slide_count = 0;
  $('.all_categori_wrap').click(function(){
  	slide_count++;
  	if(slide_count == 1){
    $('.all_categori_wrap img').eq(1).attr('src','img/common/menu_icon_up.png');
    $('.all_categori').stop().slideDown();
    } else if(slide_count == 2){
      slide_count = 0;
      $('.all_categori_wrap img').eq(1).attr('src','img/common/menu_icon_down.png');
      $('.all_categori').stop().slideUp();
    }
  });

  $('.all_categori_wrap').mouseover(function(){
      $('.all_categori_wrap img').eq(0).attr('src','img/common/menu_icon_a.png');
        if(slide_count == 1){
  	  $('.all_categori_wrap img').eq(1).attr('src','img/common/menu_icon_up_a.png');
  	} else if(slide_count == 0){
  	  	$('.all_categori_wrap img').eq(1).attr('src','img/common/menu_icon_down.png');
  	  }
  }).mouseout(function(){
  	  $('.all_categori_wrap img').eq(0).attr('src','img/common/menu_icon.png');
  	  if(slide_count ==1){
  	    $('.all_categori_wrap img').eq(1).attr('src','img/common/menu_icon_up.png');
  	  } else if(slide_count == 0){
  	  	 $('.all_categori_wrap img').eq(1).attr('src','img/common/menu_icon_down.png');
  	  }
  });

  //x버튼 클릭시 메뉴창이 닫히게 하는 코드
  $('.x_btn').click(function(){
  	$('.all_categori').stop().slideUp();
  	$('.all_categori_wrap img').eq(1).attr('src','img/common/menu_icon_down.png');
  });
});