import React from 'react';
import "./Card4.css";
import { Link } from 'react-router-dom';

function Card4() {
  return (
    <section className="Card4">
      <div className="Card4-content">
        <h1>Искусство и технологии в одном мгновении</h1>
        <p>
          Мы создаём не просто часы — мы создаём эмоции.  
          Каждая модель воплощает изящество, гармонию и инновации,  
          объединяя современные технологии с утончённым дизайном.
        </p>
        <p>
          Почувствуйте лёгкость, вдохновение и свободу выражения.  
          Время теперь принадлежит вам.
        </p>
        <div className="Card4-buttons">
          <Link to="/DesingWatchPage" className="btn-main">Создать свои часы</Link>
          <button className="btn-second">Подробнее</button>
        </div>
      </div>
    </section>
  );
}

export default Card4;
