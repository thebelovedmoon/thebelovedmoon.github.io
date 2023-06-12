function animate(obj, initVal, lastVal, duration) {
  let start = null;
  let current = Date.now();
  const step = (current) => {
    if (!start) {
      start = current;
    }
    const progress = Math.min((current - start) / duration, 1);
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  window.requestAnimationFrame(step);
}
const load = () => {
  animate(document.getElementById("recommend"), 0, 413, 7500);
  animate(document.getElementById("mostloved"), 0, 140, 7500);
};