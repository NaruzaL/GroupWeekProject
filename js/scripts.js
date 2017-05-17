
$(document).ready(function(){
  $("#learn").click(function(){
    $("#arrows").delay( 300 ).fadeIn( 1000 );
    $("#moves").delay( 400 ).fadeIn( 1000 );
    $("#goals").delay( 500 ).fadeIn( 1000 );
    $(".links").fadeOut();
    $('html, body').animate({scrollTop:730},'50');
    $("#top").delay( 500 ).fadeIn( 1000 );
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
  $(function(){
    var x = 0;
    setInterval(function(){
        x-=2;
        $('body').css('background-position', x + 'px 0px');
    }, 10);
  });
  $("#top").click(function(){
    $("#moves").hide();
    $("#arrows").hide();
    $("#goals").hide();
    $("#top").hide();
    $('html, body').animate({scrollTop:0},'50');
  });
});
