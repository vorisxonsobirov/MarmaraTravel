import React, { useState } from 'react';
import "../main.css";
import { Link } from 'react-router-dom';

const Tikkets = () => {
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleIncrement = (type) => {
    if (type === 'adults') {
      setAdultsCount(adultsCount + 1);
    } else if (type === 'children') {
      setChildrenCount(childrenCount + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === 'adults' && adultsCount > 1) {
      setAdultsCount(adultsCount - 1);
    } else if (type === 'children' && childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  return (
    <>
      <div className="container">
        <div className="plane">
          <div className="black_bg">
            <p>МАРМАРА ТРЭВЕЛ</p>
            <h1>АВИА БИЛЕТЫ</h1>
            <div className="btns_homePage">
              <a href="https://t.me/voris01"><button>Написать в ТГ</button></a>
            </div>
          </div>
        </div>
        <div className="holder_tickets">
          <h1>Забронировать АВИАбилет</h1>
          <div className="inp_tickets">
            <p>Город вылета</p>
            <input type="text" />
          </div>
          <div className="inp_tickets">
            <p>Куда летим?</p>
            <input type="text" />
          </div>
          <div className="w200">
            <p>Количество человек</p>
            <div>
              <button className='plus' onClick={() => handleDecrement('adults')}>-</button>
              <input type="number" value={adultsCount} onChange={(e) => setAdultsCount(e.target.value)} />
              <button className='minus' onClick={() => handleIncrement('adults')}>+</button>
            </div>
          </div>
          <div className="w200">
            <p>Дети до 12 лет</p>
            <div>
              <button className='plus' onClick={() => handleDecrement('children')}>-</button>
              <input type="number" value={childrenCount} onChange={(e) => setChildrenCount(e.target.value)} />
              <button className='minus' onClick={() => handleIncrement('children')}>+</button>
            </div>
          </div>
          <div className="inp_tickets">
            <p>Багаж?</p>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
          </div>
          {/* Остальные поля инпутов... */}
          <div className="inp_tickets">
            <p>Класс</p>
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <div className="inp_tickets">
            <p>Ваше имя</p>
            <input type="text" />
          </div>
          <div className="inp_tickets">
            <p>Ваш номер</p>
            <input type="number" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tikkets;
