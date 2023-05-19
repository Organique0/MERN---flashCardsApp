import { useEffect, useState } from "react";
import "./styles/Style.css";
import { Link } from "react-router-dom";
import { deleteDeck } from "./api/deleteDeck";
import { getDecks, TDeck } from "./api/getDecks";
import { createDeck } from "./api/createDeck";

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const deck = await createDeck(title);
    setDecks([...decks, deck]);
    setTitle("");
  }

  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks();
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col gap-3 w-full mt-32">
        <div className="flex items-center justify-center">
          <p className="light-ring shadow dark:dark-ring title dark:dark-shadow dark:text-dark-color light:text-light-text-primary">
            YOUR DECKS
          </p>
        </div>
        <ul className="decks">
          {decks.map((deck) => (
            <li key={deck._id}>
              <button
                className="link dark:text-dark-text-primary"
                onClick={() => handleDeleteDeck(deck._id)}
              >
                X
              </button>
              <Link
                className="link dark:text-dark-text-primary"
                to={`decks/${deck._id}`}
              >
                {deck.title}
              </Link>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreateDeck} className="myForm">
          <label className="link dark:text-dark-color" htmlFor="deck-title">
            Deck Title
          </label>
          <input
            className="border light-ring dark:dark-ring text-light-text"
            id="deck-title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
          <button className="myButton">Create Deck</button>
        </form>
      </div>
    </div>
  );
}

export default App;
