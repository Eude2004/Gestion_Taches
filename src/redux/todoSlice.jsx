import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    nextId: 1
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: state.nextId,
        text: action.payload.text,
        completed: false,
        createdAt: new Date().toISOString()
      });
      state.nextId += 1;
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    clearCompleted: (state) => {
      state.items = state.items.filter(item => !item.completed);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;