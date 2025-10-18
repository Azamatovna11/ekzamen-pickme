import React from "react";
import "./WatchInfoPage.css";

const WatchInfoPage = ({ setCurrentPage }) => {
  const handleAddToCart = () => {
    alert("Часы добавлены в корзину!");
    if (setCurrentPage) setCurrentPage("cart");
  };

  return (
    <div className="watch-info-container">
      <div className="watch-info-content">
        <div className="watch-image-box">
          <img
            src="https://i.pinimg.com/736x/26/5a/18/265a18b77e01669d71dd5936cc2f5702.jpg"
            alt="Классические объемные часы"
            className="watch-image"
          />
        </div>

        <div className="watch-details">
          <h1 className="watch-title">Классические объемные часы</h1>
          <p className="watch-description">
            Элегантные часы с корпусом из нержавеющей стали и черным
            циферблатом. Эти часы сочетают в себе минимализм, прочность и
            современный дизайн. Оснащены надежным кварцевым механизмом для
            максимальной точности. Водонепроницаемость до 50 м.
          </p>

          <ul className="watch-specs">
            <li><strong>Механизм:</strong> Японский кварцевый Miyota</li>
            <li><strong>Корпус:</strong> Нержавеющая сталь 316L</li>
            <li><strong>Диаметр:</strong> 42 мм</li>
            <li><strong>Стекло:</strong> Сапфировое с антибликовым покрытием</li>
            <li><strong>Водозащита:</strong> 5 ATM</li>
            <li><strong>Ремешок:</strong> Натуральная кожа, черная</li>
          </ul>

          <div className="watch-purchase">
            <span className="price">5 499 сом</span>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>

      <div className="watch-extra-section">
        <h2>Почему выбирают наши часы?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Точность</h3>
            <p>Надежные кварцевые механизмы японского производства.</p>
          </div>
          <div className="benefit-card">
            <h3> Качество</h3>
            <p>Только премиальные материалы: сталь, сапфир и натуральная кожа.</p>
          </div>
          <div className="benefit-card">
            <h3> Идеальный подарок</h3>
            <p>Поставляется в стильной подарочной упаковке.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchInfoPage;
