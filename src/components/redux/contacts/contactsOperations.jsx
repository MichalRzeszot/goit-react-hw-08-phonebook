import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://65e7762053d564627a8eda53.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data;
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post(`${BASE_URL}/contacts`, contact);
    return response.data;
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`${BASE_URL}/contacts/${contactId}`);
    return contactId;
  }
);
