var faces = new Array();
var fn=0;
var mouseX=200;
var mouseY=200;

var mx=0;
var my=0;

var setRect = function(svg){
    var w = svg.getAttribute('width');
    var h = svg.getAttribute ('height');
    
    var n=0;
for (var j=0; j<h; j+=20){
for (var i=0; i<w; i+=20){
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.id="rect_"+n;
    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke","none");
    rect.setAttribute("width", "20px");
    rect.setAttribute("height", "20px");
    rect.setAttribute("x",i);
    rect.setAttribute("y",j);
    svg.appendChild(rect);
    faces[n]=rect;   
    n++;
}
}
}

var light=function(svg){
	
	for (var i = 0; i<parseInt(faces.length); i++){
    var x = parseFloat(faces[i].getAttribute("x"));
    var y = parseFloat(faces[i].getAttribute("y"));
    
 trackMouseloc();
    
    var dx = mouseX-x+100;
    var dy = mouseY-y+100;
    var dis = Math.sqrt(dx*dx+dy*dy);
    
    var md = Math.sqrt(mx*mx+my*my);
     
    var myR = Math.round(255*dis/md);
	
	console.log(myR);

	faces[i].setAttribute('fill','rgba('+myR+','+myR+','+myR+',255)');
	
	}
/*	
if (fn >= parseInt(faces.length)-1){
	fn=0;
	}
	fn++;
 */
 
//setTimeout(light,1000);
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
//svg.setAttribute('width','1024');
//svg.setAttribute('height','768');

   mx = parseFloat(svg.getAttribute('width'));
   my = parseFloat(svg.getAttribute('height'));
	
   document.getElementsByTagName("body")[0].appendChild(svg);
   setRect(svg);
   light(svg);
}

window.onload=int;