import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from 'hooks/useAuth'
import { removeUser } from 'store/slices/userSlice'
import styles from './pages.module.scss'

const HomePage = () => {
  const dispatch = useDispatch();

  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div className={styles.container}>
      <h1>Hello new User</h1>
      <button onClick={() => dispatch(removeUser())}>Log out</button>
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
};

export default HomePage;
