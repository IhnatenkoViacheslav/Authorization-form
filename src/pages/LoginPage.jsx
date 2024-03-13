import { Login } from "components/Login";
import { Link } from "react-router-dom";
import styles from './pages.module.scss'

const LoginPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>Sign in</h1>
          <Login/>
        <p className={styles.register}>
          Or <Link to="/register">Create new account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
