import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { Footer } from './components/Footer/Footer';
import './index.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <Container>
          <AppBar />
          <Suspense fallback={<p>Загружаем...</p>}>
            <Switch>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>

              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Switch>
          </Suspense>
          {/* <Footer /> */}
        </Container>
      )}
    </>
  );
};

export default App;
