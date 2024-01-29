import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos;
export const selectFilter = state => state.filter;

export const selectFilteredTodos = createSelector(
  // Масив вхідних селекторів
  [selectTodos, selectFilter],
  // Функція перетворювач
  (todos, filter) => {
    return todos.filter(item =>
      item.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
