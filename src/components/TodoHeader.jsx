// import logoLight from "../images/icon-sun.svg";
import logoDark from "../images/icon-moon.svg";

function TodoHeader() {
  return (
    <div className="todo-header flex">
      <h1>TODO</h1>
      <div className="logo">
        <img src={logoDark} alt="" />
      </div>
    </div>
  );
}

export default TodoHeader;
