
$(document).ready(function(){
  $("#learn").click(function(){
    $("#arrows").delay( 300 ).fadeIn( 1000 );
    $("#moves").delay( 400 ).fadeIn( 1000 );
    $("#goals").delay( 500 ).fadeIn( 1000 );
    $(".links").fadeOut();
    $('html, body').animate({scrollTop:730},'50');
  });

  $("#play").click(function(){
    $("#screenshot").hide();
    $(".options").hide();
    $("#moves").hide();
    $("#arrows").hide();
    $("#goals").hide();
    $("form#formOne").fadeIn(3000);
    $('html, body').animate({scrollTop:0},'50');
  });

  $("#bio").click(function(){
    $(".groupbio").css({"height" : "100%"});
  });

  $("#hidebio").click(function(){
    $(".groupbio").css({"height" : "0%"});
  });

});
