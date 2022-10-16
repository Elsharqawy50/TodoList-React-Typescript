import React, { useRef } from "react";
import classes from "./NewTodoForm.module.css";

const NewTodoForm: React.FC<{ onAdd(value: string | undefined): void }> = ({
  onAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current!.value;
    if (inputValue?.trim().length === 0) {
      return;
    }
    onAdd(inputValue);
    inputRef.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo">New Todo</label>
      <input ref={inputRef} type="text" id="todo" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewTodoForm;
