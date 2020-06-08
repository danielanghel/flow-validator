"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = match;

var _ValidationError = require("./ValidationError");

var _Type = require("./Type");

/* eslint-disable no-redeclare */

function match() {
  var v = arguments.length <= 0 ? undefined : arguments[0];
  for (var i = 1; i < arguments.length; i += 2) {
    var t = arguments.length <= i ? undefined : arguments[i];
    var f = arguments.length <= i + 1 ? undefined : arguments[i + 1];
    var pv = void 0;
    try {
      pv = t.parse(v);
    } catch (e) {
      if (e instanceof _ValidationError.ValidationError) continue;else throw e;
    }
    return f(pv);
  }
  throw new _ValidationError.ValidationError({
    expected: { name: "pattern" },
    got: v,
    description: "no pattern matches"
  });
}
//# sourceMappingURL=match.js.map