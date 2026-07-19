function update(e) {
  var x, y;
  if (e.touches && e.touches.length > 0) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  } else {
    x = e.clientX;
    y = e.clientY;
  }

  if (x !== undefined && y !== undefined) {
    document.documentElement.style.setProperty("--cursorX", x + "px");
    document.documentElement.style.setProperty("--cursorY", y + "px");
  }
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);
