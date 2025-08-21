// root launch args
function init() {
  pageInit(); // in-page load
  removeSplash();
}

function removeSplash() {
  setTimeout(() => {
    document.getElementById("loaderFade").setAttribute("style", "opacity: 0;");
    setTimeout(() => {
      document.getElementById("loaderFade").setAttribute("style", "display: none;");
      document.getElementById("loadBlock").setAttribute("style", "height: 0;");
    }, 1250);
  }, 1250);
}

function redir(rd) { window.open(rd); }

function nav(vt) { window.location.replace(vt); }

function panelOpen() { document.getElementById("mobileNav").setAttribute("style", "transform: unset;"); }
function panelClose() { document.getElementById("mobileNav").setAttribute("style", "transform: translateY(-15rem);"); }