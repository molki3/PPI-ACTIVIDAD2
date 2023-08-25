const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let painting = false;
let lineWidth = 5; 
let color = "#000000";

const clearButton = document.getElementById('clearButton');

function resizeCanvas() {
  const width = window.innerWidth * 0.75;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

window.addEventListener('resize', () => {
  resizeCanvas();
});

const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (event) => {
  color = event.target.value;
});

canvas.addEventListener('mousedown', () => {
  painting = true;
});

canvas.addEventListener('mouseup', () => {
  painting = false;
  ctx.beginPath();
});

const lineWidthRange = document.getElementById('lineWidthRange');
lineWidthRange.addEventListener('input', (event) => {
  lineWidth = parseInt(event.target.value);
});

canvas.addEventListener('mousemove', (event) => {
  if (!painting) return;

  const x = event.clientX - canvas.getBoundingClientRect().left;
  const y = event.clientY - canvas.getBoundingClientRect().top;

  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
});

canvas.addEventListener('mouseleave', () => {
  painting = false;
});

// Función para limpiar el canvas
clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

resizeCanvas();