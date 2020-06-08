"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.mapping = mapping;

var _ValidationError = require("./ValidationError");

var _Type = require("./Type");

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapping(keys, values) {
  var m = new _Type.MappingType(keys, values, function (v) {
    var o = _base.objectType.validate(v);
    var ks = (0, _keys2.default)(o);
    var result = {};
    var errors = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(ks), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        var value = o[key];
        var kv = void 0;
        var vv = void 0;
        var ke = void 0;
        var ve = void 0;
        try {
          kv = keys.parse(key);
        } catch (e) {
          if (e instanceof _ValidationError.ValidationError) ke = e;else throw e;
        }
        try {
          vv = values.parse(value);
        } catch (e) {
          if (e instanceof _ValidationError.ValidationError) ve = e;else throw e;
        }
        if (ke || ve) {
          errors[key] = { key: ke, value: ve };
        } else if (kv) result[kv] = vv;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if ((0, _getOwnPropertyNames2.default)(errors).length) throw new _ValidationError.ValidationError({ expected: m, got: v, errors: errors });
    return result;
  });
  return m;
}
//# sourceMappingURL=mapping.js.map