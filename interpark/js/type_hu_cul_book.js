$(function(){
    //인문/교양 분야 책1
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"비전공자도 이해할 수 있는 AI 지식" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(0).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(0).append("<p>"+ msg.documents[0].price+"원 +990P</p>");
    });
    //인문/교양 분야 책2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"벌거벗은 세계사:인물편" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(1).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(1).append("<p>"+ msg.documents[0].price+"원 +1150P</p>");
    });
    //인문/교양 분야 책3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나뭇잎 수업" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(2).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(2).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(2).append("<p>"+ msg.documents[0].price+"원 +820P</p>");
    });
    //인문/교양 분야 책4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"게놈 오디세이" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(3).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(3).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(3).append("<p>"+ msg.documents[0].price+"원 +1100P</p>");
    });
    //인문/교양 분야 책5    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나는 매일 죽은자의 이름을 묻는다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(4).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(4).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(4).append("<p>"+ msg.documents[0].price+"원 +950P</p>");
    });
    //인문/교양 분야 책6
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"그런 세대는 없다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(5).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(5).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(5).append("<p>"+ msg.documents[0].price+"원 +200p</p>");
    });
    //인문/교양 분야 책7
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"쓸모있는 음악책" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(6).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(6).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(6).append("<p>"+ msg.documents[0].price+"원 +800P</p>");
    });
    //인문/교양 분야 책8
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"바람이 분다, 살아야겠다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(7).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(7).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(7).append("<p>"+ msg.documents[0].price+"원 +850P</p>");
    });
    //인문/교양 분야 책9
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"병자호란:그냥 지는 전쟁은 없다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(8).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(8).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(8).append("<p>"+ msg.documents[0].price+"원 +1100P</p>");
    });
    //인문/교양 분야 책10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"산다는 것 그리고 잘 산다는 것" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(9).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(9).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(9).append("<p>"+ msg.documents[0].price+"원 +850P</p>");
    });
    //인문/교양 분야 책11
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나의 아저씨 세트" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {
            $('.hu_cul .book').eq(10).css('position','relative');
            $('.hu_cul .book').eq(10).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(10).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(10).append("<p>"+ msg.documents[0].price+"원 +2480P</p>");
            $('.hu_cul .book').eq(10).append("<div class='ball_wrap'><img class='ball' src='img/main/type_icon.png'><p>예약판매</p></div>")
            $('.hu_cul .book').eq(10).append("<div class='book_line'>3.29 출간예정</div>")
    });
    //인문/교양 분야 책12
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"이건희 컬렉션 TOP 30: 명화편" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hu_cul .book').eq(11).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hu_cul .book').eq(11).append("<p>"+msg.documents[0].title+"</p>");
            $('.hu_cul .book').eq(11).append("<p>"+ msg.documents[0].price+"원 +990P</p>");
    });
                                    
});