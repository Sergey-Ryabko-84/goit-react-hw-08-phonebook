import { useSelector } from 'react-redux';
import { Contact } from './Contact';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const contactFiltering = () => {
    return contacts
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  return (
    <List>
      {contactFiltering().map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
