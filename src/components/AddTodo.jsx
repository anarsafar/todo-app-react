import { useState, useEffect } from "react";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";
import LS from "local-storage";
import uuid from "react-uuid";
import TodoForm from "./TodoForm";

function AddTodo(props) {
  let initialValues = [
    { id: 1, text: "Complete online JavaScript course", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "10 minutes of meditation", completed: false },
    { id: 4, text: "Read for 1 hour", completed: false },
    { id: 5, text: "Pick up groceries", completed: false },
    { id: 6, text: "Complete Todo App React project", completed: false },
  ];

  const [todos, setTodos] = useState(() => {
    const todoArray = JSON.parse(LS.get("todoLS"));
    return todoArray !== null ? todoArray : initialValues;
  });
  const [filter, setFilter] = useState([]);
  console.log(filter);
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setTree] = useState(false);
  const [todoItem, setTodoItem] = useState("");

  useEffect(() => {
    LS.set("todoLS", JSON.stringify(todos));
  });

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
        id: uuid(),
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
    setOne((prevState) => !prevState);
    setTwo(false);
    setTree(false);
    const todoArray = JSON.parse(LS.get("todoLS"));
    setFilter(todoArray);
  };

  const handleFilterActive = () => {
    setOne(false);
    setTwo((prevState) => !prevState);
    setTree(false);
    const todoArray = JSON.parse(LS.get("todoLS"));
    const newTodos = todoArray.filter((todo) => !todo.completed);
    setFilter(newTodos);
  };

  const handleFilterCompleted = () => {
    setOne(false);
    setTwo(false);
    setTree((prevState) => !prevState);
    const todoArray = JSON.parse(LS.get("todoLS"));
    const newTodos = todoArray.filter((todo) => todo.completed);
    setFilter(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    LS.set("todoLS", JSON.stringify(newTodos));
  };

  return (
    <div>
      <TodoForm
        darkMode={props.darkMode}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        todoItem={todoItem}
      />
      <TodoItem
        darkMode={props.darkMode}
        todos={one ? todos : two || three ? filter : null}
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
