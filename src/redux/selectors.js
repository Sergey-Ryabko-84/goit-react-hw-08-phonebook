export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectUndelete = state => state.undelete;

export const selectVisibleContacts = state => {
  const { items } = selectContacts(state);
  const filter = selectFilter(state);
  return items
    ? items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : items;
};
