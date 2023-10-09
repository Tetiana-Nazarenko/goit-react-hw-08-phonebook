//import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
//import css from './Navigation.module.css';

import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts"> Contacts</Link>}
    </nav>
  );
};
