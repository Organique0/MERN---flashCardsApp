import "./styles/Style.css";
export function Header() {
  return (
    <div className="shadow dark:dark-ring flex justify-between h-12 border bg-light-background dark:bg-dark-background dark:border-dark-background">
      <div className="w-full flex md:my-0 md:mx-10 items-center justify-between">
        <div>
          <a className="link" href="/">
            Have
          </a>
        </div>
        <div>
          <a className="link" href="/">
            a nice
          </a>
        </div>
        <div>
          <a className="link" href="/">
            day
          </a>
        </div>
      </div>
    </div>
  );
}
