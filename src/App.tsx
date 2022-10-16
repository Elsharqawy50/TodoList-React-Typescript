import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const todoAddHandler = (value: string) => {
    setTodoList((prev) => [...prev, new Todo(value)]);
  };

  const deleteHandler = (id: string) => {
    setTodoList((prev) => prev.filter((ele) => ele.id !== id));
  };

  return (
    <div className="App">
      <NewTodoForm onAdd={todoAddHandler} />
      <Todos items={todoList} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
