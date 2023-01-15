import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContactsFulfilledReducer,
  addContactFulfilledReducer,
  anyPendingReducer,
  anyFulfilledReducer,
  anyRejectedReducer,
} from './contactsSliceReducers';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraOperations = [fetchContacts, addContact, deleteContact];

const getOperations = type =>
  isAnyOf(...extraOperations.map(operation => operation[type]));

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    removeContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addMatcher(getOperations('pending'), anyPendingReducer)
      .addMatcher(getOperations('fulfilled'), anyFulfilledReducer)
      .addMatcher(getOperations('rejected'), anyRejectedReducer),
});

export const { removeContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
// export const selectContacts = state => state.contacts;
