"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayType = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _ValidationError = require("./ValidationError");

var _VType = require("./VType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrayType = exports.arrayType = new _VType.VType("Array", function (v) {
  if ((typeof v === "undefined" ? "undefined" : (0, _typeof3.default)(v)) === "object" && v instanceof Array) return v;
  throw new _ValidationError.ValidationError({ expected: arrayType, got: v });
});
//# sourceMappingURL=arrayType.js.map