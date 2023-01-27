import useWindowDimensions from 'hooks/useWindowDimensions';
import { useSelector } from 'react-redux';
import { ImHome, ImUsers, ImUserPlus } from 'react-icons/im';
import { selectAuth } from 'redux/auth/selectors';
import { Link, NavWrapper } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth);
  const { width } = useWindowDimensions();
  return (
    <NavWrapper>
      {width < 768 ? (
        <Link to="/">
          <ImHome />
        </Link>
      ) : (
        <Link to="/">Home</Link>
      )}
      {isLoggedIn && !isRefreshing && width >= 768 && (
        <Link to="/contacts">Contacts</Link>
      )}
      {isLoggedIn && !isRefreshing && width < 768 && (
        <Link to="/contacts"><ImUsers/></Link>
      )}
      {isLoggedIn && !isRefreshing && width < 768 && (
        <Link to="/addcontact">
          <ImUserPlus />
        </Link>
      )}
    </NavWrapper>
  );
};
