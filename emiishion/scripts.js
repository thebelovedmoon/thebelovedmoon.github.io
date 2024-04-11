function randomLeidram(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// code from https://stackoverflow.com/questions/50013591/random-image-on-html-refresh 