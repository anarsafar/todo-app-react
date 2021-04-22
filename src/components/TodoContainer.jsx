import AddTodo from "./AddTodo";
import TodoHeader from "./TodoHeader";

function TodoContainer(props) {
  return (
    <div className="todo-container">
      <TodoHeader
        handleDarkMode={props.handleDarkMode}
        darkMode={props.darkMode}
      />
      <AddTodo darkMode={props.darkMode} />
    </div>
  );
}

export default TodoContainer;
