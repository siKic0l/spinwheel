const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const size = canvas.width = canvas.height = 500;
const center = size / 2;

const options = [
  "KOREK", "ASBAK", "STICKER", "COBA LAGI",
  "KAOS", "JACKET", "FREE SPIN", "TAS"
];

const colors = [
  "#ff0000", "#ffaa00", "#aaff00", "#00ff88",
  "#00e0ff", "#0033ff", "#aa00ff", "#ff00aa"
];

const arcSize = 2 * Math.PI / options.length;

function drawWheel() {
  for (let i = 0; i < options.length; i++) {
    const angle = i * arcSize;

    // Draw slice
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, center, angle, angle + arcSize);
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.closePath();

    // Add text
   ctx.save();
ctx.translate(center, center);
ctx.rotate(angle + arcSize / 2);
ctx.textAlign = "center";
ctx.textBaseline = "middle";

ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.lineJoin = "round";
ctx.miterLimit = 2;
ctx.lineWidth = 2;
ctx.font = "bold 30px Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";

const text = options[i];
const words = text.split(" ");
const lineHeight = 35;
const offsetX = center - 80;

// 🟡 Total tinggi semua baris
const totalLines = words.length;
const totalHeight = (totalLines - 1) * lineHeight;

// 🔁 Loop dan sesuaikan posisi Y agar semua baris rata tengah
words.forEach((line, j) => {
  const y = -totalHeight / 2 + j * lineHeight;
  ctx.strokeText(line, offsetX, y);
  ctx.fillText(line, offsetX, y);
});

ctx.restore();
  }
}

drawWheel();

// Spin logic (optional, bisa kamu tambah logic probabilitas jika mau)
let angle = 0;
function spinWheel() {
  const rotation = Math.floor(Math.random() * 360 + 720);
  angle += rotation;
  canvas.style.transition = "transform 4s ease-out";
  canvas.style.transform = `rotate(${angle}deg)`;
}
let highlighter = "";
for (let h = 1; h < 73; h++) {
    highlighter += '<span style="--h:' + h + '"></span>';
}
document.querySelector(".highlighter").innerHTML = highlighter;