
var each = new Array();

var init = function(){
    setSVG();
   // requestAnimationFrame(setSVG);
}

var setSVG = function(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    
    var ww = 10;
    var hh = 10;
    
    var wface = w / ww;
    var hface = h / hh;
    
    for (var y = 0; y < hh; y++ ){
        for (var x = 0; x< ww; x++){
            var index = x + y*ww;
         var svg = document.createElementNS ("http://www.w3.org/2000/svg", "svg");  
         svg.id = "svg_"+index;
         svg.setAttribute("width", wface);
         svg.setAttribute("height", hface);
         svg.setAttribute ("x",x*wface);
         svg.setAttribute("y",y*hface);
         svg.setAttribute("style", "background:red;")
         each [index]=svg;
         document.getElementsByTagName("body")[0].appendChild(each[index]);
        }
    }
}

window.onload = init;