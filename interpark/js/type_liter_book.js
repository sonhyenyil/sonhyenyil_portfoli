$(function(){
    //문학분야 책1
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"어둠이 걷힌 자리엔" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(0).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(0).append("<p>"+ msg.documents[0].price+"원 +850P</p>");
    });
    //문학분야 책2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나를 마릴린 먼로라고 하자" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(1).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(1).append("<p>"+ msg.documents[0].price+"원 +700P</p>");
    });
    //문학분야 책3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"회색여인" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(2).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(2).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(2).append("<p>"+ msg.documents[0].price+"원 +670P</p>");
    });
    //문학분야 책4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"로어 세트" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(3).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(3).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(3).append("<p>"+ msg.documents[0].price+"원 +1730P</p>");
    });
    //문학분야 책5    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"다채로운 일상" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(4).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(4).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(4).append("<p>"+ msg.documents[0].price+"원 +850P</p>");
    });
    //문학분야 책6
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나에게 고맙다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(5).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(5).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(5).append("<p>"+ msg.documents[0].price+"원 +800P</p>");
    });
    //문학분야 책7
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"혼자 점심 먹는 사람을 위한 산문" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(6).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(6).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(6).append("<p>"+ msg.documents[0].price+"원 +700P</p>");
    });
    //문학분야 책8
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"한자와 나오키: 아를르캥과 어릿광대" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(7).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(7).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(7).append("<p>"+ msg.documents[0].price+"원 +790P</p>");
    });
    //문학분야 책9
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"요즘 사는 맛" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(8).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(8).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(8).append("<p>"+ msg.documents[0].price+"원 +800P</p>");
    });
    //문학분야 책10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"알코올 생존자" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(9).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(9).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(9).append("<p>"+ msg.documents[0].price+"원 +670P</p>");
    });
    //문학분야 책11
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"주술회전. 18: 열기" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.literature1 .book').eq(10).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(10).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(10).append("<p>"+ msg.documents[0].price+"원 +250P</p>");
    });
    //문학분야 책12
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"아무렇지 않다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {
            
            $('.literature1 .book').eq(11).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.literature1 .book').eq(11).append("<p>"+msg.documents[0].title+"</p>");
            $('.literature1 .book').eq(11).append("<p>"+ msg.documents[0].price+"원 +820P</p>");
    });
                                    
});