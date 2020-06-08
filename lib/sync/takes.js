"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takes = takes;
exports.Vtakes = Vtakes;

var _Type = require("./Type");

var _VType = require("./VType");

var _tuple = require("./tuple");

// eslint-disable-line no-redeclare

// eslint-disable-next-line no-redeclare


/* eslint-disable no-redeclare */

// eslint-disable-line no-redeclare
function takes() {
  for (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }

  var paramsValidator = (0, _tuple.tuple)(types);
  return function (f) {
    return function () {
      for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      return f.apply(this, paramsValidator.parse(params));
    };
  };
} // eslint-disable-line no-redeclare


// eslint-disable-line no-redeclare

// eslint-disable-next-line no-redeclare
function Vtakes() {
  for (var _len3 = arguments.length, types = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    types[_key3] = arguments[_key3];
  }

  var paramsValidator = (0, _tuple.Vtuple)(types);
  return function (f) {
    return function () {
      for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
      }

      return f.apply(this, paramsValidator.validate(params));
    };
  };
}
//# sourceMappingURL=takes.js.map