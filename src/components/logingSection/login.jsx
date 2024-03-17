import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogining } from '../../redux/operaction';
import styles from './login.module.css';

const LoginSection = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };
    dispatch(userLogining(loginData));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit}>
        <p className={styles.formLabel}>Login</p>
        <input
          className={styles.input}
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p className={styles.formLabel}>Password</p>
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className={styles.submitButton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginSection;
