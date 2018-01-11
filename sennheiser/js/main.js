$(function() {
  console.log("DOM Ready");
  set_sizes();





  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
      showDivs(slideIndex += n);
  }
  $("#hero-arrow-right").click(function(){
    plusDivs(1);
  });
  $("#hero-arrow-left").click(function(){
    plusDivs(-1);
  });
  function showDivs(n) {
      var images = $(".hero-image");
      var text = $(".hero-title");
      var subtext = $(".hero-subtitle");
      console.log(images);
      console.log(text);
      console.log(subtext);
      //console.log(text);

      if (n > images.length) {slideIndex = 1}
      if (n < 1) {slideIndex = images.length} ;
      for (var i = 0; i < images.length; i++) {
        $(images.eq(i)).css("display", "none").css("opacity", 0);
        $(text.eq(i)).css("display", "none").css("opacity", 0);
        $(subtext.eq(i)).css("display", "none").css("opacity", 0);

      }
      $(images.eq(slideIndex-1)).css("display", "block").fadeTo(1750, 0.375);
      $(text.eq(slideIndex-1)).css("display", "inline").animate({opacity: 1}, 2000);
      if ($(window).width() > 830) {
        $(subtext.eq(slideIndex-1)).css("display", "inline").animate({opacity: 1}, 2500);
      }

  }


  function set_sizes(){
    console.log("test123124123");
    var hero_height = $(".hero-container").height();
    console.log(hero_height);
    $("#hero-overlay").width($(window).width());
    $("#hero-overlay").height(hero_height);
    $(".hero-arrow").css("margin-top", (hero_height/2) - ($(".hero-arrow").height()/2));
    $("#hero-arrow-left").css("transform", "rotate(180deg)");

    $(".pinpoint").css("margin-top", ($(".location-text").height()/6));
    $("#location-header").css("margin-top", ($(".location-text").height()/8));
    $("#location-subtext").css("margin-top", ($(".location-text").height()/8));

    if ($(window).width() < 830){
      $(".hero-subtitle").hide();
    }
  }

  set_sizes();


  $(".store-section-image").fadeTo(0, 0.25);

  $(".store-section").hover(
    function(){
      $(this).stop(true).children().children('img').fadeTo(200, 1);
      $(this).animate({backgroundColor: "#474C55"}, 200);
    },
    function(){
      $(this).stop(true).children().children('img').fadeTo(200,0.25);
      $(this).animate({backgroundColor: "#3D4148"}, 200);
  });

  $(window).resize(function() {
    if($(window).width() >= 1000) {
      $('#pop-out-menu').show();
    }
    if($(window).width() <= 900) {
      $('#pop-out-menu').hide();
    }
    set_sizes();
  });
  $('#menu-icon').click(function(){
    $('#pop-out-menu').toggle(200);
  });
});
