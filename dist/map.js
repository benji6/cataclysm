"use strict";
exports.__esModule = true;
exports["default"] = function (f) { return function (xs) {
    var ys = [];
    for (var i = 0; i < xs.length; i++)
        ys[i] = f(xs[i]);
    return ys;
}; };
