const qr = new URLSearchParams(window.location.search);

function webQuery() {

  var vt = qr.get("vt");

  if (vt == "about") {
    document.title = "about the Third Maria🌸";
  } else if (vt == "hinaversary") {
    document.title = "#HinaVersary💗🌸";
  } else {
    document.title = "Hina Oujo, the Third Maria🌸";
  }

}