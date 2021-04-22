import { useState, useEffect } from "react";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";
import LS from "local-storage";

function AddTodo(props) {
  const [todos, setTodos] = useState([]);
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setTree] = useState(false);
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
    const todoArray = JSON.parse(LS.get("todoLS"));
    setOne((prevState) => !prevState);
    setTwo(false);
    setTree(false);
    if (todoArray) setTodos(todoArray);
  };

  const handleFilterActive = () => {
    setOne(false);
    setTwo((prevState) => !prevState);
    setTree(false);
    const todoArray = JSON.parse(LS.get("todoLS"));
    const newTodos = todoArray.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleFilterCompleted = () => {
    setOne(false);
    setTwo(false);
    setTree((prevState) => !prevState);
    const todoArray = JSON.parse(LS.get("todoLS"));
    const newTodos = todoArray.filter((todo) => todo.completed);
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
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
        todos={todos}
        one={one}
        two={two}
        three={three}
      />
    </div>
  );
}

export default AddTodo;
