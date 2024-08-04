const qr = new URLSearchParams(window.location.search);

function webQuery() {

  var vt = qr.get("vt");

  if (vt == "about") {
    
    document.title = "about the Third Maria🌸";
    
    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "block";
    document.getElementById("navSayonara").style.display = "none";
    document.getElementById("navAnniv").style.display = "none";
    
  } else if (vt == "sayonara") {
    
    document.title = "💗the Third Maria will always stay with us forever.🌸";
    
    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "none";
    document.getElementById("navSayonara").style.display = "block";
    document.getElementById("navAnniv").style.display = "none";
    
  } else if (vt == "hinaversary") {
    
    document.title = "#HinaVersary💗🌸";
    
    document.getElementById("navHome").style.display = "none";
    document.getElementById("navProfile").style.display = "none";
    document.getElementById("navSayonara").style.display = "none";
    document.getElementById("navAnniv").style.display = "block";
    
  } else {
    
    document.title = "Hina Oujo, the Third Maria🌸";
    
  }

}