import { SignUp } from "components/SignUp";
import { Link } from "react-router-dom";

import styles from './pages.module.scss'

const RegisterPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>Sign up</h1>
          <SignUp/>
        <p className={styles.register}>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
