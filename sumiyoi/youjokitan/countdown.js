//timer code is based on W3Schools: https://www.w3schools.com/howto/howto_js_countdown.asp
//and stackoverflow answer: https://stackoverflow.com/questions/40263537/javascript-countdown-timer-in-gmt-utc

var countDownDate = new Date('Jun 30, 2022 12:00:00 GMT+09:00').getTime(); //must be 24hr format

var x = setInterval(function() {
  
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
  var hours = ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  var minutes = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var seconds = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
  
  document.getElementById("sayonara").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
  document.title = days + ":" + hours + ":" + minutes + ":" + seconds;
  
  if (distance <= 0) {

    clearInterval(x);

    document.getElementById("sayonara").innerHTML = "00:00:00:00";
    document.title = "さよなら、まほたん。";

    document.getElementById("bodyOut").style.cssText = "-moz-transition: all 2.5s; -ms-transition: all 2.5s; -webkit-transition: all 2.5s; -o-transition: all 2.5s; transition: all 2.5s; background: #000; cursor: auto;";
    document.getElementById("sayonara").style.cssText = "-moz-transition: all 2.5s; -ms-transition: all 2.5s; -webkit-transition: all 2.5s; -o-transition: all 2.5s; transition: all 2.5s; color: #ffffff40;";

    setTimeout('ltr()', 1000);

  }

}, 0);

function ltr() {
  window.location = "letter.html";
}