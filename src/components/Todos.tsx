import React from "react";
import Todo from "../models/todo";
import TodoComponent from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onDelete(id: string): void }> = ({
  items,
  onDelete,
}) => {

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoComponent
          key={item.id}
          text={item.text}
          onDelete={() =>onDelete(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
