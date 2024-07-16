const qr = new URLSearchParams(window.location.search);

function webQuery() {

  var vt = qr.get("vt");

  if (vt == "about") {
    document.title = "about the Second Maria🪷";
    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "block";
    document.getElementById("navHiatus").style.display = "none";
  } else if (vt == "hiatus") {
    document.title = "the Hiatus Note🪷";
    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "none";
    document.getElementById("navHiatus").style.display = "block";
  } else {
    document.title = "Aura Ostara, the Second Maria🪷";
  }

}