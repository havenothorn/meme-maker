const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
ctx.moveTo(0, 0);

const colors = [
  "#4bcffa",
  "#ff5e57",
  "#ffdd59",
  "#575fcf",
  "#ef5777",
  "#ffcccc",
  "#cd84f1",
  "#fab1a0",
  "#55efc4",
];

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(400, 400);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
