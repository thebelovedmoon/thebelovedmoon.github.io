const qr = new URLSearchParams(window.location.search);

function webQuery() {

  var vt = qr.get("vt");

  if (vt == "about") {
    document.title = "about the First Maria🍃";
  } else if (vt == "blog") {
    document.title = "ze blog";
    window.location.replace("/blog");
  } else if (vt == "cosplay") {
    document.title = "#AgaCosplay";
  } else {
    document.title = "Mother Agatha, the First Maria🍃";
  }

}