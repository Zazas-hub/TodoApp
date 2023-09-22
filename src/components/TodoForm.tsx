
import React, { useState, FormEvent } from "react";

interface TodoFormProps {
  addNewTodo: (value: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addNewTodo }) => {
  const [value, setValue] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addNewTodo(value);
    setValue("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={value}
          placeholder="what is the task today"
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
