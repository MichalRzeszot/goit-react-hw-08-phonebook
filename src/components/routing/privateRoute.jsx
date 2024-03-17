import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function PrivateRoute({ Component, redirecTo }) {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? Component : <Navigate to={redirecTo} />;
}
