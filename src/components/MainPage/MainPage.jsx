import React, { useState, useEffect } from 'react';
import './MainPage.css';

const MainPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://68bac5fd84055bce63f01e7e.mockapi.io/20113010/aimira');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <div className="main-page">
      <h1 className="page-title"> Наши товары </h1>
      <div className="carousel">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <div className="image-wrapper">
              <img
                src={item.image || 'https://via.placeholder.com/300x250?text=Нет+фото'}
                alt={item.name}
                className="item-image"
              />
            </div>
            <div className="item-info">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-description">{item.description}</p>
              <div className="item-price">{item.price} сом</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
