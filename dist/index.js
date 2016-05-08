"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./clamp'));
exports.compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return function (x) { return fns.reduceRight(function (acc, f) { return f(acc); }, x); };
};
exports.curry = function (f) { return function () {
    var xs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xs[_i - 0] = arguments[_i];
    }
    return xs.length < f.length ? exports.curry(f.bind.apply(f, [null].concat(xs))) : f.apply(void 0, xs);
}; };
exports.flip = function (f) { return exports.curry(function (a, b) { return f(b, a); }); };
exports.tap = function (f) { return function (x) { return (f(x), x); }; };
