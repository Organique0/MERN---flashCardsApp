import { InferSchemaType, model, Schema } from "mongoose";

const deckSchema = new Schema({
  title: { type: String, required: true },
  cards: { type: Array, required: true }
});

type Deck = InferSchemaType<typeof deckSchema>;

export default model<Deck>("Deck", deckSchema);
