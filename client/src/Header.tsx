import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div>
          <a href="/">Logo</a>
        </div>
        <div>
          <a href="/">Decks</a>
        </div>
        <div>
          <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
}
