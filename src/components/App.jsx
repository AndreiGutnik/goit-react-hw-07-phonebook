import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { selectEroor, selectLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader';
import { Error } from './Error/Error';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectEroor);

  useEffect(() => {
    dispatch(fetchContacts());
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
