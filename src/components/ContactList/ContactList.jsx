import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Contact } from './Contact';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts)

  return (
    <List>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
