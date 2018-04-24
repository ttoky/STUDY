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
    print: function() {
        var str = Array.prototype.join.call(this.data, ', ');
        console.log(str);
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

var floor = function(x) {
    var n = x.len ? x.len : 1;
    if(!x.len) x = Vector.prototype[n](x);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = Math.floor(x.data[n]);
    }
    if(v.len === 1) return v.data[0];
    else return v;
};

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

var sqrt = function(x) {
    var n = x.len ? x.len : 1;
    if(!x.len) x = Vector.prototype[n](x);
    var v = Vector.prototype[n](0);
    while(n > 0) {
        n--;
        v.data[n] = Math.sqrt(x.data[n]);
    }
    if(v.len === 1) return v.data[0];
    else return v;
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