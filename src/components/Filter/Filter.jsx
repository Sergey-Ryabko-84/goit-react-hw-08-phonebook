import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterWrapper, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterHandler = e => dispatch(setFilter(e.currentTarget.value.trim()));

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          onChange={filterHandler}
          value={filter}
        />
      </FilterLabel>
    </FilterWrapper>
  );
};
