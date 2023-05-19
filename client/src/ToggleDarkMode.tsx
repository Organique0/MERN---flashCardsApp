import "./styles/Style.css";
import { useEffect, useState } from "react";

type ToggleProps = {
  updateParentClass: () => void;
};

export function ToggleDarkMode({ updateParentClass }: ToggleProps) {
  const [isToggled, setIsToggled] = useState(() => {
    return localStorage.getItem("isToggled") === "true" || false;
  });

  useEffect(() => {
    localStorage.setItem("isToggled", isToggled.toString());
  }, [isToggled]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    updateParentClass();
  };

  return (
    <div className="shadow dark:dark-ring toggle bg-light-background text-light-text-primary dark:bg-dark-background  dark:text-dark-text-primary py-2 px-4 w-44 mt-5 absolute top-12 right-8 rounded-2xl">
      <label className="toggleLabel relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer "
          checked={isToggled}
          onChange={handleToggle}
        />
        <div
          className="w-11 h-6 border bg-light-text-accent dark:bg-dark-color peer-focus:ring-4 peer-focus:ring-blue-300 
        dark:peer-focus:ring-blue-800 rounded-full peer bg-light-background-primary peer-checked:after:translate-x-full  
        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
        after:border-light-text-accent after:dark:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
        dark:border-gray-600 "
        ></div>

        <span className="ml-3 text-sm font-medium text-light-text-accent dark:text-dark-text-primary">
          Dark mode
        </span>
      </label>
    </div>
  );
}
