canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color = document.getElementById(color).value
    width_of_line= document.getElementById(width_of_line).value

mouseEvent="mousedown";
}



canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    
    mouseEvent="mouseleave";
}

canvas.addEventListen("touchstart",my_touchstart);
function my_touchstart(e) {
    color = document.getElementById(color).value
    width_of_line= document.getElementById(width_of_line).value
    }

canvas.addEventListen("mousemove",my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width_of_line;
   ctx.moveTo(last_position_of_x, last_position_of_y);
   ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
   ctx.stroke();
}
   
   last_position_of_x = current_position_of_mouse_x;
   last_position_of_y = current_position_of_mouse_y;
   
    }
    
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
 {
    
 current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
 current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo
ctx.stroke();


last_position_of_touch_x = current_position_of_touch_x;
last_position_of_touch_y = current_position_of_touch_y;

 }