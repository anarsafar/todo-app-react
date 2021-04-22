function TodoFooter(props) {
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
        className={props.darkMode ? "filter dark-bg" : "filter light-bg-footer"}
      >
        <button
          onClick={props.handleFilterAll}
          className={props.darkMode ? "footer-hover" : null}
        >
          All
        </button>
        <button
          onClick={props.handleFilterActive}
          className={props.darkMode ? "footer-hover" : null}
        >
          Active
        </button>
        <button
          onClick={props.handleFilterCompleted}
          className={props.darkMode ? "footer-hover" : null}
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
