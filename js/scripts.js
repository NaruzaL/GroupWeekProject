
$(document).ready(function(){
  //How to play button
  $("#learn").click(function(){
    $("#arrows").delay( 300 ).fadeIn( 1000 );
    $("#moves").delay( 400 ).fadeIn( 1000 );
    $("#goals").delay( 500 ).fadeIn( 1000 );
    $(".links").fadeOut();
    $('html, body').animate({scrollTop:730},'50');
    $("#top").delay( 500 ).fadeIn( 1000 );
  });
  //Play button
  $("#play").click(function(){
    $("#screenshot").hide();
    $(".options").hide();
    $("#moves").hide();
    $("#arrows").hide();
    $("#goals").hide();
    $("form#formOne").fadeIn(1000);
    $('html, body').animate({scrollTop:0},'50');
    $(".links").fadeOut();
    $("#top").fadeOut();
  });
  //Return back to homescreen from play screen
  $(".home").click(function(){
    $("form#formOne").fadeOut();
    $("#screenshot").delay( 500 ).fadeIn(1000);
    $(".options").delay( 500 ).fadeIn(1500);
    $(".links").delay( 1000 ).fadeIn(2000);
  });
  //Biography screen overlay dropdown
  $("#bio").click(function(){
    $(".groupbio").css({"height" : "100%"});
  });
  //Hide biography screen
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
    $(".links").delay( 1000 ).fadeIn(1000);
  });
});
