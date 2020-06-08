"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.asyncVunion = asyncVunion;

var _ValidationError = require("../sync/ValidationError");

var _AsyncVType = require("./AsyncVType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncVunion(a, b) {
  var _this = this;

  var u = new _AsyncVType.AsyncVUnionType(a, b, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(v) {
      var left, right;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              left = void 0;
              right = void 0;
              _context.prev = 2;
              _context.next = 5;
              return a.parse(v);

            case 5:
              left = _context.sent;
              _context.next = 15;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);

              if (!(_context.t0 instanceof _ValidationError.ValidationError)) {
                _context.next = 14;
                break;
              }

              ;
              _context.next = 15;
              break;

            case 14:
              throw _context.t0;

            case 15:
              _context.prev = 15;
              _context.next = 18;
              return b.parse(v);

            case 18:
              right = _context.sent;
              _context.next = 28;
              break;

            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](15);

              if (!(_context.t1 instanceof _ValidationError.ValidationError)) {
                _context.next = 27;
                break;
              }

              ;
              _context.next = 28;
              break;

            case 27:
              throw _context.t1;

            case 28:
              if (!left) {
                _context.next = 30;
                break;
              }

              return _context.abrupt("return", left);

            case 30:
              if (!right) {
                _context.next = 32;
                break;
              }

              return _context.abrupt("return", right);

            case 32:
              throw new _ValidationError.ValidationError({ expected: u, got: v });

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this, [[2, 8], [15, 21]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return u;
}
//# sourceMappingURL=asyncVunion.js.map