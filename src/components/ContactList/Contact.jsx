import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { removeContact } from 'redux/contacts/contactsSlice';
import { selectUndelete } from 'redux/contacts/selectors';
import {
  isModalOpen,
  setTimerCounter,
  setContactId,
} from 'redux/contacts/undeleteSlice';
import {
  ContactItem,
  Text,
  Button,
  Link,
  ImgWrapper,
  ContactInfo,
  UserImg,
} from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { modalIsOpen } = useSelector(selectUndelete);
  const counterValue = 5;

  const onDelete = e => {
    const { id } = e.currentTarget;
    dispatch(removeContact(id));
    dispatch(setContactId(id));
    dispatch(setTimerCounter(counterValue));
    dispatch(isModalOpen(true));
  };

  return (
    <ContactItem>
      <ImgWrapper>
        <UserImg size={56} />
      </ImgWrapper>
      <ContactInfo>
        <Text>{contact.name}</Text>
        <Text>
          <a href={`tel:${contact.number}`}>{contact.number}</a>
        </Text>
      </ContactInfo>
      <div>
        <Link to="/editcontact" state={{ from: { contact } }}>
          <FiEdit3 size={18} />
        </Link>
        <Button
          type="button"
          disabled={modalIsOpen}
          id={contact.id}
          onClick={onDelete}
        >
          <FiTrash2 size={18} />
        </Button>
      </div>
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
