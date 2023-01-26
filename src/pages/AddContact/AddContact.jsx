import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { AddContactWrapper } from './AddContact.styled';

export default function AddContact() {
  return (
    <AddContactWrapper>
      <Helmet>
        <title>AddContact</title>
      </Helmet>
      <ContactForm />
    </AddContactWrapper>
  );
}
