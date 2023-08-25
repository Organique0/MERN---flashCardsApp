"use strict";

var _app = _interopRequireDefault(require("./app"));
var _validateEnv = _interopRequireDefault(require("./util/validateEnv"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = process.env.PORT || 5000;
_mongoose["default"].connect(_validateEnv["default"].MONGO_CONNECTION_STRING).then(function () {
  console.log("Mongoose Connected");
  _app["default"].listen(port, function () {
    console.log("listening on port: " + port);
  });
})["catch"](console.error);