"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncMappingType = undefined;

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

exports.asyncMapping = asyncMapping;

var _ValidationError = require("../sync/ValidationError");

var _AsyncType2 = require("./AsyncType");

var _base = require("../sync/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncMappingType = exports.AsyncMappingType = function (_AsyncType) {
  (0, _inherits3.default)(AsyncMappingType, _AsyncType);

  function AsyncMappingType(keys, values, parse) {
    (0, _classCallCheck3.default)(this, AsyncMappingType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncMappingType.__proto__ || (0, _getPrototypeOf2.default)(AsyncMappingType)).call(this, "mapping", parse));

    _this.keys = keys;
    _this.values = values;
    return _this;
  }

  return AsyncMappingType;
}(_AsyncType2.AsyncType);

function asyncMapping(keys, values) {
  var _this2 = this;

  var m = new AsyncMappingType(keys, values, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
      var o, ks, result, errors;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = _base.objectType;
              _context2.next = 3;
              return v;

            case 3:
              _context2.t1 = _context2.sent;
              o = _context2.t0.validate.call(_context2.t0, _context2.t1);
              ks = (0, _keys2.default)(o);
              result = {};
              errors = {};
              _context2.next = 10;
              return _promise2.default.all(ks.map(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(key) {
                  var value, kv, vv, ke, ve;
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          value = o[key];
                          kv = void 0;
                          vv = void 0;
                          ke = void 0;
                          ve = void 0;
                          _context.prev = 5;
                          _context.next = 8;
                          return keys.parse(key);

                        case 8:
                          kv = _context.sent;
                          _context.next = 18;
                          break;

                        case 11:
                          _context.prev = 11;
                          _context.t0 = _context["catch"](5);

                          if (!(_context.t0 instanceof _ValidationError.ValidationError)) {
                            _context.next = 17;
                            break;
                          }

                          ke = _context.t0;
                          _context.next = 18;
                          break;

                        case 17:
                          throw _context.t0;

                        case 18:
                          _context.prev = 18;
                          _context.next = 21;
                          return values.parse(value);

                        case 21:
                          vv = _context.sent;
                          _context.next = 31;
                          break;

                        case 24:
                          _context.prev = 24;
                          _context.t1 = _context["catch"](18);

                          if (!(_context.t1 instanceof _ValidationError.ValidationError)) {
                            _context.next = 30;
                            break;
                          }

                          ve = _context.t1;
                          _context.next = 31;
                          break;

                        case 30:
                          throw _context.t1;

                        case 31:
                          if (ke || ve) {
                            errors[key] = { key: ke, value: ve };
                          } else if (kv) result[kv] = vv;

                        case 32:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2, [[5, 11], [18, 24]]);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 10:
              if (!(0, _getOwnPropertyNames2.default)(errors).length) {
                _context2.next = 12;
                break;
              }

              throw new _ValidationError.ValidationError({ expected: m, got: v, errors: errors });

            case 12:
              return _context2.abrupt("return", result);

            case 13:
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
//# sourceMappingURL=asyncMapping.js.map