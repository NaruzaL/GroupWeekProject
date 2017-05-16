




$(document).ready(function(){
  $("#learn").click(function(){
    $("#arrows").delay( 300 ).fadeToggle( 1000 );
    $("#moves").delay( 900 ).fadeToggle( 1000 );
    $("#goals").delay( 1500 ).fadeToggle( 1000 );
    $(".links").toggle();
  });

  $("#play").click(function(){
    $("#screenshot").fadeOut();
    $(".options").fadeOut();
    $("#moves").fadeOut();
    $("#arrows").fadeOut();
    $("#goals").fadeOut();
    $("form#formOne").fadeIn(3000);
  });

  $("#bio").click(function(){
    $(".groupbio").css({"height" : "100%"});
  });

  $("#hidebio").click(function(){
    $(".groupbio").css({"height" : "0%"});
  });

});
