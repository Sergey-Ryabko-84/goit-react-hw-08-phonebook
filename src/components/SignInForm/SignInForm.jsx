import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { FiMail, FiKey } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { logIn } from 'redux/auth/operations';
import {
  FormWrapper,
  InputLabel,
  Input,
  FilterIcon,
  ErrorMsg,
  SubmitButton,
} from './SignInForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(
      logIn({
        email,
        password,
      })
    )
      .unwrap()
      .then(({ user }) => toast.success(`Welcome, ${user.name}!`))
      .catch(error => {
        toast.error(
          'Oops... Something went wrong. Please refresh the page and try again!'
        );
        console.log('Error: ', error);
      });
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormWrapper>
        <InputLabel htmlFor="email">
          <FilterIcon>
            <FiMail size={22} />
          </FilterIcon>
          <Input type="email" name="email" placeholder="Email" />
        </InputLabel>
        <ErrorMsg component="div" name="email" />
        <InputLabel htmlFor="password">
          <FilterIcon>
            <FiKey size={22} />
          </FilterIcon>
          <Input type="password" name="password" placeholder="Password" />
        </InputLabel>
        <ErrorMsg component="div" name="password" />
        <SubmitButton type="submit">SignIn</SubmitButton>
      </FormWrapper>
    </Formik>
  );
};
