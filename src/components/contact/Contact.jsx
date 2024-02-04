import React, { useState } from 'react';
import '../main.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвратить стандартное поведение формы

    const botToken = '6853416689:AAHZYiEPCCiSPHFKV2D09NK0Dfp6WnIw054'; 
    const chatId = '1723957261';

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Email: ${email}\nName: ${name}\nPhone Number: ${phoneNumber}\nComment: ${comment}`,
        }),
      });

      // Очистить инпуты после отправки
      setEmail('');
      setName('');
      setPhoneNumber('');
      setComment('');
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="input_holder">
          <div className="input_end">
            <h1>Есть приложении или есть отзывы пишите</h1>
            <form className='input_end' onSubmit={handleSubmit}>
              <input
                name='user_email'
                type="email"
                placeholder='Почта'
                value={email}
                onChange={handleEmailChange}
              />
              <input
                name='user_name'
                type="text"
                placeholder='Ваше имя'
                value={name}
                onChange={handleNameChange}
              />
              <input
                name='user_number'
                type="text"
                placeholder='Номер телефона'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <input
                name='user_comment'
                type="text"
                placeholder='Комментарий'
                value={comment}
                onChange={handleCommentChange}
              />
              <button type='submit'>Оставить заявку</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
