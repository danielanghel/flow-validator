"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.falsy = exports.truthy = exports.functionType = exports.objectType = exports.boolean = exports.number = exports.isAny = exports.isMixed = exports.noProperty = exports.isUndefined = exports.isNull = exports.empty = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.instanceOf = instanceOf;
exports.classOf = classOf;
exports.literal = literal;

var _ValidationError = require("./ValidationError");

var _VType = require("./VType");

var _Type = require("./Type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var empty = exports.empty = new _VType.VType("empty", function (v) {
  if (v === null || v === void 0) return v;
  throw new _ValidationError.ValidationError({ expected: empty, got: v });
});

var isNull = exports.isNull = new _VType.VType("null", function (v) {
  if (v === null) return v;
  throw new _ValidationError.ValidationError({ expected: isNull, got: v });
});

var isUndefined = exports.isUndefined = new _VType.VType("undefined", function (v) {
  if (v === void 0) return v;
  throw new _ValidationError.ValidationError({ expected: isUndefined, got: v });
});

var noProperty = exports.noProperty = new _VType.VType("noProperty", function (v) {
  if (v === void 0) return v;
  throw new _ValidationError.ValidationError({ expected: isUndefined, got: v });
});

var isMixed = exports.isMixed = new _VType.VType("mixed", function (v) {
  return v;
});

var isAny = exports.isAny = new _VType.VType("any", function (v) {
  return v;
});

var number = exports.number = new _VType.VType("number", function (v) {
  if (typeof v === "number") return v;
  throw new _ValidationError.ValidationError({ expected: number, got: v });
});

var boolean = exports.boolean = new _VType.VType("boolean", function (v) {
  if (typeof v === "boolean") return v;
  throw new _ValidationError.ValidationError({ expected: boolean, got: v });
});

var objectType = exports.objectType = new _VType.VType("Object", function (v) {
  if ((typeof v === "undefined" ? "undefined" : (0, _typeof3.default)(v)) === "object" && !!v && !Array.isArray(v)) return v;
  throw new _ValidationError.ValidationError({ expected: objectType, got: v });
});

var functionType = exports.functionType = new _VType.VType("Function", function (v) {
  if (typeof v === "function") return v;
  throw new _ValidationError.ValidationError({ expected: functionType, got: v });
});

function instanceOf(c) {
  var iof = new _VType.InstanceOfType(c, function (v) {
    if (v instanceof c) return v;
    throw new _ValidationError.ValidationError({ expected: iof, got: v });
  });
  return iof;
}

function classOf(c) {
  var cof = new _VType.ClassOfType(c, function (v) {
    var f = functionType.validate(v);
    if (f === c || f.prototype instanceof c) return f;
    throw new _ValidationError.ValidationError({ expected: cof, got: v });
  });
  return cof;
}

function literal(value) {
  var lt = new _VType.LiteralType(value, function (v) {
    if (value === v) return v; // eslint-disable-line flowtype/no-weak-types
    throw new _ValidationError.ValidationError({ expected: lt, got: v });
  });
  return lt;
}

var truthy = exports.truthy = new _Type.Type("truthy", function (v) {
  if (Boolean(v) === true) return true;
  throw new _ValidationError.ValidationError({ expected: truthy, got: v });
});

var falsy = exports.falsy = new _Type.Type("falsy", function (v) {
  if (Boolean(v) === false) return false;
  throw new _ValidationError.ValidationError({ expected: falsy, got: v });
});
//# sourceMappingURL=base.js.map