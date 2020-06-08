"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optional = optional;

var _Type = require("./Type");

function optional(t) {
  return new _Type.OptionalType(t, function (v) {
    if (v === null || v === void 0) return v;
    return t.parse(v);
  });
}
//# sourceMappingURL=optional.js.map