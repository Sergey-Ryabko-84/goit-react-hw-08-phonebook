import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const onSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === values.name.trim().toLowerCase()
      )
    )
      return toast.error(`${values.name} is already in contacts.`);
    
    dispatch(addContact(values));

    resetForm();
  };

  const onDelete = e => {
    const { id } = e.currentTarget;
    dispatch(deleteContact(id));
  };

  const filterHandler = e => dispatch(setFilter(e.currentTarget.value.trim()));

  const contactFiltering = () => {
    return contacts
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={onSubmit} />

      <Filter handleFilter={filterHandler} />
      <h2>Contacts</h2>
      <ContactList
        contactList={contactFiltering()}
        value={filter}
        deleteHandler={onDelete}
      />
    </AppWrapper>
  );
};
