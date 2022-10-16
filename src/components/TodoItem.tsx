import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onDelete(): void }> = ({
  text,
  onDelete
}) => {
  return <li className={classes.item} onClick={onDelete}>{text}</li>;
};

export default TodoItem;
