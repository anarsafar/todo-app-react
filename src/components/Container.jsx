import { useState, useEffect } from "react";
import TodoContainer from "./TodoContainer";
import bgDesktopLight from "../images/bg-desktop-light.jpg";
import bgDesktopDark from "../images/bg-desktop-dark.jpg";
import bgMobileLight from "../images/bg-mobile-light.jpg";
import bgMobileDark from "../images/bg-mobile-dark.jpg";
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
  };

  if (darkMode) {
    document.body.style.backgroundColor = `hsl(235,21%,11%)`;
  } else {
    document.body.style.backgroundColor = `#fff`;
  }

  return (
    <div>
      <header>
        <img
          src={window.innerWidth < 550 ? bgMobileDark : bgDesktopDark}
          alt=""
          className={darkMode ? null : "opacity"}
        />
        <img
          src={window.innerWidth < 550 ? bgMobileLight : bgDesktopLight}
          alt=""
          className={darkMode ? "opacity" : null}
        />
      </header>
      <TodoContainer handleDarkMode={handleDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default Container;
