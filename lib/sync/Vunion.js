"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vunion = Vunion;

var _ValidationError = require("./ValidationError");

var _VType = require("./VType");

function Vunion(a, b) {
  var u = new _VType.VUnionType(a, b, function (v) {
    var left = void 0;
    var right = void 0;
    try {
      left = a.parse(v);
    } catch (e) {
      if (e instanceof _ValidationError.ValidationError) ;else throw e;
    }
    try {
      right = b.parse(v);
    } catch (e) {
      if (e instanceof _ValidationError.ValidationError) ;else throw e;
    }
    if (left) return left;
    if (right) return right;
    throw new _ValidationError.ValidationError({ expected: u, got: v });
  });
  return u;
}
//# sourceMappingURL=Vunion.js.map