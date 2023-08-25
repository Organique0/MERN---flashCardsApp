import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function deleteCardFromDeckController(req: Request, res: Response) {
    const deckId = req.params.deckId;
    const cardId = req.params.cardId;
    const deck = await Deck.findById(deckId);
    if (!deck) return res.status(400).send("no deck of this id exists");
    deck.cards.splice(parseInt(cardId),1);
    await deck.save();

    res.json(deck);
      
}