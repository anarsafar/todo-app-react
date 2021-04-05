import TodoContainer from "./TodoContainer";
import bgDesktopLight from "../images/bg-desktop-light.jpg";

function Container() {
  return (
    <div>
      <header>
        <img src={bgDesktopLight} alt="" />
      </header>
      <TodoContainer />
    </div>
  );
}

export default Container;
