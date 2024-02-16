import React from 'react'
import "../main.css"
import { Link } from 'react-router-dom'
import Contact from '../contact/Contact'
import { motion } from 'framer-motion'

const Home = () => {

    return (
        <>
            <div className="container">
                <div className="home_page">

                    <motion.p
                        initial={{ opacity: 0, y: -150 }}
                        animate={{ opacity: 1, y: 0 }}

                    >Marmara Travel</motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ opacity: 1, y: 0 }}
                    >Хватит мечтать - пора ОТДЫХАТЬ!</motion.h1>
                     {motion}
                    <div className="btns_homePage">
                        <Link to="/relaxCountry">
                            <motion.button
                                initial={{ opacity: 0, x: -150 }} 
                                animate={{ opacity: 1, x: 0 }} 
                            >
                                Поехали
                            </motion.button>
                        </Link>
                        <motion.a href="https://t.me/voris01">
                            <motion.button
                                initial={{ opacity: 0, x: 150 }} 
                                animate={{ opacity: 1, x: 0 }} 
                            >
                                Написать в ТГ
                            </motion.button>
                        </motion.a>
                    </div>

                </div>
                <div className="third_holder">
                    <p>ЗАЧЕМ ВЫБИРАТЬ MARMARA TRAVEL?</p>
                    <h1>3 хорошие причины поехать с нами</h1>
                    <b>Помимо 20-ти летнего опыта...</b>
                </div>
                <div className="bg_img_third_holder">
                    <div className="img_third">
                        <div className="card_third">
                            <h1>  Первая причина:100% Индивидуальный подход</h1>
                            <p> <span>Наша задача - слаженно и максимально комфортно организовать Ваш тур</span> так, чтоб вы наслаждались каждой минутой вашего отдыхаи полной перезагрузкой.</p>
                        </div>
                    </div>
                    <div className="img_third card_thirt">
                        <div className="card_third ">
                            <h1> Вторая причина:Насыщенная культурнаяпрограмма</h1>
                            <p>Планируете активный отдых? Организуем насыщенную программу,
                                с помощью вашего дизайна человека + РЕЙВ карта в подарок</p>
                        </div>
                    </div>
                    <div className="img_third card_thirts">
                        <div className="card_third ">
                            <h1>Третья причина:
                                100% защита туриста</h1>
                            <p> Ситуация с COVID-19 до сих пор не пришла в норму. В пандемию мы
                                ВЕРНУЛИ ВСЕ деньги нашим туристам.</p>
                        </div>
                    </div>
                </div>


                <div className="input_holder">
                    <Contact />
                    {/* <div className="input_end">
                          <h1>Не определились со странойотдыха? Мы поможем!</h1>
                <input name='user_email' type="email" placeholder='Почта' />
                <input name='user_text' type="text" placeholder='Ваше имя' />
                <input name='user_number' type="number" placeholder='Номер телефона  ' />
                <input name='user_text' type="text" placeholder='Комментарий' />
               <form action=""><button type='submit'>Оставить заявку</button></form> 
              
            </div> */}
                </div>

            </div>
        </>
    )
}

export default Home
