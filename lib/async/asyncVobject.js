"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncVObjectType = undefined;

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

exports.asyncVobject = asyncVobject;

var _ValidationError = require("../sync/ValidationError");

var _AsyncVType2 = require("./AsyncVType");

var _base = require("../sync/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncVObjectType = exports.AsyncVObjectType = function (_AsyncVType) {
  (0, _inherits3.default)(AsyncVObjectType, _AsyncVType);

  function AsyncVObjectType(schema, validate) {
    (0, _classCallCheck3.default)(this, AsyncVObjectType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncVObjectType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVObjectType)).call(this, "asyncObject", validate));

    _this.schema = schema;
    return _this;
  }

  return AsyncVObjectType;
}(_AsyncVType2.AsyncVType);

function asyncVobject(s) {
  var _this2 = this;

  var os = new AsyncVObjectType(s, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
      var o, keys, errors;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              o = _base.objectType.validate(v);
              keys = (0, _keys2.default)(s);
              errors = {};
              _context2.next = 5;
              return _promise2.default.all(keys.map(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(key) {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return s[key].validate(o[key]);

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

                          errors[key] = _context.t0;
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

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 5:
              if (!(0, _getOwnPropertyNames2.default)(errors).length) {
                _context2.next = 14;
                break;
              }

              _context2.t0 = _ValidationError.ValidationError;
              _context2.t1 = os;
              _context2.next = 10;
              return o;

            case 10:
              _context2.t2 = _context2.sent;
              _context2.t3 = errors;
              _context2.t4 = {
                expected: _context2.t1,
                got: _context2.t2,
                errors: _context2.t3
              };
              throw new _context2.t0(_context2.t4);

            case 14:
              return _context2.abrupt("return", o);

            case 15:
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
//# sourceMappingURL=asyncVobject.js.map