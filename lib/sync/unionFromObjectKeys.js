"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.unionFromObjectKeys = unionFromObjectKeys;

var _ValidationError = require("./ValidationError");

var _Type = require("./Type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unionFromObjectKeys(o) {
  var en = new _Type.Type("enum", function (v) {
    var keys = (0, _keys2.default)(o);
    if (~keys.indexOf(v)) return v; // eslint-disable-line flowtype/no-weak-types
    throw new _ValidationError.ValidationError({ expected: en, got: v });
  });
  return en;
}
//# sourceMappingURL=unionFromObjectKeys.js.map