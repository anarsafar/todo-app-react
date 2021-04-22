import { useState, useEffect } from "react";
import TodoContainer from "./TodoContainer";
import bgDesktopLight from "../images/bg-desktop-light.jpg";
import bgDesktopDark from "../images/bg-desktop-dark.jpg";
import LS from "local-storage";

function Container() {
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = LS.get("darkModeLS");
    return isDark !== null ? isDark : false;
  });
  useEffect(() => {
    LS.set("darkModeLS", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
    console.log("click: " + darkMode);
  };

  if (darkMode) {
    document.body.style.backgroundColor = `hsl(235,21%,11%)`;
  } else {
    document.body.style.backgroundColor = `#fff`;
  }

  console.log("app: " + darkMode);
  return (
    <div>
      <header>
        <img
          src={bgDesktopDark}
          alt=""
          className={darkMode ? null : "opacity"}
        />
        <img
          src={bgDesktopLight}
          alt=""
          className={darkMode ? "opacity" : null}
        />
      </header>
      <TodoContainer handleDarkMode={handleDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default Container;
