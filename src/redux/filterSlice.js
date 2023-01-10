import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlise = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlise.actions;
export const filterReducer = filterSlise.reducer;
export const getFilter = state => state.filter;
