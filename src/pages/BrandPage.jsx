import React from 'react';
import './BrandPage.css';

const BrandPage = ({ setCurrentPage }) => {
  const handleExploreCollection = () => {
    if (setCurrentPage) setCurrentPage('watches');
  };

  return (
    <div className="brand-page">
      <h1 className="brand-title">О VOLUMENZEIT</h1>

      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-text">
            <h2>Создание вневременной элегантности</h2>
            <p>С 2010 года переосмысливаем эстетику настольных часов</p>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <h2>Наше наследие</h2>
        <div className="brand-flex">
          <div className="brand-image"></div>
          <div className="brand-description">
            <p>
              Основанная в 2010 году, VOLUMENZEIT находится на переднем крае инновационного дизайна часов,
              сочетая традиционное мастерство с передовыми технологиями для создания часов,
              которые одновременно функциональны и художественны. Наш путь начался с простой идеи —
              создать часы, которые преодолевают традиционные границы точного времени.
            </p>
            <p>
              Сегодня мы продолжаем продвигать конверт, используя наш фирменный объемный дизайн,
              который превращает каждые часы в скульптурное произведение искусства.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <h2>Мастерство</h2>
        <div className="brand-flex reverse">
          <div className="brand-image"></div>
          <div className="brand-description">
            <p>
              Каждые часы VOLUMENZEIT изготавливаются вручную мастерами-часовщиками, которые понимают
              сложный баланс между точной инженерией и эстетической красотой. Наши мастера
              тратят бесчисленные часы на совершенствование каждой детали.
            </p>
            <p>
              Мы используем только лучшие материалы — сталь медицинского класса, сапфировое стекло и
              премиальную кожу, обеспечивая высокое качество и долговечность.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <h2>Инновации</h2>
        <div className="innovation-box">
          <p>
            Наш подход к объемному дизайну создает часы с уникальными трехмерными элементами,
            выделяющими их среди традиционных. Этот подход создает визуальную глубину и текстуру,
            которая меняется в течение дня по мере изменения света.
          </p>
          <p>
            Мы инвестируем в исследования и разработки, внедряя новые материалы и технологии,
            сохраняя при этом приверженность принципам вневременного дизайна.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <h3>Дизайн</h3>
              <p>Инновационный эстетический дизайн, удостоенный наград</p>
            </div>
            <div className="feature-card">
              <h3>Точность</h3>
              <p>Технология швейцарского производства</p>
            </div>
            <div className="feature-card">
              <h3>Устойчивость</h3>
              <p>Экологически чистые производственные процессы</p>
            </div>
          </div>

          <div className="explore-container">
            <button className="explore-btn" onClick={handleExploreCollection}>
              Исследовать коллекцию
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;
