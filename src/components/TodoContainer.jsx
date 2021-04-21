import AddTodo from "./AddTodo";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

function TodoContainer(props) {
  return (
    <div className="todo-container">
      <TodoHeader
        handleDarkMode={props.handleDarkMode}
        darkMode={props.darkMode}
      />
      <AddTodo darkMode={props.darkMode} />
      <TodoFooter darkMode={props.darkMode} />
    </div>
  );
}

export default TodoContainer;
