import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { selectAuth } from 'redux/auth/selectors';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectContacts, selectUndelete } from 'redux/contacts/selectors';
// import { Loader } from './Loader/Loader';
// import { UndeletePanel } from './UndeletePanel/UndeletePanel';
// import { UserMenu } from './UserMenu/UserMenu';
// import { SignUp } from 'pages/SignUp/SignUp';
// import { SignIn } from 'pages/SignIn/SignIn';


const HomePage = lazy(() => import('../pages/Home/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const SignUpPage = lazy(() => import('../pages/SignUp/SignUp'));
const SignInPage = lazy(() => import('../pages/SignIn/SignIn'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);
  // const { items, isLoading, error } = useSelector(selectContacts);
  // const { modalIsOpen } = useSelector(selectUndelete);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <AppWrapper>
      <GlobalStyle />
      <Toaster />

      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<SignInPage />} />
          </Route>
        </Routes>
      )}
    </AppWrapper>
  );
}
