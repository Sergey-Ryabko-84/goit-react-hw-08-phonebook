import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth);
  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
};

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn } = useSelector(selectAuth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
