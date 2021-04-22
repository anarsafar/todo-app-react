import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

function TodoItem(props) {
  return (
    <div className={props.darkMode ? "todo-items dark-items" : "todo-items"}>
      {props.todos.map((item) => (
        <div
          key={item.id}
          className={
            props.darkMode
              ? "todo-item flex dark-bg dark-item"
              : "todo-item flex"
          }
        >
          <div className="flex left">
            <img
              src={check}
              alt=""
              onClick={() => props.checkTodo(item.id)}
              className={item.completed ? "check-visible check" : "check"}
            />
            <button
              onClick={() => props.checkTodo(item.id)}
              className={
                props.darkMode && item.completed
                  ? "dark-bg dark-bg-circle check-btn"
                  : item.completed
                  ? "check-btn"
                  : props.darkMode
                  ? "dark-bg dark-bg-circle"
                  : null
              }
            ></button>
            <p
              className={
                item.completed && props.darkMode
                  ? "dark-line"
                  : item.completed
                  ? "line"
                  : null
              }
            >
              {item.text}
            </p>
          </div>
          <div className="cross hide">
            <img src={cross} alt="" onClick={() => props.removeTodo(item.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
