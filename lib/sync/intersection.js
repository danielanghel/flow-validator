"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersection = intersection;

var _Type = require("./Type");

function intersection(a, b) {
  return new _Type.IntersectionType(a, b, function (v) {
    a.parse(v);
    b.parse(v); // TODO: which one to take? how to merge
    return v; // eslint-disable-line flowtype/no-weak-types
  });
}
//# sourceMappingURL=intersection.js.map