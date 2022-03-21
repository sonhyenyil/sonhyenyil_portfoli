$(function(){
    //유아/아동 분야 책1
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"설민석의 삼국지 대모험. 6:강동의 호랑이" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(0).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(0).append("<p>"+ msg.documents[0].price+"원 +550P</p>");
    });
    //유아/아동 분야 책2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"에그박사. 6" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {
        	$('.kid_child .book').eq(1).css('position','relative');
            $('.kid_child .book').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(1).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(1).append("<p>"+ msg.documents[0].price+"원 +670P</p>");
            $('.kid_child .book').eq(1).append("<div class='ball_wrap'><img class='ball' src='img/main/type_icon.png'><p>예약판매</p></div>")
            $('.kid_child .book').eq(1).append("<div class='book_line'>3.10 출간예정</div>")        
    });
    //유아/아동 분야 책3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나쁜 말 사전" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(2).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(2).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(2).append("<p>"+ msg.documents[0].price+"원 +650P</p>");
    });
    //유아/아동 분야 책4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"쉿! 안개초등학교. 3:알에 갇힌 아이들" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(3).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(3).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(3).append("<p>"+ msg.documents[0].price+"원 +600P</p>");
    });
    //유아/아동 분야 책5    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"친절한 행동" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(4).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(4).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(4).append("<p>"+ msg.documents[0].price+"원 +700P</p>");
    });
    //유아/아동 분야 책6
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"달 가루" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(5).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(5).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(5).append("<p>"+ msg.documents[0].price+"원 +700P</p>");
    });
    //유아/아동 분야 책7
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나와 다른 너에게" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(6).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(6).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(6).append("<p>"+ msg.documents[0].price+"원 +650P</p>");
    });
    //유아/아동 분야 책8
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"프레드가 옷을 입어요" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(7).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(7).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(7).append("<p>"+ msg.documents[0].price+"원 +700P</p>");
    });
    //유아/아동 분야 책9
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"채소 마스터 클래스" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(8).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(8).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(8).append("<p>"+ msg.documents[0].price+"원 +1150P</p>");
    });
    //유아/아동 분야 책10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"라라브레드 브런치 카페 레시피북" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(9).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(9).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(9).append("<p>"+ msg.documents[0].price+"원 +1000P</p>");
    });
    //유아/아동 분야 책11
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"눈물 쏙 매운 떡볶이" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.kid_child .book').eq(10).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(10).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(10).append("<p>"+ msg.documents[0].price+"원 +600P</p>");
    });
    //유아/아동 분야 책12
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"처음 한국사. 9 일제 강점기" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {
            
            $('.kid_child .book').eq(11).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.kid_child .book').eq(11).append("<p>"+msg.documents[0].title+"</p>");
            $('.kid_child .book').eq(11).append("<p>"+ msg.documents[0].price+"원 +600P</p>");
    });
                                    
});