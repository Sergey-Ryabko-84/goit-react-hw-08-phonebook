export const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

export const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

export const anyPendingReducer = state => {
  state.isLoading = true;
};

export const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

export const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
