"use strict";
exports.clamp = function (min) { return function (max) { return function (val) { return val < min ? min : val > max ? max : val; }; }; };
