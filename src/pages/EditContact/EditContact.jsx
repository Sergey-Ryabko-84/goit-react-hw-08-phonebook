import { Helmet } from 'react-helmet';
import { EditContactForm } from 'components/EditContact/EditContactForm';
import { EditContactWrapper } from './EditContact.styled';

export default function EditContact() {
  return (
    <EditContactWrapper>
      <Helmet>
        <title>EditContact</title>
      </Helmet>
      <EditContactForm />
    </EditContactWrapper>
  );
}
