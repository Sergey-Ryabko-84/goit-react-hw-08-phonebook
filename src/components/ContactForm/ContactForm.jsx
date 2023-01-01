import { Formik } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import {
  FormWrapper,
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
  const contacts = useSelector(state => state.contacts);

  const onSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
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
        <InputLabel htmlFor="name">
          Name
          <Input type="text" name="name" placeholder="Enter your name" />
          <ErrorMsg name="name" />
        </InputLabel>
        <InputLabel htmlFor="number">
          Number
          <Input type="tel" name="number" placeholder="Enter phone number" />
          <ErrorMsg name="number" />
        </InputLabel>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormWrapper>
    </Formik>
  );
};
