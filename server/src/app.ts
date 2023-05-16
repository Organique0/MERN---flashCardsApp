import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { getDecksController } from "./controllers/getDecksController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { getDeckController } from "./controllers/getDeckController";
import { deleteCardFromDeckController } from "./controllers/deleteCardFromDeckController";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.post("/decks", createDeckController);
app.get("/decks", getDecksController);
app.get("/decks/:deckId", getDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.delete("/decks/:deckId/cards/:cardId", deleteCardFromDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController);

export default app;
