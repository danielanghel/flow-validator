"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncVTupleType = exports.AsyncTupleType = undefined;

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

exports.asyncTuple = asyncTuple;
exports.asyncVtuple = asyncVtuple;

var _ValidationError = require("../sync/ValidationError");

var _AsyncType2 = require("./AsyncType");

var _AsyncVType2 = require("./AsyncVType");

var _arrayType = require("../sync/arrayType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-redeclare */

var AsyncTupleType = exports.AsyncTupleType = function (_AsyncType) {
  (0, _inherits3.default)(AsyncTupleType, _AsyncType);

  function AsyncTupleType(schema, parse) {
    (0, _classCallCheck3.default)(this, AsyncTupleType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncTupleType.__proto__ || (0, _getPrototypeOf2.default)(AsyncTupleType)).call(this, "tuple", parse));

    _this.schema = schema;
    return _this;
  }

  return AsyncTupleType;
}(_AsyncType2.AsyncType); // eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare


// eslint-disable-line no-redeclare

function asyncTuple(s) {
  var _this2 = this;

  // eslint-disable-line no-redeclare
  var tt = new AsyncTupleType(s, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
      var a, errors, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = _arrayType.arrayType;
              _context2.next = 3;
              return v;

            case 3:
              _context2.t1 = _context2.sent;
              a = _context2.t0.validate.call(_context2.t0, _context2.t1);
              errors = {};
              _context2.next = 8;
              return _promise2.default.all(s.map(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(t, i) {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return t.parse(a[i]);

                        case 3:
                          return _context.abrupt("return", _context.sent);

                        case 6:
                          _context.prev = 6;
                          _context.t0 = _context["catch"](0);

                          if (!(_context.t0 instanceof _ValidationError.ValidationError)) {
                            _context.next = 13;
                            break;
                          }

                          errors[String(i)] = _context.t0;
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

            case 8:
              result = _context2.sent;

              if (!(0, _getOwnPropertyNames2.default)(errors).length) {
                _context2.next = 18;
                break;
              }

              _context2.t2 = _ValidationError.ValidationError;
              _context2.t3 = tt;
              _context2.next = 14;
              return a;

            case 14:
              _context2.t4 = _context2.sent;
              _context2.t5 = errors;
              _context2.t6 = {
                expected: _context2.t3,
                got: _context2.t4,
                errors: _context2.t5
              };
              throw new _context2.t2(_context2.t6);

            case 18:
              return _context2.abrupt("return", result);

            case 19:
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
  return tt;
}

var AsyncVTupleType = exports.AsyncVTupleType = function (_AsyncVType) {
  (0, _inherits3.default)(AsyncVTupleType, _AsyncVType);

  function AsyncVTupleType(schema, parse) {
    (0, _classCallCheck3.default)(this, AsyncVTupleType);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (AsyncVTupleType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVTupleType)).call(this, "tuple", parse));

    _this3.schema = schema;
    return _this3;
  }

  return AsyncVTupleType;
}(_AsyncVType2.AsyncVType); // eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare
// eslint-disable-line no-redeclare


// eslint-disable-line no-redeclare

function asyncVtuple(s) {
  var _this4 = this;

  // eslint-disable-line no-redeclare
  var tt = new AsyncVTupleType(s, function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(v) {
      var a, errors;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = _arrayType.arrayType;
              _context3.next = 3;
              return v;

            case 3:
              _context3.t1 = _context3.sent;
              a = _context3.t0.validate.call(_context3.t0, _context3.t1);
              errors = {};
              _context3.next = 8;
              return _promise2.default.all(s.map(function (t, i) {
                try {
                  t.validate(a[i]);
                } catch (e) {
                  if (e instanceof _ValidationError.ValidationError) errors[String(i)] = e;else throw e;
                }
              }));

            case 8:
              if (!(0, _getOwnPropertyNames2.default)(errors).length) {
                _context3.next = 17;
                break;
              }

              _context3.t2 = _ValidationError.ValidationError;
              _context3.t3 = tt;
              _context3.next = 13;
              return a;

            case 13:
              _context3.t4 = _context3.sent;
              _context3.t5 = errors;
              _context3.t6 = {
                expected: _context3.t3,
                got: _context3.t4,
                errors: _context3.t5
              };
              throw new _context3.t2(_context3.t6);

            case 17:
              return _context3.abrupt("return", a);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this4);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }());
  return tt;
}
//# sourceMappingURL=asyncTuple.js.map