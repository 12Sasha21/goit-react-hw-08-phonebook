import { useSelector } from 'react-redux';
import { getIsLogIn } from '../redux/auth/auth-selectors';
import { Navigation } from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
    marginBottom: '25px',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLogIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
