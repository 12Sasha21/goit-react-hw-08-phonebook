import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchContacts = createAsyncThunk('contacts/fetchContact', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const contact = { name: name, number: number };
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);

const contactApi = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactApi;
