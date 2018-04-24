var w;
var h;
var wnum = 10;
var hnum = 10;
var wface;
var hface;

var reSetCanvas = function(){
  
 w = window.innerWidth;
 h = window.innerHeight;

 wface = w/wnum;
 hface = h/hnum;
 
 var canvas = document.getElementById('main');
  canvas.setAttribute("width", w);
  canvas.setAttribute("height",h);
 var context = canvas.getContext('2d');
 
 var sx, sy, ex, ey;
 
 for (var y =0; y < hnum ; y++){
   for (var x =0; x < wnum ; x++){
     
     var index = x+y*wnum;
     
    if (index%2 ==0){
      sx=0;
      sy =0;
      ex = wface;
      ey = hface;
 
    } else {
      
      sx=wface;
      sy =0;
      ex = 0;
      ey = hface;
      
    }
    
<<<<<<< HEAD
      context.beginPath();
     // context.rotate(index*0.01);
=======
    
      context.translate(x*wface,y*hface);
      context.beginPath();
>>>>>>> FETCH_HEAD
      context.moveTo(sx,sy);
      context.lineTo(ex,ey);
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
  doRender();
 requestAnimationFrame(loop);
  
  //setTimeout(loop,20);
}

var init = function(){
  w = window.innerWidth;
  h = window.innerHeight;
  wface = w/wnum;
  hface = h/hnum;

  var canvas = document.createElement("canvas");
  canvas.id = "main";
  canvas.setAttribute("width", w);
  canvas.setAttribute("height",h);
  document.getElementsByTagName("body")[0].appendChild(canvas);

  loop();
}

window.onload = init;
