var faces = new Array();
var fn=0;
var mouseX=0;
var mouseY=0;

var cv ={x:0, y:0};
var ucv = {x:0, y:0};
var mv={x:0, y:0};

var mx=0;
var my=0;

var setRect = function(svg){
    var w = svg.getAttribute('width');
    var h = svg.getAttribute ('height');
    
    var n=0;
for (var j=0; j<h; j+=30){
for (var i=0; i<w; i+=30){
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.id="rect_"+n;
    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke","none");
    rect.setAttribute("width", "30px");
    rect.setAttribute("height", "30px");
    rect.setAttribute("x",i);
    rect.setAttribute("y",j);
    svg.appendChild(rect);
    faces[n]=rect;   
    n++;
}
}
}



var getUnitVector = function(v){
	var len = getLen(v);
	var vx = (v.x-cv.x)/len;
	var vy = (v.y-cv.y)/len;
	return {x:vx, y:vy};
}

var getLen = function(v){
	var vx=v.x-cv.x;
	var vy=v.y -cv.y;
	
	var len = Math.sqrt(vx*vx+vy*vy);
	return len;
	
}


var light=function(svg){
	
	trackMouseloc();
	
	mv.x=mouseX;
	my.y=mouseY;
	
   
   ucv = getUnitVector(mv);
	
	for (var i = 0; i<parseInt(faces.length); i++){
   
    var vx = parseFloat(faces[i].getAttribute("x"));
    var vy = parseFloat(faces[i].getAttribute("y"));
	var mmv = {x:vx,y:vy};
	
	var uv = getUnitVector(mmv);
	
	var value = Math.acos(uv.x*ucv.x+uv.y*ucv.y);
	
	
	//trackMouseloc();
/*
    var dx = mouseX-vx+100;
    var dy = mouseY-vy+100;
    var dis = Math.sqrt(dx*dx+dy*dy);
    
    var md = Math.sqrt(mx*mx+my*my);
  */
  
    var myR = Math.round(255*value/Math.PI);
	

faces[i].setAttribute('fill','rgba('+myR+','+myR+','+myR+',255)');
	//faces[i].setAttribute('fill','rgba('+myR+',255,255,255)');
	
	}
/*	
if (fn >= parseInt(faces.length)-1){
	fn=0;
	}
	fn++;
 */
 
setTimeout(light,20);
}

var trackMouseloc=function(){
 document.onmousemove = getMousePosition;    
}

var getMousePosition = function(e) {
		mouseX= e.clientX+ document.body.scrollLeft;
		mouseY = e.clientY+ document.body.scrollTop;
        
        //mouseTrack
        //http://bitdaddys.com/javascript/example3run.html
	  }

var int=function(){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   svg.id = 'svgStyle';
svg.setAttribute('width',window.innerWidth);
svg.setAttribute('height', window.innerHeight);
//svg.setAttribute('width','1920');
//svg.setAttribute('height','1080');
//
   mx = parseFloat(svg.getAttribute('width'));
   my = parseFloat(svg.getAttribute('height'));
   
   cv={x:mx*0.5, y:my*0.5};
   
   mv.x=mouseX;
   my.y=mouseY;
   
   ucv = getUnitVector(mv);

   document.getElementsByTagName("body")[0].appendChild(svg);
   setRect(svg);
   light(svg);
}

window.onload=int;