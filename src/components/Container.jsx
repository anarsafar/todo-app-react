import React, { useState, useEffect } from "react";
import TodoContainer from "./TodoContainer";
import bgDesktopLight from "../images/bg-desktop-light.jpg";
import bgDesktopDark from "../images/bg-desktop-dark.jpg";
import bgMobileLight from "../images/bg-mobile-light.jpg";
import bgMobileDark from "../images/bg-mobile-dark.jpg";
import LS from "local-storage";
export const SmallContext = React.createContext();

function Container() {
  const [isSmall, setSmall] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = LS.get("darkModeLS");
    return isDark !== null ? isDark : false;
  });
  useEffect(() => {
    LS.set("darkModeLS", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) setSmall(true);
      else {
        setSmall(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

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
          src={isSmall ? bgMobileDark : bgDesktopDark}
          alt=""
          className={darkMode ? null : "opacity"}
        />
        <img
          src={isSmall ? bgMobileLight : bgDesktopLight}
          alt=""
          className={darkMode ? "opacity" : null}
        />
      </header>
      <SmallContext.Provider value={isSmall}>
        <TodoContainer handleDarkMode={handleDarkMode} darkMode={darkMode} />
      </SmallContext.Provider>
    </div>
  );
}

export default Container;
