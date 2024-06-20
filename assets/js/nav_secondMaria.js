const qr = new URLSearchParams(window.location.search);

function webQuery() {

  var vt = qr.get("vt");

  if (vt == "about") {
    document.title = "about the Second Maria🪷";
  } else if (vt == "hiatus") {
    document.title = "the Hiatus Note🪷";
  } else {
    document.title = "Aura Ostara, the Second Maria🪷";
  }

}