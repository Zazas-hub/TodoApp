import { useState, createContext, useContext } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
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

uuidv4();
const MyContext = createContext();

export const TodoWrapper = () => {
  const [newTodo, setNewTodo] = useState("");
  const [value, setValue] = useState("some content");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // const [todos, setTodos] = useState([]);

  function addNewTodo(todo) {
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

  // function addTodo(todo) {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: uuidv4(),
  //       task: todo,
  //       completed: false,
  //       isEditing: false,
  //     },
  //   ]);
  //   console.log(todos);
  // }

  // const toggleComplete = (id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id) => {
    dispatch(updateTodo(id));
  };

  const handleEditTasks = (id) => {
    dispatch(editTasks(id));
  };

  // const editTask = (task, id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // };

  return (
    // <MyContext.Provider value={updateData}>
    <div className="TodoWrapper">
      <h1>Get it done </h1>
      <TodoForm addNewTodo={addNewTodo}></TodoForm>
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={handleEditTasks} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={handleCompleteTodo}
            deleteTodo={handleDeleteTodo}
            editTodo={handleEditTodo}
          />
        )
      )}
    </div>
    // </MyContext.Provider>
  );
};
