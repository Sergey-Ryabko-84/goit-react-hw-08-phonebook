import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { Contact } from './Contact';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactFiltering = () => {
    return items
      ? items.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : items;
  };

  return (
    <List>
      {contactFiltering().map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
