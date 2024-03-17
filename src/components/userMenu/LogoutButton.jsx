import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/operaction';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };
  return <button onClick={handleLogout}>Logout</button>;
}
