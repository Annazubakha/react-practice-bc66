import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'myRedux/auth/operations';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/tasks');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (text, thunkAPI) => {
    try {
      const { data } = await instance.post('/tasks', { text });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/tasks/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async ({ text, id }, thunkAPI) => {
    try {
      const { data } = await instance.put(`/tasks/${id}`, { text });
      console.log(data);
      return data;
    } catch (error) {}
  }
);
