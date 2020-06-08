"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.express = undefined;

var _Type = require("./Type");

function middleware(validator, fun) {
  return function (req, res, next) {
    try {
      var data = validator.parse(req);
      fun(data, res, next);
    } catch (e) {
      next(e);
    }
  };
}

function requestMapping(validator, fun) {
  return function (req, res, next) {
    try {
      var data = validator.parse(req);
      fun(data, res);
    } catch (e) {
      next();
    }
  };
}

function endpoint(validator, fun) {
  return function (req, res, next) {
    try {
      var data = validator.parse(req);
      fun(data, res);
    } catch (e) {
      next(e);
    }
  };
}

var express = exports.express = { endpoint: endpoint, middleware: middleware, requestMapping: requestMapping };
//# sourceMappingURL=express.js.map