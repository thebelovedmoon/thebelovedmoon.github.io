function webQry() {

  let vt = new URLSearchParams(window.location.search).get("vt");

  if (vt == "about") {
    
    document.title = "about the Third Maria🌸";
    
    document.getElementById("navHome").setAttribute("style", "display: none;");
    document.getElementById("navProfile").setAttribute("style", "display: block;");
    document.getElementById("navSayonara").setAttribute("style", "display: none;");
    document.getElementById("navAnniv").setAttribute("style", "display: none;");

    navBtnHide(vt);
    
  } else if (vt == "sayonara") {
    
    document.title = "💗the Third Maria will always stay with us forever.🌸";
    
    document.getElementById("navHome").setAttribute("style", "display: none;");
    document.getElementById("navProfile").setAttribute("style", "display: none;");
    document.getElementById("navSayonara").setAttribute("style", "display: block;");
    document.getElementById("navAnniv").setAttribute("style", "display: none;");
    
    let whtn = document.querySelectorAll("header > div > span[class='material-symbols-rounded']");
    for (let icn of whtn) { icn.setAttribute("style", "color: #ffffff;"); }

    navBtnHide(vt);
    
  } else if (vt == "hinaversary") {
    
    document.title = "#HinaVersary💗🌸";
    
    document.getElementById("navHome").setAttribute("style", "display: none;");
    document.getElementById("navProfile").setAttribute("style", "display: none;");
    document.getElementById("navSayonara").setAttribute("style", "display: none;");
    document.getElementById("navAnniv").setAttribute("style", "display: block;");
    
    let whtn = document.querySelectorAll("header > div > span[class='material-symbols-rounded']");
    for (let icn of whtn) { icn.setAttribute("style", "color: #ffffff;"); }

    navBtnHide(vt);
    
  } else {
    
    document.title = "Hina Oujo, the Third Maria🌸";

    navBtnHide("home");
    
  }

}

function navBtnHide(lbl) {
  let format = ["desktop", "mobile"];
  for (let v = 0; v < format.length; v++) { document.getElementById(`${lbl}-${format[v]}`).setAttribute("style", "display: none;"); }
}