import React, { useState } from 'react';
import "../main.css";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

const Tikkets = () => {
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [businessClassChecked, setBusinessClassChecked] = useState(false);
  const [economyClassChecked, setEconomyClassChecked] = useState(false);

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
            <motion.p
                initial={{ opacity: 0, y: -150 }}
                animate={{ opacity: 1, y: 0 }}
            >Marmara Travel</motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
            >АВИА БИЛЕТЫ</motion.h1>
            <div className="btns_homePage">
              <a href="https://t.me/voris01"><motion.button
               initial={{ opacity: 0, x: -150 }} 
               animate={{ opacity: 1, x: 0 }}
              >Написать в ТГ</motion.button></a>
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
          <div className="input_none">
            <label htmlFor="num">Количество человек</label>
            <input name='num' type="number"/>
          </div>
          <div className="inp_tickets">
            <p>Багаж?</p>
            <label>
              Багаж
              <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            </label>
          </div>
          <div className="inp_tickets">
            <p>Класс</p>
            <label>
              Бизнес класс
              <input type="checkbox" checked={businessClassChecked} onChange={() => setBusinessClassChecked(!businessClassChecked)} />
            </label>
            <label>
              Эконом класс
              <input type="checkbox" checked={economyClassChecked} onChange={() => setEconomyClassChecked(!economyClassChecked)} />
            </label>
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
