import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import authSliceReducer from './auth/auth-slice';
import { combineReducers } from 'redux';
import { items, loading } from './contacts/contacts-reducer';
import { filter } from './filter/filter-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(contactsPersistConfig, authSliceReducer),
    contacts: combineReducers({
      items,
      filter,
      loading,
    }),
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  },
});

export const persistor = persistStore(store);
