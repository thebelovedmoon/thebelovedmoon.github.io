function webQry() {

  let vt = new URLSearchParams(window.location.search).get("vt");

  if (vt == "about") {
    
    document.title = "about the Second Maria🪷";
    
    document.getElementById("navHome").setAttribute("style", "display: none;");
    document.getElementById("navProfile").setAttribute("style", "display: block;");
    document.getElementById("navHiatus").setAttribute("style", "display: none;");

    navBtnHide(vt);
    
  } else if (vt == "hiatus") {
    
    document.title = "the Hiatus Note🪷";
    
    document.getElementById("navHome").setAttribute("style", "display: none;");
    document.getElementById("navProfile").setAttribute("style", "display: none;");
    document.getElementById("navHiatus").setAttribute("style", "display: block;");
    
    let whtn = document.querySelectorAll("header > div > span[class='material-symbols-rounded']");
    for (let icn of whtn) { icn.setAttribute("style", "color: #ffffff;"); }
    
    navBtnHide(vt);
    
  } else {
    
    document.title = "Aura Ostara, the Second Maria🪷";

    navBtnHide("home");
    
  }

}

function navBtnHide(lbl) {
  let format = ["desktop", "mobile"];
  for (let v = 0; v < format.length; v++) { document.getElementById(`${lbl}-${format[v]}`).setAttribute("style", "display: none;"); }
}