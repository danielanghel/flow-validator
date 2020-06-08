"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncVObjectExactType = undefined;

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

exports.asyncVobjectExact = asyncVobjectExact;

var _ValidationError = require("../sync/ValidationError");

var _AsyncVType2 = require("./AsyncVType");

var _base = require("../sync/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncVObjectExactType = exports.AsyncVObjectExactType = function (_AsyncVType) {
  (0, _inherits3.default)(AsyncVObjectExactType, _AsyncVType);

  function AsyncVObjectExactType(schema, validate) {
    (0, _classCallCheck3.default)(this, AsyncVObjectExactType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncVObjectExactType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVObjectExactType)).call(this, "objectExact", validate));

    _this.schema = schema;
    return _this;
  }

  return AsyncVObjectExactType;
}(_AsyncVType2.AsyncVType);

function asyncVobjectExact(s) {
  var _this2 = this;

  var oes = new AsyncVObjectExactType(s, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
      var o, keys, errors;
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
              keys = (0, _keys2.default)(o);
              errors = {};
              _context2.next = 9;
              return _promise2.default.all(keys.map(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(key) {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (s.hasOwnProperty(key)) {
                            _context.next = 4;
                            break;
                          }

                          errors[key] = new _ValidationError.ValidationError({
                            expected: _base.noProperty,
                            got: o[key]
                          });
                          _context.next = 16;
                          break;

                        case 4:
                          _context.prev = 4;
                          _context.next = 7;
                          return s[key].validate(o[key]);

                        case 7:
                          _context.next = 16;
                          break;

                        case 9:
                          _context.prev = 9;
                          _context.t0 = _context["catch"](4);

                          if (!(_context.t0 instanceof _ValidationError.ValidationError)) {
                            _context.next = 15;
                            break;
                          }

                          errors[key] = _context.t0;
                          _context.next = 16;
                          break;

                        case 15:
                          throw _context.t0;

                        case 16:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2, [[4, 9]]);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 9:
              if (!(0, _getOwnPropertyNames2.default)(errors).length) {
                _context2.next = 11;
                break;
              }

              throw new _ValidationError.ValidationError({ expected: oes, got: o, errors: errors });

            case 11:
              return _context2.abrupt("return", o);

            case 12:
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
  return oes;
}
//# sourceMappingURL=asyncVobjectExact.js.map