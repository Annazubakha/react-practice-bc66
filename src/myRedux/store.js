import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoSliceReducer } from './todos/todoSlice';
import { filterReducer } from './todos/filterSlice';

const rootReducer = combineReducers({
  todos: todoSliceReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
