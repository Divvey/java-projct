
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});