import { PhonebookList } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/contactsSlice';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!contacts.length) return <p>The Phonebook is empty!</p>;
  if (!filteredContacts.length) return null;
  return (
    <PhonebookList>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </PhonebookList>
  );
}
