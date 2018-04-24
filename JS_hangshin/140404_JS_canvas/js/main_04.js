var w =0;
var h =0;

var checkWindow = function(){
	w = window.innerWidth;
	h =window.innerHeight;
	
	console.log(w+":" + h);
	var c = document.getElementById('c_01');
	c.width=w-1;
	c.height=h-1;
	var ctx = c.getContext('2d');
	ctx.strokeRect(1,1,c.width-10,c.height-10);
	ctx.stroke();
	
}

var int = function(){
	var c = document.createElement('canvas');
	c.id = 'c_01';
	c.width =w;
	c.height=h;
	var ctx = c.getContext('2d');
	ctx.strokeRect(1,1,c.width,c.height);
	ctx.stroke();
	
	document.body.appendChild(c);
}

window.onload=int;
window.onresize=checkWindow;