import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, fetchTodos } from './operations';

const todoSlice = createSlice({
  // Ім'я слайсу
  name: 'todos',
  // Початковий стан редюсера слайсу
  initialState: [],
  // Об'єкт редюсерів
  extraReducers: builder =>
    builder
      .addCase(fetchTodos.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        return state.filter(item => item.id !== action.payload.id);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        return state.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      }),
});

export const todoSliceReducer = todoSlice.reducer;
