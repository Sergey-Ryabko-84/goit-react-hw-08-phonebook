import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import {
  FilterWrapper,
  FilterInput,
  FilterLabel,
  FilterIcon,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterHandler = e => dispatch(setFilter(e.currentTarget.value.trim()));

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">
        <FilterIcon>
          <FiSearch />
        </FilterIcon>
        <FilterInput
          type="text"
          name="filter"
          onChange={filterHandler}
          value={filter}
          placeholder="search"
        />
      </FilterLabel>
    </FilterWrapper>
  );
};
