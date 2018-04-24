var each = new Array();
var mx=10;
var my=10;
var wface;
var hface;

var doRender = function(){
    wface= 50;
    hface =50;

for (var y = 0; y< my; y++){
   for (var x = 0; x < mx ; x++){
     var index = x+y*mx;
           var svg =  document.createElementNS("http://www.w3.org/2000/svg", "svg");
           svg.setAttribute("width", wface);
           svg.setAttribute("height", hface);
           svg.setAttribute ("x",x*wface);
           svg.setAttribute("y", y*hface);
           svg.setAttribute("stroke","none");
           svg.setAttribute("style", "background:red;margin:0");
          each[index]=svg;
  
           
           document.getElementsByTagName("body")[0].appendChild(svg);
           
    }
 }
}

var loop = function(){
 doRender();
//requestAnimationFrame(loop);
    
}
//loop();
//window.onload =loop;

/*

//---- TEST
var init = function(){
    console.log( "hello");
}

window.onload = init;
*/