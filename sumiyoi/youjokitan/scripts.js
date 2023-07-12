function Load() {
  setTimeout(function() {
    document.getElementById("loader").remove();
    document.getElementById("loadBlock").style.height = "0";
  }, 5000);
}