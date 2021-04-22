import { useContext } from "react";
import { SmallContext } from "./Container";

function TodoFooter(props) {
  const small = useContext(SmallContext);
  const itemsLeft = props.todos.filter((todo) => !todo.completed);
  return (
    <div
      className={
        props.darkMode ? "todo-footer flex dark-bg" : "todo-footer flex"
      }
    >
      <div className="items-left">
        <span>{itemsLeft.length}</span> items left
      </div>
      <div
        className={
          props.darkMode && small ? "filter dark-bg" : "filter light-bg-footer"
        }
      >
        <button
          onClick={props.handleFilterAll}
          className={
            props.darkMode && props.one
              ? "footer-hover active"
              : props.darkMode
              ? "footer-hover"
              : props.one
              ? "active"
              : null
          }
        >
          All
        </button>
        <button
          onClick={props.handleFilterActive}
          className={
            props.darkMode && props.two
              ? "footer-hover active"
              : props.darkMode
              ? "footer-hover"
              : props.two
              ? "active"
              : null
          }
        >
          Active
        </button>
        <button
          onClick={props.handleFilterCompleted}
          className={
            props.darkMode && props.three
              ? "footer-hover active"
              : props.darkMode
              ? "footer-hover"
              : props.three
              ? "active"
              : null
          }
        >
          Completed
        </button>
      </div>
      <div className="clear">
        <button
          onClick={props.clearCompleted}
          className={props.darkMode ? "footer-hover" : null}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoFooter;
