import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function ProtectedRoute({ Component, redirecTo }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? Component : <Navigate to={redirecTo} />;
}
