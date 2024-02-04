import React from 'react'
import "../main.css"


const Footer = () => {
  return (
    <>
    <div className="container">
        <div className="footer">
            <div className="contact_footer">
              <h1>Контакты</h1>
              <p>Для связи с нами, обратитесь по контактам ниже</p>
            </div>
          <div className="icon_footer">
                <div className="cart_footer">
                    <img src="" alt="" />
                    <h1>Контакты</h1>
                    <p>+998 77 260-78-07</p>
                    <p>vorisxon.me@gmail.com</p>
                </div>

                <div className="cart_footer">
                    <img src="" alt="" />
                    <h1>Адрес</h1>
                    <p>г. Наманган</p>
                    <p>Давлатобот Ахсикент</p>
                </div>

                <div className="cart_footer">
                    <img src="" alt="" />
                    <h1>Получить расчет</h1>
                    <p>Для получения расчета оставьте
                       заявку. Оформить тур можно онлайн
                       с любого города Узбекистана</p>
                </div>
          </div>
                <div className="end">
                    <p>© 2003 Marmara Travel by Vorisxon</p>
                    <p>All rights reserved </p>
                </div>
        </div>
    </div>
    </>
  )
}

export default Footer
