var getVector=function(id){
    var el=document.querySelector(id);
    var v={
        x:parseFloat(el.getAttribute("x2"))-parseFloat(el.getAttribute("x1")),
        y:parseFloat(el.getAttribute("y2"))-parseFloat(el.getAttribute("y1"))
    };
    return v;
}

var getUnitVector=function(v){
    var len=getLength(v,v);
    var vx=v.x/len;
    var vy=v.y/len;
    return {x:vx, y:vy};
}

var getLength=function(v){
    return Math.sqrt(dot(v,v));
}

var dot=function(a,b){
return a.x*b.x+a.y*b.y;
}

var setVector=function(id,v){
    var el=document.querySelector(id);
    var x1=parseFloat(el.getAttribute("x1"));
    var y1=parseFloat(el.getAttribute("y1"));
    el.setAttribute('x2',x1+v.x);
    el.setAttribute('y2', y1+v.y);
    
}

//test js
var init=function(){
    console.log("hello");
}
window.onload=init;

//
