"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncArrayOfType = undefined;

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

exports.asyncArrayOf = asyncArrayOf;

var _ValidationError = require("../sync/ValidationError");

var _arrayType = require("../sync/arrayType");

var _AsyncType2 = require("./AsyncType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncArrayOfType = exports.AsyncArrayOfType = function (_AsyncType) {
  (0, _inherits3.default)(AsyncArrayOfType, _AsyncType);

  function AsyncArrayOfType(t, parse) {
    (0, _classCallCheck3.default)(this, AsyncArrayOfType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncArrayOfType.__proto__ || (0, _getPrototypeOf2.default)(AsyncArrayOfType)).call(this, "arrayOf", parse));

    _this.innerType = t;
    return _this;
  }

  return AsyncArrayOfType;
}(_AsyncType2.AsyncType);

function asyncArrayOf(t) {
  var _this2 = this;

  var aof = new AsyncArrayOfType(t, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
      var a, errors, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              a = _arrayType.arrayType.validate(v);
              errors = {};
              _context2.next = 4;
              return _promise2.default.all(a.map(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(item, index) {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return t.parse(item);

                        case 3:
                          return _context.abrupt("return", _context.sent);

                        case 6:
                          _context.prev = 6;
                          _context.t0 = _context["catch"](0);

                          if (!(_context.t0 instanceof _ValidationError.ValidationError)) {
                            _context.next = 13;
                            break;
                          }

                          errors[String(index)] = _context.t0;
                          return _context.abrupt("return", void 0);

                        case 13:
                          throw _context.t0;

                        case 14:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2, [[0, 6]]);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 4:
              result = _context2.sent;

              if (!(0, _getOwnPropertyNames2.default)(errors).length) {
                _context2.next = 7;
                break;
              }

              throw new _ValidationError.ValidationError({ expected: aof, got: v, errors: errors });

            case 7:
              return _context2.abrupt("return", result);

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
  return aof;
}
//# sourceMappingURL=asyncArrayOf.js.map