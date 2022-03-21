$(function(){
    //경제/실용 분야 책1
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"오르는 주식을 사들이는 차트매매법" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(0).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(0).append("<p>"+ msg.documents[0].price+"원 +950P</p>");
    });
    //경제/실용 분야 책2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"구독, 자유를 팝니다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(1).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(1).append("<p>"+ msg.documents[0].price+"원 +850P</p>");
    });
    //경제/실용 분야 책3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"포스트 메타버스" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(2).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(2).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(2).append("<p>"+ msg.documents[0].price+"원 +900P</p>");
    });
    //경제/실용 분야 책4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"부의 해답" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(3).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(3).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(3).append("<p>"+ msg.documents[0].price+"원 +1000P</p>");
    });
    //경제/실용 분야 책5    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"무례한 사람에게 휘둘리지 않는 법" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(4).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(4).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(4).append("<p>"+ msg.documents[0].price+"원 +750P</p>");
    });
    //경제/실용 분야 책6
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"메타 리치의 시대" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(5).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(5).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(5).append("<p>"+ msg.documents[0].price+"원 +800P</p>");
    });
    //경제/실용 분야 책7
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"데이터와 통계로 예측한 앞으로 20년 돈 버는 법" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(6).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(6).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(6).append("<p>"+ msg.documents[0].price+"원 +890P</p>");
    });
    //경제/실용 분야 책8
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"머니카피: 수익을 10배로 복사하는 투자의 기술" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(7).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(7).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(7).append("<p>"+ msg.documents[0].price+"원 +900P</p>");
    });
    //경제/실용 분야 책9
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"사랑합니다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(8).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(8).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(8).append("<p>"+ msg.documents[0].price+"원 +850P</p>");
    });
    //경제/실용 분야 책10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"암을 이기는 최고의 식사법" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.eco_pra .book').eq(9).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(9).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(9).append("<p>"+ msg.documents[0].price+"원 +900P</p>");
    });
    //경제/실용 분야 책11
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"2022 K리그 스카우팅리포트" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {
            $('.eco_pra .book').eq(10).css('position','relative');
            $('.eco_pra .book').eq(10).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(10).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(10).append("<p>"+ msg.documents[0].price+"원 +1000P</p>");
            $('.eco_pra .book').eq(10).append("<div class='ball_wrap'><img class='ball' src='img/main/type_icon.png'><p>예약판매</p></div>")
            $('.eco_pra .book').eq(10).append("<div class='book_line'>3.08 출간예정</div>")
    });
    //경제/실용 분야 책12
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"좋은걸 보면 네 생각이 나" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {
            
            $('.eco_pra .book').eq(11).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.eco_pra .book').eq(11).append("<p>"+msg.documents[0].title+"</p>");
            $('.eco_pra .book').eq(11).append("<p>"+ msg.documents[0].price+"원 +720P</p>");
    });
                                    
});