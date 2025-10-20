import React from 'react';
import xxx from "../../assets/svg/xxx.svg";
import "./Banner.css";

const Banner = () => {
  const watches = [
    { name: "Volumenzeit S 2", price: "$17,588", img: "https://i.pinimg.com/1200x/dd/85/57/dd855733712c79cfeabf8cf9299cd117.jpg" },
    { name: "Volumenzeit S 3", price: "$18,200", img: "https://i.pinimg.com/1200x/dd/85/57/dd855733712c79cfeabf8cf9299cd117.jpg" },
    { name: "Volumenzeit S 4", price: "$16,900", img: "https://i.pinimg.com/1200x/dd/85/57/dd855733712c79cfeabf8cf9299cd117.jpg" },
    { name: "Volumenzeit S 5", price: "$17,000", img: "https://i.pinimg.com/1200x/dd/85/57/dd855733712c79cfeabf8cf9299cd117.jpg" },
    { name: "Volumenzeit S 6", price: "$17,588", img: "https://i.pinimg.com/1200x/dd/85/57/dd855733712c79cfeabf8cf9299cd117.jpg" },
  ];

  return (
    <div>
      <div className='Banner-1'>
        <img src={xxx} alt="Icon" />
        <p>
          Volumenzeit дает вам в сумме 48 комбинаций стиля с 4 типами циферблатов, 4 цветами циферблата,
          3 цветами корпуса, множеством стильных комбинаций ремешков и опциями индивидуальной гравировки.
        </p>
      </div>

      <div className='Banner-2'>
        {watches.map((watch, index) => (
          <div key={index} className='Banner-2-1'>
            <img src={watch.img} alt={watch.name} />
            <p>{watch.name}</p>
            <h1>{watch.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
