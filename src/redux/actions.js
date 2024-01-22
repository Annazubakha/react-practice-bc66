import { nanoid } from 'nanoid';
import { ADD_TODO, DELETE_TODO } from './types';

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
