import { PhonebookList } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/filterSlice';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtered = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!contacts.length) return <p>The Phonebook is empty!</p>;
  if (!filtered.length) return null;
  return (
    <PhonebookList>
      {filtered.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </PhonebookList>
  );
}
