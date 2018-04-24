var addElement= function(){
    /*
    var d_01 = document.createElement("svg");
    var newText = document.createTextNode ('this shoud work........');
    d_01.id='test';
    d_01.className='xxxxx';
    d_01.appendChild(newText);
    var my_div = document.getElementById('fooObject');
    
    d_01.style.top='300px';

    document.body.insertBefore(d_01,my_div);
    console.log(d_01.style.left, my_div);
    */
    
var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.width = 400;
svgElement.height = 400;
document.getElementsByTagName("body")[0].appendChild(svgElement); 

var rectElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rectElement.setAttribute("fill", "#ff0000");
rectElement.setAttribute("width", "200px");
rectElement.setAttribute("height", "200px");

svgElement.appendChild(rectElement);
    
}
var foo = null; // objec

function doMove() {
  foo.style.left = parseInt(foo.style.left)+1+'px';
  setTimeout(doMove,1); // call doMove in 20msec
  if (parseInt(foo.style.left)> 300){
      foo.style.left='0px';
  }
  console.log('food.style.left');
}

function ani() {
    /*
  foo = document.getElementById('fooObject'); // get the "foo" object
  foo.style.left = '0px'; // set its initial position to 0px
  */
  addElement();
//doMove(); // start animating
}

//---------TEST
var int = function(){
    console.log("hello");
    ani();
}

window.onload=int;