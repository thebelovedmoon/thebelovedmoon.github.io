function changeToJA() {
  document.getElementById("en").style.display = "none";
  document.getElementById("ja").style.display = "block";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function changeToEN() {
  document.getElementById("en").style.display = "block";
  document.getElementById("ja").style.display = "none";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function startView() {
  document.getElementById("disappearIntro").style.zIndex = "-99";
  document.documentElement.style.pointerEvents = "none";
  document.documentElement.style.cursor = "not-allowed";
  document.getElementById("appearContents").style.display = "block";
  document.getElementById("scrollToHead").scrollIntoView();
  setTimeout(function() {
    document.getElementById("disappearIntro").style.display = "none";
    document.documentElement.style.pointerEvents = "all";
    document.documentElement.style.cursor = "auto";
    document.getElementById("disappearIntro").remove();
    window.onscroll = function() {showBackToTopBtn()};
  }, 750);
}

function showBackToTopBtn() {
  if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// code: https://w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

function revealEmbed(ytValue) {
  document.getElementById("showEmbed").style.display = "block";
  document.getElementById("embedViewer").innerHTML = `
    <iframe
      id="manipulateYTVideo"
      src="https://www.youtube-nocookie.com/embed/` + ytValue + `"
      allowfullscreen>
    </iframe>
  `;
}
// code: https://stackoverflow.com/questions/53757835/get-different-values-with-same-id-in-javascript
function disappearModal() {
  ytValue = null;
  let stopVideo = document.querySelector("iframe");
  if (stopVideo) {
    let embedConfuse = stopVideo.src;
    stopVideo.src = embedConfuse;
  }
  document.getElementById("showEmbed").style.display = "none";
}
// simplified from https://makarov1011.medium.com/stop-videos-embedded-in-your-html-script-using-js-9eda5113f873