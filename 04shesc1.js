
// ---- FULLSCREEN + KEYBOARD LOCK (on first click) ----
document.addEventListener("click", async function initLock() {
  try {
    // go fullscreen
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    }

    // try keyboard lock (Chrome only)
    if (navigator.keyboard && navigator.keyboard.lock) {
      await navigator.keyboard.lock();
    }
  } catch (e) {}

  // run only once
  document.removeEventListener("click", initLock);
});


// ---- BLOCK KEYS (partial) ----
document.addEventListener("keydown", function (e) {
  e.preventDefault();
});


// ---- DISABLE RIGHT CLICK ----
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});


// ---- KEEP FOCUS ON WINDOW ----
window.onblur = function () {
  window.focus();
};


// ---- OPTIONAL: BLOCK TEXT SELECTION ----
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});
