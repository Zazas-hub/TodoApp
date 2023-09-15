import { useState } from "react";

import React, { useContext, createContext } from "react";

export const TodoForm = ({ addNewTodo }) => {
  const [value, setValue] = useState("");

  // const MyContext = createContext();
  // const updateData = useContext(MyContext);

  function handleSubmit(e) {
    e.preventDefault();
    addNewTodo(value);
    setValue("");
  }

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={value}
          placeholder="what is the task today"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};
