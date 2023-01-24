import { Helmet } from 'react-helmet';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { SignUpWrapper } from './SignUp.styled';

export default function SignUp () {
  return (
    <SignUpWrapper>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <SignUpForm />
    </SignUpWrapper>
  );
};
