$(function(){
  //md's pick 구간의 item 데이터들을 불러오기 위한 함수
  $.ajax({

    url: "./json/md.json",

    dataType: "json",

    success : function(data){

      if(data.length>0){

        for(var i in data){
          var itemname = data[i].itemname;
          var code = data[i].code;
          var decountpay = data[i].decountpay;
          var pay = data[i].pay;
          var url = data[i].url;

          $(".md").eq(i).append('<div><a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a></div>'); 

          $(".md").eq(i).append('<p><a href="#">'+data[i].itemname+"</a></p>");      

          $(".md").eq(i).append('<p class="code"><a href="#">'+data[i].code+"</a></p>");                             

          $(".md").eq(i).append("<span>"+data[i].pay+"</span>");

          $(".md").eq(i).append("<h3>"+data[i].decountpay+"</h3>");
        }

      }

    }

  });
});