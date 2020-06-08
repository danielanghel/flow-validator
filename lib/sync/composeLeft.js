"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeLeft = composeLeft;

var _Type = require("./Type");

function composeLeft(a, b) {
  // a,b -> b(a())
  return new _Type.ComposeLeftType(a, b);
}
//# sourceMappingURL=composeLeft.js.map