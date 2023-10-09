import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { getEroor, getLoading } from 'redux/selectors';
import { getContacts } from 'redux/operations';
import { Loader } from './Loader';
import { Error } from './Error/Error';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const isError = useSelector(getEroor);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !isError && <Loader />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
      <GlobalStyle />
    </Layout>
  );
};
