import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/ContactForm/ContactForm.jsx';
import { Contacts } from '../components/Contacts/Contacts.jsx';
//import { ContactsTitle } from './Layout.js';
//import Filter from '../components/Filter/Filter.jsx';
// import { GlobalStyle } from './GlobaleStyle.js';
import { fetchContacts } from 'redux/contacts/operations.js';
import { getIsLoading } from 'redux/contacts/selectors.js';

import { ContactsTitle } from './Contacts.styled.js';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
      <title> Your contacts</title>
      {/* </Helmet> */}
      <ContactForm />
      <ContactsTitle>Contacts:</ContactsTitle>
      {/* <Filter /> */}
      <div> {isLoading && 'Request in progress...'}</div>
      <Contacts />
      {/* <GlobalStyle /> */}
    </>
  );
}
