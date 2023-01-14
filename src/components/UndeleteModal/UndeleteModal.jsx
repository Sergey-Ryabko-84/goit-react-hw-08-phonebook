import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getUndelete, isModalOpen, setContactId, setTimerCounter } from 'redux/undeleteSlice';
import { ModalWrapper, Button, Text, Timer } from './UndeleteModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const UndeleteModal = () => {
  const dispatch = useDispatch();
  const { timerCounter, contactId } = useSelector(getUndelete);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timerCounter <= 0) {
        dispatch(isModalOpen(false));
        dispatch(deleteContact(contactId));
      };
      dispatch(setTimerCounter(timerCounter - 1));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [contactId, dispatch, timerCounter]);

  //   componentDidMount() {
  //     window.addEventListener('keydown', this.handleKeyDown);
  //   }

  //   componentWillUnmount() {
  //     window.removeEventListener('keydown', this.handleKeyDown);
  //   }

  //   handleKeyDown = e => {
  //     if (e.code === 'Escape') this.props.onCloseModal(null);
  //   };

  const undoDelete = () => {
    dispatch(fetchContacts());
    dispatch(isModalOpen(false));
    dispatch(setContactId(null));
  };

  return createPortal(
    <ModalWrapper>
      <Text>The contact has been deleted</Text>
      <Timer>{timerCounter}</Timer>
      <Button type="button" onClick={undoDelete}>
        Undo delete
      </Button>
    </ModalWrapper>,
    modalRoot
  );
};
