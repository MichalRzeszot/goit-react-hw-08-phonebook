import { useSelector } from 'react-redux';
import css from './userMenu.module.css';
import { selectEmail, selectName } from '../../redux/selectors';
import LogoutButton from './LogoutButton';
import { useEffect } from 'react';

const UserMenu = () => {
  const user = useSelector(selectName);
  const email = useSelector(selectEmail);
  useEffect(() => {}, [user, email]);

  return (
    <div className={css.container}>
      <p>{user ? user : 'Brak danych'}</p>
      <p>{email ? email : 'Brak danych'}</p>
      <LogoutButton />
    </div>
  );
};

export default UserMenu;
