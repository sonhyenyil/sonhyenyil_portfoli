$(function(){
    //외국 분야 책1
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"노부영 세이펜 Me! Me! ABC" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.foreign .book').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.foreign .book').eq(0).append("<p>"+msg.documents[0].title+"</p>");
            $('.foreign .book').eq(0).append("<p>"+ msg.documents[0].price+"원 +450P</p>");
    });
    //외국 분야 책2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"A Long Walk to Water : Based on a True Story < 우물 파는 아이들> 원서" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.foreign .book').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.foreign .book').eq(1).append("<p>"+msg.documents[0].title+"</p>");
            $('.foreign .book').eq(1).append("<p>"+ msg.documents[0].price+"원 +70P</p>");
    });
    //외국 분야 책3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"Interchange 1 Student Book" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.foreign .book').eq(2).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.foreign .book').eq(2).append("<p>"+msg.documents[0].title+"</p>");
            $('.foreign .book').eq(2).append("<p>"+ msg.documents[0].price+"원 +540P</p>");
    });
    //외국 분야 책4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"Let Me Tell You what I Mean" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.foreign .book').eq(3).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.foreign .book').eq(3).append("<p>"+msg.documents[0].title+"</p>");
            $('.foreign .book').eq(3).append("<p>"+ msg.documents[0].price+"원 +400P</p>");
    });
    //외국 분야 책5    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"Economics (Global Edition)" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.foreign .book').eq(4).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.foreign .book').eq(4).append("<p>"+msg.documents[0].title+"</p>");
            $('.foreign .book').eq(4).append("<p>"+ msg.documents[0].price+"원 +1470P</p>");
    });
    //외국 분야 책6
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"Forever Saul Leiter" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.foreign .book').eq(5).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.foreign .book').eq(5).append("<p>"+msg.documents[0].title+"</p>");
            $('.foreign .book').eq(5).append("<p>"+ msg.documents[0].price+"원 870+P</p>");
    });
                                    
});