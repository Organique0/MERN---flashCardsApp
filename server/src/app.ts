import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import Deck from "./models/Deck";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

export default app;
