import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoSliceReducer } from './todos/todoSlice';
import { filterReducer } from './todos/filterSlice';
import { authSliceReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authSliceReducer,
  todos: todoSliceReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
