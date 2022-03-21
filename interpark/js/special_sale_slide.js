$(function(){
   //위쪽의 카운트의 숫자의 초기값을 설정하는 구문
  let slide_count=1;
  $('.menu_count').text(slide_count);

  function auto_slide(){
    slide_count++;
    if(slide_count > $('.month_book_list li:last').index()+1){
      slide_count = 1;
    }
    $('.menu_count').text(slide_count);
    $('.month_book_list > ul').stop().animate({marginLeft:-472},500,function(){
      $('.month_book_list > ul > li:first').appendTo('.month_book_list > ul');
      $('.month_book_list > ul').css({marginLeft:0});
    });
  }
 
  function prev(){
    //클릭될때마다 interval을 초기화 해주어서 오류 사전방지
    clearInterval(auto);
    auto = setInterval(auto_slide,5000);
    //위쪽의 슬라이드 카운터가 바뀌게 하는 구문
    slide_count--;
    if(slide_count == 0){
      slide_count = 4;
    }
    $('.menu_count').text(slide_count);

  //이전으로 돌아가는 슬라이드를 위한 구문
    $('.month_book_list > ul > li:last').prependTo($('.month_book_list > ul'));
    $('.month_book_list > ul').css({marginLeft:-472});
    $('.month_book_list > ul').stop().animate({marginLeft:0},500);    
  }
  function next(){
    //클릭될때마다 interval을 초기화 해주어서 오류 사전방지
    clearInterval(auto);
    auto = setInterval(auto_slide,5000);

    //다음으로 넘어가는 슬라이드를 위한 구문
    $('.month_book_list > ul').stop().animate({marginLeft:-472},500,function(){

      slide_count++;
        if(slide_count > $('.month_book_list li:last').index()+1){
        slide_count = 1;
      }
      $('.menu_count').text(slide_count);
      $('.month_book_list > ul > li:first').appendTo('.month_book_list > ul');
      $('.month_book_list > ul').css({marginLeft:0});
    });
    //위쪽의 슬라이드 카운터가 바뀌게 하는 구문
  }
  //자동으로 슬라이드를 해주기 위한 Interval
  let auto = setInterval(auto_slide,5000);
 
 //위쪽에서 만든 함수를 각각이 클릭되었을 때 호출하는 구문
  $('.menu > .prev').click(function(){
    prev();
  });
  
  $('.menu > .next').click(function(){
    next();
  });
  //마우스를 올리면 prev와 next의 배경색이 조정되어 어디에 포커스가 되었는지 보여주는 부분
  $('.menu > .prev').mouseover(function(){
    $('.menu > .prev').css('background-color','#eee');
  }).mouseout(function(){
    $('.menu > .prev').css('background-color','#fff');
  });

  $('.menu > .next').mouseover(function(){
    $('.menu > .next').css('background-color','#eee');
  }).mouseout(function(){
    $('.menu > .next').css('background-color','#fff');
  }); 


  $('.month_book_list li > a > div').mouseover(function(){
    $(this).css('border','1px solid #ccc');
    $(this).css('border-radius','2px');
  }).mouseout(function(){
    $(this).css('border-style','none');
  });
});