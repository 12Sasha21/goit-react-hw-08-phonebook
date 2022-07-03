import { createAction } from '@reduxjs/toolkit';

const filterChange = createAction('contacts/filterChange');
const actions = {
  filterChange,
};

export default actions;
