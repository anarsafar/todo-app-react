function TodoFooter() {
  return (
    <div className="todo-footer flex">
      <div className="items-left">
        <span>0</span> items left
      </div>
      <div className="filter">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="clear">
        <button>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoFooter;
