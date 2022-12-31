import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { rootPersistReducer } from './persistReducer';

export const store = configureStore({
  reducer: rootPersistReducer,
});

export const persistor = persistStore(store);
