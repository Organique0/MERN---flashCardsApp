import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/Style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Deck from "./Deck.tsx";
import { Header } from "./Header.tsx";
import { ToggleDarkMode } from "./ToggleDarkMode.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/decks/:deckId",
    element: <Deck />
  }
]);

const Main = () => {
  const [parentClass, setParentClass] = useState(() => {
    // Get the stored value from localStorage, or use the default value
    return localStorage.getItem("parentClass") || "page";
  });

  const updateParentClass = () => {
    if (parentClass === "page") {
      setParentClass("page dark");
    } else {
      setParentClass("page");
    }
  };

  useEffect(() => {
    // Update the stored value in localStorage whenever parentClass changes
    localStorage.setItem("parentClass", parentClass);
  }, [parentClass]);

  return (
    <>
      <React.StrictMode>
        <div className={parentClass}>
          <Header />
          <ToggleDarkMode updateParentClass={updateParentClass} />
          <RouterProvider router={router} />
        </div>
      </React.StrictMode>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main />
);
