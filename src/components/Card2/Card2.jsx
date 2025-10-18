import React from 'react';
import "./Card2.css";
import fff from "../../assets/svg/fff.svg";
import ggg from "../../assets/svg/ggg.svg";
import { Link } from 'react-router-dom';

function Card2() {
  return (
    <div className='Card2-1'>
      <img src="https://i.pinimg.com/1200x/dd/85/57/dd855733712c79cfeabf8cf9299cd117.jpg" alt="" className="Card2-icon" />
      <div className='Card2-2-1'>
        <img src={ggg} alt="" className="Card2-main-img" />
      </div>
      <div className='Card2-button'>
        <Link to="/DesingWatchPage">Создать свои часы</Link>
      </div>
    </div>
  )
}9

export default Card2;
