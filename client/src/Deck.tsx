import { useEffect, useState } from "react";
import "./styles/Style.css";
import { useParams } from "react-router-dom";
import { TDeck } from "./api/getDecks";
import { createCard } from "./api/createCard";
import { getDeck } from "./api/getDeck";
import { deleteCard } from "./api/deleteCard";

export default function Deck() {
  const [deck, setDeck] = useState<TDeck | undefined>(undefined);
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { deckId } = useParams();

  async function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
    const { cards: serverCards } = await createCard(deckId!, text);
    setCards(serverCards);
    setText("");
  }

  async function handleDeleteCard(cardId: number) {
    if (!deckId) return;
    const newDeck = await deleteCard(deckId, cardId);
    setCards(newDeck.cards);
  }

  useEffect(() => {
    async function fetchDeck() {
      if (!deckId) return;
      const newDeck = await getDeck(deckId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    }

    fetchDeck();
  }, [deckId]);

  return (
    <div className="App">
      <div className="flex flex-col gap-3 w-full mt-32">
        <div className="flex items-center justify-center">
          <p
            className="light-ring shadow dark:dark-ring title 
      dark:dark-shadow dark:text-dark-color 
      light:text-light-text-primary"
          >
            {deck?.title}
          </p>
        </div>
        <ul className="decks">
          {cards.map((card, cardId) => (
            <li key={cardId}>
              <button
                className="link dark:text-dark-text-primary"
                onClick={() => handleDeleteCard(cardId)}
              >
                X
              </button>
              <p className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                {card}
              </p>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreateCard} className="myForm">
          <label className="link dark:text-dark-color" htmlFor="card-title">
            Card text
          </label>
          <input
            className="border light-ring dark:dark-ring text-light-text"
            id="card-title"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          />
          <button className="myButton">Create Card</button>
        </form>
      </div>
    </div>
  );
}
