import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JewelryPage.css";

const JewelryPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://68f5da746b852b1d6f153bae.mockapi.io/azamatkyzy/pickme"
        );
        setItems(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="jewelry-container">
      <h1>Коллекция ювелирных изделий</h1>
      <div className="jewelry-grid">
        {items.map((item) => (
          <div key={item.id} className="jewelry-card">
            <img src={item.image} alt={item.name} className="jewelry-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p><strong>Цена:</strong> {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryPage;
