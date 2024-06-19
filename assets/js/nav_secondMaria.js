const qr = new URLSearchParams(window.location.search);

function webQuery() {

  var vt = qr.get("vt");

  if (vt == "about") {
    document.title = "about the Second Maria🪷";
  } else {
    document.title = "Aura Ostara, the Second Maria🪷";
  }

}