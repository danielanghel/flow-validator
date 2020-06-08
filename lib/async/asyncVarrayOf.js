"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncVArrayOfType = undefined;

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

exports.asyncVarrayOf = asyncVarrayOf;

var _ValidationError = require("../sync/ValidationError");

var _arrayType = require("../sync/arrayType");

var _AsyncVType2 = require("./AsyncVType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncVArrayOfType = exports.AsyncVArrayOfType = function (_AsyncVType) {
  (0, _inherits3.default)(AsyncVArrayOfType, _AsyncVType);

  function AsyncVArrayOfType(t, validate) {
    (0, _classCallCheck3.default)(this, AsyncVArrayOfType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncVArrayOfType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVArrayOfType)).call(this, "arrayOf", validate));

    _this.innerType = t;
    return _this;
  }

  return AsyncVArrayOfType;
}(_AsyncVType2.AsyncVType);

function asyncVarrayOf(t) {
  var _this2 = this;

  var aof = new AsyncVArrayOfType(t, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
      var a, errors;
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
                          return t.validate(item);

                        case 3:
                          _context.next = 12;
                          break;

                        case 5:
                          _context.prev = 5;
                          _context.t0 = _context["catch"](0);

                          if (!(_context.t0 instanceof _ValidationError.ValidationError)) {
                            _context.next = 11;
                            break;
                          }

                          errors[String(index)] = _context.t0;
                          _context.next = 12;
                          break;

                        case 11:
                          throw _context.t0;

                        case 12:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2, [[0, 5]]);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 4:
              if (!(0, _getOwnPropertyNames2.default)(errors).length) {
                _context2.next = 6;
                break;
              }

              throw new _ValidationError.ValidationError({ expected: aof, got: v, errors: errors });

            case 6:
              return _context2.abrupt("return", a);

            case 7:
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
//# sourceMappingURL=asyncVarrayOf.js.map