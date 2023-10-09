import Notiflix from 'notiflix';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  FormStyle,
  Input,
  Button,
  InputWrap,
  IconPhone,
  IconUser,
  FormText,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/operations';
import { useId } from 'react';

const initialValues = {
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <FormText>{message}</FormText>}
    />
  );
};

const validationScheme = object().shape({
  name: string().min(5).max(50).required(),
  number: string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
      'does not match the required format'
    )
    .required(),
});

export const ContactForm = ({ onSubmit }) => {
  const labelNameId = useId();
  const labelNumberId = useId();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = ({ name, number }, { resetForm }) => {
    const existingName = contacts.some(
      contact => contact.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    if (existingName) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    const contact = { name: name.trim(), number };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={onSubmitForm}
    >
      {({ isSubmitting }) => (
        <FormStyle autoComplete="off">
          <div>
            <label htmlFor={labelNameId}>Name</label>
            <InputWrap>
              <Input
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Name"
                id={labelNameId}
              />
              <IconUser />
            </InputWrap>
            <FormError name="name" />
          </div>

          <div>
            <label htmlFor={labelNumberId}>Number</label>
            <InputWrap>
              <Input
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="Phone number"
                id={labelNumberId}
              />
              <IconPhone />
            </InputWrap>
            <FormError name="number" />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Add contact
          </Button>
        </FormStyle>
      )}
    </Formik>
  );
};
