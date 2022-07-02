import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/auth-operations';
import { getIsFetchingCurrent } from './redux/auth/auth-selectors';
// import SignupForm from './components/Form/Form';
// import Filter from './components/Filter/Filter';
// import ContactList from './components/ContactList/ContactList';
// import { fetchContacts } from 'redux/contacts/contacts-operations';

// import { Header } from './components/Header/Header';
// import { Footer } from './components/Footer/Footer';

// import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoute';

import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import ContactsView from './views/ContactsView';
import Container from './components/Container';
import './index.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
    )
    // <div className="container">
    //   <h1 className="visually_hidden">Phonebook</h1>
    //   <Title title="Phonebook" />
    //   <SignupForm />
    //   <Title title="Contacts" />
    //   <Filter />
    //   <ContactList />
    // </div>
  );
}
