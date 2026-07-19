const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

let snowflakes = [];

function resizeCanvas() {
  const oldWidth = canvas.width || window.innerWidth;
  const oldHeight = canvas.height || window.innerHeight;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Scale existing snowflakes to the new canvas dimensions
  if (snowflakes.length > 0) {
    for (let flake of snowflakes) {
      flake.x = (flake.x / oldWidth) * canvas.width;
      flake.y = (flake.y / oldHeight) * canvas.height;
    }
  }
}

// Initial size setup
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createSnowflakes() {
  for (let i = 0; i < 200; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 0.8 + 0.2, // Tiny subtle dots
      speed: Math.random() * 0.5 + 0.2,
      wind: Math.random() * 0.3 - 0.15,
      opacity: Math.random() * 0.6 + 0.2,
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let flake of snowflakes) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
    ctx.fill();
  }
  moveSnowflakes();
}

function moveSnowflakes() {
  for (let flake of snowflakes) {
    flake.y += flake.speed;
    flake.x += flake.wind;

    if (flake.y > canvas.height) {
      flake.y = -flake.radius;
      flake.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawSnowflakes();
  requestAnimationFrame(animate);
}

createSnowflakes();
animate();

window.addEventListener("resize", resizeCanvas);
