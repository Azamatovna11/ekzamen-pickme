  import React from 'react';
  import './WatchesPage.css';
  import { Link } from 'react-router-dom';

  const WatchesPage = ({ setCurrentPage }) => {
    const handleViewDetails = (watchName) => {
      console.log(`Просмотр деталей для: ${watchName}`);
      alert(`Переход к деталям ${watchName}`);
    };

    const handleDesignWatch = () => {
      console.log("Кнопка 'Создать часы' нажата");
      if (setCurrentPage) setCurrentPage('design');
    };

    return (
      <div className="watches-page">
        <h1 className="page-title">Коллекция часов</h1>
        <p className="page-subtitle">
          Исследуйте нашу премиальную коллекцию объемных настольных часов, каждые из которых изготовлены с точностью и созданы, чтобы произвести впечатление.
        </p>

        <div className="watches-grid">
          <div className="watch-card">
            <div className="watch-image"></div>
            <div className="watch-info">
              <div className="watch-header">
                <div>
                  <h2>Классическая серия</h2>
                  <p>Вневременной дизайн с современной точностью</p>
                </div>
                <span className="tag new">Новинка</span>
              </div>
              <div className="watch-footer">
                <span className="price">5 499 сом</span>
                <button onClick={() => handleViewDetails('Классическая серия')}>Подробнее</button>
              </div>
            </div>
          </div>

          <div className="watch-card">
            <div className="watch-image"></div>
            <div className="watch-info">
              <div className="watch-header">
                <div>
                  <h2>Спортивная серия</h2>
                  <p>Создано для активного образа жизни</p>
                </div>
                <span className="tag popular">Популярное</span>
              </div>
              <div className="watch-footer">
                <span className="price">4 399 сом</span>
                <button onClick={() => handleViewDetails('Спортивная серия')}>Подробнее</button>
              </div>
            </div>
          </div>

          <div className="watch-card">
            <div className="watch-image"></div>
            <div className="watch-info">
              <div className="watch-header">
                <div>
                  <h2>Люкс серия</h2>
                  <p>Премиальные материалы и мастерство</p>
                </div>
                <span className="tag limited">Ограниченное</span>
              </div>
              <div className="watch-footer">
                <span className="price">9 899 сом</span>
                <button onClick={() => handleViewDetails('Люкс серия')}>Подробнее</button>
              </div>
            </div>
          </div>
        </div>

        <div className="design-section">
          <h2>Настройте свои часы</h2>
          <p>
            Создайте часы, которые идеально соответствуют вашему стилю, с помощью наших опций настройки.
          </p>
          <Link to="/DesingWatchPage" onClick={handleDesignWatch}>Создать часы</Link>
        </div>
      </div>
    );
  };

  export default WatchesPage;
