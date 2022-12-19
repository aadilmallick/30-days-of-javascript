const canvas = document.querySelector("canvas");

// * 1: get canvas context
const ctx = canvas.getContext("2d");

// *2: resize canvas to entire window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 75%, 50%)`;
ctx.lineWidth = 30;
ctx.lineCap = "round";
ctx.lineJoin = "round";

let lastX = 0;
let lastY = 0;
let isDrawing = false;

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  // * draw
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.pageX, e.pageY);
  ctx.stroke();

  // * update
  [lastX, lastY] = [e.pageX, e.pageY];
  hue += 1;
  ctx.strokeStyle = `hsl(${hue}, 75%, 50%)`;
});

canvas.addEventListener("mousedown", (e) => {
  [lastX, lastY] = [e.pageX, e.pageY];
  isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
