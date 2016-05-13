"use strict";
exports.__esModule = true;
exports["default"] = function (f) { return function (a) { return function (b) { return f(b)(a); }; }; };
