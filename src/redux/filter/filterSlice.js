const { createSlice } = require('@reduxjs/toolkit');

export const getFilter = state => state.filter;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectFilter = state => state.filter;
