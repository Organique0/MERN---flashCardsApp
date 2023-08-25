"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _envalid = require("envalid");
var _validators = require("envalid/dist/validators");
var _default = (0, _envalid.cleanEnv)(process.env, {
  MONGO_CONNECTION_STRING: (0, _validators.str)(),
  PORT: (0, _validators.port)(),
  SESSION_SECRET: (0, _validators.str)()
});
exports["default"] = _default;