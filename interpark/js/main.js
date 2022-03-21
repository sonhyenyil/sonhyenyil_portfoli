$(function(){
  $(".play_btn").click(function(){
    $("#video_modal").css("display", "block");
  });

  $(".x_btn").click(function(){
    $("#video_modal").css("display", "none");
  });

  $(".play_btn_b").click(function(){
    $("#blog_modal").css("display", "block");
  });

  $(".x_btn_b").click(function(){
    $("#blog_modal").css("display", "none");
  });

});