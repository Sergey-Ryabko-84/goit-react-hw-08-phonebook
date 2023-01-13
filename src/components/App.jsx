import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/contactsSlice';
import { Loader } from './Loader/Loader';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';


export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppWrapper>
      <GlobalStyle />
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      {items.length > 0 && <ContactList />}
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
    </AppWrapper>
  );
}
