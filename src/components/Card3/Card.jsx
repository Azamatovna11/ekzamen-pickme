import React from 'react';
import "./Card3.css";
import lll from "../../assets/svg/lll.svg";
import zzz from "../../assets/svg/zzz.svg";
import { Link } from "react-router-dom";

function Card() {
    return (
        <div className='Card3-1'>
            <div className='Card3-text'>
                <img src={lll} alt="Иконка технологии" />
                <p>
                    Мы вложили 6 лет нашей жизни в создание новой технологии производства 3D циферблатов с качеством, как у швейцарских часов. Включите воображение на максимум!
                </p>
                <h6>
                    Мы любим нестандартные дизайны и верим, что есть много людей, которые думают так же.
                </h6>
                <Link to="/DesingWatchPage">Создать свои часы</Link>
            </div>
            <div className='Card3-img'>
                <img className='zzzzz' src="https://i.pinimg.com/736x/84/91/6f/84916fbb8180e227349b8953fc556aa2.jpg" alt="" />
            </div>
        </div>
    )
}

export default Card;
