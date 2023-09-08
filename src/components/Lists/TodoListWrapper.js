import { useState } from "react";
import { TodoListForm } from "./TodoListForm";
import { TodoLists } from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { EditTodoListForm } from "./EditTodoListForm";
uuidv4();

export const TodoListWrapper = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Add a Todo List </h1>
      <TodoListForm addTodo={addTodo}></TodoListForm>
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoListForm editTodo={editTask} task={todo} />
        ) : (
          <TodoLists
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
