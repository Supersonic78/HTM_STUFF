
$(document).ready(function () {
    //console.log("ready!"); 
    draw();
});


function draw() {
    var canvas = document.getElementById('myform');
    var ctx = canvas.getContext('2d');
    ctx.fillRect(10, 20, 30, 200);
    ctx.fillRect(90, 20, 30, 200);
    ctx.fillRect(40, 90, 60, 50);
    ctx.fillRect(150, 20, 30, 200);
    ctx.fillRect(270, 20, 30, 240);
    ctx.fillRect(150, 100, 70, 50);
    ctx.fillRect(150, 20, 70, 50);
    ctx.fillRect(150, 170, 70, 50);
    ctx.fillRect(220, 230, 70, 50);
    var c = document.getElementById("myform");
    var ctx = c.getContext("2d");
    ctx.moveTo(100, 100);
    ctx.lineTo(1000, 0); 
    ctx.stroke();
    //samma kod med jQuery: 
    var jCanvas = $('myform');


}
