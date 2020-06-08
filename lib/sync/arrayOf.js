"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

exports.arrayOf = arrayOf;

var _ValidationError = require("./ValidationError");

var _arrayType = require("./arrayType");

var _Type = require("./Type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrayOf(t) {
  var aof = new _Type.ArrayOfType(t, function (v) {
    var a = _arrayType.arrayType.validate(v);
    var result = [];
    var errors = {};
    a.forEach(function (item, index) {
      try {
        result[index] = t.parse(item);
      } catch (e) {
        if (e instanceof _ValidationError.ValidationError) errors[String(index)] = e;else throw e;
      }
    });
    if ((0, _getOwnPropertyNames2.default)(errors).length) throw new _ValidationError.ValidationError({ expected: aof, got: v, errors: errors });
    return result;
  });
  return aof;
}
//# sourceMappingURL=arrayOf.js.map