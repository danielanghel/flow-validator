"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncVMappingType = undefined;

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.asyncVmapping = asyncVmapping;

var _ValidationError = require("../sync/ValidationError");

var _AsyncVType2 = require("./AsyncVType");

var _base = require("../sync/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncVMappingType = exports.AsyncVMappingType = function (_AsyncVType) {
  (0, _inherits3.default)(AsyncVMappingType, _AsyncVType);

  function AsyncVMappingType(keys, values, validate) {
    (0, _classCallCheck3.default)(this, AsyncVMappingType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncVMappingType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVMappingType)).call(this, "mapping", validate));

    _this.keys = keys;
    _this.values = values;
    return _this;
  }

  return AsyncVMappingType;
}(_AsyncVType2.AsyncVType);

function asyncVmapping(keys, values) {
  var _this2 = this;

  var m = new AsyncVMappingType(keys, values, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
      var o, ks, errors;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              o = _base.objectType.validate(v);
              ks = (0, _keys2.default)(o);
              errors = {};
              _context2.next = 5;
              return _promise2.default.all(ks.map(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(key) {
                  var value, ke, ve;
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          value = o[key];
                          ke = void 0;
                          ve = void 0;
                          _context.prev = 3;
                          _context.next = 6;
                          return keys.validate(key);

                        case 6:
                          _context.next = 15;
                          break;

                        case 8:
                          _context.prev = 8;
                          _context.t0 = _context["catch"](3);

                          if (!(_context.t0 instanceof _ValidationError.ValidationError)) {
                            _context.next = 14;
                            break;
                          }

                          ke = _context.t0;
                          _context.next = 15;
                          break;

                        case 14:
                          throw _context.t0;

                        case 15:
                          _context.prev = 15;
                          _context.next = 18;
                          return values.validate(value);

                        case 18:
                          _context.next = 27;
                          break;

                        case 20:
                          _context.prev = 20;
                          _context.t1 = _context["catch"](15);

                          if (!(_context.t1 instanceof _ValidationError.ValidationError)) {
                            _context.next = 26;
                            break;
                          }

                          ve = _context.t1;
                          _context.next = 27;
                          break;

                        case 26:
                          throw _context.t1;

                        case 27:
                          if (ke || ve) {
                            errors[key] = { key: ke, value: ve };
                          }

                        case 28:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2, [[3, 8], [15, 20]]);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 5:
              if (!(0, _getOwnPropertyNames2.default)(errors).length) {
                _context2.next = 7;
                break;
              }

              throw new _ValidationError.ValidationError({ expected: m, got: v, errors: errors });

            case 7:
              return _context2.abrupt("return", v);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return m;
}
//# sourceMappingURL=asyncVmapping.js.map