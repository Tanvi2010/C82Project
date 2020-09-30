canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var last_position_x,last_position_y;
color = "black";
    width_line = 2;
radius=40;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
mouseevent="mouseDown"; 
color = document.getElementById("color").value;
width_line = document.getElementById("width_line").value;
radius= document.getElementById("radius").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
mouseevent="mouseUp"; 
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
mouseevent="mouseLeave"; 
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_x=e.clientX - canvas.getBoundingClientRect().left;
    current_y =e.clientY - canvas.getBoundingClientRect().top; 

if (mouseevent=="mouseDown"){
    mouse_x=e.clientX - canvas.getBoundingClientRect().left;
mouse_y =e.clientY - canvas.getBoundingClientRect().top; 
console.log("x="+mouse_x+"y="+ mouse_y) ;

color = document.getElementById("color").value;
width_line = document.getElementById("width_line").value;
radius= document.getElementById("radius").value;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line; 

    console.log("last position of x and y are");
    console.log("x="+last_position_x+"y="+ last_position_y) ;
    ctx.moveTo(last_position_x,last_position_y) ;

    console.log("current position of x and y are");
    console.log("x="+ current_x+"y="+ current_y) ;
    ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
    ctx.stroke();
}

last_position_x=current_x;
last_position_y=current_y;
}

function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}