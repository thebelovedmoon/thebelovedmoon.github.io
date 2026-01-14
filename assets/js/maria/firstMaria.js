function webQry() {

  let vt = new URLSearchParams(window.location.search).get("vt");

  if (vt == "about") {

    document.title = "about the First Maria🍃";

    document.getElementById("navHome").setAttribute("style", "display: none;");
    document.getElementById("navProfile").setAttribute("style", "display: block;");
    document.getElementById("navPodcast").setAttribute("style", "display: none;");
    document.getElementById("navCosplay").setAttribute("style", "display: none;");

    navBtnHide(vt);

  } else if (vt == "stateofvtuber") {

    document.title = "State of the VTuber Community";

    document.getElementById("navHome").setAttribute("style", "display: none;");
    document.getElementById("navProfile").setAttribute("style", "display: none;");
    document.getElementById("navPodcast").setAttribute("style", "display: block;");
    document.getElementById("navCosplay").setAttribute("style", "display: none;");

    document.getElementById("vtLogo").src = "/assets/images/content/firstMaria/stateofvtuber/logo.png"

    navBtnHide(vt);

  } else {

    document.title = "Mother Agatha, the First Maria🍃";

    navBtnHide("home");

  }

}

function navBtnHide(lbl) {
  let format = ["desktop", "mobile"];
  for (let v = 0; v < format.length; v++) { document.getElementById(`${lbl}-${format[v]}`).setAttribute("style", "display: none;"); }
}