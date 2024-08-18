const qr = new URLSearchParams(window.location.search);

function webQuery() {

  var vt = qr.get("vt");

  if (vt == "about") {

    document.title = "about the First Maria🍃";

    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "block";
    document.getElementById("navPodcast").style.display = "none";
    document.getElementById("navCosplay").style.display = "none";

  } else if (vt == "stateofvtuber") {

    document.title = "State of the VTuber Community";

    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "none";
    document.getElementById("navPodcast").style.display = "block";
    document.getElementById("navCosplay").style.display = "none";

    document.getElementById("vtLogo").src = "/assets/images/content/firstMaria/stateofvtuber/logo.png"

  } else if (vt == "cosplay") {

    document.title = "💚🍃阿賀忠のコスプレ💗🌸";

    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "none";
    document.getElementById("navPodcast").style.display = "none";
    document.getElementById("navCosplay").style.display = "block";

    document.getElementById("vtLogo").src = "/assets/images/content/firstMaria/_logo/AgaCosplay_Bataan2024.png"

    for (let m = 1; m < 3; m++) {
      document.getElementById("miscBtn" + m).innerHTML = "open_in_new";
      document.getElementById("miscBtn" + m).title = "learn more";
      document.getElementById("miscBtn" + m).onclick = () => { window.open("https://agasitecollection.github.io/agacosplay/bataan2024") };
      document.getElementById("miscBtn" + m).style.display = "inline-block";
    }

  } else {

    document.title = "Mother Agatha, the First Maria🍃";

  }

}