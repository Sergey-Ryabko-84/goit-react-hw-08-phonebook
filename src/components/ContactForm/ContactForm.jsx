import { Formik  } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { FiUser, FiPhone } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  FormWrapper,
  FormTitle,
  InputWrapper,
  InputLabel,
  Input,
  FilterIcon,
  ErrorMsg,
  SubmitButton,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/;

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'invalid name format').required(),
  number: yup
    .string()
    .matches(phoneRegExp, 'invalid phone number format')
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);

  const onSubmit = (values, { resetForm }) => {
    if (
      items.some(
        contact =>
          contact.name.toLowerCase() === values.name.trim().toLowerCase()
      )
    )
      return toast.error(`${values.name} is already in contacts.`);

    dispatch(addContact(values))
      .unwrap()
      .then(({ name }) => toast.success(`${name}'s contact has been created`))
      .catch(error => {
        toast.error(
          'Oops... Something went wrong. Please refresh the page and try again!'
        );
        console.log('Error: ', error);
      });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <FormWrapper>
        <FormTitle>Add new contact</FormTitle>
        <InputWrapper>
          <InputLabel htmlFor="name">
            <FilterIcon>
              <FiUser size={22} />
            </FilterIcon>
            <Input type="text" name="name" placeholder="name" />
          </InputLabel>
          <ErrorMsg component="div" name="name" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="number">
            <FilterIcon>
              <FiPhone size={20} />
            </FilterIcon>
            <Input type="tel" name="number" placeholder="phone number" />
          </InputLabel>
          <ErrorMsg component="div" name="number" />
        </InputWrapper>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormWrapper>
    </Formik>
  );
};
