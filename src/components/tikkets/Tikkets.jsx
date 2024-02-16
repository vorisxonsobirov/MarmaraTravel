import React, { useState } from 'react';
import { motion } from "framer-motion"

const Tikkets = () => {
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [businessClassChecked, setBusinessClassChecked] = useState(false);
  const [economyClassChecked, setEconomyClassChecked] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const botToken = '6853416689:AAHZYiEPCCiSPHFKV2D09NK0Dfp6WnIw054';
  const chatId = '1723957261';

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

  const sendDataToTelegram = () => {
    const message = `
      Город вылета: ${departureCity}
      Город прилёта: ${destinationCity}
      Количество взрослых: ${adultsCount}
      Количество детей: ${childrenCount}
      Багаж: ${isChecked ? 'Да' : 'Нет'}
      Бизнес класс: ${businessClassChecked ? 'Да' : 'Нет'}
      Эконом класс: ${economyClassChecked ? 'Да' : 'Нет'}
      Имя: ${name}
      Номер: ${phoneNumber}
    `;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`, {
      method: 'GET',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Сообщение успешно отправлено, сбросить состояния и показать благодарность
      setMessageSent(true);
      setAdultsCount(1);
      setChildrenCount(0);
      setIsChecked(false);
      setBusinessClassChecked(false);
      setEconomyClassChecked(false);
      setName('');
      setPhoneNumber('');
      setDepartureCity('');
      setDestinationCity('');
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
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
               onClick={sendDataToTelegram}
              >Написать в ТГ</motion.button></a>
            </div>
          </div>
        </div>
        <div className="holder_tickets">
          <h1>Забронировать АВИАбилет</h1>
          <div className="inp_tickets">
            <p>Город вылета</p>
            <input type="text" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />
          </div>
          <div className="inp_tickets">
            <p>Город прилёта</p>
            <input type="text" value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)} />
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
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="inp_tickets">
            <p>Ваш номер</p>
            <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          {messageSent && (
            <div className="inp_tickets">
              <p>Спасибо за выбор! Мы всегда рады вам. Скоро с вами свяжемся.</p>
            </div>
          )}
          <div className="inp_tickets">
            <button onClick={sendDataToTelegram}>Отправить</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tikkets;
