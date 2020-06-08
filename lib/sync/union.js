"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = union;

var _ValidationError = require("./ValidationError");

var _Type = require("./Type");

function union(a, b) {
  var u = new _Type.UnionType(a, b, function (v) {
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
//# sourceMappingURL=union.js.map