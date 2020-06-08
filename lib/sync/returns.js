"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returns = returns;
exports.Vreturns = Vreturns;

var _Type = require("./Type");

var _VType = require("./VType");

/* eslint-disable no-redeclare */

function returns(t) {
  return function (f) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var ret = f.apply(this, args);
      return t.parse(ret);
    };
  };
}

function Vreturns(t) {
  return function (f) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var ret = f.apply(this, args);
      return t.validate(ret);
    };
  };
}
//# sourceMappingURL=returns.js.map