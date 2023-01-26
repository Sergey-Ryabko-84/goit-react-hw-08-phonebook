import useWindowDimensions from 'hooks/useWindowDimensions';
import { useSelector } from 'react-redux';
// import { NavLink } from "react-router-dom";
import { selectAuth } from 'redux/auth/selectors';
import { Link, NavWrapper } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth);
  const { width } = useWindowDimensions();
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      {isLoggedIn && !isRefreshing && <Link to="/contacts">Contacts</Link>}
      {isLoggedIn && !isRefreshing && width < 768 && (
        <Link to="/addcontact">Add contact</Link>
      )}
    </NavWrapper>
  );
};
