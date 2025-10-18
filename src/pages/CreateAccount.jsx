import React from 'react';
import './CreateAccount.css';
import { Link } from 'react-router-dom';

const CreateAccount = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data); 
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

  return (
    <div className="signup-container">
      <div className="tabs">
        <Link to="/signUp" className="inactive">Вход</Link>
        <Link className="active">Создать аккаунт</Link>
      </div>

      <h2 className="headline">НОВЫЙ В VOLUMENZEIT?</h2>
      <p className="subheadline">Создайте новый аккаунт</p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="Имя" required />
        <input type="text" name="lastName" placeholder="Фамилия" required />

        <label className="dob-label">Дата рождения</label>
        <div className="dob">
          <select name="birthMonth" required>
            <option value="">Месяц</option>
            <option value="January">Январь</option>
            <option value="February">Февраль</option>
            <option value="March">Март</option>
            <option value="April">Апрель</option>
            <option value="May">Май</option>
            <option value="June">Июнь</option>
            <option value="July">Июль</option>
            <option value="August">Август</option>
            <option value="September">Сентябрь</option>
            <option value="October">Октябрь</option>
            <option value="November">Ноябрь</option>
            <option value="December">Декабрь</option>
          </select>

          <select name="birthDay" required>
            <option value="">День</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>

          <select name="birthYear" required>
            <option value="">Год</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <input type="tel" name="phone" placeholder="Телефон" required />

        <div className="double">
          <input type="email" name="email" placeholder="Эл. почта" required />
          <input type="email" name="confirmEmail" placeholder="Подтвердите эл. почту" required />
        </div>

        <div className="double">
          <input type="password" name="password" placeholder="Пароль" required />
          <input type="password" name="confirmPassword" placeholder="Подтвердите пароль" required />
        </div>

        <label className="checkbox-label">
          <input type="checkbox" name="agree" required />
          Подписаться на новости и акции
        </label>

        <button type="submit" className="create-btn">Создать аккаунт</button>
      </form>
    </div>
  );
};

export default CreateAccount;
