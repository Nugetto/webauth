$(function(){

  console.log("DOM Ready (Customiser)");

  var slider = document.getElementById("tempo-slider");
  var output = document.getElementById("tempo-header");
  slider.oninput = function() {
    output.innerHTML = "Tempo (" + this.value + ")";
  }

  if (localStorage.getItem('btnCode')){
    load_buttons();
  }

  $("header").css("position", "sticky");
  var num = 0;

  var audio = {};
  audio_snare = new Audio();
  audio_snare.src = "assets/sounds/snare.mp3";
  audio_kickdrum = new Audio();
  audio_kickdrum.src = "assets/sounds/kick_drum.mp3";
  audio_cowbell = new Audio();
  audio_cowbell.src = "assets/sounds/cowbell.mp3";
  audio_hihat = new Audio();
  audio_hihat.src = "assets/sounds/hi_hat.mp3";
  audio_crash = new Audio();
  audio_crash.src = "assets/sounds/crash.mp3";


  $(".button").click(function(){
    console.log("button clicked");
    if($(this).css("background-color") == "rgb(111, 126, 140)") {
      $(this).css("background-color", "rgb(239, 12, 36)");
    } else if($(this).css("background-color") == "rgb(239, 12, 36)") {
      $(this).css("background-color", "rgb(111, 126, 140)");
    }
    save_buttons();
  });


  $("#clear").click(function(){
    $(".button").css("background-color", "rgb(111, 126, 140)");
    save_buttons();
  })

  $("#play-pause").click(async function(){
    console.log("Play/Pause button clicked");
    if($(this).text() == "Play"){
      num = 0;
      do {
        console.log("Play");
        $(this).html("Pause");
        $(".overlay").show();

        var $buttons_row1 = $(".row-1");
        var $buttons_row2 = $(".row-2");
        var $buttons_row3 = $(".row-3");
        var $buttons_row4 = $(".row-4");
        var $buttons_row5 = $(".row-5");
        var leftNum = 105;
        for (i=0;i<8;i++){

            console.log(i);
            var audioToBePlayed = [""];
            if($($buttons_row1.eq(i)).css("background-color") == "rgb(239, 12, 36)") {

              audio_snare.play();
              audio_snare.currentTime = 0;

            } else if($($buttons_row1.eq(i)).css("background-color") == "rgb(111, 126, 140)") {

            }

            if($($buttons_row2.eq(i)).css("background-color") == "rgb(239, 12, 36)") {

              audio_kickdrum.play();
              audio_kickdrum.currentTime = 0;

            } else if($($buttons_row2.eq(i)).css("background-color") == "rgb(111, 126, 140)") {

            }

            if($($buttons_row3.eq(i)).css("backgroundColor") == "rgb(239, 12, 36)") {

              audio_cowbell.play();
              audio_cowbell.currentTime = 0;

            } else if($($buttons_row3.eq(i)).css("background-color") == "rgb(111, 126, 140)") {

            }

            if($($buttons_row4.eq(i)).css("backgroundColor") == "rgb(239, 12, 36)") {

              audio_hihat.play();
              audio_hihat.currentTime = 0;

            } else if($($buttons_row4.eq(i)).css("background-color") == "rgb(111, 126, 140)") {

            }

            if($($buttons_row5.eq(i)).css("backgroundColor") == "rgb(239, 12, 36)") {

              audio_crash.play();
              audio_crash.currentTime = 0;

            } else if($($buttons_row5.eq(i)).css("background-color") == "rgb(111, 126, 140)") {

            }

            $(".overlay").css("left", leftNum + "px");
            leftNum += 40;
            await sleep(slider.value);
          }
        } while( num != 1);
    } else if($(this).text() == "Pause"){
      num = 1;
      console.log("Pause");
      $(this).html("Play");
      $(".overlay").hide();

    }
  });
  function load_buttons() {
    var btnCode = localStorage.getItem("btnCode");
    console.log(btnCode);
    var btnNum = 0;
    $(".button").each(function(){
      if (btnCode.substring(btnNum,btnNum+1) == 1){
        $(this).css("background-color", "rgb(239, 12, 36)");
      } else {
        $(this).css("background-color", "rgb(111, 126, 140)");
      }
      btnNum++;
    });
  }
  function save_buttons() {
    var btnCode = "";
    $(".button").each(function(){
      if ($(this).css("background-color") == "rgb(239, 12, 36)"){
        btnCode += "1";
      } else {
        btnCode += "0";
      }
    });
    localStorage.setItem("btnCode", btnCode);
    console.log(localStorage.getItem("btnCode"));
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
});
