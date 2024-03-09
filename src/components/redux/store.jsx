import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/ContactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
