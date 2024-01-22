import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, FILTER_TODO } from './types';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_TODO:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});
