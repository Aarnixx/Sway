let scale = 1; // Initial zoom scale
let zoomContainer = document.querySelector('.zoom-container');

window.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    scale -= 0.05; // Zoom out on scroll down
  } else {
    scale += 0.05; // Zoom in on scroll up
  }

  if (scale < 0.5) scale = 0.5; // Limit zoom out
  if (scale > 2) scale = 2; // Limit zoom in

  zoomContainer.style.transform = `scale(${scale})`;
});
