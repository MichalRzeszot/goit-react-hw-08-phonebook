import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { userReducer } from './userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['user', 'token', 'isAuth'],
};
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: persistReducer(authPersistConfig, userReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
