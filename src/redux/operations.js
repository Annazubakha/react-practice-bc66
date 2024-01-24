import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://65b0fda8d16d31d11bddc25a.mockapi.io/todos
const instance = axios.create({
  baseURL: 'https://65b0fda8d16d31d11bddc25a.mockapi.io',
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const { data } = await instance.get('/todos');
    console.log(data);
    return data;
  } catch (error) {}
});
