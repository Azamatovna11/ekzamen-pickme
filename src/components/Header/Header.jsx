import React from 'react';
import qqq from "../../assets/svg/qqq.svg";
import { Link } from 'react-router-dom';
import "./Header.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          <img src={qqq} alt="Логотип" />
        </div>

        <nav className='header-nav'>
          <Link to="/">Главная</Link>
          <Link to="AccessoriesPage">Аксессуары</Link>
          <Link to="JewelryPage">Украшения</Link>
          <Link to="BrandPage">Бренды</Link>
          <Link to="WatchesPage">Часы</Link>
          <Link className='create-watch' to="/DesingWatchPage">Создать свои часы</Link>
        </nav>

        <div className='header-icons'>
          <Link to="ProfilePage" className='icon'><FaUserAlt /></Link>
          <Link to="CartPage" className='icon'><FaShoppingCart /></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
