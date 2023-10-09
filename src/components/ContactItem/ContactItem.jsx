import { deleteContact } from 'redux/operations';
import { ContacItem, Text, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';

export function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <ContacItem>
      <Text>
        {name}: <span>{number}</span>
      </Text>
      <Button
        type="button"
        data-id={id}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ContacItem>
  );
}
