"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeRight = composeRight;

var _Type = require("./Type");

function composeRight(a, b) {
  // a,b -> a(b())
  return new _Type.ComposeRightType(a, b);
}
//# sourceMappingURL=composeRight.js.map