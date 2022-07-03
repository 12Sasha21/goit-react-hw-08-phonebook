import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import operations from './contacts-operations';

const items = createReducer([], {
  [operations.fetchContacts.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [operations.addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [operations.deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items: items,
  filter: filter,
});
