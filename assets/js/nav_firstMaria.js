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

    document.title = "#AgaCosplay × Cosplay Marias";

    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "none";
    document.getElementById("navPodcast").style.display = "none";
    document.getElementById("navCosplay").style.display = "block";

  } else {

    document.title = "Mother Agatha, the First Maria🍃";

  }

}