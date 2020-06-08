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

exports.VobjectExact = VobjectExact;

var _ValidationError = require("./ValidationError");

var _VType = require("./VType");

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VobjectExact(s) {
  var oes = new _VType.VObjectExactType(s, function (v) {
    var o = _base.objectType.validate(v);
    var keys = (0, _keys2.default)(o);
    var errors = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(keys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _key = _step.value;

        if (!s.hasOwnProperty(_key)) {
          errors[_key] = new _ValidationError.ValidationError({
            expected: _base.noProperty,
            got: o[_key]
          });
        } else try {
          s[_key].validate(o[_key]);
        } catch (e) {
          if (e instanceof _ValidationError.ValidationError) errors[_key] = e;else throw e;
        }
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

    if ((0, _getOwnPropertyNames2.default)(errors).length) throw new _ValidationError.ValidationError({ expected: oes, got: o, errors: errors });
    return o;
  });
  return oes;
}
//# sourceMappingURL=VobjectExact.js.map