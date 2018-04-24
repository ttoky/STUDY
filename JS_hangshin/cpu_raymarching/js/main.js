var w, h, sweep;

var g = document.createElement('canvas').getContext('2d');
document.body.appendChild(g.canvas);

var gPixel = document.createElement('canvas').getContext('2d');
gPixel.canvas.width = 1;
gPixel.canvas.height = 1;
var pixel = g.getImageData(0, 0, 1, 1);

var plist = [];
var n_samples = 0;

var toByte = function(n) {
    var res = Math.floor(n * 255);
    if(res < 0) res = 0;
    if(res > 255) res = 255;
    return res;
};

var renderPixel = function(x, y) {
    var uv = vec2(x / (w - 1), 1 - y / (h - 1));
    var color = main(uv);
    pixel.data[0] = toByte(color[0]);
    pixel.data[1] = toByte(color[1]);
    pixel.data[2] = toByte(color[2]);
    pixel.data[3] = toByte(color[3]);
    gPixel.putImageData(pixel, 0, 0);
    
    g.drawImage(gPixel.canvas, x, y);
};

var doRender = function() {
    var x, y;
    if(n_samples > 0) {
        var n = sweep;
        while(n > 0 && n_samples > 0) {
            n_samples--;
            y = Math.floor(n_samples / w);
            x = n_samples - (y * w);
            renderPixel(w - x - 1, h - y - 1);
            n--;
        }
    }
};

var run = function(width, height, f) {
    w = Math.floor(width / f);
    h = Math.floor(height / f);
    resolution.x = w;
    resolution.y = h;
    g.canvas.width = w;
    g.canvas.height = h;
    g.canvas.style['width'] = width + 'px';
    g.canvas.style['height'] = height + 'px';
    
    var t0 = window.performance.now();
    renderPixel(0, 0);   
    var t1 = window.performance.now();
    var elapsed = t1 - t0;
    
    n_samples = w * h;
    sweep = Math.floor(1000 / elapsed);
    sweep = Math.min(Math.max(sweep, 1), n_samples);
};

var loop = function() {
    doRender();
    requestAnimationFrame(loop);
};

loop();
run(400, 300, 2);