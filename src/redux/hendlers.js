export const handlePanding = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.contacts = action.payload;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

export const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.contacts.push(action.payload);
};

export const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  const index = state.contacts.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.splice(index, 1);
};
