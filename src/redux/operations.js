import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://651d032c44e393af2d590112.mockapi.io/phonebook';

const createContactAsyncThunk = (name, asyncFn) =>
  createAsyncThunk(`contacts/${name}`, async (payload, thunkAPI) => {
    try {
      const response = await asyncFn(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const getContacts = createContactAsyncThunk('getContacts', () =>
  axios.get('/contacts')
);
export const addContact = createContactAsyncThunk('addContact', contact =>
  axios.post('/contacts', contact)
);
export const deleteContact = createContactAsyncThunk(
  'deleteContact',
  contactId => axios.delete(`/contacts/${contactId}`)
);
