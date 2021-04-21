import logoLight from "../images/icon-sun.svg";
import logoDark from "../images/icon-moon.svg";

function TodoHeader(props) {
  return (
    <div className="todo-header flex">
      <h1>TODO</h1>
      <div className="logo">
        <img
          src={props.darkMode ? logoLight : logoDark}
          alt=""
          onClick={props.handleDarkMode}
        />
      </div>
    </div>
  );
}

export default TodoHeader;
