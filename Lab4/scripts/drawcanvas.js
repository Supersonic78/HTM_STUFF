
$(document).ready(function () {
    //console.log("ready!"); 
    draw();
});


function draw() {
    var canvas = document.getElementById('myform');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle ="blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "brown";
    ctx.fillRect(0, 300, canvas.width, canvas.height);


    
    var my_gradient = ctx.createLinearGradient(10, 10, 10, 400);
    my_gradient.addColorStop(0, "white");
    my_gradient.addColorStop(0.5, "blue");
    my_gradient.addColorStop(1, "brown");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "brown";

    ctx.beginPath();
    ctx.arc(10, 400, 130, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(100, 420, 130, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(200, 450, 100, 0, Math.PI * 2, false);
    ctx.fill();
   
    
    
    
   
   
    //samma kod med jQuery: 
    var jCanvas = $('myform');


}
