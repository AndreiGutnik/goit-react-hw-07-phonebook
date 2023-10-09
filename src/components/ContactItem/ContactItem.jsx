import { deleteContact } from 'redux/operations';
import { ContacItem, Text, Button } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from 'redux/selectors';

export function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  return (
    <ContacItem>
      <Text>
        {name}: <span>{number}</span>
      </Text>
      <Button
        type="button"
        data-id={id}
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
      >
        Delete
      </Button>
    </ContacItem>
  );
}
