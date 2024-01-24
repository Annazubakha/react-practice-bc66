import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoSliceReducer } from './todoSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  todos: todoSliceReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
