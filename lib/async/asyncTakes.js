"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.asyncTakes = asyncTakes;
exports.asyncVtakes = asyncVtakes;

var _AsyncType = require("./AsyncType");

var _AsyncVType = require("./AsyncVType");

var _asyncTuple = require("./asyncTuple");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-redeclare

// eslint-disable-next-line no-redeclare


/* eslint-disable no-redeclare */

// eslint-disable-line no-redeclare
function asyncTakes() {
  for (var _len = arguments.length, AsyncTypes = Array(_len), _key = 0; _key < _len; _key++) {
    AsyncTypes[_key] = arguments[_key];
  }

  var paramsValidator = (0, _asyncTuple.asyncTuple)(AsyncTypes);
  return function (f) {
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = f;
              _context.t1 = this;
              _context.next = 4;
              return paramsValidator.parse(params);

            case 4:
              _context.t2 = _context.sent;
              return _context.abrupt("return", _context.t0.apply.call(_context.t0, _context.t1, _context.t2));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };
} // eslint-disable-line no-redeclare


// eslint-disable-line no-redeclare

// eslint-disable-next-line no-redeclare
function asyncVtakes() {
  for (var _len3 = arguments.length, AsyncTypes = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    AsyncTypes[_key3] = arguments[_key3];
  }

  var paramsValidator = (0, _asyncTuple.asyncVtuple)(AsyncTypes);
  return function (f) {
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
      }

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = f;
              _context2.t1 = this;
              _context2.next = 4;
              return paramsValidator.validate(params);

            case 4:
              _context2.t2 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.apply.call(_context2.t0, _context2.t1, _context2.t2));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  };
}
//# sourceMappingURL=asyncTakes.js.map