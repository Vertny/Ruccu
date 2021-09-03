var alokeve ="empty";
var kellyx ="";
var kellyy ="";
color = "blue"
width = "4"
canvas=document.getElementById("Canvasar");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mick);

function my_mick(e){
alokeve="mousedown";
}
canvas.addEventListener("mouseleave", my_mic);

function my_mic(e){
    alokeve="mouseleave";
}
canvas.addEventListener("mouseup", my_mica);

function my_mica(e){
    alokeve="mouseup";
}
canvas.addEventListener("mousemove", my_crood);

function my_crood(e){
    current_x= e.clientX - canvas.offsetLeft;
    current_y= e.clientY - canvas.offsetTop;

if (alokeve == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("Last position of x and y cordinates =");
    console.log("x = " + kellyx + "y =" + kellyy);
    ctx.moveTo(kellyx, kellyy);

    console.log("Current position of x and y =");
    console.log("x = " + current_x + "y =" + current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
}
kellyx= current_x;
kellyy = current_y;


}
