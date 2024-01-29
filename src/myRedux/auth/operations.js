import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// email: 'vasya123@email.com';
// password: '12345678';
export const userRegister = createAsyncThunk(
  'auth/regusterUser',
  async (credentials, thunkApi) => {
    console.log(credentials);
    try {
      const { data } = await instance.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
