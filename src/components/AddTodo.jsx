import { useState, useEffect } from "react";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";
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

  const handleFilterAll = () => {
    return todos;
  };

  const handleFilterActive = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    console.log(newTodos);
    return newTodos;
  };

  const handleFilterCompleted = () => {
    const newTodos = todos.filter((todo) => todo.completed);
    console.log(newTodos);
    return newTodos;
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    LS.set("todoLS", JSON.stringify(newTodos));
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
      <TodoItem
        darkMode={props.darkMode}
        todos={todos}
        checkTodo={checkTodo}
        removeTodo={removeTodo}
      />
      <TodoFooter
        darkMode={props.darkMode}
        handleFilterAll={handleFilterAll}
        handleFilterActive={handleFilterActive}
        handleFilterCompleted={handleFilterCompleted}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default AddTodo;
