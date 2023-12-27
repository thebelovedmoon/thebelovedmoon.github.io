var debutDate = new Date("Dec 27, 2023 15:16:00 GMT+01:00").getTime();

function debutTimer() {
  var timer = setInterval(function() {
    var curr = new Date().getTime();
    var dist = debutDate - curr;
    var d = ("0" + Math.floor(dist / (1000 * 60 * 60 * 24))).slice(-3);
    var h = ("0" + Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    var m = ("0" + Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    var s = ("0" + Math.floor((dist % (1000 * 60)) / 1000)).slice(-2);
    document.getElementById("debutTimer").innerHTML = d + ":" + h + ":" + m + ":" + s;
    if (dist < 0) {
      clearInterval(timer);
      document.getElementById("debutTimer").innerHTML = "00:00:00:00"
    }
  }, 0);
}