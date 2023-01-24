import { AuthNavWrapper, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </AuthNavWrapper>
  );
};
