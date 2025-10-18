import React, { useState } from 'react';
import "./SingUp.css"
import { Link } from 'react-router-dom';
import www from "../assets/svg/www.svg";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='signUp-container'>
      <div className="signUp-links">
        <Link to="/signUp" className="active">Вход</Link>
        <Link to="/CreateAccount">Создать аккаунт</Link>
      </div>

      <img src={www} alt="logo" className="signUp-logo" />

      <p className="signUp-text">
        Войдите в существующий аккаунт, чтобы получать бонусы, проверять заказы и многое другое
      </p>

      <div className="signUp-inputs">
        <input
          type="email"
          placeholder="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button className="signUp-btn">Войти</button>

      <h2 className="signUp-fast">Быстрый вход</h2>

      <div className="social-buttons">
        <button className="fb-btn">Войти через Facebook</button>
        <button className="google-btn">Войти через Google</button>
      </div>
    </div>
  );
};

export default SignUp;
