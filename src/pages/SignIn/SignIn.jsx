import { Helmet } from 'react-helmet';
import { SignInForm } from 'components/SignInForm/SignInForm';
import { SignInWrapper } from './SignIn.styled';

export default function SignIn () {
  return (
    <SignInWrapper>
      <Helmet>
        <title>SignIn</title>
      </Helmet>
      <SignInForm />
    </SignInWrapper>
  );
};
