import "./styles/Style.css";
import { useState } from "react";

type ToggleProps = {
  updateParentClass: () => void;
};

export function ToggleDarkMode({ updateParentClass }: ToggleProps) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    updateParentClass();
  };
  return (
    <div className="m-5 w-36 float-righ dark:bg-black">
      <label className="toggleLabel">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="dark:text-white">Dark mode</span>
      </label>
    </div>
  );
}
