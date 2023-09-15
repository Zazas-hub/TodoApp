import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    completeTodo: (state, action) => {
      const { id, completed } = action.payload;
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !completed } : todo
      );
    },

    editTasks: (state, action) => {
      const { task } = action.payload;
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, task, isEditing: !todo.isEditing }
          : todo
      );
    },

    updateTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, completeTodo, updateTodo, editTasks } =
  todoSlice.actions;

export default todoSlice.reducer;
