$(function(){

	//페이지가 로딩되면 기본값으로 선택되지 않은 sale클래스 탭과 sale클래스 탭의 더보기를 감춤
	$('.sale').hide();
	$('.sale_top > a > span').hide();
	//특가할인 클릭시 해당되는 상품리스트를 보여주기위한 구문
	$('.sp_sale').click(function(){
	  $('.special_sale').show();
	  $('.sale').hide();
	  $('.sale_top > a > span').hide();
	  $('.sp_sale').css('border-bottom','none');
	  $('.sp_sale').css('border-right','none');
	  $('.n_sale').css('border-bottom','1px solid #000');
	  $('.n_sale').css('border-left','1px solid #000');
	});
	//정가인하 클릭시 해당되는 상품리스트를 보여주기위한 구문
	$('.n_sale').click(function(){
	  $('.sale').show();
	  $('.special_sale').hide();
	  $('.sale_top > a > span').show();
	  $('.n_sale').css('border-bottom','none');
	  $('.n_sale').css('border-left','none');
	  $('.sp_sale').css('border-bottom','1px solid #000');
	  $('.sp_sale').css('border-right','1px solid #000');
	});
	
	//슬라이드를 위한 함수
	function prev(){
	  //특가할인 부분
	  $('.sale_item > .special_sale > li:last').prependTo('.sale_item > .special_sale');
	  $('.sale_item > .special_sale').css('marginLeft','-480px');
	  $('.sale_item > .special_sale').stop().animate({marginLeft:0},500);
	  //정가할인 부분
	  $('.sale_item > .sale > li:last').prependTo('.sale_item > .sale');
	  $('.sale_item > .sale').css('marginLeft','-480px');
	  $('.sale_item > .sale').stop().animate({marginLeft:0},500);
   }
   function next(){
   	//특가할인 부분
   	$('.sale_item > .special_sale').stop().animate({marginLeft:-480},500,function(){
   	  $('.sale_item > .special_sale > li:first').appendTo('.sale_item > .special_sale');
	  $('.sale_item > .special_sale').css('marginLeft','0px');
	});
	//정가할인 부분
	$('.sale_item > .sale').stop().animate({marginLeft:-480},500,function(){
   	  $('.sale_item > .sale > li:first').appendTo('.sale_item > .sale');
	  $('.sale_item > .sale').css('marginLeft','0px');
	});
   }

	//슬라이드 화살표에 마우스가 올라갈경우 변경을 위한 함수
	function slide_arrow(){
	  $('.sale_item > .prev').mouseover(function(){
	  	$('.sale_item > .prev > img').attr('src','img/main/slide_left_a.png');
	  }).mouseout(function(){
	  	$('.sale_item > .prev > img').attr('src','img/main/slide_left.png');
	  });
	  $('.sale_item > .next').mouseover(function(){
	  	$('.sale_item > .next > img').attr('src','img/main/slide_right_a.png');
	  }).mouseout(function(){
	  	$('.sale_item > .next > img').attr('src','img/main/slide_right.png');
	  });  
	}

	//화살표 클릭시 대응되는 함수 호출
	$('.sale_item > .prev').click(function(){
	  prev();
	});

	$('.sale_item > .next').click(function(){
	  next();
	});


	slide_arrow();
});