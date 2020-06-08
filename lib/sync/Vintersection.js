"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vintersection = Vintersection;

var _VType = require("./VType");

function Vintersection(a, b) {
  return new _VType.VIntersectionType(a, b, function (v) {
    a.validate(v);
    b.validate(v);
    return v; // eslint-disable-line flowtype/no-weak-types
  });
}
//# sourceMappingURL=Vintersection.js.map