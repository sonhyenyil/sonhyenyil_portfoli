$(function(){
  //list 1의 책 목록
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"대통령의 염장이" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.month_book_list .list_1 .img_box').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.month_book_list .list_1 .text_box').eq(0).append("<div class='star_wrap'><div class='star1'><div></div></div><span class='score'>10</span><div>");
            $('.month_book_list .list_1 .text_box').eq(0).append("<h3>"+ msg.documents[0].title+"</h3>");
            $('.month_book_list .list_1 .text_box').eq(0).append("<p class='before_price'>"+ msg.documents[0].price+"원</p>");
            //변화된 가격을 위해서 p를 붙이고 수동으로 가격을 추가해줌
            $('.month_book_list .list_1 .text_box').eq(0).append("<p>13,320원</p>");

            //별점을 위한 구문
            $('.month_book_list .list_1 .text_box .star1 > div').width('100%');
    });
  
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"부와 성공을 부르는 12가지 원칙" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.month_book_list .list_1 .img_box').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.month_book_list .list_1 .text_box').eq(1).append("<div class='star_wrap'><div class='star2'><div></div></div><span class='score'>10</span><div>");
            $('.month_book_list .list_1 .text_box').eq(1).append("<h3>"+ msg.documents[0].title+"</h3>");
            $('.month_book_list .list_1 .text_box').eq(1).append("<p class='before_price'>"+ msg.documents[0].price+"원</p>");
            //변화된 가격을 위해서 p를 붙이고 수동으로 가격을 추가해줌
            $('.month_book_list .list_1 .text_box').eq(1).append("<p>13,500원</p>");

            //별점을 위한 구문
            $('.month_book_list .list_1 .text_box .star2 > div').width('100%');
    });
  //list2의 책 목록
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"비전공자도 이해할 수 있는 AI 지식" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.month_book_list .list_2 .img_box').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.month_book_list .list_2 .text_box').eq(0).append("<div class='star_wrap'><div class='star1'><div></div></div><span class='score'>10</span><div>");
            $('.month_book_list .list_2 .text_box').eq(0).append("<h3>"+ msg.documents[0].title+"</h3>");
            $('.month_book_list .list_2 .text_box').eq(0).append("<p class='before_price'>"+ msg.documents[0].price+"원</p>");
            $('.month_book_list .list_2 .text_box').eq(0).append("<p>17,820원</p>");

            //별점을 위한 구문 star 내부의 div의 width에 따라서 노란색의 범위가 조정됨
            $('.month_book_list .list_2 .text_box .star1 > div').width('100%');
    });
  
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"낭만 강아지 봉봉" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.month_book_list .list_2 .img_box').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.month_book_list .list_2 .text_box').eq(1).append("<div class='star_wrap'><div class='star2'><div></div></div><span class='score'>10</span><div>");
            $('.month_book_list .list_2 .text_box').eq(1).append("<h3>"+ msg.documents[0].title+"</h3>");
            $('.month_book_list .list_2 .text_box').eq(1).append("<p class='before_price'>"+ msg.documents[0].price+"원</p>");
            //변화된 가격을 위해서 p를 붙이고 수동으로 가격을 추가해줌
            $('.month_book_list .list_2 .text_box').eq(1).append("<p>10,800원</p>");

            //별점을 위한 구문
            $('.month_book_list .list_2 .text_box .star2 > div').width('100%');
    });

    //list3의 책 목록
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나에게 고맙다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.month_book_list .list_3 .img_box').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.month_book_list .list_3 .text_box').eq(0).append("<div class='star_wrap'><div class='star1'><div></div></div><span class='score'>10</span><div>");
            $('.month_book_list .list_3 .text_box').eq(0).append("<h3>"+ msg.documents[0].title+"</h3>");
            $('.month_book_list .list_3 .text_box').eq(0).append("<p class='before_price'>"+ msg.documents[0].price+"원</p>");
            //변화된 가격을 위해서 p를 붙이고 수동으로 가격을 추가해줌
            $('.month_book_list .list_3 .text_box').eq(0).append("<p>14,400원</p>");

            //별점을 위한 구문 star 내부의 div의 width에 따라서 노란색의 범위가 조정됨
            $('.month_book_list .list_3 .text_box .star1 > div').width('100%');
    });
  
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"슈퍼 해빗" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.month_book_list .list_3 .img_box').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.month_book_list .list_3 .text_box').eq(1).append("<div class='star_wrap'><div class='star2'><div></div></div><span class='score'>9.6</span><div>");
            $('.month_book_list .list_3 .text_box').eq(1).append("<h3>"+ msg.documents[0].title+"</h3>");
            $('.month_book_list .list_3 .text_box').eq(1).append("<p class='before_price'>"+ msg.documents[0].price+"원</p>");
            //변화된 가격을 위해서 p를 붙이고 수동으로 가격을 추가해줌
            $('.month_book_list .list_3 .text_box').eq(1).append("<p>16,650원</p>");

            //별점을 위한 구문
            $('.month_book_list .list_3 .text_box .star2 > div').width('92%');
    });

    //list4의 책 목록
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나를 알고 싶을 때 뇌과학을 공부합니다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.month_book_list .list_4 .img_box').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.month_book_list .list_4 .text_box').eq(0).append("<div class='star_wrap'><div class='star1'><div></div></div><span class='score'>10</span><div>");
            $('.month_book_list .list_4 .text_box').eq(0).append("<h3>"+ msg.documents[0].title+"</h3>");
            $('.month_book_list .list_4 .text_box').eq(0).append("<p class='before_price'>"+ msg.documents[0].price+"원</p>");
            //변화된 가격을 위해서 p를 붙이고 수동으로 가격을 추가해줌
            $('.month_book_list .list_4 .text_box').eq(0).append("<p>17,820원</p>");

            //별점을 위한 구문 star 내부의 div의 width에 따라서 노란색의 범위가 조정됨
            $('.month_book_list .list_4 .text_box .star1 > div').width('100%');
    });
  
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"하루라도 공부만 할 수 있다면" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.month_book_list .list_4 .img_box').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.month_book_list .list_4 .text_box').eq(1).append("<div class='star_wrap'><div class='star2'><div></div></div><span class='score'>9.9</span><div>");
            $('.month_book_list .list_4 .text_box').eq(1).append("<h3>"+ msg.documents[0].title+"</h3>");
            $('.month_book_list .list_4 .text_box').eq(1).append("<p class='before_price'>"+ msg.documents[0].price+"원</p>");
            //변화된 가격을 위해서 p를 붙이고 수동으로 가격을 추가해줌
            $('.month_book_list .list_4 .text_box').eq(1).append("<p>10,800원</p>");

            //별점을 위한 구문
            $('.month_book_list .list_4 .text_box .star2 > div').width('96%');
    });    

});