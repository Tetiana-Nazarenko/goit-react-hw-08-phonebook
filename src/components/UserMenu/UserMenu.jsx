import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { selectUser } from 'redux/auth/selectors';
//import { useAuth } from '../../hooks/useAuth';
import { UserMenuBlock, NameUser, LogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <UserMenuBlock>
      <p>
        Welcome, <NameUser>{user.name} </NameUser>{' '}
      </p>
      <LogOut type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOut>
    </UserMenuBlock>
  );
};
