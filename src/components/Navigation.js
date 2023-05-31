import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../actions/userActions';
import './Navigation.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const users = useSelector(state => state.users);
  const [errorMessage, setErrorMessage] = useState('');

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newUserLogin, setNewUserLogin] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser({ login, password }));
    setLogin('');
    setPassword('');
  };

  const handleRegister = () => {
    if (newUserPassword !== confirmPassword) {
      setErrorMessage('Пароли не совпадают');
      return;
    }
  

    const userExists = users.some(user => user.login === newUserLogin);
  if (userExists) {
    setErrorMessage('Пользователь с таким логином уже существует');
    return;
  }


    const newUser = {
      id: Date.now(),
      name: newUserName,
      login: newUserLogin,
      password: newUserPassword
    };
    dispatch(registerUser(newUser));
    setNewUserName('');
    setNewUserLogin('');
    setNewUserPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  return (
    <div className="navigation-container">
      {errorMessage && (
        <div className="error-message">
            <p>Пользователь с таким логином уже существует</p>
            <button onClick={() => setErrorMessage('')}>&times;</button>
        </div>
        )}
      {currentUser ? (
        <p className="user-greeting">Вы вошли как {currentUser.name}</p>
      ) : (
        <div className="auth-container">
          <div className="login-container">
            <h3>Вход</h3>
            <input
              type="text"
              placeholder="Логин"
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Войти</button>
          </div>
          <div className="register-container">
            <h3>Регистрация</h3>
            <input
              type="text"
              placeholder="Имя"
              value={newUserName}
              onChange={e => setNewUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Логин"
              value={newUserLogin}
              onChange={e => setNewUserLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={newUserPassword}
              onChange={e => setNewUserPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Подтвердите пароль"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Зарегистрироваться</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
