import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://65b0fda8d16d31d11bddc25a.mockapi.io/todos
const instance = axios.create({
  baseURL: 'https://65b0fda8d16d31d11bddc25a.mockapi.io',
});

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/todos');
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
      const { data } = await instance.post('/todos', { text });
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
      const { data } = await instance.delete(`/todos/${id}`);
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
      const { data } = await instance.put(`/todos/${id}`, { text });
      console.log(data);
      return data;
    } catch (error) {}
  }
);
