import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectUndelete } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { UndeletePanel } from 'components/UndeletePanel/UndeletePanel';
import { Loader } from 'components/Loader/Loader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Wrapper } from './Contacts.styled';

export default function Contacts () {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  const { modalIsOpen } = useSelector(selectUndelete);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Filter />
      <ContactForm />
      {items.length > 0 && <ContactList />}
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
      {modalIsOpen && <UndeletePanel />}
    </Wrapper>
  );
};
