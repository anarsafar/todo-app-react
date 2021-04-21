import { useState, useEffect } from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import LS from "local-storage";

function AddTodo(props) {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  useEffect(() => {
    const todoArray = JSON.parse(LS.get("todoLS"));
    if (todoArray) {
      setTodos(todoArray);
    }
  }, []);

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
    LS.set("todoLS", JSON.stringify(todos));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoItem(value);
  };

  const removeTodo = (todoID) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoID);
    setTodos(updatedTodos);
    LS.set("todoLS", JSON.stringify(updatedTodos));
  };

  const checkTodo = (todoID) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoID
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
    LS.set("todoLS", JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <form
        className={props.darkMode ? "flex dark-bg" : "flex"}
        onSubmit={handleSubmit}
      >
        <button
          className={props.darkMode ? "dark-bg dark-bg-circle" : null}
        ></button>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={todoItem}
          onChange={handleChange}
          className={props.darkMode ? "dark-bg" : null}
        />
      </form>
      <div className={props.darkMode ? "todo-items dark-items" : "todo-items"}>
        {todos.map((item) => (
          <div
            className={
              props.darkMode
                ? "todo-item flex dark-bg dark-item"
                : "todo-item flex"
            }
            id={item.id}
          >
            <div className="flex left">
              <img
                src={check}
                alt=""
                onClick={() => checkTodo(item.id)}
                className={item.completed ? "check-btn check" : "check"}
              />
              <button
                onClick={() => checkTodo(item.id)}
                className={
                  props.darkMode && item.completed
                    ? "dark-bg dark-bg-circle check-btn"
                    : item.completed
                    ? "check-btn"
                    : props.darkMode
                    ? "dark-bg dark-bg-circle"
                    : null
                }
              ></button>
              <p
                className={
                  item.completed && props.darkMode
                    ? "dark-line"
                    : item.completed
                    ? "line"
                    : null
                }
              >
                {item.text}
              </p>
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
