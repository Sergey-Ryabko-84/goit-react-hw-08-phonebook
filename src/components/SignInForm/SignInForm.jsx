import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

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
    );
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="email">
          Email
          <Field type="email" name="email" placeholder="Enter your email" />
        </label>
        <ErrorMessage component="div" name="email" />
        <label htmlFor="password">
          Password
          <Field type="password" name="password" placeholder="Enter password" />
        </label>
        <ErrorMessage component="div" name="password" />
        <button type="submit">SignIn</button>
      </Form>
    </Formik>
  );
};
