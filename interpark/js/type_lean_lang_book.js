$(function(){
    //학습/어학 분야 책1
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"2022 이유진 국어 필사즉생 모의고사: 백일기도" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(0).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(0).append("<p>"+ msg.documents[0].price+"원 +850P</p>");
    });
    //분야 책2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"2023대비 형법논점 Capsule" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(1).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(1).append("<p>"+ msg.documents[0].price+"원 +310P</p>");
    });
    //분야 책3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"고득점을 위한 로스쿨 민사재판실무 판례집:변호사시험 대비" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(2).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(2).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(2).append("<p>"+ msg.documents[0].price+"원 +2200P</p>");
    });
    //분야 책4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"AI시대의 컴퓨터 개론" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(3).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(3).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(3).append("<p>"+ msg.documents[0].price+"원 +870P</p>");
    });
    //분야 책5    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"술술 말할 수 있게 되는 일본어뱅크 스루스루 일본어" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(4).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(4).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(4).append("<p>"+ msg.documents[0].price+"원 +450P</p>");
    });
    //분야 책6
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"스타트 잉글리시(EBS 방송교재 2022년 3월호)" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(5).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(5).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(5).append("<p>"+ msg.documents[0].price+"원 +350P</p>");
    });
    //분야 책7
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"열공 전과목 단원평가 초등3-1(2022)" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(6).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(6).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(6).append("<p>"+ msg.documents[0].price+"원 +800P</p>");
    });
    //분야 책8
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"초등학교 사회 3-1 자습서&평가문제집(2022)" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(7).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(7).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(7).append("<p>"+ msg.documents[0].price+"원 +750P</p>");
    });
    //분야 책9
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"시험비법 수학전략 중학2-1(2022)" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(8).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(8).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(8).append("<p>"+ msg.documents[0].price+"원 +P</p>");
    });
    //분야 책10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"다담 언어와 매체 800제(2022)" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(9).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(9).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(9).append("<p>"+ msg.documents[0].price+"원 +900P</p>");
    });
    //분야 책11
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"세계시민을 위한 없는 나라 지리 이야기" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.lean_lang .book').eq(10).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(10).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(10).append("<p>"+ msg.documents[0].price+"원 +840P</p>");
    });
    //분야 책12
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"살면서 꼭 읽어야 할 톨스토이 단편선" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {
            
            $('.lean_lang .book').eq(11).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.lean_lang .book').eq(11).append("<p>"+msg.documents[0].title+"</p>");
            $('.lean_lang .book').eq(11).append("<p>"+ msg.documents[0].price+"원 +650P</p>");
    });
                                    
});