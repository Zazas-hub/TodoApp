
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Task {
  id: number;
  task: string;
}

interface EditTodoFormProps {
  editTodo: (value: string, id: number) => void;
  task: Task;
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({ editTodo, task }) => {
  const [value, setValue] = useState<string>(task.task);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(value, task.id);

    setValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={value}
          placeholder="update your task"
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </div>
  );
};
