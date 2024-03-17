import { useSelector } from 'react-redux';
import UserMenu from '../../userMenu/userMenu';
import css from './Navigation.module.css';
import { selectAuth } from '../../../redux/selectors';
import { NavLink, useMatch } from 'react-router-dom';

const Navigation = () => {
  const isAuth = useSelector(selectAuth);
  const CustomNavLink = ({ to, children, className }) => {
    const match = useMatch(to);
    return (
      <NavLink
        to={to}
        className={match ? `${className} ${css.activeNavLink}` : className}
      >
        {children}
      </NavLink>
    );
  };
  return (
    <header className={css.container}>
      <nav className={css.navigation}>
        <CustomNavLink to="/" className={css.navLink}>
          Home
        </CustomNavLink>
        {!isAuth && (
          <CustomNavLink to="loging" className={css.navLink}>
            Loging
          </CustomNavLink>
        )}
        {!isAuth && (
          <CustomNavLink to="/register" className={css.navLink}>
            Register
          </CustomNavLink>
        )}
        <CustomNavLink to="/contactapp" className={css.navLink}>
          Application
        </CustomNavLink>
      </nav>
      <div className={css.userMenu}>{isAuth && <UserMenu />}</div>
    </header>
  );
};

export default Navigation;
