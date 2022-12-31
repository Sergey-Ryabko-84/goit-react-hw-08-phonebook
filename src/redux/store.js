import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { rootPersistReducer } from './persistReducer';
import { PERSIST } from 'redux-persist';

export const store = configureStore({
  reducer: rootPersistReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
