import AddTodo from "./AddTodo";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

function TodoContainer() {
  return (
    <div className="todo-container">
      <TodoHeader />
      <AddTodo />
      <TodoFooter />
    </div>
  );
}

export default TodoContainer;
