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
    },
    {
      name: 'Металлические браслеты',
      description: 'Элегантные металлические браслеты с механизмами быстрого снятия для легкой замены.',
      price: '1 429 сом',
    },
    {
      name: 'Чехлы для часов',
      description: 'Защитные чехлы, разработанные специально для часов VOLUMENZEIT, чтобы сохранить их в безопасности.',
      price: '439 сом',
    },
    {
      name: 'Комплект для очистки',
      description: 'Средства и инструменты для поддержания безупречного внешнего вида ваших часов.',
      price: '279 сом',
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
              <div className="accessory-placeholder" />
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
