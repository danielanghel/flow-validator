"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Voptional = Voptional;

var _VType = require("./VType");

function Voptional(t) {
  return new _VType.VOptionalType(t, function (v) {
    if (v === null || v === void 0) return v;
    return t.validate(v);
  });
}
//# sourceMappingURL=Voptional.js.map