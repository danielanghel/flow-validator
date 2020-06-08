"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports.syncFunctionToAsync = syncFunctionToAsync;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syncFunctionToAsync(f) {
  return function (v) {
    return _promise2.default.resolve(v).then(f);
  };
}
//# sourceMappingURL=syncFunctionToAsync.js.map