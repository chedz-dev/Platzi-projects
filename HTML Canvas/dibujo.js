var button = document.getElementById("button");
var canvas = document.getElementById("canvas");
var width = parseInt(canvas.width);
var height = parseInt(canvas.height);
var canvasContext = canvas.getContext("2d");
var borderColour = "#000";

button.addEventListener("click", drawInCanvas);
drawInCanvas();

function drawLine(colour, xi, yi, xf, yf) {
    canvasContext.beginPath();
    canvasContext.strokeStyle = colour;
    canvasContext.moveTo(xi, yi);
    canvasContext.lineTo(xf, yf);
    canvasContext.stroke();
    canvasContext.closePath();
}

function drawRectangle(colour, xi, yi, xf, yf) {
    drawLine(colour, xi, yi, xf, yi);
    drawLine(colour, xi, yf, xf, yf);
    drawLine(colour, xi, yi, xi, yf);
    drawLine(colour, xf, yi, xf, yf);
}

function drawInCanvas() {
    var lines = parseInt(document.getElementById("lines-quantity").value);
    var colour = "#E99";
    var spaceBetweenLines = width / lines;
    var xi, yi, xf, yf;
    canvasContext.clearRect(0, 0, width, height);
    drawRectangle(borderColour, 1, 1, width - 1, height - 1);
    for(var lineNumber = 0 ; lineNumber < lines ; lineNumber++) {
        yi = spaceBetweenLines * lineNumber;
        xf = spaceBetweenLines * (lineNumber + 1);
        console.log("Line Number: " + lineNumber);
        drawLine(colour, 0, yi, xf, height);

        drawLine(colour,)
    }
}

