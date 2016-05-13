"use strict";
var clamp_1 = require('./clamp');
exports.clamp = clamp_1["default"];
var flip_1 = require('./flip');
exports.flip = flip_1["default"];
var merge_1 = require('./merge');
exports.merge = merge_1["default"];
var tap_1 = require('./tap');
exports.tap = tap_1["default"];
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
