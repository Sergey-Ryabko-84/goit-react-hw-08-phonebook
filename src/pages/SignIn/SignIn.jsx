import { Helmet } from 'react-helmet';
import { SignInForm } from 'components/SignInForm/SignInForm';

export default function SignIn () {
  return (
    <div>
      <Helmet>
        <title>SignIn</title>
      </Helmet>
      <SignInForm />
    </div>
  );
};
