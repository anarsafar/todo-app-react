import { useState } from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem === "") return;
    addTodo();
    setTodoItem("");
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

  const removeTodo = (todoID) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoID
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
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
              <img src={check} alt="" className="check" />
              <button></button>
              {/* <div className="hover-circle hide-circle"></div> */}
              <p>{item.text}</p>
            </div>
            <div className="cross hide">
              <img src={cross} alt="" onClick={() => removeTodo(item.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTodo;
