import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAutheader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    setAutheader(token);
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const res = await axios.post('contacts', {
        name,
        number,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deteteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRegister = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAutheader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogining = createAsyncThunk(
  'user/loging',
  async (user, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', user);
      setAutheader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post('/users/logout');
      setAutheader(null);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRefresh = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }
    setAutheader(token);
    try {
      const res = await axios.get('users/current');
      setAutheader(token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
