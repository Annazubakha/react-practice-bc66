import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO } from './types';

export const todoReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ todos: todoReducer });
