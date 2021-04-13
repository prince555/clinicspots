
window.requestAnimFrame = (function () {
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var percentEl = document.querySelector('.percent');
var max = 100;

(function animloop() {
  if (percentEl.innerHTML >= max) { return; }
  requestAnimFrame(animloop); 
  percentEl.innerHTML++;
})();

var percentEl1 = document.querySelector('.percent1');
var max1 = 800;

(function animloop() {
  if (percentEl1.innerHTML >= max1) { return; }
  requestAnimFrame(animloop); 
  percentEl1.innerHTML++;
})();

var percentEl2 = document.querySelector('.percent2');
var max2 = 500;

(function animloop() {
  if (percentEl2.innerHTML >= max2) { return; }
  requestAnimFrame(animloop); 
  percentEl2.innerHTML++;
})();

var percentEl3 = document.querySelector('.percent3');
var max3 = 400;

(function animloop() {
  if (percentEl3.innerHTML >= max3) { return; }
  requestAnimFrame(animloop); 
  percentEl3.innerHTML++;
})();