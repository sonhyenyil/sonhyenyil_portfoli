$(function(){
	//banner광고 1번책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"삼개주막 기담회" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hot_book > li').eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hot_book > li').eq(0).append("<strong><p>"+msg.documents[0].title+"</strong></p>");
            $('.hot_book > li').eq(0).append("<p>공포소설1위</p>");
    });
    //banner광고 2번책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"거츠" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hot_book > li').eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hot_book > li').eq(1).append("<p><strong>"+msg.documents[0].title+"</strong></p>");
            $('.hot_book > li').eq(1).append("<p>시작하라!</p>");
    });
    //banner광고 3번책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"박시백의 고려사 1" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hot_book > li').eq(2).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hot_book > li').eq(2).append("<strong><p>"+msg.documents[0].title+"</strong></p>");
            $('.hot_book > li').eq(2).append("<p>박시백 역사만화</p>");
    });
    //banner광고 4번책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"친애하는 나의 민원인" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.hot_book > li').eq(3).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.hot_book > li').eq(3).append("<strong><p>"+msg.documents[0].title+"</strong></p>");
            $('.hot_book > li').eq(3).append("<p>유시민 추천작</p>");
    });
});