import { Formik  } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { FiUser, FiPhone } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  FormWrapper,
  InputWrapper,
  InputLabel,
  Input,
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
  name: yup
    .string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe('), dash and spaces"
    )
    .required(),
  number: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
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

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <FormWrapper>
        <InputWrapper>
          <InputLabel htmlFor="name">
            <FiUser size={22} />
            <Input type="text" name="name" placeholder="Name" />
          </InputLabel>
          <ErrorMsg component="div" name="name" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="number">
            <FiPhone size={20} />
            <Input type="tel" name="number" placeholder="Phone number" />
          </InputLabel>
          <ErrorMsg component="div" name="number" />
        </InputWrapper>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormWrapper>
    </Formik>
  );
};
