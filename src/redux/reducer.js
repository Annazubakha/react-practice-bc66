import { combineReducers } from 'redux';

import { createSlice, nanoid } from '@reduxjs/toolkit';

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
});

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_TODO:
      return action.payload;
    default:
      return state;
  }
};
export const { addTodo, deleteTodo } = todoSlice.actions;

export const rootReducer = combineReducers({
  todos: todoSlice.reducer,
  filter: filterReducer,
});
