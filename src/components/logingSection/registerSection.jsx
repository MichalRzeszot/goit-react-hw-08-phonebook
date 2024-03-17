import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/operaction';
import styles from './registerSection.module.css';

const RegistrationSection = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const registerData = {
      name: username,
      email: email,
      password: password,
    };
    dispatch(userRegister(registerData));
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registration</h2>
      <form onSubmit={handleSubmit}>
        <p className={styles.formLabel}>Username</p>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <p className={styles.formLabel}>Email</p>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationSection;
