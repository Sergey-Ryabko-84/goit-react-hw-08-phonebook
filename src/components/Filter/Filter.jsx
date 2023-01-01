import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterWrapper, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

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
