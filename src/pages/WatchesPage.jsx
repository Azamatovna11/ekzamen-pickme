import React from 'react';
import './WatchesPage.css';
import { Link } from 'react-router-dom';

const WatchesPage = ({ setCurrentPage }) => {
  const handleViewDetails = (watchName) => {
    alert(`Переход к деталям ${watchName}`);
  };

  const handleDesignWatch = () => {
    if (setCurrentPage) setCurrentPage('design');
  };

  const watches = [
    {
      name: "Классическая серия",
      description: "Вневременной дизайн с современной точностью",
      price: "5 499 сом",
      tag: "Новинка",
      tagClass: "new",
      image: "https://i.pinimg.com/1200x/c1/c7/bd/c1c7bde14aed94c8bae14b966c4dc993.jpg",
    },
    {
      name: "Спортивная серия",
      description: "Создано для активного образа жизни",
      price: "4 399 сом",
      tag: "Популярное",
      tagClass: "popular",
      image: "https://i.pinimg.com/1200x/69/dd/73/69dd7329dc3808a2c6f16f3df63abe75.jpg",
    },
    {
      name: "Люкс серия",
      description: "Премиальные материалы и мастерство",
      price: "9 899 сом",
      tag: "Ограниченное",
      tagClass: "limited",
      image: "https://i.pinimg.com/1200x/cb/34/28/cb3428870ea7cdaa803036f1eb397aff.jpg",
    },
  ];

  return (
    <div className="watches-page">
      <h1 className="page-title">Коллекция часов</h1>
      <p className="page-subtitle">
        Исследуйте нашу премиальную коллекцию объемных настольных часов, каждые из которых изготовлены с точностью и созданы, чтобы произвести впечатление.
      </p>

      <div className="watches-grid">
        {watches.map((watch, index) => (
          <div className="watch-card" key={index}>
            <div className="watch-image-wrapper">
              <img src={watch.image} alt={watch.name} className="watch-image" />
            </div>
            <div className="watch-info">
              <div className="watch-header">
                <div>
                  <h2>{watch.name}</h2>
                  <p>{watch.description}</p>
                </div>
                <span className={`tag ${watch.tagClass}`}>{watch.tag}</span>
              </div>
              <div className="watch-footer">
                <span className="price">{watch.price}</span>
                <button onClick={() => handleViewDetails(watch.name)}>Подробнее</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="design-section">
        <h2>Настройте свои часы</h2>
        <p>
          Создайте часы, которые идеально соответствуют вашему стилю, с помощью наших опций настройки.
        </p>
        <Link to="/DesignWatchPage" onClick={handleDesignWatch}>Создать часы</Link>
      </div>
    </div>
  );
};

export default WatchesPage;
