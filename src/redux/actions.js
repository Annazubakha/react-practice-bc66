import { nanoid } from 'nanoid';
import { ADD_TODO } from './types';

export const addToDo = text => {
  return {
    type: ADD_TODO,
    payload: {
      text,
      id: nanoid(),
    },
  };
};
