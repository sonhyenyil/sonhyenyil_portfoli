$(function(){
  //stlist의 데이터를 가져오기 위한 함수
	$.ajax({

    url: "./json/stlist.json",

    dataType: "json",

    success : function(data){

      if(data.length>0){

        for(var i in data){
          var itemname = data[i].itemname;
          var code = data[i].code;
          var pay = data[i].pay;
          var url = data[i].url;

          $(".stlist").eq(i).append('<div><a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a></div>'); 

          $(".stlist").eq(i).append('<p><a href="#">'+data[i].itemname+"</a></p>");      

          $(".stlist").eq(i).append('<p class="code"><a href="#">'+data[i].code+"</a></p>");                             

          $(".stlist").eq(i).append("<h3>"+data[i].pay+"</h3>");
        }

      }

    }

  });
});