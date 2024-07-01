// root launch args
function init() {
  pageInit(); // in-page load
}

function redir(rd) {
  window.open(rd);
}

function nav(vt) {
  window.open(vt, "_self");
}

function panelOpen() {
  document.getElementById("mobileNav").style.transform = "unset";
}
function panelClose() {
  document.getElementById("mobileNav").style.transform = "translateY(-15rem)";
}