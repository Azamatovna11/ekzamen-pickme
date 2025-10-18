import React from "react";
import "./JewelryPage.css";

const JewelryPage = ({ setCurrentPage }) => {
  const handleViewDetails = (itemName) => {
    alert(`Переход к деталям ${itemName}`);
  };

  const handleScheduleConsultation = () => {
    alert("Вы записаны на консультацию! Наш ювелир свяжется с вами для уточнения деталей.");
  };

  return (
    <div className="jewelry-container">
      <h1 className="jewelry-title">Коллекция ювелирных изделий</h1>
      <p className="jewelry-subtitle">
        Элегантные ювелирные изделия, созданные для дополнения вашего стиля и
        празднования особых моментов в жизни.
      </p>

      <div className="jewelry-grid">
        {[
          {
            name: "Подвеска с бриллиантами",
            description:
              "Изысканная подвеска из белого золота 18 карат с сертифицированными бриллиантами",
            price: "14 299 сом",
          },
          {
            name: "Браслет-кагат",
            description:
              "Браслет-кагат из стерлингового серебра ручной работы с уникальным объемным дизайном",
            price: "4 949 сом",
          },
          {
            name: "Серьги с жемчугом",
            description:
              "Серьги с пресноводным жемчугом в изысканных серебряных оправах",
            price: "3 629 сом",
          },
          {
            name: "Цепочка",
            description:
              "Цепочка из розового золота 18 карат с фирменной застежкой VOLUMENZEIT",
            price: "6 599 сом",
          },
          {
            name: "Набор браслетов",
            description:
              "Набор из трех взаимосвязанных браслетов из полированного стерлингового серебра",
            price: "3 079 сом",
          },
          {
            name: "Кольцо с драгоценным камнем",
            description:
              "Кольцо ручной работы с этически добытыми драгоценными камнями",
            price: "8 249 сом",
          },
        ].map((item, index) => (
          <div className="jewelry-card" key={index}>
            <div className="jewelry-image-placeholder" />
            <div className="jewelry-card-content">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div className="jewelry-card-footer">
                <span>{item.price}</span>
                <button
                  className="details-button"
                  onClick={() => handleViewDetails(item.name)}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-design-section">
        <h2>Индивидуальный дизайн ювелирных изделий</h2>
        <p>
          Работайте с нашими мастерами, чтобы создать уникальное изделие,
          отражающее ваш стиль.
        </p>
        <button
          className="consult-button"
          onClick={handleScheduleConsultation}
        >
          Запланировать консультацию
        </button>
      </div>
    </div>
  );
};

export default JewelryPage;
