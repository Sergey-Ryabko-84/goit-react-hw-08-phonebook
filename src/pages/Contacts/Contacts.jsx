import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectUndelete } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { UndeletePanel } from 'components/UndeletePanel/UndeletePanel';
import { Loader } from 'components/Loader/Loader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Wrapper } from './Contacts.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default function Contacts() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  const { modalIsOpen } = useSelector(selectUndelete);
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then()
      .catch(error => {
        toast.error('Oops... Something went wrong. Please refresh the page!');
        console.log('Error: ', error);
      });
  }, [dispatch]);

  return (
    <Wrapper>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Filter />
      {width >= 768 && <ContactForm />}
      {items.length > 0 && <ContactList />}
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
      {modalIsOpen && <UndeletePanel />}
    </Wrapper>
  );
}
