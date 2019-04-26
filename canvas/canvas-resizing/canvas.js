var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// C inside canvas is short for context
// To use lots of method and functions
// var c = canvas.getContext('2d');
// Creates/draw boxes onto the screen
// c.fillRect(x, y, width, height);

// Font style/color
var cf = canvas.getContext('2d');
cf.font = "18px arial";
cf.fillText("Host Stand", 0, 0);
cf.globalCompositeOperation = 'destination-over';


// Front door
var cfd = canvas.getContext('2d');
cfd.fillStyle = "#A9A9A9";
cfd.fillRect(0, 150, 20, 150);

// Host stand
var chs = canvas.getContext('2d');
chs.fillStyle = "#A9A9A9";
chs.fillRect(0, 0, 250, 50);

// Tables
var ct = canvas.getContext('2d');
ct.fillStyle = "#D3D3D3";

// Row 1
// ct.fillRect(300, 110, 75, 75);
// ct.fillRect(300, 210, 75, 75);
// ct.fillRect(300, 310, 75, 75);

// Row2 
ct.fillRect(475, 110, 75, 75);
ct.fillRect(475, 210, 75, 75);
ct.fillRect(475, 310, 75, 75);

// Row 3
ct.fillRect(650, 110, 75, 75);
ct.fillRect(650, 210, 75, 75);
ct.fillRect(650, 310, 75, 75);

// Row 4
ct.fillRect(825, 110, 75, 75);
ct.fillRect(825, 210, 75, 75);
ct.fillRect(825, 310, 75, 75);

console.log(canvas)