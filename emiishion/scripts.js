function randomLeidram(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// code from https://stackoverflow.com/questions/50013591/random-image-on-html-refresh 

function stat_lv1() {
  document.getElementById("stat_REF").innerHTML = `
    <b>Level 1</b>&emsp;
    <a class="statBtn" onclick="stat_base()">Base</a>&emsp;
    <a class="statBtn" onclick="stat_enc()">Encyclopedia</a>&emsp;
    <a class="statBtn" onclick="stat_max()">MAX</a>
  `;
  document.getElementById("stat_POW").innerHTML = "36,972";
  document.getElementById("stat_AWK").innerHTML = "&#x29be;&#x29be;&#x29be;&#x29be;";
  document.getElementById("stat_HP").innerHTML = "1,752";
  document.getElementById("stat_ATK").innerHTML = "266";
  document.getElementById("stat_LV").innerHTML = "1";
  document.getElementById("stat_BST").innerHTML = "0";
  document.getElementById("stat_POT").innerHTML = "0%";
  document.getElementById("stat_MST").innerHTML = "0 / 40";
}
function stat_base() {
  document.getElementById("stat_REF").innerHTML = `
    <a class="statBtn" onclick="stat_lv1()">Level 1</a>&emsp;
    <b>Base</b>&emsp;
    <a class="statBtn" onclick="stat_enc()">Encyclopedia</a>&emsp;
    <a class="statBtn" onclick="stat_max()">MAX</a>
  `;
  document.getElementById("stat_POW").innerHTML = "134,520";
  document.getElementById("stat_AWK").innerHTML = "&#x29be;&#x29be;&#x29be;&#x29be;";
  document.getElementById("stat_HP").innerHTML = "6,370";
  document.getElementById("stat_ATK").innerHTML = "968";
  document.getElementById("stat_LV").innerHTML = "30";
  document.getElementById("stat_BST").innerHTML = "0";
  document.getElementById("stat_POT").innerHTML = "0%";
  document.getElementById("stat_MST").innerHTML = "0 / 40";
}
function stat_enc() {
  document.getElementById("stat_REF").innerHTML = `
    <a class="statBtn" onclick="stat_lv1()">Level 1</a>&emsp;
    <a class="statBtn" onclick="stat_base()">Base</a>&emsp;
    <b>Encyclopedia</b>&emsp;
    <a class="statBtn" onclick="stat_max()">MAX</a>
  `;
  document.getElementById("stat_POW").innerHTML = "302,664";
  document.getElementById("stat_AWK").innerHTML = "&#x29be;&#x29be;&#x29be;&#x29be;";
  document.getElementById("stat_HP").innerHTML = "14,332";
  document.getElementById("stat_ATK").innerHTML = "2,178";
  document.getElementById("stat_LV").innerHTML = "80";
  document.getElementById("stat_BST").innerHTML = "0";
  document.getElementById("stat_POT").innerHTML = "0%";
  document.getElementById("stat_MST").innerHTML = "0 / 40";
}
function stat_max() {
  document.getElementById("stat_REF").innerHTML = `
    <a class="statBtn" onclick="stat_lv1()">Level 1</a>&emsp;
    <a class="statBtn" onclick="stat_base()">Base</a>&emsp;
    <a class="statBtn" onclick="stat_enc()">Encyclopedia</a>&emsp;
    <b>MAX</b>
  `;
  document.getElementById("stat_POW").innerHTML = "3,447,432";
  document.getElementById("stat_AWK").innerHTML = "&#x29bf;&#x29bf;&#x29bf;&#x29bf;";
  document.getElementById("stat_HP").innerHTML = "121,660";
  document.getElementById("stat_ATK").innerHTML = "24,089";
  document.getElementById("stat_LV").innerHTML = "80";
  document.getElementById("stat_BST").innerHTML = "300";
  document.getElementById("stat_POT").innerHTML = "100%";
  document.getElementById("stat_MST").innerHTML = "40 / 40";
}