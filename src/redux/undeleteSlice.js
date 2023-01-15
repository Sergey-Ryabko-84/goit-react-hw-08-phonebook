import { createSlice } from '@reduxjs/toolkit';

const undeleteInitialState = {
  modalIsOpen: false,
  timerCounter: null,
  contactId: null,
};

const undeleteSlise = createSlice({
  name: 'undelete',
  initialState: undeleteInitialState,
  reducers: {
    isModalOpen(state, action) {
      state.modalIsOpen = action.payload;
    },
    setTimerCounter(state, action) {
      state.timerCounter = action.payload;
    },
    setContactId(state, action) {
      state.contactId = action.payload;
    },
  },
});

export const { isModalOpen, setTimerCounter, setContactId } = undeleteSlise.actions;
export const undeleteReducer = undeleteSlise.reducer;
// export const selectUndelete = state => state.undelete;
