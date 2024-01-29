import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterTodo: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterTodo } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
