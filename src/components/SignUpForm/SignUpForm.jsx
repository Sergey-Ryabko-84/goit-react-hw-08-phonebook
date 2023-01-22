import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      signUp({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="name">
          Name
          <Field type="text" name="name" placeholder="Enter name" />
        </label>
        <ErrorMessage component="div" name="name" />
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
        <button type="submit">SignUp</button>
      </Form>
    </Formik>
  );
};
