"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var deckSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  cards: {
    type: Array,
    required: true
  }
});
var _default = (0, _mongoose.model)("Deck", deckSchema);
exports["default"] = _default;