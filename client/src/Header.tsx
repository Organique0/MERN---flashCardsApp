import "./styles/Style.css";
export function Header() {
  return (
    <div className="light:bg-black dark:bg-black">
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
