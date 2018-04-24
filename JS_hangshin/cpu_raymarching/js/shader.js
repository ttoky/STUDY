var resolution = vec2(400, 400);

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
    p.x *= resolution.x / resolution.y;
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