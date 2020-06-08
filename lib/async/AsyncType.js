"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncComposeLeftType = exports.AsyncChainType = exports.AsyncOptionalType = exports.AsyncUnionType = exports.AsyncIntersectionType = exports.AsyncRefinedType = exports.AsyncType = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ValidationError = require("../sync/ValidationError");

var _asyncUnion = require("./asyncUnion");

var _asyncIntersection = require("./asyncIntersection");

var _asyncOptional = require("./asyncOptional");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncType = exports.AsyncType = function () {
  function AsyncType(name, parse) {
    (0, _classCallCheck3.default)(this, AsyncType);

    this.name = name;
    this.parse = parse;
  }

  (0, _createClass3.default)(AsyncType, [{
    key: "to",
    value: function to(transformation) {
      var _this = this;

      var tr = new AsyncType("transformation", function () {
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
                  _context.t0 = transformation;
                  _context.next = 6;
                  return _this.parse(v);

                case 6:
                  _context.t1 = _context.sent;

                  _context.t2 = function (err) {
                    return new _ValidationError.ValidationError({
                      expected: tr,
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
          }, _callee, _this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return tr;
    }
  }, {
    key: "refine",
    value: function refine(refinement) {
      var _this2 = this;

      var rf = new AsyncRefinedType(this, function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = refinement;
                  _context2.next = 3;
                  return _this2.parse(v);

                case 3:
                  _context2.t1 = _context2.sent;

                  _context2.t2 = function (err) {
                    return new _ValidationError.ValidationError({ expected: rf, got: v, description: err });
                  };

                  return _context2.abrupt("return", (0, _context2.t0)(_context2.t1, _context2.t2));

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      return rf;
    }
  }, {
    key: "and",
    value: function and(t2) {
      return (0, _asyncIntersection.asyncIntersection)(this, t2);
    }
  }, {
    key: "or",
    value: function or(t2) {
      return (0, _asyncUnion.asyncUnion)(this, t2);
    }
  }, {
    key: "optional",
    value: function optional() {
      return (0, _asyncOptional.asyncOptional)(this);
    }
  }, {
    key: "chain",
    value: function chain(t2) {
      return new AsyncChainType(this, t2);
    }
  }, {
    key: "compose",
    value: function compose(f) {
      return new AsyncComposeLeftType(this, function (v) {
        return _promise2.default.resolve(v).then(f);
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return { name: this.name };
    }
  }]);
  return AsyncType;
}();

var AsyncRefinedType = exports.AsyncRefinedType = function (_AsyncType) {
  (0, _inherits3.default)(AsyncRefinedType, _AsyncType);

  function AsyncRefinedType(base, f) {
    (0, _classCallCheck3.default)(this, AsyncRefinedType);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (AsyncRefinedType.__proto__ || (0, _getPrototypeOf2.default)(AsyncRefinedType)).call(this, "refined", f));

    _this3.base = base;
    return _this3;
  }

  (0, _createClass3.default)(AsyncRefinedType, [{
    key: "revalidate",
    value: function revalidate() {
      var _this4 = this;

      return new AsyncType("revalidated", function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(v) {
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = _this4.base;
                  _context3.next = 3;
                  return _this4.parse(v);

                case 3:
                  _context3.t1 = _context3.sent;
                  return _context3.abrupt("return", _context3.t0.parse.call(_context3.t0, _context3.t1));

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, _this4);
        }));

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }]);
  return AsyncRefinedType;
}(AsyncType);

var AsyncIntersectionType = exports.AsyncIntersectionType = function (_AsyncType2) {
  (0, _inherits3.default)(AsyncIntersectionType, _AsyncType2);

  function AsyncIntersectionType(a, b, parse) {
    (0, _classCallCheck3.default)(this, AsyncIntersectionType);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (AsyncIntersectionType.__proto__ || (0, _getPrototypeOf2.default)(AsyncIntersectionType)).call(this, "intersection", parse));

    _this5.typeA = a;
    _this5.typeB = b;
    return _this5;
  }

  return AsyncIntersectionType;
}(AsyncType);

var AsyncUnionType = exports.AsyncUnionType = function (_AsyncType3) {
  (0, _inherits3.default)(AsyncUnionType, _AsyncType3);

  function AsyncUnionType(a, b, validate) {
    (0, _classCallCheck3.default)(this, AsyncUnionType);

    var _this6 = (0, _possibleConstructorReturn3.default)(this, (AsyncUnionType.__proto__ || (0, _getPrototypeOf2.default)(AsyncUnionType)).call(this, "union", validate));

    _this6.typeA = a;
    _this6.typeB = b;
    return _this6;
  }

  return AsyncUnionType;
}(AsyncType);

var AsyncOptionalType = exports.AsyncOptionalType = function (_AsyncType4) {
  (0, _inherits3.default)(AsyncOptionalType, _AsyncType4);

  function AsyncOptionalType(t, validate) {
    (0, _classCallCheck3.default)(this, AsyncOptionalType);

    var _this7 = (0, _possibleConstructorReturn3.default)(this, (AsyncOptionalType.__proto__ || (0, _getPrototypeOf2.default)(AsyncOptionalType)).call(this, "optional", validate));

    _this7.innerType = t;
    return _this7;
  }

  return AsyncOptionalType;
}(AsyncType);

var AsyncChainType = exports.AsyncChainType = function (_AsyncType5) {
  (0, _inherits3.default)(AsyncChainType, _AsyncType5);

  function AsyncChainType(left, right) {
    var _this9 = this;

    (0, _classCallCheck3.default)(this, AsyncChainType);

    var _this8 = (0, _possibleConstructorReturn3.default)(this, (AsyncChainType.__proto__ || (0, _getPrototypeOf2.default)(AsyncChainType)).call(this, "compound", function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(v) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = right;
                _context4.next = 3;
                return left.parse(v);

              case 3:
                _context4.t1 = _context4.sent;
                return _context4.abrupt("return", _context4.t0.parse.call(_context4.t0, _context4.t1));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this9);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()));

    _this8.left = left;
    _this8.right = right;
    return _this8;
  }

  return AsyncChainType;
}(AsyncType);

var AsyncComposeLeftType = exports.AsyncComposeLeftType = function (_AsyncType6) {
  (0, _inherits3.default)(AsyncComposeLeftType, _AsyncType6);

  function AsyncComposeLeftType(left, right) {
    var _this11 = this;

    (0, _classCallCheck3.default)(this, AsyncComposeLeftType);

    var _this10 = (0, _possibleConstructorReturn3.default)(this, (AsyncComposeLeftType.__proto__ || (0, _getPrototypeOf2.default)(AsyncComposeLeftType)).call(this, "composeLeft", function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(v) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t0 = right;
                _context5.next = 3;
                return left.parse(v);

              case 3:
                _context5.t1 = _context5.sent;
                return _context5.abrupt("return", (0, _context5.t0)(_context5.t1));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, _this11);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()));

    _this10.left = left;
    _this10.right = right;
    return _this10;
  }

  return AsyncComposeLeftType;
}(AsyncType);
//# sourceMappingURL=AsyncType.js.map