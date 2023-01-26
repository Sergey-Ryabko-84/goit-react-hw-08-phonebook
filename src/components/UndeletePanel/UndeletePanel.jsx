import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectUndelete } from 'redux/contacts/selectors';
import {
  isModalOpen,
  setContactId,
  setTimerCounter,
} from 'redux/contacts/undeleteSlice';
import {
  ModalWrapper,
  Wrapper,
  Button,
  Timer,
  Text,
  Post,
} from './UndeletePanel.styled';

const modalRoot = document.querySelector('#modal-root');

export const UndeletePanel = () => {
  const dispatch = useDispatch();
  const { timerCounter, contactId } = useSelector(selectUndelete);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timerCounter <= 0) {
        dispatch(isModalOpen(false));
        dispatch(deleteContact(contactId))
          .unwrap()
          .then(({ name }) => toast.success(`${name}'s contact was deleted`))
          .catch(error => {
            toast.error(
              'Oops... Something went wrong. Please refresh the page and try again!'
            );
            console.log('Error: ', error);
          });
      }
      dispatch(setTimerCounter(timerCounter - 1));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [contactId, dispatch, timerCounter]);

  useEffect(() => {
    const deleteContactFromDB = e => {
      if (e.code === 'Escape') {
        dispatch(isModalOpen(false));
        dispatch(deleteContact(contactId))
          .unwrap()
          .then(({ name }) => toast.success(`${name}'s contact was deleted`))
          .catch(error => {
            toast.error(
              'Oops... Something went wrong. Please refresh the page and try again!'
            );
            console.log('Error: ', error);
          });
      }
    };

    window.addEventListener('keydown', deleteContactFromDB);
    return () => {
      window.removeEventListener('keydown', deleteContactFromDB);
    };
  }, [contactId, dispatch]);

  const undoDelete = () => {
    dispatch(fetchContacts());
    dispatch(isModalOpen(false));
    dispatch(setContactId(null));
  };

  return createPortal(
    <ModalWrapper>
      <Wrapper>
        <Text>
          The contact will be permanently deleted in
          <Timer>{timerCounter}</Timer>
          seconds
        </Text>
        <Button type="button" onClick={undoDelete}>
          Undo delete
        </Button>
      </Wrapper>
      <Post>instant deletion by clicking on Esc</Post>
    </ModalWrapper>,
    modalRoot
  );
};
