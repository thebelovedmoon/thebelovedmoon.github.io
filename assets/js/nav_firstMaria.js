const qr = new URLSearchParams(window.location.search);

function webQuery() {

  var vt = qr.get("vt");

  if (vt == "about") {

    document.title = "about the First Maria🍃";

    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "block";
    document.getElementById("navPodcast").style.display = "none";
    document.getElementById("navCosplay").style.display = "none";

    navBtnHide(vt);

  } else if (vt == "stateofvtuber") {

    document.title = "State of the VTuber Community";

    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "none";
    document.getElementById("navPodcast").style.display = "block";
    document.getElementById("navCosplay").style.display = "none";

    document.getElementById("vtLogo").src = "/assets/images/content/firstMaria/stateofvtuber/logo.png"

    navBtnHide(vt);

  } else if (vt == "cosplay") {

    // document.title = "💚🍃阿賀忠のコスプレ💗🌸";

    // document.getElementById("navHome").style.display = "none";
    // document.getElementById("navProfile").style.display = "none";
    // document.getElementById("navPodcast").style.display = "none";
    // document.getElementById("navCosplay").style.display = "block";

    // document.getElementById("vtLogo").src = "https://tbmassoc.github.io/thebelovedmoon/cosmariainauguration/assets/cosmaria_logo.png"
    // document.getElementById("vtLogo").style.filter = "brightness(0) invert(1)";

    // for (let m = 1; m < 3; m++) {
    //   document.getElementById("miscBtn" + m).innerHTML = "open_in_new";
    //   document.getElementById("miscBtn" + m).title = "learn more";
    //   document.getElementById("miscBtn" + m).onclick = () => { window.open("https://tbmassoc.github.io/thebelovedmoon/cosmariainauguration"); };
    //   document.getElementById("miscBtn" + m).style.display = "inline-block";
    // }

    // navBtnHide(vt);

    window.location.replace("https://vtresmarias.github.io/cosmaria");

  } else {

    document.title = "Mother Agatha, the First Maria🍃";

    navBtnHide("home");

  }

}

function navBtnHide(lbl) {
  let format = ["desktop", "mobile"];
  for (let v = 0; v < format.length; v++) { document.getElementById(lbl + "-" + format[v]).style.display = "none"; }
}