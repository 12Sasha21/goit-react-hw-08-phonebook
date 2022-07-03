import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={evt =>
          dispatch(contactsActions.filterChange(evt.target.value))
        }
      />
    </label>
  );
};

export default Filter;
