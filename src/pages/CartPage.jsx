import React, { useState } from 'react';
import './CartPage.css';

const CartPage = ({ setCurrentPage }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Классические объемные часы', description: 'Корпус из нержавеющей стали, черный циферблат', price: 5499, quantity: 1 },
    { id: 2, name: 'Ремешок для часов из кожи', description: 'Коричневая премиальная кожа', price: 989, quantity: 2 },
    { id: 3, name: 'Защита для часов', description: 'Прозрачная защита от царапин', price: 439, quantity: 1 },
    { id: 4, name: 'Услуга гравировки', description: 'Пользовательские инициалы', price: 549, quantity: 1 }
  ]);

  const formatPrice = num => num.toLocaleString('ru-RU');

  const changeQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    if (window.confirm('Удалить этот товар из корзины?')) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleContinueShopping = () => setCurrentPage?.('watches');

  const handleProceedToCheckout = () => alert('Переход к оформлению заказа!');

  const handleApplyDiscount = () => {
    const code = prompt('Введите ваш скидочный код:');
    if (code) alert(`Скидочный код "${code}" применен!`);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 329;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Ваша корзина</h1>
      <div className="cart-layout">
        <div className="cart-items">
          <div className="cart-header">
            <h2>Товары ({cartItems.length})</h2>
            <button className="link-button" onClick={handleContinueShopping}>
              Продолжить покупки
            </button>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image"></div>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{formatPrice(item.price)} сом</span>
              </div>
              <div className="quantity-controls">
                <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => changeQuantity(item.id, +1)}>+</button>
              </div>
              <button className="remove-button" onClick={() => removeItem(item.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Сводка заказа</h2>
          <div className="summary-row"><span>Подытог</span><span>{formatPrice(subtotal)} сом</span></div>
          <div className="summary-row"><span>Доставка</span><span>{formatPrice(shipping)} сом</span></div>
          <div className="summary-row"><span>Налог</span><span>{formatPrice(tax)} сом</span></div>
          <div className="summary-total"><span>Итого</span><strong>{formatPrice(total)} сом</strong></div>

          <button className="checkout-button" onClick={handleProceedToCheckout}>Перейти к оформлению заказа</button>
          <div className="divider"><span>ИЛИ</span></div>
          <button className="discount-button" onClick={handleApplyDiscount}>Применить скидочный код</button>

          <div className="free-shipping">
            <h3>Бесплатная доставка</h3>
            <p>
              Добавьте ещё {(5500 - subtotal > 0 ? formatPrice(5500 - subtotal) : 0)} сом,
              чтобы получить бесплатную доставку.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
