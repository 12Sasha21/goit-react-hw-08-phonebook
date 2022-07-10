import contactApi from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const state = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const contact = (state, name) => {
    const contactsName = state.map(({ name }) => name.toLowerCase());

    if (contactsName.includes(name.toLowerCase())) {
      return alert(`${name} is already in contacts.`);
    } else {
      return dispatch(contactApi.addContact({ name, number }));
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    contact(state, name);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.form__label}>
          Name
          <input
            className={styles.form__input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.form__label}>
          Number
          <input
            className={styles.form__input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>

        <button className={styles.form__btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
