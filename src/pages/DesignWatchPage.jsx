  import React, { useState } from 'react';
  import './DesignWatchPage.css';

  const DesignWatchPage = ({ setCurrentPage }) => {
    const [selectedOptions, setSelectedOptions] = useState({
      caseMaterial: '',
      bandType: '',
      dialColor: '',
      handsStyle: '',
      engraving: ''
    });

    const handleOptionSelect = (category, value) => {
      setSelectedOptions(prev => ({ ...prev, [category]: value }));
    };

    const handleEngravingChange = (e) => {
      setSelectedOptions(prev => ({ ...prev, engraving: e.target.value }));
    };

    const handleAddToCart = () => {
      alert("Ваши часы были добавлены в корзину!");
      if (setCurrentPage) setCurrentPage('cart');
    };

    const handleSaveDesign = () => {
      alert("Ваш дизайн был сохранен! Вы можете вернуться к нему позже в вашем профиле.");
    };

    const handleViewAllOptions = () => {
      alert("Открытие полной палитры цветов циферблата");
    };

    return (
      <div className="design-page">
        <h1 className="page-title">Создать свои часы</h1>
        <p className="page-description">
          Создайте часы, которые отражают ваш уникальный стиль и индивидуальность, с помощью наших опций настройки.
        </p>

        <div className="content-grid">
          <div>
            <h2 className="section-title">Опции настройки</h2>

            <div className="option-card">
              <h3 className="option-heading">Материал корпуса</h3>
              <div className="button-group">
                {['Нержавеющая сталь', 'Титан', 'Керамика', 'Розовое золото'].map(item => (
                  <button
                    key={item}
                    className={`option-button ${selectedOptions.caseMaterial === item ? 'active' : ''}`}
                    onClick={() => handleOptionSelect('caseMaterial', item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-card">
              <h3 className="option-heading">Тип ремешка</h3>
              <div className="button-group">
                {['Кожа', 'Металл', 'Резина', 'NATO'].map(item => (
                  <button
                    key={item}
                    className={`option-button ${selectedOptions.bandType === item ? 'active' : ''}`}
                    onClick={() => handleOptionSelect('bandType', item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-card">
              <h3 className="option-heading">Цвет циферблата</h3>
              <div className="color-options">
                {[
                  { name: 'Черный', color: 'black' },
                  { name: 'Белый', color: 'white' },
                  { name: 'Синий', color: '#1e3a8a' },
                  { name: 'Коричневый', color: '#92400e' },
                  { name: 'Серый', color: 'gray' },
                  { name: 'Зеленый', color: '#065f46' }
                ].map(item => (
                  <button
                    key={item.name}
                    className={`color-circle ${selectedOptions.dialColor === item.name ? 'selected' : ''}`}
                    style={{ backgroundColor: item.color }}
                    onClick={() => handleOptionSelect('dialColor', item.name)}
                  />
                ))}
              </div>
              <button className="view-all" onClick={handleViewAllOptions}>
                Посмотреть все 20+ вариантов
              </button>
            </div>

            <div className="option-card">
              <h3 className="option-heading">Стиль стрелок</h3>
              <div className="button-group">
                {['Классический', 'Современный', 'Спортивный', 'Скелетон'].map(item => (
                  <button
                    key={item}
                    className={`option-button ${selectedOptions.handsStyle === item ? 'active' : ''}`}
                    onClick={() => handleOptionSelect('handsStyle', item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-card">
              <h3 className="option-heading">Гравировка</h3>
              <input
                type="text"
                placeholder="Введите свои инициалы или сообщение"
                className="engraving-input"
                value={selectedOptions.engraving}
                onChange={handleEngravingChange}
              />
              <p className="engraving-hint">Максимум 15 символов</p>
            </div>
          </div>

          <div>
            <h2 className="section-title">Предварительный просмотр</h2>
            <div className="preview-box">
              <div className="preview-inner">
                <div className="preview-watch"></div>
                <p className="preview-text">Предварительный просмотр ваших часов</p>
                <p className="preview-subtext">Выберите опции, чтобы увидеть изменения</p>
              </div>
            </div>

            <div className="summary-box">
              <div className="summary-row">
                <span>Базовая цена:</span>
                <span>5 499 сом</span>
              </div>
              <div className="summary-row">
                <span>Настройки:</span>
                <span>0 сом</span>
              </div>
              <div className="summary-total">
                <span>Итого:</span>
                <span>5 499 сом</span>
              </div>
              <button className="add-to-cart" onClick={handleAddToCart}>
                В корзину
              </button>
              <button className="save-design" onClick={handleSaveDesign}>
                Сохранить дизайн на потом
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default DesignWatchPage;
