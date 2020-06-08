"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

exports.tuple = tuple;
exports.Vtuple = Vtuple;

var _ValidationError = require("./ValidationError");

var _Type = require("./Type");

var _VType = require("./VType");

var _arrayType = require("./arrayType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-redeclare

/* eslint-disable no-redeclare */

// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
function tuple(s) {
  // eslint-disable-line no-redeclare
  var tt = new _Type.TupleType(s, function (v) {
    var a = _arrayType.arrayType.validate(v);
    var result = [];
    var errors = {};
    for (var i = 0; i < s.length; i++) {
      try {
        result[i] = s[i].parse(a[i]);
      } catch (e) {
        if (e instanceof _ValidationError.ValidationError) errors[String(i)] = e;else throw e;
      }
    }
    if ((0, _getOwnPropertyNames2.default)(errors).length) throw new _ValidationError.ValidationError({ expected: tt, got: a, errors: errors });
    return result;
  });
  return tt;
} // eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare

function Vtuple(s) {
  // eslint-disable-line no-redeclare
  var tt = new _VType.VTupleType(s, function (v) {
    var a = _arrayType.arrayType.validate(v);
    var errors = {};
    for (var i = 0; i < s.length; i++) {
      try {
        s[i].validate(a[i]);
      } catch (e) {
        if (e instanceof _ValidationError.ValidationError) errors[String(i)] = e;else throw e;
      }
    }
    if ((0, _getOwnPropertyNames2.default)(errors).length) throw new _ValidationError.ValidationError({ expected: tt, got: a, errors: errors });
    return a;
  });
  return tt;
}
//# sourceMappingURL=tuple.js.map