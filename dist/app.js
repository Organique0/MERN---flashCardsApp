"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _getDecksController = require("./controllers/getDecksController");
var _createDeckController = require("./controllers/createDeckController");
var _deleteDeckController = require("./controllers/deleteDeckController");
var _createCardForDeckController = require("./controllers/createCardForDeckController");
var _getDeckController = require("./controllers/getDeckController");
var _deleteCardFromDeckController = require("./controllers/deleteCardFromDeckController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var corsOptions = {
  origin: 'https://mern-flash-cards-app.vercel.app',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use((0, _cors["default"])(corsOptions));
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.send("hello world!");
});
app.post("/decks", _createDeckController.createDeckController);
app.get("/decks", _getDecksController.getDecksController);
app.get("/decks/:deckId", _getDeckController.getDeckController);
app["delete"]("/decks/:deckId", _deleteDeckController.deleteDeckController);
app["delete"]("/decks/:deckId/cards/:cardId", _deleteCardFromDeckController.deleteCardFromDeckController);
app.post("/decks/:deckId/cards", _createCardForDeckController.createCardForDeckController);
var _default = app;
exports["default"] = _default;