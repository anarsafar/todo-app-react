function TodoFooter(props) {
  return (
    <div
      className={
        props.darkMode ? "todo-footer flex dark-bg" : "todo-footer flex"
      }
    >
      <div className="items-left">
        <span>0</span> items left
      </div>
      <div className="filter">
        <button className={props.darkMode ? "footer-hover" : null}>All</button>
        <button className={props.darkMode ? "footer-hover" : null}>
          Active
        </button>
        <button className={props.darkMode ? "footer-hover" : null}>
          Completed
        </button>
      </div>
      <div className="clear">
        <button className={props.darkMode ? "footer-hover" : null}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoFooter;
