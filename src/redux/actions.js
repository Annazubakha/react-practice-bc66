import { nanoid } from 'nanoid';
import { ADD_TODO, DELETE_TODO, FILTER_TODO } from './types';

export const addToDo = text => {
  return {
    type: ADD_TODO,
    payload: {
      text,
      id: nanoid(),
    },
  };
};

export const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const filterTodo = filter => {
  return {
    type: FILTER_TODO,
    payload: filter,
  };
};
