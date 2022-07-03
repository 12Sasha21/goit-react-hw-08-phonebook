import React from 'react';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactApi from 'redux/contacts/contacts-operations';

const getNormalizedFilter = state => {
  const { items, filter } = state.contacts;

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return visibleContacts;
};

const ContactList = () => {
  const visibleFilter = useSelector(getNormalizedFilter);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {visibleFilter.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <span>
              {name}: {number}
            </span>
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(contactApi.deleteContact(id))}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
