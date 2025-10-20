import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import qqq from "../../assets/svg/qqq.svg";
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">
          <img src={qqq} alt="Логотип" />
          <p>Элегантность. Технологии. Уникальный стиль.</p>
        </div>

        <div className="footer-links">
          <h4>Меню</h4>
          <Link to="/">Главная</Link>
          <Link to="/AccessoriesPage">Аксессуары</Link>
          <Link to="/JewelryPage">Украшения</Link>
          <Link to="/BrandPage">Бренды</Link>
          <Link to="/DesingWatchPage">Создать свои часы</Link>
        </div>

        <div className="footer-contacts">
          <h4>Контакты</h4>
          <p>Телефон: +996 (770) 30 84 84</p>
          <p>Email: azamatkyzy@gmail.com</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/kanibek0va_/" target="" rel=""><FaInstagram /></a>
            <a href="https://facebook.com" target="" rel=""><FaFacebook /></a>
            <a href="https://pinterest.com" target="" rel=""><FaPinterest /></a>
            <a href="https://twitter.com" target="_blnk" rel=""><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Volumenzeit — Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
