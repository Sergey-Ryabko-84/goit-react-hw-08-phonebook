import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectUndelete = state => state.undelete;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filter) =>
    items
      ? items.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : items
);
