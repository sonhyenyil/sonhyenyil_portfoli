$(function(){
  //몇번 banner인지를 확인하기 위한 변수
  let banner_count = 0;
  
  //배너가 자동으로 동작하기 위한 interval을 위한 함수
  function banner_slide(){
    banner_count++;
    if(banner_count > $('.banner_list > li:last').index()){
      banner_count = 0;
    }
    console.log(banner_count);

  	$('.banner_list > li').hide();
  	$('.banner_list > li').eq(banner_count).show();
    slider_bottom();
    slider_num();
  }
  //이전 버튼을 클릭했을 때 호출되는 함수
  function prev(){
  	clearInterval(slide);
  	  banner_count--;
  	  if(banner_count < 0 ){
  	  	banner_count = $('.banner_list > li:last').index();
  	  }
  	  $('.banner_list > li').hide();
  	  $('.banner_list > li').eq(banner_count).show();
      slider_num();
  	  slide = setInterval(banner_slide,5000);
  }
  //다음 버튼을 클릭했을때 호출되는 함수
  function next(){
  	  clearInterval(slide);
  	  banner_count++;
  	  if(banner_count > $('.banner_list > li:last').index()){
  	  	banner_count = 0;
  	  }
  	  $('.banner_list > li').hide();
  	  $('.banner_list > li').eq(banner_count).show();
      slider_num();
  	  slide = setInterval(banner_slide,5000);
  }
 let slide = setInterval(banner_slide,5000);
 
 //클릭 함수를 호출해주는 구문
 $('.banner > .next').click(function(){
 	next();
  slider_bottom()
  slider_bottom_over();
 });
 $('.banner > .prev').click(function(){
 	prev();
  slider_bottom();
  slider_bottom_over();
 });

 //마우스가 올라가면 배너의 화살표 색을 바꿔주는 구문
 $('.banner > .prev').mouseover(function(){
 	$('.banner > .prev > img').attr('src','img/main/slide_left_a.png');
 }).mouseout(function(){
 	$('.banner > .prev > img').attr('src','img/main/slide_left.png');
 });

 $('.banner > .next').mouseover(function(){
 	$('.banner > .next > img').attr('src','img/main/slide_right_a.png');
 }).mouseout(function(){
 	$('.banner > .next > img').attr('src','img/main/slide_right.png');
 });

//특정 배너로 진입시 아래에 있는 slide_bottom을 조정하는 함수
function slider_bottom(){
  if(banner_count == 0 || banner_count ==7){
    $('.slider_bottom > ul > li').css('border-top-style','hidden');
    $('.slider_bottom > ul > li').eq(0).css('border-top-style','solid');
  }
  if(banner_count == 8){
    $('.slider_bottom > ul > li').css('border-top-style','hidden');
    $('.slider_bottom > ul > li').eq(1).css('border-top-style','solid');
  }
  if(banner_count == $('.banner_list > li:last').index()-1 || banner_count == 9){
    $('.slider_bottom > ul > li').css('border-top-style','hidden');
    $('.slider_bottom > ul > li').eq(2).css('border-top-style','solid');
  }
  else if(banner_count == $('.banner_list > li:last').index()){
    $('.slider_bottom > ul > li').css('border-top-style','hidden');
    $('.slider_bottom > ul > li').eq(3).css('border-top-style','solid');
  } 
}
//slider_bottom글씨에 마우스를 올리면 주기위한 함수 
  function slider_bottom_over(){
    $('.slider_bottom > ul > li').eq(0).mouseover(function(){
      banner_count = 0;
      $('.slider_bottom > ul > li').css('border-top-style','hidden');
      $('.slider_bottom > ul > li').eq(0).css('border-top-style','solid');
      clearInterval(slide);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
      slider_num();
      slide = setInterval(banner_slide,5000);
    });
    $('.slider_bottom > ul > li').eq(1).mouseover(function(){
      banner_count = 8;
      $('.slider_bottom > ul > li').css('border-top-style','hidden');
      $('.slider_bottom > ul > li').eq(1).css('border-top-style','solid');
      clearInterval(slide);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
      slider_num();
      slide = setInterval(banner_slide,5000);
    });
    $('.slider_bottom > ul > li').eq(2).mouseover(function(){
      banner_count = 9;
      $('.slider_bottom > ul > li').css('border-top-style','hidden');
      $('.slider_bottom > ul > li').eq(2).css('border-top-style','solid');
      clearInterval(slide);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
      slider_num();
      slide = setInterval(banner_slide,5000);
    });
    $('.slider_bottom > ul > li').eq(3).mouseover(function(){
      banner_count = 14;
      $('.slider_bottom > ul > li').css('border-top-style','hidden');
      $('.slider_bottom > ul > li').eq(3).css('border-top-style','solid');
      clearInterval(slide);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
      slider_num();
      slide = setInterval(banner_slide,5000);
    });
  }
  function slider_num(){
    hot_event();
    reco_event();
  }
  //hot event의 번호가 필요할때 보이게 하는 구문
  function hot_event(){
    if(banner_count == 0 || banner_count == 7) {
      $('.hot_event').show();

    } else if(banner_count > 7){
      $('.hot_event').hide();
    }
    //hot event의 현재 선택된 슬라이드 번호가 강조되게 해주는 구문
    $('.hot_event > li').css('border-style', 'hidden');
    $('.hot_event > li').css('background', 'rgba(151, 151, 151, 0.6)');
    $('.hot_event > li').eq(banner_count).css('border','1px solid #666');
    $('.hot_event > li').eq(banner_count).css('background', 'rgba(151, 151, 151, 1.0)');
  }
  //reco event의 번호가 필요할때 보이게 하는 구문
  function reco_event(){
    if(banner_count == 9 || banner_count == 13) {
      $('.reco_event').show();
    } else if(banner_count <= 8 || banner_count == 14){
      $('.reco_event').hide();
    }
    //reco_event의 현재 선택된 슬라이드의 번호가 강조되게 해주는 구문
    if(banner_count == 9){
      $('.reco_event > li').css('border-style', 'hidden');
      $('.reco_event > li').css('background', 'rgba(151, 151, 151, 0.6)');
      $('.reco_event > li').eq(0).css('border','1px solid #666');
      $('.reco_event > li').eq(0).css('background', 'rgba(151, 151, 151, 1.0)');
    }
    if(banner_count == 10){
      $('.reco_event > li').css('border-style', 'hidden');
      $('.reco_event > li').css('background', 'rgba(151, 151, 151, 0.6)');
      $('.reco_event > li').eq(1).css('border','1px solid #666');
      $('.reco_event > li').eq(1).css('background', 'rgba(151, 151, 151, 1.0)');
    }
    if(banner_count == 11){
      $('.reco_event > li').css('border-style', 'hidden');
      $('.reco_event > li').css('background', 'rgba(151, 151, 151, 0.6)');
      $('.reco_event > li').eq(2).css('border','1px solid #666');
      $('.reco_event > li').eq(2).css('background', 'rgba(151, 151, 151, 1.0)');
    }
    if(banner_count == 12){
      $('.reco_event > li').css('border-style', 'hidden');
      $('.reco_event > li').css('background', 'rgba(151, 151, 151, 0.6)');
      $('.reco_event > li').eq(3).css('border','1px solid #666');
      $('.reco_event > li').eq(3).css('background', 'rgba(151, 151, 151, 1.0)');
    }
    if(banner_count == 13){
      $('.reco_event > li').css('border-style', 'hidden');
      $('.reco_event > li').css('background', 'rgba(151, 151, 151, 0.6)');
      $('.reco_event > li').eq(4).css('border','1px solid #666');
      $('.reco_event > li').eq(4).css('background', 'rgba(151, 151, 151, 1.0)');
    }
    
  }
  function hot_event_over(){
    $('.banner > .hot_event > li').eq(0).mouseover(function(){
      banner_count = 0;
      clearInterval(slide);
      hot_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .hot_event > li').eq(1).mouseover(function(){
      banner_count = 1;
      clearInterval(slide);
      hot_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .hot_event > li').eq(2).mouseover(function(){
      banner_count = 2;
      clearInterval(slide);
      hot_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .hot_event > li').eq(3).mouseover(function(){
      banner_count = 3;
      clearInterval(slide);
      hot_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .hot_event > li').eq(4).mouseover(function(){
      banner_count = 4;
      clearInterval(slide);
      hot_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .hot_event > li').eq(5).mouseover(function(){
      banner_count = 5;
      clearInterval(slide);
      hot_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .hot_event > li').eq(6).mouseover(function(){
      banner_count = 6;
      clearInterval(slide);
      hot_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .hot_event > li').eq(7).mouseover(function(){
      banner_count = 7;
      clearInterval(slide);
      hot_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

  }
  function reco_event_over(){
    $('.banner > .reco_event > li').eq(0).mouseover(function(){
      banner_count = 9;
      clearInterval(slide);
      reco_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .reco_event > li').eq(1).mouseover(function(){
      banner_count = 10;
      clearInterval(slide);
      reco_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .reco_event > li').eq(2).mouseover(function(){
      banner_count = 11;
      clearInterval(slide);
      reco_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });

    $('.banner > .reco_event > li').eq(3).mouseover(function(){
      banner_count = 12;
      clearInterval(slide);
      reco_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });
    $('.banner > .reco_event > li').eq(4).mouseover(function(){
      banner_count = 13;
      clearInterval(slide);
      reco_event();
      slide = setInterval(banner_slide,5000);
      $('.banner_list > li').hide();
      $('.banner_list > li').eq(banner_count).show();
    });
  }
  //기본 실행이 필요한 함수들 호출
  slider_bottom_over();
  slider_num();
  hot_event_over();
  reco_event_over();
});
