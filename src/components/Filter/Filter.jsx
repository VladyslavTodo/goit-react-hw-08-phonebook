import { useDispatch, useSelector } from 'react-redux';

import { filteredContacts } from 'redux/contacts/FilterReducer';
import { selectContactsFilter } from 'redux/contacts/selectors';

import { Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectContactsFilter);

  const handleFilterChange = e => {
    dispatch(filteredContacts(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

export default Filter;
