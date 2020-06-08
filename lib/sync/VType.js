"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VRefinedType = exports.VTupleType = exports.VObjectExactType = exports.VObjectType = exports.VMappingType = exports.VOptionalType = exports.LiteralType = exports.VUnionType = exports.VIntersectionType = exports.VArrayOfType = exports.ClassOfType = exports.InstanceOfType = exports.VType = undefined;

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

var _Type2 = require("./Type");

var _AsyncVType = require("../async/AsyncVType");

var _Vintersection = require("./Vintersection");

var _Vunion = require("./Vunion");

var _Voptional2 = require("./Voptional");

var _syncFunctionToAsync = require("../async/syncFunctionToAsync");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VType = exports.VType = function (_Type) {
  (0, _inherits3.default)(VType, _Type);

  function VType(name, validate) {
    (0, _classCallCheck3.default)(this, VType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VType.__proto__ || (0, _getPrototypeOf2.default)(VType)).call(this, name, validate));

    _this.validate = validate;
    return _this;
  }

  (0, _createClass3.default)(VType, [{
    key: "Vrefine",
    value: function Vrefine(refinement) {
      var _this2 = this;

      var rf = new VRefinedType(this, function (v) {
        return refinement(_this2.parse(v), function (err) {
          return new _ValidationError.ValidationError({ expected: rf, got: v, description: err });
        });
      });
      return rf;
    }
  }, {
    key: "isValid",
    value: function isValid(v) {
      try {
        this.validate(v);
        return true;
      } catch (e) {
        if (e instanceof _ValidationError.ValidationError) return false;
        throw e;
      }
    }
  }, {
    key: "validateResult",
    value: function validateResult(v) {
      try {
        return { value: this.validate(v) };
      } catch (e) {
        if (e instanceof _ValidationError.ValidationError) return { error: e };
        throw e;
      }
    }
  }, {
    key: "Vand",
    value: function Vand(t2) {
      return (0, _Vintersection.Vintersection)(this, t2);
    }
  }, {
    key: "Vor",
    value: function Vor(t2) {
      return (0, _Vunion.Vunion)(this, t2);
    }
  }, {
    key: "Voptional",
    value: function Voptional() {
      return (0, _Voptional2.Voptional)(this);
    }
  }, {
    key: "Vasync",
    value: function Vasync() {
      return new _AsyncVType.AsyncVType(this.name, (0, _syncFunctionToAsync.syncFunctionToAsync)(this.validate));
    }
  }]);
  return VType;
}(_Type2.Type);

var InstanceOfType = exports.InstanceOfType = function (_VType) {
  (0, _inherits3.default)(InstanceOfType, _VType);

  function InstanceOfType(c, validate) {
    (0, _classCallCheck3.default)(this, InstanceOfType);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (InstanceOfType.__proto__ || (0, _getPrototypeOf2.default)(InstanceOfType)).call(this, "instanceof", validate));

    _this3.class = c;
    return _this3;
  }

  return InstanceOfType;
}(VType);

var ClassOfType = exports.ClassOfType = function (_VType2) {
  (0, _inherits3.default)(ClassOfType, _VType2);

  function ClassOfType(c, validate) {
    (0, _classCallCheck3.default)(this, ClassOfType);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (ClassOfType.__proto__ || (0, _getPrototypeOf2.default)(ClassOfType)).call(this, "classOf", validate));

    _this4.class = c;
    return _this4;
  }

  return ClassOfType;
}(VType);

var VArrayOfType = exports.VArrayOfType = function (_VType3) {
  (0, _inherits3.default)(VArrayOfType, _VType3);

  function VArrayOfType(t, validate) {
    (0, _classCallCheck3.default)(this, VArrayOfType);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (VArrayOfType.__proto__ || (0, _getPrototypeOf2.default)(VArrayOfType)).call(this, "arrayOf", validate));

    _this5.itemType = t;
    return _this5;
  }

  return VArrayOfType;
}(VType);

var VIntersectionType = exports.VIntersectionType = function (_VType4) {
  (0, _inherits3.default)(VIntersectionType, _VType4);

  function VIntersectionType(a, b, validate) {
    (0, _classCallCheck3.default)(this, VIntersectionType);

    var _this6 = (0, _possibleConstructorReturn3.default)(this, (VIntersectionType.__proto__ || (0, _getPrototypeOf2.default)(VIntersectionType)).call(this, "intersection", validate));

    _this6.typeA = a;
    _this6.typeB = b;
    return _this6;
  }

  return VIntersectionType;
}(VType);

var VUnionType = exports.VUnionType = function (_VType5) {
  (0, _inherits3.default)(VUnionType, _VType5);

  function VUnionType(a, b, validate) {
    (0, _classCallCheck3.default)(this, VUnionType);

    var _this7 = (0, _possibleConstructorReturn3.default)(this, (VUnionType.__proto__ || (0, _getPrototypeOf2.default)(VUnionType)).call(this, "union", validate));

    _this7.typeA = a;
    _this7.typeB = b;
    return _this7;
  }

  return VUnionType;
}(VType);

var LiteralType = exports.LiteralType = function (_VType6) {
  (0, _inherits3.default)(LiteralType, _VType6);

  function LiteralType(t, validate) {
    (0, _classCallCheck3.default)(this, LiteralType);

    var _this8 = (0, _possibleConstructorReturn3.default)(this, (LiteralType.__proto__ || (0, _getPrototypeOf2.default)(LiteralType)).call(this, "literal", validate));

    _this8.value = t;
    return _this8;
  }

  return LiteralType;
}(VType);

var VOptionalType = exports.VOptionalType = function (_VType7) {
  (0, _inherits3.default)(VOptionalType, _VType7);

  function VOptionalType(t, validate) {
    (0, _classCallCheck3.default)(this, VOptionalType);

    var _this9 = (0, _possibleConstructorReturn3.default)(this, (VOptionalType.__proto__ || (0, _getPrototypeOf2.default)(VOptionalType)).call(this, "optional", validate));

    _this9.innerType = t;
    return _this9;
  }

  return VOptionalType;
}(VType);

var VMappingType = exports.VMappingType = function (_VType8) {
  (0, _inherits3.default)(VMappingType, _VType8);

  function VMappingType(keys, values, validate) {
    (0, _classCallCheck3.default)(this, VMappingType);

    var _this10 = (0, _possibleConstructorReturn3.default)(this, (VMappingType.__proto__ || (0, _getPrototypeOf2.default)(VMappingType)).call(this, "mapping", validate));

    _this10.keys = keys;
    _this10.values = values;
    return _this10;
  }

  return VMappingType;
}(VType);

var VObjectType = exports.VObjectType = function (_VType9) {
  (0, _inherits3.default)(VObjectType, _VType9);

  function VObjectType(schema, validate) {
    (0, _classCallCheck3.default)(this, VObjectType);

    var _this11 = (0, _possibleConstructorReturn3.default)(this, (VObjectType.__proto__ || (0, _getPrototypeOf2.default)(VObjectType)).call(this, "object", validate));

    _this11.schema = schema;
    return _this11;
  }

  return VObjectType;
}(VType);

var VObjectExactType = exports.VObjectExactType = function (_VType10) {
  (0, _inherits3.default)(VObjectExactType, _VType10);

  function VObjectExactType(schema, validate) {
    (0, _classCallCheck3.default)(this, VObjectExactType);

    var _this12 = (0, _possibleConstructorReturn3.default)(this, (VObjectExactType.__proto__ || (0, _getPrototypeOf2.default)(VObjectExactType)).call(this, "objectExact", validate));

    _this12.schema = schema;
    return _this12;
  }

  return VObjectExactType;
}(VType);

var VTupleType = exports.VTupleType = function (_VType11) {
  (0, _inherits3.default)(VTupleType, _VType11);

  function VTupleType(schema, validate) {
    (0, _classCallCheck3.default)(this, VTupleType);

    var _this13 = (0, _possibleConstructorReturn3.default)(this, (VTupleType.__proto__ || (0, _getPrototypeOf2.default)(VTupleType)).call(this, "tuple", validate));

    _this13.schema = schema;
    return _this13;
  }

  return VTupleType;
}(VType);

var VRefinedType = exports.VRefinedType = function (_VType12) {
  (0, _inherits3.default)(VRefinedType, _VType12);

  function VRefinedType(base, f) {
    (0, _classCallCheck3.default)(this, VRefinedType);

    var _this14 = (0, _possibleConstructorReturn3.default)(this, (VRefinedType.__proto__ || (0, _getPrototypeOf2.default)(VRefinedType)).call(this, "refined", f));

    _this14.base = base;
    return _this14;
  }

  (0, _createClass3.default)(VRefinedType, [{
    key: "revalidate",
    value: function revalidate() {
      var _this15 = this;

      return new VType("revalidated", function (v) {
        return _this15.base.validate(_this15.validate(v));
      });
    }
  }]);
  return VRefinedType;
}(VType);
//# sourceMappingURL=VType.js.map