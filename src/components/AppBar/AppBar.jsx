import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppBarWrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <AppBarWrapper>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarWrapper>
  );
};
