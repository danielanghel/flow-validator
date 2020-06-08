"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.asyncReturns = asyncReturns;
exports.asyncVreturns = asyncVreturns;

var _AsyncType = require("./AsyncType");

var _AsyncVType = require("./AsyncVType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-redeclare */

function asyncReturns(t) {
  return function (f) {
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var ret;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ret = f.apply(this, args);
              return _context.abrupt("return", t.parse(ret));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };
}

function asyncVreturns(t) {
  return function (f) {
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var ret;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ret = f.apply(this, args);
              _context2.t0 = t;
              _context2.next = 4;
              return ret;

            case 4:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.validate.call(_context2.t0, _context2.t1));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  };
}
//# sourceMappingURL=asyncReturns.js.map