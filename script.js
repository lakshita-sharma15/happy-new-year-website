function goToGoals() {
  document.body.style.animation = "slideOut 0.6s forwards";
  setTimeout(() => {
    window.location.href = "goals.html";
  }, 600);
}

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5 + 2,
    d: Math.random() * 2,
    color: ["#f5d88c", "#fff"][Math.floor(Math.random() * 2)]
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) p.y = 0;
  });
}

setInterval(draw, 30);
