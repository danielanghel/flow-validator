"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncVRefinedType = exports.AsyncVIntersectionType = exports.AsyncVUnionType = exports.AsyncVOptionalType = exports.AsyncVType = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _ValidationError = require("../sync/ValidationError");

var _AsyncType2 = require("./AsyncType");

var _asyncVintersection = require("./asyncVintersection");

var _asyncVunion = require("./asyncVunion");

var _asyncVoptional = require("./asyncVoptional");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncVType = exports.AsyncVType = function (_AsyncType) {
  (0, _inherits3.default)(AsyncVType, _AsyncType);

  function AsyncVType(name, validate) {
    (0, _classCallCheck3.default)(this, AsyncVType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncVType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVType)).call(this, name, validate));

    _this.validate = validate;
    return _this;
  }

  (0, _createClass3.default)(AsyncVType, [{
    key: "Vrefine",
    value: function Vrefine(refinement) {
      var _this2 = this;

      var rf = new AsyncVRefinedType(this, function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(v) {
          var vResolved;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return v;

                case 2:
                  vResolved = _context.sent;
                  _context.t0 = refinement;
                  _context.next = 6;
                  return _this2.parse(v);

                case 6:
                  _context.t1 = _context.sent;

                  _context.t2 = function (err) {
                    return new _ValidationError.ValidationError({
                      expected: rf,
                      got: vResolved,
                      description: err
                    });
                  };

                  return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2));

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return rf;
    }
  }, {
    key: "Vand",
    value: function Vand(t2) {
      return (0, _asyncVintersection.asyncVintersection)(this, t2);
    }
  }, {
    key: "Vor",
    value: function Vor(t2) {
      return (0, _asyncVunion.asyncVunion)(this, t2);
    }
  }, {
    key: "Voptional",
    value: function Voptional() {
      return (0, _asyncVoptional.asyncVoptional)(this);
    }
  }]);
  return AsyncVType;
}(_AsyncType2.AsyncType);

var AsyncVOptionalType = exports.AsyncVOptionalType = function (_AsyncVType) {
  (0, _inherits3.default)(AsyncVOptionalType, _AsyncVType);

  function AsyncVOptionalType(t, validate) {
    (0, _classCallCheck3.default)(this, AsyncVOptionalType);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (AsyncVOptionalType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVOptionalType)).call(this, "optional", validate));

    _this3.innerType = t;
    return _this3;
  }

  return AsyncVOptionalType;
}(AsyncVType);

var AsyncVUnionType = exports.AsyncVUnionType = function (_AsyncVType2) {
  (0, _inherits3.default)(AsyncVUnionType, _AsyncVType2);

  function AsyncVUnionType(a, b, validate) {
    (0, _classCallCheck3.default)(this, AsyncVUnionType);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (AsyncVUnionType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVUnionType)).call(this, "union", validate));

    _this4.typeA = a;
    _this4.typeB = b;
    return _this4;
  }

  return AsyncVUnionType;
}(AsyncVType);

var AsyncVIntersectionType = exports.AsyncVIntersectionType = function (_AsyncVType3) {
  (0, _inherits3.default)(AsyncVIntersectionType, _AsyncVType3);

  function AsyncVIntersectionType(a, b, validate) {
    (0, _classCallCheck3.default)(this, AsyncVIntersectionType);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (AsyncVIntersectionType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVIntersectionType)).call(this, "intersection", validate));

    _this5.typeA = a;
    _this5.typeB = b;
    return _this5;
  }

  return AsyncVIntersectionType;
}(AsyncVType);

var AsyncVRefinedType = exports.AsyncVRefinedType = function (_AsyncVType4) {
  (0, _inherits3.default)(AsyncVRefinedType, _AsyncVType4);

  function AsyncVRefinedType(base, f) {
    (0, _classCallCheck3.default)(this, AsyncVRefinedType);

    var _this6 = (0, _possibleConstructorReturn3.default)(this, (AsyncVRefinedType.__proto__ || (0, _getPrototypeOf2.default)(AsyncVRefinedType)).call(this, "refined", f));

    _this6.base = base;
    return _this6;
  }

  (0, _createClass3.default)(AsyncVRefinedType, [{
    key: "revalidate",
    value: function revalidate() {
      var _this7 = this;

      return new AsyncVType("revalidated", function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = _this7.base;
                  _context2.next = 3;
                  return _this7.validate(v);

                case 3:
                  _context2.t1 = _context2.sent;
                  return _context2.abrupt("return", _context2.t0.validate.call(_context2.t0, _context2.t1));

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, _this7);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }]);
  return AsyncVRefinedType;
}(AsyncVType);
//# sourceMappingURL=AsyncVType.js.map