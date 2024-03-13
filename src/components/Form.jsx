import { useState } from "react";
import { userValidation } from "Validations/UserValidation";

import styles from './Form.module.scss'


const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input 
          type="email" 
          isUppercase
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="E-mail" />
        <input 
          type="password" 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          placeholder="Password"/>
  
          <button onClick={() => handleClick(email, pass)}>
              {title}
          </button>
      </div>
    </div>
  )
};

export default Form;
