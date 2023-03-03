import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, name, date } = action.payload;
      const existingTodo = state.find(todo => todo.id === id);
      if(existingTodo) {
        existingTodo.name = name;
        existingTodo.date = date;
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const existingTodo = state.find(todo => todo.id === id);
      if(existingTodo) {
        return state.filter(todo => todo.id !== id);
      }
    }
  }
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;