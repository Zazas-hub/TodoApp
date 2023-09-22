// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice";

// export const store = configureStore({
//   reducer: {
//     todos: todoReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// Define a RootState type that represents the shape of your Redux store
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});