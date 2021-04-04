import { useState } from "react";

function AddTodo() {
  const [todo, setTodo] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    setTodo((todo) => [...todo, todoItem]);
    setTodoItem("");
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoItem(value);
  };

  console.log(todo);
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <button></button>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={todoItem}
        onChange={handleChange}
      />
    </form>
  );
}

export default AddTodo;
