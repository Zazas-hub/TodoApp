import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { TodoListWrapper } from "./components/Lists/TodoListWrapper";
import { useState } from "react";

function App() {
  const [Listview, updateListView] = useState(true);
  const handleClick = () => {
    updateListView(false);
  };
  const handleTodoClick = () => {
    updateListView(true);
  };

  return (
    <div className="App">
      {Listview ? <TodoWrapper></TodoWrapper> : <TodoListWrapper />}
      <button onClick={handleClick} className="todo-list_btn">
        Add Task List
      </button>
      <button onClick={handleTodoClick} className="todo-list_btn">
        Add Todo
      </button>
    </div>
  );
}

export default App;
