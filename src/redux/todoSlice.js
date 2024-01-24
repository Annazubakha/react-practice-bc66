import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchTodos } from './operations';

const todoSlice = createSlice({
  // Ім'я слайсу
  name: 'todos',
  // Початковий стан редюсера слайсу
  initialState: [],
  // Об'єкт редюсерів
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },

    deleteTodo(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload;
    }),
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoSliceReducer = todoSlice.reducer;
