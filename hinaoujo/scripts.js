///////////////////////////////////////////////

//timer code is based on W3Schools: https://www.w3schools.com/howto/howto_js_countdown.asp
//and stackoverflow answer: https://stackoverflow.com/questions/40263537/javascript-countdown-timer-in-gmt-utc

var countDownDate = new Date('Mar 19, 2023 09:00:00 GMT+09:00').getTime(); //must be 24hr format

var x = setInterval(function() {
  
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
  var hours = ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  var minutes = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var seconds = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
  
  document.getElementById("hinaDebutTimer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
  
  if (distance <= 0) {

    clearInterval(x);

    document.getElementById("hinaDebutTimer").innerHTML = "the [re]Debut has begun!!";
    document.getElementById("hinaDebutTimerOVL").remove();

  }

}, 1000);

///////////////////////////////////////////////

//code improvised from https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen

function playPause() {
  let autoplay = document.getElementById("redebut");
  autoplay.for((vi) => {
    vi.muted = true;
    let playPromise = vi.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {
        let observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.intersectionRatio !== 1 && !vi.paused) {
                vi.pause();
              } else if (vi.paused) {
                vi.play();
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(vi);
      });
    }
  });
}

playPause();

///////////////////////////////////////////////

//finally I figured it out how this works, I just have to put the function in its PARENT DIV-

function unmutePlayer() {
  document.getElementById("unmute").remove();
  document.getElementById("redebut").muted = false;
};

///////////////////////////////////////////////

function fetch1_1_1() {
  document.getElementById("ltr1_1_1").style.display = "block";
  document.getElementById("ltr1_1_2").style.display = "none";
  document.getElementById("ltr1_1_3").style.display = "none";
}
function fetch1_1_2() {
  document.getElementById("ltr1_1_1").style.display = "none";
  document.getElementById("ltr1_1_2").style.display = "block";
  document.getElementById("ltr1_1_3").style.display = "none";
}
function fetch1_1_3() {
  document.getElementById("ltr1_1_1").style.display = "none";
  document.getElementById("ltr1_1_2").style.display = "none";
  document.getElementById("ltr1_1_3").style.display = "block";
}

function fetch1_2_1() {
  document.getElementById("ltr1_2_1").style.display = "block";
  document.getElementById("ltr1_2_2").style.display = "none";
  document.getElementById("ltr1_2_3").style.display = "none";
}
function fetch1_2_2() {
  document.getElementById("ltr1_2_1").style.display = "none";
  document.getElementById("ltr1_2_2").style.display = "block";
  document.getElementById("ltr1_2_3").style.display = "none";
}
function fetch1_2_3() {
  document.getElementById("ltr1_2_1").style.display = "none";
  document.getElementById("ltr1_2_2").style.display = "none";
  document.getElementById("ltr1_2_3").style.display = "block";
}