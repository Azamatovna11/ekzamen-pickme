import React from 'react';
import { Link } from 'react-router-dom';
import "./Card5.css";

function Card5() {
  return (
    <div className="subscribe-section container">
      <h1 className="subscribe-title">
        Подпишитесь на новости Volumenzeit
      </h1>
      <p className="subscribe-text">
        Узнавайте первыми о новых коллекциях, эксклюзивных предложениях и розыгрышах.
      </p>
      <div className="subscribe-inputs">
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Ваш email" />
      </div>
      <Link to="/signUp" className="subscribe-btn">Создать аккаунт</Link>
    </div>
  );
}

export default Card5;
