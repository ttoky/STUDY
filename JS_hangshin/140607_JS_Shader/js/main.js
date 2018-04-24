//-- Vector

var Vector = function() {
    this.data = arguments;
};

Vector.prototype = {
    1: function(x) {
        return new Vector(x);
    },
    2: function(x) {
        return new Vector(x, x);
    },
    3: function(x) {
        return new Vector(x, x, x);
    },
    4: function(x) {
        return new Vector(x, x, x, x);
    },
    get len() {
        return this.data.length;
    },
    get x() {
        return this.data[0];
    },
    set x(val) {
        this.data[0] = val;
    },
    get y() {
        return this.data[1];
    },
    set y(val) {
        this.data[1] = val;
    },
    get z() {
        return this.data[2];
    },
    set z(val) {
        this.data[2] = val;
    },
    get w() {
        return this.data[3];
    },
    set w(val) {
        this.data[3] = val;
    },
    get xyy() {
        return vec3(this.data[0], this.data[1], this.data[1]);
    },
    get yxy() {
        return vec3(this.data[1], this.data[0], this.data[1]);
    },
    get yyx() {
        return vec3(this.data[1], this.data[1], this.data[0]);
    }
};

//---- binary operations

var add = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = a.data[n] + b.data[n];
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var sub = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = a.data[n] - b.data[n];
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var mul = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = a.data[n] * b.data[n];
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var div = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = a.data[n] / b.data[n];
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var pow = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = Math.pow(a.data[n], b.data[n]);
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var min = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = Math.min(a.data[n], b.data[n]);
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var max = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = Math.max(a.data[n], b.data[n]);
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var distance = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var d = 0;
    while(n > 0) {
        n--;
        d += Math.pow(a.data[n] - b.data[n], 2);
    }  
    return Math.sqrt(d);
};

var dot = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var d = 0;
    while(n > 0) {
        n--;
        d += a.data[n] * b.data[n];
    }  
    return d;
};

var reflect = function(a, b) {
    var n = Math.max(a.len ? a.len : 1, b.len ? b.len : 1);
    if(!a.len) a = Vector.prototype[n](a);
    if(!b.len) b = Vector.prototype[n](b);
    var dp = this.dot(a, b);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = a.data[n] - 2.0 * dp * b.data[n];
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var cross = function(a, b) {
    return vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * a.x);        
};

//---- unary operations

var fract = function(x) {
    var n = x.len ? x.len : 1;
    if(!x.len) x = Vector.prototype[n](x);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = x.data[n] - Math.floor(x.data[n]);
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var length = function(x) {
    var n = x.len ? x.len : 1;
    if(!x.len) x = Vector.prototype[n](x);
    var d = 0;
    while(n > 0) {
        n--;
        d += Math.pow(x.data[n], 2);
    }  
    return Math.sqrt(d);
};

var abs = function(x) {
    var n = x.len ? x.len : 1;
    if(!x.len) x = Vector.prototype[n](x);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = Math.abs(x.data[n]);
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var sin = function(x) {
    var n = x.len ? x.len : 1;
    if(!x.len) x = Vector.prototype[n](x);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = Math.sin(x.data[n]);
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

var normalize = function(x) {
    var n = x.len ? x.len : 1;
    if(!x.len) x = Vector.prototype[n](x);
    var v = Vector.prototype[n](0);
    var d = this.length(x);
    while(n > 0) {
        n--;
        v.data[n] = x.data[n] / d;
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

//---- parametered operations

var clamp = function(x, minVal, maxVal) {
    var n = x.len ? x.len : 1;
    if(!x.len) x = Vector.prototype[n](x);
    if(!minVal.len) minVal = Vector.prototype[n](minVal);
    if(!maxVal.len) maxVal = Vector.prototype[n](maxVal);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = Math.min(Math.max(x.data[n], minVal.data[n]), maxVal.data[n]);
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

//---- creator functions

var vec2 = function() {
    if(arguments.length === 1) {
        return new Vector(arguments[0], arguments[0]);
    }
    else {
        return new Vector(arguments[0], arguments[1]);
    }
};

var vec3 = function() {
    if(arguments.length === 1) {
        return new Vector(arguments[0], arguments[0], arguments[0]);
    }
    else {
        return new Vector(arguments[0], arguments[1], arguments[2]);
    }
};

var vec4 = function() {
    if(arguments.length === 1) {
        return new Vector(arguments[0], arguments[0], arguments[0], arguments[0]);
    }
    else {
        return new Vector(arguments[0], arguments[1], arguments[2], arguments[3]);
    }
};

//-- Shading

var w, h;

var g = document.createElement('canvas').getContext('2d');
document.body.appendChild(g.canvas);

var gPixel = document.createElement('canvas').getContext('2d');
gPixel.canvas.width = 1;
gPixel.canvas.height = 1;
var pixel = g.getImageData(0, 0, 1, 1);

var plist = [];

var toByte = function(n) {
    var res = Math.floor(n * 255);
    if(res < 0) res = 0;
    if(res > 255) res = 255;
    return res;
};

var hash = function(x) {
    return fract(Math.sin(x) * 43679.25);
};

var hash2 = function(uv) {
    return fract(Math.sin(uv.x * 15.32 + uv.y * 34.85) * 43679.25);
};

var sdPlane = function(p) {
    return p.y;
};

var sdSphere = function(p, r) {
    return sub(length(p), r);
};

var map = function(p) {
    var d = sdPlane(p);
    d = min(d, sdSphere(sub(p, vec3(0.0, 0.8, 0.0)), 0.8));
    return d;
};

var calcNormal = function(p) {
    var e = vec3(0.001, 0.0, 0.0);
    var nor = vec3(
        sub(map(add(p, e.xyy)), map(sub(p, e.xyy))),
        sub(map(add(p, e.yxy)), map(sub(p, e.yxy))),
        sub(map(add(p, e.yyx)), map(sub(p, e.yyx)))
    );
    return normalize(nor);
};

var castRay = function(ro, rd, maxt) {
    var precis = 0.001;
    var h = precis * 2.0;
    var t = 0.0;
    for(var i = 0; i < 60; i++) {
        if(abs(h) < precis || t > maxt) continue;
        h = map(add(ro, mul(rd, t)));
        t += h;
    }
    return t;
};

var softshadow = function(ro, rd, mint, maxt, k) {
    var sh = 1.0;
    var t = mint;
    var h = 0.0;
    for(var i = 0; i < 30; i++) {
        if(t > maxt) continue;
        h = map(add(ro, mul(rd, t)));
        sh = min(sh, k * h / t);
        t += h;
    }
    return sh;
};

var render = function(ro, rd) {
    var col = vec3(1.0);
    var t = castRay(ro, rd, 20.0);
    var pos = add(ro, mul(rd, t));
    var nor = calcNormal(pos);
    var lig = normalize(vec3(-0.4, 0.7, 0.5));
    var dif = clamp(dot(lig, nor), 0.0, 1.0);
    var spec = pow(clamp(dot(reflect(rd, nor), lig), 0.0, 1.0), 16.0);
    var sh = softshadow(pos, lig, 0.02, 20.0, 7.0);
    col = mul(mul(col, add(dif, spec)), sh);
    return col;
};

var main = function(uv) {
    var p = sub(mul(uv, 2.0), 1.0);
    var ro = vec3(0.0, 2.0, 3.0);
    var ta = vec3(0.0, 0.8, 0.0);
    var cw = normalize(sub(ta, ro));
    var cp = vec3(0.0, 1.0, 0.0);
    var cu = normalize(cross(cw, cp));
    var cv = normalize(cross(cu, cw));
    var rd = normalize(add(add(mul(p.x, cu), mul(p.y, cv)), mul(2.5, cw)));
    var col = render(ro, rd);
    return [col.x, col.y, col.z, 1];
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

var prepare = function() {
    plist = [];
    var x, y;
    for(y = 0; y < h; y++) {
        for(x = 0; x < w; x++) {
            plist.push([x, y]);    
        }
    }
};

var doRender = function() {
    if(plist.length > 0) {
        for(var i = 0; i < w; i++) {
            renderPixel(plist[0][0], plist[0][1]);
            plist.shift();    
        }
    }
};

var run = function() {
    w = 200;
    h = 200;
    g.canvas.width = w;
    g.canvas.height = h;
    g.canvas.style['width'] = '400px';
    g.canvas.style['height'] = '400px';
    prepare();
};

var loop = function() {
    doRender();
    requestAnimationFrame(loop);
};

loop();
run();