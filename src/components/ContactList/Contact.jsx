import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BiUserX } from 'react-icons/bi';
import { removeContact } from 'redux/contactsSlice';
import { selectUndelete } from 'redux/selectors';
import {
  isModalOpen,
  setTimerCounter,
  setContactId,
} from 'redux/undeleteSlice';
import { ContactItem, Text, DeleteButton } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { modalIsOpen } = useSelector(selectUndelete);

  const onDelete = e => {
    const { id } = e.currentTarget;
    dispatch(removeContact(id));
    dispatch(setContactId(id));
    dispatch(setTimerCounter(5));
    dispatch(isModalOpen(true));
  };

  return (
    <ContactItem>
      <Text>{contact.name}:</Text>
      <Text>{contact.phone}</Text>
      <DeleteButton
        type="button"
        disabled={modalIsOpen}
        id={contact.id}
        onClick={onDelete}
      >
        <BiUserX size={24} />
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
