$(function(){
  //추천도서 1
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"예민한 부모를 위한 심리 수업" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.reco1').append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.reco1').append("<div><p class='star'>"+ "</p><span>"+ 10 +"</span></div>");
            $('.reco1').append("<h3>"+msg.documents[0].title+"</h3>");
            $('.reco1').append("<div class='text_box'><p>"+msg.documents[0].contents+"</p></div>");
        });
  //추천도서 2      
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"휴먼 해킹" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb6"}
      })
        .done(function( msg ) {

            $('.reco2').append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.reco2').append("<div><p class='star'>"+ "</p><span>"+ 10 +"</span></div>");
            $('.reco2').append("<h3>"+msg.documents[0].title+"</h3>");
            $('.reco2').append("<div class='text_box'><p>"+msg.documents[0].contents+"</p></div>");

        });
  //추천도서3
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나를 알고 싶을 때 뇌과학을 공부합니다" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.reco3').append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.reco3').append("<div><p class='star'>"+ "</p><span>"+ 10 +"</span></div>");
            $('.reco3').append("<h3>"+msg.documents[0].title+"</h3>");
            $('.reco3').append("<div class='text_box'><p>"+msg.documents[0].contents+"</p></div>");

        });
  //추천도서4      
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"대통령의 염장이" },
        headers:{Authorization: "KakaoAK dbbc3f39ad1ce7456d41a4571fa897eb"}
      })
        .done(function( msg ) {

            $('.reco4').append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $('.reco4').append("<div><p class='star'>"+ "</p><span>"+ 10 +"</span></div>");
            $('.reco4').append("<h3>"+msg.documents[0].title+"</h3>");
            $('.reco4').append("<div class='text_box'><p>"+msg.documents[0].contents+"</p></div>");

        });
});