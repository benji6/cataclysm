"use strict";
exports.__esModule = true;
exports["default"] = function (min) { return function (max) { return function (val) { return val < min ? min : val > max ? max : val; }; }; };
