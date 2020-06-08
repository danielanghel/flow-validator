"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = exports.StringType = undefined;

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

var _ValidationError = require("./ValidationError");

var _Type = require("./Type");

var _VType2 = require("./VType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StringType = exports.StringType = function (_VType) {
  (0, _inherits3.default)(StringType, _VType);

  function StringType(parse) {
    (0, _classCallCheck3.default)(this, StringType);
    return (0, _possibleConstructorReturn3.default)(this, (StringType.__proto__ || (0, _getPrototypeOf2.default)(StringType)).call(this, "string", parse));
  }

  (0, _createClass3.default)(StringType, [{
    key: "isValidDate",
    value: function isValidDate() {
      var dt = new StringType(function (v) {
        var s = string.parse(v);
        var date = new Date(s);
        if (Object.prototype.toString.call(date) === "[object Date]") {
          if (isNaN(date.getTime())) {
            throw new _ValidationError.ValidationError({ expected: dt, got: v });
          } else {
            return s;
          }
        } else {
          throw new _ValidationError.ValidationError({
            expected: dt,
            got: v,
            description: "invalid date"
          });
        }
      });
      return dt;
    }
  }, {
    key: "toDate",
    value: function toDate() {
      var dt = new _Type.Type("date", function (v) {
        var s = string.parse(v);
        var date = new Date(s);
        if (Object.prototype.toString.call(date) === "[object Date]") {
          if (isNaN(date.getTime())) {
            throw new _ValidationError.ValidationError({ expected: dt, got: v });
          } else {
            return date;
          }
        } else {
          throw new _ValidationError.ValidationError({
            expected: dt,
            got: v,
            description: "invalid date"
          });
        }
      });
      return dt;
    }
  }, {
    key: "isEmail",
    value: function isEmail() {
      var em = new StringType(function (v) {
        var s = string.validate(v); // eslint-disable-next-line no-useless-escape
        var isEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(s);
        if (isEmail) return s;
        throw new _ValidationError.ValidationError({
          expected: em,
          got: v,
          description: "invalid email"
        });
      });
      return em;
    }
  }, {
    key: "minLength",
    value: function minLength(length) {
      var _this2 = this;

      var mls = new StringType(function (v) {
        var s = _this2.validate(v);
        if (s.length < length) throw new _ValidationError.ValidationError({
          expected: mls,
          got: v,
          description: "at least " + length + " chars"
        });
        return s;
      });
      return mls;
    }
  }, {
    key: "maxLength",
    value: function maxLength(length) {
      var _this3 = this;

      var mls = new StringType(function (v) {
        var s = _this3.validate(v);
        if (s.length > length) throw new _ValidationError.ValidationError({
          expected: mls,
          got: v,
          description: "at most " + length + " chars"
        });
        return s;
      });
      return mls;
    }
  }, {
    key: "regexp",
    value: function regexp(regularExpression) {
      var _this4 = this;

      var rgx = new StringType(function (v) {
        var s = _this4.validate(v);
        if (!regularExpression.test(s)) throw new _ValidationError.ValidationError({
          expected: rgx,
          got: v,
          description: "expected to match regexp " + String(regularExpression)
        });
        return s;
      });
      return rgx;
    }
  }]);
  return StringType;
}(_VType2.VType);

var string = exports.string = new StringType(function (v) {
  if (typeof v === "string") return v;
  throw new _ValidationError.ValidationError({ expected: string, got: v });
});
//# sourceMappingURL=string.js.map