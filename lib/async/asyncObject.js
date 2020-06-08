"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncObjectType = undefined;

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

exports.asyncObject = asyncObject;

var _ValidationError = require("../sync/ValidationError");

var _AsyncType2 = require("./AsyncType");

var _base = require("../sync/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncObjectType = exports.AsyncObjectType = function (_AsyncType) {
  (0, _inherits3.default)(AsyncObjectType, _AsyncType);

  function AsyncObjectType(schema, parse) {
    (0, _classCallCheck3.default)(this, AsyncObjectType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncObjectType.__proto__ || (0, _getPrototypeOf2.default)(AsyncObjectType)).call(this, "object", parse));

    _this.schema = schema;
    return _this;
  }

  return AsyncObjectType;
}(_AsyncType2.AsyncType);

function asyncObject(s) {
  var _this2 = this;

  var os = new AsyncObjectType(s, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
      var o, keys, result, errors;
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
              keys = (0, _keys2.default)(s);
              result = {};
              errors = {};
              _context2.next = 10;
              return _promise2.default.all(keys.map(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(key) {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return s[key].parse(o[key]);

                        case 3:
                          result[key] = _context.sent;
                          _context.next = 13;
                          break;

                        case 6:
                          _context.prev = 6;
                          _context.t0 = _context["catch"](0);

                          if (!(_context.t0 instanceof _ValidationError.ValidationError)) {
                            _context.next = 12;
                            break;
                          }

                          errors[key] = _context.t0;
                          _context.next = 13;
                          break;

                        case 12:
                          throw _context.t0;

                        case 13:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2, [[0, 6]]);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 10:
              if (!(0, _getOwnPropertyNames2.default)(errors).length) {
                _context2.next = 19;
                break;
              }

              _context2.t2 = _ValidationError.ValidationError;
              _context2.t3 = os;
              _context2.next = 15;
              return o;

            case 15:
              _context2.t4 = _context2.sent;
              _context2.t5 = errors;
              _context2.t6 = {
                expected: _context2.t3,
                got: _context2.t4,
                errors: _context2.t5
              };
              throw new _context2.t2(_context2.t6);

            case 19:
              return _context2.abrupt("return", result);

            case 20:
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
  return os;
}
//# sourceMappingURL=asyncObject.js.map