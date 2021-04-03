import AddTodo from "./AddTodo";
import TodoHeader from "./TodoHeader";

function TodoContainer() {
  return (
    <div className="todo-container">
      <TodoHeader />
      <AddTodo />
    </div>
  );
}

export default TodoContainer;
