import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchTodos } from './operations';

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
      }),
});

export const todoSliceReducer = todoSlice.reducer;
