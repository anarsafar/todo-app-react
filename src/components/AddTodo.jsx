import { useState } from "react";
import cross from "../images/icon-cross.svg";

function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    if (todoItem === "") return;
    addTodo();
    setTodoItem("");
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todoItem,
        completed: false,
      },
    ]);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoItem(value);
  };

  console.log(todos);

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <button></button>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={todoItem}
          onChange={handleChange}
        />
      </form>
      <div className="todo-items">
        {todos.map((item) => (
          <div className="todo-item flex" id={item.id}>
            <div className="flex left">
              <button></button>
              <p>{item.text}</p>
            </div>
            <div className="cross">
              <img src={cross} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTodo;
