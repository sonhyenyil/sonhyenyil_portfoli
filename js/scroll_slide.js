  //슬라이드 구현
 let page = 1;

  $(function(){
  //실행시 첫 화면인 Home에 사이드바 css 조정
  $('.sidebar > ul > li:first > a').css('color','gold');
  $('.sidebar > ul > li:first').css('background-color','rgba(151,151,151,0.8)');
  
  $('.sidebar > ul > li > a').eq(0).click(function(){
    page = 1;
    $('.sidebar > ul > li > a').css('color','#000');
    $('.sidebar > ul > li').css('background-color','rgba(200,200,200,0.8)');
    $('.sidebar > ul > li > a').eq(0).css('color','gold');
    $('.sidebar > ul > li').eq(0).css('background-color','rgba(151,151,151,0.8)');
    console.log(page);
  });

  $('.sidebar > ul > li > a').eq(1).click(function(){
    page = 2;
    $('.sidebar > ul > li > a').css('color','#000');
    $('.sidebar > ul > li').css('background-color','rgba(200,200,200,0.8)');
    $('.sidebar > ul > li > a').eq(1).css('color','gold');
    $('.sidebar > ul > li').eq(1).css('background-color','rgba(151,151,151,0.8)');
    console.log(page);
  });

  $('.sidebar > ul > li > a').eq(2).click(function(){
    page = 3;
    $('.sidebar > ul > li > a').css('color','#000');
    $('.sidebar > ul > li').css('background-color','rgba(200,200,200,0.8)');
    $('.sidebar > ul > li > a').eq(2).css('color','gold');
    $('.sidebar > ul > li').eq(2).css('background-color','rgba(151,151,151,0.8)');
    console.log(page);
  });

  $('.sidebar > ul > li > a').eq(3).click(function(){
    page = 4;
    $('.sidebar > ul > li > a').css('color','#000');
    $('.sidebar > ul > li').css('background-color','rgba(200,200,200,0.8)');
    $('.sidebar > ul > li > a').eq(3).css('color','gold');
    $('.sidebar > ul > li').eq(3).css('background-color','rgba(151,151,151,0.8)');
    console.log(page);
  });

  $('.sidebar > ul > li > a').eq(4).click(function(){
    page = 5;
    $('.sidebar > ul > li > a').css('color','#000');
    $('.sidebar > ul > li').css('background-color','rgba(200,200,200,0.8)');
    $('.sidebar > ul > li > a').eq(4).css('color','gold');
    $('.sidebar > ul > li').eq(4).css('background-color','rgba(151,151,151,0.8)');
    console.log(page);
  });

  $('.sidebar > ul > li > a').eq(5).click(function(){
    page = 6;
    $('.sidebar > ul > li > a').css('color','#000');
    $('.sidebar > ul > li').css('background-color','rgba(200,200,200,0.8)');
    $('.sidebar > ul > li > a').eq(5).css('color','gold');
    $('.sidebar > ul > li').eq(5).css('background-color','rgba(151,151,151,0.8)');
    console.log(page);
  });
});
  window.addEventListener("wheel", function(e){
  e.preventDefault();
  },{passive : false});

  let $html = $("html");
  let lastPage = $("#section_6").length;
  $html.animate({scrollTop:0},40);

  $(window).on("wheel", function(e){

    if($html.is(":animated")) return;

    if(e.originalEvent.deltaY > 0){
        if(page == lastPage) return;
        page++;
    }else if(e.originalEvent.deltaY < 0){
        if(page == 1) return;

        page--;
    }
    var posTop = (page-1) * $('#section_1').height();

    if(page > $('.sidebar > ul > li:last').index()+1){
      page = $('.sidebar > ul > li:last').index()+1;
    }
    console.log(page);
    $html.animate({scrollTop : posTop});

    //슬라이드 실행시 사이드바에서 현재 위치를 나타내기 위한 구문
    $('.sidebar > ul > li > a').css('color','#000');
    $('.sidebar > ul > li').css('background-color','rgba(200,200,200,0.8)');
    $('.sidebar > ul > li > a').eq(page-1).css('color','gold');
    $('.sidebar > ul > li').eq(page-1).css('background-color','rgba(151,151,151,0.8)');
});
