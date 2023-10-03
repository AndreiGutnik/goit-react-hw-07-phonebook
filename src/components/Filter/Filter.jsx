import { nanoid } from 'nanoid';
import { FilterStyle, IconSearch, Input, InputWrap } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const inputId = nanoid();

  return (
    <>
      <FilterStyle htmlFor={inputId}>Find contacts by name</FilterStyle>
      <InputWrap>
        <Input
          type="text"
          placeholder="Name"
          onChange={e => dispatch(filteredContacts(e.currentTarget.value))}
          id={inputId}
        />
        <IconSearch />
      </InputWrap>
    </>
  );
}
