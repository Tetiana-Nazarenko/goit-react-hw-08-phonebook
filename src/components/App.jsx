import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

// import { fetchContacts } from 'redux/contacts/operations.js';
// import { getError, getIsLoading } from 'redux/contacts/selectors.js';

//import Contacts from './Contacts/Contacts.jsx';

//import { ContactForm } from './ContactForm/ContactForm.jsx';

//import Filter from './Filter/Filter.jsx';

// Стилизация
//import { Layout, HeadTitle, ContactsTitle } from './Layout.js';
//import { GlobalStyle } from './GlobaleStyle.js';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  //*** RENDER */
  return isRefreshing ? (
    <b> Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/login"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
