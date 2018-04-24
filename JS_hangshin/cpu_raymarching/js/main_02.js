//var g = document.createElement('canvas').getContext('2d');
//document.body.appendChild(g.canvas);

var g = document.createElement('canvas').getContext('2d');
document.body.appendChild(g.canvas);
g.canvas.width=300;
g.canvas.height=300;
g.canvas.style.cssText="background-color:red";

//g.fillStyle="#FF00ff";
//g.fillRect(0,0,100,100);

var pixel = g.getImageData (0,0,300,300);

/*
for (var i=0; i< pixel.data.length; i+=4){
    pixel.data[i]=0;
    pixel.data[i+1]=200;
    pixel.data[i+3]=100;
    }
    g.putImageData(pixel,0,0);
    
*/

var doRender = function(){
    
    for (var i=0; i< pixel.data.length; i+=4){
    pixel.data[i]=Math.random()*40;
    pixel.data[i+1]=Math.random()*100;
    pixel.data[i+3]=Math.random()*150+100;
    }
    g.putImageData(pixel,0,0); 
    
}

var loop = function(){
   doRender();
   requestAnimationFrame(loop);
   
}

loop();

/*
//// CHECK
var init = function(){
    console.log("hello");
}

window.onload=init;
*/