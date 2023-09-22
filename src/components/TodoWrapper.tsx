
import React, { useState, createContext, useContext } from "react";
import  TodoForm  from "./TodoForm";
import  Todo  from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  updateTodo,
  editTasks,
} from "../redux/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store"; // Replace with your actual RootState type

uuidv4();


export const TodoWrapper: React.FC = () => {
  // const [newTodo, setNewTodo] = useState<string>("");
  // const [value, setValue] = useState<string>("some content");

  const todos = useSelector((state: RootState) => state.todos); // Replace 'RootState' with your actual RootState type
  const dispatch = useDispatch();

  function addNewTodo(todo: string) {
    dispatch(
      addTodo({
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      })
    );
    setNewTodo("");

    console.log(todos);
  }

  const handleCompleteTodo = (id: number) => {
    dispatch(completeTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id: number) => {
    dispatch(updateTodo(id));
  };

  // const handleEditTasks = (id: number) => {
  //   dispatch(editTasks(id));
  // };

  return (
    <div className="TodoWrapper">
      <h1>Get it done </h1>
      <TodoForm addNewTodo={addNewTodo}></TodoForm>
      {todos.map((todo, index) =>
        // todo.isEditing ? (
        //   <EditTodoForm editTodo={handleEditTasks} task={todo} key={todo.id} />
        // ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={handleCompleteTodo}
            deleteTodo={handleDeleteTodo}
            editTodo={handleEditTodo}
          />
        // )
      )}
    </div>
  );
};

function setNewTodo(arg0: string) {
  throw new Error("Function not implemented.");
}

