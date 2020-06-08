"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposeRightType = exports.ComposeLeftType = exports.RefinedType = exports.ChainType = exports.TupleType = exports.ObjectExactType = exports.ObjectType = exports.MappingType = exports.OptionalType = exports.UnionType = exports.IntersectionType = exports.ArrayOfType = exports.Type = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ValidationError = require("./ValidationError");

var _AsyncType = require("../async/AsyncType");

var _optional2 = require("./optional");

var _intersection = require("./intersection");

var _union = require("./union");

var _composeLeft = require("./composeLeft");

var _syncFunctionToAsync = require("../async/syncFunctionToAsync");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Type = exports.Type = function () {
  function Type(name, parse) {
    (0, _classCallCheck3.default)(this, Type);

    this.name = name;
    this.parse = parse;
  }

  (0, _createClass3.default)(Type, [{
    key: "to",
    value: function to(transformation) {
      var _this = this;

      var tr = new Type("transformation", function (v) {
        return transformation(_this.parse(v), function (err) {
          return new _ValidationError.ValidationError({ expected: tr, got: v, description: err });
        });
      });
      return tr;
    }
  }, {
    key: "refine",
    value: function refine(refinement) {
      var _this2 = this;

      var rf = new RefinedType(this, function (v) {
        return refinement(_this2.parse(v), function (err) {
          return new _ValidationError.ValidationError({ expected: rf, got: v, description: err });
        });
      });
      return rf;
    }
  }, {
    key: "and",
    value: function and(t2) {
      return (0, _intersection.intersection)(this, t2);
    }
  }, {
    key: "or",
    value: function or(t2) {
      return (0, _union.union)(this, t2);
    }
  }, {
    key: "optional",
    value: function optional() {
      return (0, _optional2.optional)(this);
    }
  }, {
    key: "chain",
    value: function chain(t2) {
      return new ChainType(this, t2);
    }
  }, {
    key: "compose",
    value: function compose(f) {
      return (0, _composeLeft.composeLeft)(this, f);
    }
  }, {
    key: "parseResult",
    value: function parseResult(v) {
      try {
        return { value: this.parse(v) };
      } catch (e) {
        if (e instanceof _ValidationError.ValidationError) return { error: e };
        throw e;
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return { name: this.name };
    }
  }, {
    key: "default",
    value: function _default(value) {
      var _this3 = this;

      // the default value to be used if supplied value is null or undefined
      return new Type("default", function (v) {
        if (v === null || v === void null) return value;
        return _this3.parse(v);
      });
    }
  }, {
    key: "force",
    value: function force(value) {
      var _this4 = this;

      // the default value is used if any validation error occurs
      return new Type("default", function (v) {
        try {
          return _this4.parse(v);
        } catch (e) {
          if (e instanceof _ValidationError.ValidationError) return value;
          throw e;
        }
      });
    }
  }, {
    key: "async",
    value: function async() {
      return new _AsyncType.AsyncType(this.name, (0, _syncFunctionToAsync.syncFunctionToAsync)(this.parse));
    }
  }]);
  return Type;
}();

var ArrayOfType = exports.ArrayOfType = function (_Type) {
  (0, _inherits3.default)(ArrayOfType, _Type);

  function ArrayOfType(t, parse) {
    (0, _classCallCheck3.default)(this, ArrayOfType);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (ArrayOfType.__proto__ || (0, _getPrototypeOf2.default)(ArrayOfType)).call(this, "arrayOf", parse));

    _this5.itemType = t;
    return _this5;
  }

  return ArrayOfType;
}(Type);

var IntersectionType = exports.IntersectionType = function (_Type2) {
  (0, _inherits3.default)(IntersectionType, _Type2);

  function IntersectionType(a, b, parse) {
    (0, _classCallCheck3.default)(this, IntersectionType);

    var _this6 = (0, _possibleConstructorReturn3.default)(this, (IntersectionType.__proto__ || (0, _getPrototypeOf2.default)(IntersectionType)).call(this, "intersection", parse));

    _this6.typeA = a;
    _this6.typeB = b;
    return _this6;
  }

  return IntersectionType;
}(Type);

var UnionType = exports.UnionType = function (_Type3) {
  (0, _inherits3.default)(UnionType, _Type3);

  function UnionType(a, b, validate) {
    (0, _classCallCheck3.default)(this, UnionType);

    var _this7 = (0, _possibleConstructorReturn3.default)(this, (UnionType.__proto__ || (0, _getPrototypeOf2.default)(UnionType)).call(this, "union", validate));

    _this7.typeA = a;
    _this7.typeB = b;
    return _this7;
  }

  return UnionType;
}(Type);

var OptionalType = exports.OptionalType = function (_Type4) {
  (0, _inherits3.default)(OptionalType, _Type4);

  function OptionalType(t, validate) {
    (0, _classCallCheck3.default)(this, OptionalType);

    var _this8 = (0, _possibleConstructorReturn3.default)(this, (OptionalType.__proto__ || (0, _getPrototypeOf2.default)(OptionalType)).call(this, "optional", validate));

    _this8.innerType = t;
    return _this8;
  }

  return OptionalType;
}(Type);

var MappingType = exports.MappingType = function (_Type5) {
  (0, _inherits3.default)(MappingType, _Type5);

  function MappingType(keys, values, parse) {
    (0, _classCallCheck3.default)(this, MappingType);

    var _this9 = (0, _possibleConstructorReturn3.default)(this, (MappingType.__proto__ || (0, _getPrototypeOf2.default)(MappingType)).call(this, "mapping", parse));

    _this9.keys = keys;
    _this9.values = values;
    return _this9;
  }

  return MappingType;
}(Type);

// export type SchemaProps = {[key: string]: Type<any>};
//export type SchemaType<P> = $ObjMap<P, <T>(v: Type<T>) => T>;

var ObjectType = exports.ObjectType = function (_Type6) {
  (0, _inherits3.default)(ObjectType, _Type6);

  function ObjectType(schema, parse) {
    (0, _classCallCheck3.default)(this, ObjectType);

    var _this10 = (0, _possibleConstructorReturn3.default)(this, (ObjectType.__proto__ || (0, _getPrototypeOf2.default)(ObjectType)).call(this, "object", parse));

    _this10.schema = schema;
    return _this10;
  }

  return ObjectType;
}(Type);

var ObjectExactType = exports.ObjectExactType = function (_Type7) {
  (0, _inherits3.default)(ObjectExactType, _Type7);

  function ObjectExactType(schema, parse) {
    (0, _classCallCheck3.default)(this, ObjectExactType);

    var _this11 = (0, _possibleConstructorReturn3.default)(this, (ObjectExactType.__proto__ || (0, _getPrototypeOf2.default)(ObjectExactType)).call(this, "objectExact", parse));

    _this11.schema = schema;
    return _this11;
  }

  return ObjectExactType;
}(Type);

// export type TupleSchemaProps = Array<Type<any>>;
// export type TupleSchemaType<P> = $TupleMap<P, <T>(v: Type<T>) => T>;

var TupleType = exports.TupleType = function (_Type8) {
  (0, _inherits3.default)(TupleType, _Type8);

  function TupleType(schema, parse) {
    (0, _classCallCheck3.default)(this, TupleType);

    var _this12 = (0, _possibleConstructorReturn3.default)(this, (TupleType.__proto__ || (0, _getPrototypeOf2.default)(TupleType)).call(this, "tuple", parse));

    _this12.schema = schema;
    return _this12;
  }

  return TupleType;
}(Type);

var ChainType = exports.ChainType = function (_Type9) {
  (0, _inherits3.default)(ChainType, _Type9);

  function ChainType(left, right) {
    (0, _classCallCheck3.default)(this, ChainType);

    var _this13 = (0, _possibleConstructorReturn3.default)(this, (ChainType.__proto__ || (0, _getPrototypeOf2.default)(ChainType)).call(this, "compound", function (v) {
      return right.parse(left.parse(v));
    }));

    _this13.left = left;
    _this13.right = right;
    return _this13;
  }

  return ChainType;
}(Type);

var RefinedType = exports.RefinedType = function (_Type10) {
  (0, _inherits3.default)(RefinedType, _Type10);

  function RefinedType(base, f) {
    (0, _classCallCheck3.default)(this, RefinedType);

    var _this14 = (0, _possibleConstructorReturn3.default)(this, (RefinedType.__proto__ || (0, _getPrototypeOf2.default)(RefinedType)).call(this, "refined", f));

    _this14.base = base;
    return _this14;
  }

  (0, _createClass3.default)(RefinedType, [{
    key: "revalidate",
    value: function revalidate() {
      var _this15 = this;

      return new Type("revalidated", function (v) {
        return _this15.base.parse(_this15.parse(v));
      });
    }
  }]);
  return RefinedType;
}(Type);

var ComposeLeftType = exports.ComposeLeftType = function (_Type11) {
  (0, _inherits3.default)(ComposeLeftType, _Type11);

  function ComposeLeftType(left, right) {
    (0, _classCallCheck3.default)(this, ComposeLeftType);

    var _this16 = (0, _possibleConstructorReturn3.default)(this, (ComposeLeftType.__proto__ || (0, _getPrototypeOf2.default)(ComposeLeftType)).call(this, "composeLeft", function (v) {
      return right(left.parse(v));
    }));

    _this16.left = left;
    _this16.right = right;
    return _this16;
  }

  return ComposeLeftType;
}(Type);

var ComposeRightType = exports.ComposeRightType = function (_Type12) {
  (0, _inherits3.default)(ComposeRightType, _Type12);

  function ComposeRightType(left, right) {
    (0, _classCallCheck3.default)(this, ComposeRightType);

    var _this17 = (0, _possibleConstructorReturn3.default)(this, (ComposeRightType.__proto__ || (0, _getPrototypeOf2.default)(ComposeRightType)).call(this, "compound", function (v) {
      return left(right.parse(v));
    }));

    _this17.left = left;
    _this17.right = right;
    return _this17;
  }

  return ComposeRightType;
}(Type);
//# sourceMappingURL=Type.js.map