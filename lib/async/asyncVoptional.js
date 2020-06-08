"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.asyncVoptional = asyncVoptional;

var _AsyncVType = require("./AsyncVType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncVoptional(t) {
  var _this = this;

  return new _AsyncVType.AsyncVOptionalType(t, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(v) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(v === null || v === void 0)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", v);

            case 2:
              return _context.abrupt("return", t.validate(v));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}
//# sourceMappingURL=asyncVoptional.js.map