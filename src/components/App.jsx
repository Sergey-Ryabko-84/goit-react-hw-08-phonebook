import { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';

export const App = () => (
  <AppWrapper>
    <GlobalStyle />
    <Toaster />
    <h1>Phonebook</h1>
    <ContactForm />
    <Filter />
    <h2>Contacts</h2>
    <ContactList />
  </AppWrapper>
);
