import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BiUserX } from 'react-icons/bi';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem, Text, DeleteButton } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDelete = e => {
    const { id } = e.currentTarget;
    dispatch(deleteContact(id));
  };

  return (
    <ContactItem>
      <Text>{contact.name}:</Text>
      <Text>{contact.number}</Text>
      <DeleteButton type="button" id={contact.id} onClick={onDelete}>
        <BiUserX size={24} />
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
