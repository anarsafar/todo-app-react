import { useState } from "react";
import TodoContainer from "./TodoContainer";
import bgDesktopLight from "../images/bg-desktop-light.jpg";
import bgDesktopDark from "../images/bg-desktop-dark.jpg";

function Container() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
    console.log(darkMode);
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
