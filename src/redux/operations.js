import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://651d032c44e393af2d590112.mockapi.io/phonebook';

const createContactAsyncThunk = (name, asyncFn) => {
  createAsyncThunk(`contacts/${name}`, async (payload, thunkAPI) => {
    try {
      const resp = await asyncFn(payload);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });
};

export const getContacts = createContactAsyncThunk('getContacts', () =>
  axios.get('/contacts')
);
export const addContact = createContactAsyncThunk('addContact', contact =>
  axios.get('/contacts', contact)
);
export const deleteContact = createContactAsyncThunk(
  'deleteContact',
  contactId => axios.delete(`/contacts/${contactId}`)
);
