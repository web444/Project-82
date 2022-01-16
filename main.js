var cns = document.getElementById("myCanvas");
var ctx = cns.getContext("2d");
var mouseEvent = "empty";
var colorOfL = "darkBlue";
var radius = 10;
var linegWidth = 5;
var lastPositionX = 0;
var lastPositionY = 0;

cns.addEventListener("mousedown", myMouseDown);


function myMouseDown(e) {
    colorOfL = document.getElementById("col").value;
    linegWidth = document.getElementById("wid").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";

}

cns.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {

    mouseEvent = "mouseup";

}

cns.addEventListener("mouseleave", myMouseleave);

function myMouseleave(e) {

    mouseEvent = "mouseleave";

}

cns.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {

    var currentPositionX = e.clientX - cns.offsetLeft;
    var currentPositionY = e.clientY - cns.offsetTop + 125;
    console.log(mouseEvent);

    if (mouseEvent == "mouseDown") {
        console.log("Is it working?");

        ctx.beginPath();
        ctx.strokeStyle = colorOfL;
        ctx.lineWidth = linegWidth;

        console.log(lastPositionX, lastPositionY);
        console.log(currentPositionX, currentPositionY);

        ctx.arc(currentPositionX, currentPositionY, radius, 0, Math.PI * 2);

        ctx.stroke();
    }

    lastPositionX = currentPositionX;
    lastPositionY = currentPositionY;

}

function cler() {

    ctx.clearRect(0, 0, cns.width, cns.height)

}