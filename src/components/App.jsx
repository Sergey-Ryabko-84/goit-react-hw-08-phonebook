import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { selectAuth } from 'redux/auth/selectors';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';
import { Background } from './Background';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute, RestrictedRoute } from './Routes';
import { AppBar } from './AppBar/AppBar';

const HomePage = lazy(() => import('../pages/Home/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const SignUpPage = lazy(() => import('../pages/SignUp/SignUp'));
const SignInPage = lazy(() => import('../pages/SignIn/SignIn'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <AppWrapper>
      <GlobalStyle />
      <Background />
      <Toaster />

      {isRefreshing ? (
        <>
          <AppBar />
          <b>Refreshing user...</b>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<ContactsPage />}
                />
              }
            />
            <Route
              path="signup"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<SignUpPage />}
                />
              }
            />
            <Route
              path="signin"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<SignInPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </AppWrapper>
  );
}
