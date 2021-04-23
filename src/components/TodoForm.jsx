function TodoForm(props) {
  return (
    <form
      className={props.darkMode ? "flex dark-bg" : "flex"}
      onSubmit={props.handleSubmit}
    >
      <button
        className={props.darkMode ? "dark-bg dark-bg-circle" : null}
      ></button>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={props.todoItem}
        onChange={props.handleChange}
        className={props.darkMode ? "dark-bg" : null}
      />
    </form>
  );
}

export default TodoForm;
