import { useSelector } from 'react-redux';
import { selectAuth, selectRefresh, selectUser } from '../redux/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectRefresh);
  return { isLoggedIn, user, isRefreshing };
};
export default useAuth;
