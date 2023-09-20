function load() {
  setTimeout(function() {
    document.getElementById("loader").remove();
    document.getElementById("loadBlock").style.width = "0";
  }, 1000);
}

function showChannels() {
  document.getElementById("showChannels").style.display = "block";
}