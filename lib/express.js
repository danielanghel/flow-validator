'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncExpress = require('./async/asyncExpress');

Object.defineProperty(exports, 'asyncExpress', {
  enumerable: true,
  get: function get() {
    return _asyncExpress.asyncExpress;
  }
});

var _express = require('./sync/express');

Object.defineProperty(exports, 'express', {
  enumerable: true,
  get: function get() {
    return _express.express;
  }
});
//# sourceMappingURL=express.js.map