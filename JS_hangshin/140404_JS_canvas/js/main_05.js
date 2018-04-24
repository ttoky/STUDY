var w=window.innerWidth;
var h = window.innerHeight;
var inc=0;

var origin = {x:w*0.5, y:h*0.5};
var light = {x:origin.x, y:origin.y};

var wface = w/200;
var hface = h/200;

var pos = new Array();

var checkWindow=function(){
w=window.innerWidth;
h=window.innerHeight;

wface = w/200;
hface = h/200;

origin = {x:w*0.5, y:h*0.5};

var c =document.getElementById('c_01');
c.width=w;
c.height=h;

drawRect();
}
var getUnitVector=function(a,b){
	var dx=a.x-b.x;
	var dy=a.y-b.y;
	var len = Math.sqrt(dx*dx+dy*dy);
	var ux=dx/len;
	var uy=dy/len;
	return {x:ux, y:uy};	
}
var checkAngle=function(a,b){
	var myangle = Math.acos(a.x*b.x+a.y*b.y);
	return myangle;
	
}
var drawRect=function(){
	setPos();
	
	light.x=Math.cos((Math.PI*2)*inc/360)*200+w*0.5;
	light.y=Math.sin((Math.PI*2)*inc/360)*200+h*0.5;
	
	var lightv = getUnitVector(origin,light);
	
	var c = document.getElementById('c_01');
	c.width=w;
	c.height=h;
	
	var ctx = c.getContext('2d');
	ctx.beginPath();
	ctx.lineWidth='0';
	for (var n=0; n<pos.length; n++){
		var myv = getUnitVector(origin,pos[n]);
		var myangle = checkAngle(lightv, myv);
		var mycolor =Math.round(255*myangle/Math.PI);
		ctx.fillStyle='rgba('+mycolor+',0,255,255)';

		ctx.fillRect(pos[n].x,pos[n].y,wface+1,hface+1);		
	}
	
setTimeout(drawRect, 20);
		
	inc++;
}

var setPos=function(){
	var num=0;
		
	for (var j=0; j<h; j+=hface){
	for (var i=0; i<w; i+=wface){
		pos[num] = {x:i, y:j};
		num++;
		}	
	}
	document.body.appendChild(c);
}

var init = function(){
	var c = document.createElement('canvas');
	c.id='c_01';
	c.width=w;
	c.height=h;
	c.style='c_01';
	document.body.appendChild(c);
	
	drawRect();



}

window.onload=init;
window.onresize=checkWindow;