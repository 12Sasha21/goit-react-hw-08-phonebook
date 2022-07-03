import ContactList from '../components/ContactList/ContactList';
import SignupForm from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import contactApi from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const ContactsView = () => {
  const dispatch = useDispatch();
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    if (unmount === true) {
      return;
    }

    dispatch(contactApi.fetchContacts());

    return () => {
      setUnmount(true);
    };
  }, [dispatch, unmount]);

  return (
    <div className="main">
      <h2>Phonebook</h2>
      <SignupForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;
