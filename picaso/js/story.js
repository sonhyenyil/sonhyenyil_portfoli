$(function(){
  //story 세션의 데이터값을 가져오기 위한 함수
  $.ajax({

    url: "./json/story.json",

    dataType: "json",

    success : function(data){

      if(data.length>0){

        for(var i in data){
          var title = data[i].title;
          var sub = data[i].sub;
          var url = data[i].url;

          $(".story_1").eq(i).append('<div><a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a></div>'); 

          $(".story_1").eq(i).append('<h3><a href="#">'+data[i].title+"</a></h3>");      

          $(".story_1").eq(i).append('<p class="code"><a href="#">'+data[i].sub+"</a></p>");                             

          $(".story_1").eq(i).append("<span> &#43 MORE </span>");
        }

      }

    }

  });
});