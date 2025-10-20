import React from 'react';
import './AccessoriesPage.css';

const AccessoriesPage = () => {
  const handleAddToCart = (accessoryName) => {
    alert(`${accessoryName} был добавлен в вашу корзину!`);
  };

  const handleContactExperts = () => {
    alert("Наш менеджер свяжется с вами в ближайшее время!");
  };

  const accessories = [
    {
      name: 'Ремешки из кожи',
      description: 'Ремешки из кожи ручной работы в различных цветах и текстурах, чтобы соответствовать вашему стилю.',
      price: '989 сом',
      image: 'https://i.pinimg.com/736x/f4/d5/1d/f4d51dd97f4408fd94aa82b8815d02fb.jpg'
    },
    {
      name: 'Металлические браслеты',
      description: 'Элегантные металлические браслеты с механизмами быстрого снятия для легкой замены.',
      price: '1 429 сом',
      image: 'https://i.pinimg.com/1200x/f9/f5/aa/f9f5aa2d81a634e73bbe453d6813ed9e.jpg'
    },
    {
      name: 'Чехлы для часов',
      description: 'Защитные чехлы, разработанные специально для часов VOLUMENZEIT, чтобы сохранить их в безопасности.',
      price: '439 сом',
      image: 'https://i.pinimg.com/1200x/6c/50/3f/6c503f9dc586b3b451f8ccf249b6cc04.jpg'
    },
    {
      name: 'Комплект для очистки',
      description: 'Средства и инструменты для поддержания безупречного внешнего вида ваших часов.',
      price: '279 сом',
      image: 'https://i.pinimg.com/736x/4e/a1/2f/4ea12f1a3ae9cd6422f7ccde0ca93f91.jpg'
    },
  ];

  return (
    <div className="accessories-page">
      <h1 className="page-title">Аксессуары</h1>
      <p className="page-description">
        Дополните свои часы нашими премиальными аксессуарами, созданными для улучшения вашего опыта с VOLUMENZEIT.
      </p>

      <div className="accessory-grid">
        {accessories.map((item) => (
          <div key={item.name} className="accessory-card">
            <div className="accessory-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="accessory-info">
              <h2 className="accessory-title">{item.name}</h2>
              <p className="accessory-description">{item.description}</p>
              <div className="accessory-footer">
                <span className="accessory-price">{item.price}</span>
                <button
                  className="add-button"
                  onClick={() => handleAddToCart(item.name)}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="help-section">
        <h2 className="help-title">Нужна помощь с выбором?</h2>
        <p className="help-text">
          Наши эксперты помогут вам найти идеальные аксессуары для ваших часов VOLUMENZEIT.
        </p>
        <button
          className="contact-button"
          onClick={handleContactExperts}
        >
          Связаться с экспертами
        </button>
      </div>
    </div>
  );
};

export default AccessoriesPage;
