import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';
import {
  handleFulfilled,
  handlePanding,
  handleRejected,
  handleAddFulfilled,
  handleDeleteFulfilled,
} from './hendlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, handlePanding)
      .addCase(getContacts.fulfilled, handleFulfilled)
      .addCase(getContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePanding)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePanding)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
