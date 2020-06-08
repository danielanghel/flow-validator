"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncExpress = undefined;

var _AsyncType = require("./AsyncType");

function middleware(validator, fun) {
  return function (req, res, next) {
    return validator.parse(req).then(function (data) {
      return fun(data, res, next);
    }, next);
  };
}

function requestMapping(validator, fun) {
  return function (req, res, next) {
    return validator.parse(req).then(function (data) {
      return fun(data, res);
    }, function () {
      return next();
    });
  };
}

function endpoint(validator, fun) {
  return function (req, res, next) {
    return validator.parse(req).then(function (data) {
      return fun(data, res);
    }, next);
  };
}

var asyncExpress = exports.asyncExpress = { endpoint: endpoint, middleware: middleware, requestMapping: requestMapping };
//# sourceMappingURL=asyncExpress.js.map