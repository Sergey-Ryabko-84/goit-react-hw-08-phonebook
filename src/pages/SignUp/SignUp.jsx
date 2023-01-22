import { Helmet } from 'react-helmet';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

export default function SignUp () {
  return (
    <div>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <SignUpForm />
    </div>
  );
};
