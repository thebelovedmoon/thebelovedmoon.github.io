//code from https://stackoverflow.com/questions/850058/is-it-possible-to-detect-if-a-user-has-opened-a-link-in-a-new-tab

function detectsNewTab() {
  if (history.length == 1) {
    document.getElementById("goBack").remove();
  }
}