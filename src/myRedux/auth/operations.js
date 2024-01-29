import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = ``;
};

// email: 'vasya123@email.com';
// password: '12345678';
export const userRegister = createAsyncThunk(
  'auth/registerUser',
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post('users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post('users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkApi) => {
    try {
      await instance.post('users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const {
      auth: { token },
    } = thunkApi.getState();
    if (!token) {
      return;
    }

    try {
      setAuthHeader(token);
      const { data } = await instance.get('users/me');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
