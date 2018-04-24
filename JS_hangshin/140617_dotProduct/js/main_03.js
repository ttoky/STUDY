var eachs = new Array();

var w;
var h;
var wnum = 10;
var hnum = 10;
var wface;
var hface;

var reSetCanvas = function(){
  
// w = window.innerWidth;
// h = window.innerHeight;

// wface = w/wnum;
// hface = h/hnum;

 
 for (var y =0; y < hnum ; y++){
   for (var x =0; x < wnum ; x++){
     
     var index = x+y*wnum;
     var canvas = document.getElementById('main_'+index);
     canvas.setAttribute("width", wface);
     canvas.setAttribute("height",hface);
     canvas.setAttribute("x", x*wface);
     canvas.setAttribute("y", y*hface);
     
     var context = canvas.getContext('2d');
    // context.translate(canvas.x, canvas.y);
     //context.rotate(Math.PI/4);
 
 /*
 var sx, sy, ex, ey;
     
    if (index%2 ==0){
      sx=x*wface;
      sy =y*hface;
      ex = sx+wface;
      ey = sy+hface;
 
    } else {
      
      sx=x*wface+wface;
      sy =y*hface;
      ex = sx-wface;
      ey = sy+hface;
      
    }
*/    
      context.beginPath();
      context.moveTo(0,0);
      context.lineTo(wface, hface);
      context.closePath();
      context.lineWidth = 2;
      context.strokeStyle = 'red';
      context.stroke();
     
   }
 }

}


var doRender = function(){
 reSetCanvas();
  
  
}

var loop = function(){
 checkWH();
 doRender();
//requestAnimationFrame(loop);
  
//setTimeout(loop,20);
}

var checkWH = function(){

  w = window.innerWidth;
  h = window.innerHeight;
  wface = w/wnum;
  hface = h/hnum;

for (var  y = 0; y <hnum; y++){
for (var  x = 0; x <wnum; x++){
  var index = x+y*wnum;
var canvas = document.createElement("canvas");
canvas.id = "main_"+index;
 canvas.setAttribute("width", wface);
canvas.setAttribute("height",hface);
eachs[index]=canvas;
document.getElementsByTagName("body")[0].appendChild(canvas);

}
}


}

var init = function(){
checkWH();
 loop();
}

window.onload = init;
