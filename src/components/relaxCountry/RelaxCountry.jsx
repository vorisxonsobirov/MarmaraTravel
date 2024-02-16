import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Data';
import '../main.css';
import {motion} from "framer-motion"

const RelaxCountry = () => {  
  return (
    <>
      <div className="container">
             <div className="maldivas">
               <div className="black_bg">
                <motion.p
                     initial={{ opacity: 0, y: -150 }}
                     animate={{ opacity: 1, y: 0 }}
                >Marmara Travel</motion.p>
                <motion.h1
                   initial={{ opacity: 0, y: 150 }}
                   animate={{ opacity: 1, y: 0 }}
                >Cтраны для отдыха</motion.h1>
                <div className="btns_homePage">
                   <a href="https://t.me/voris01"> <motion.button    initial={{ opacity: 0, x: -150 }} 
                                animate={{ opacity: 1, x: 0 }} >Написать в ТГ</motion.button></a>
                </div>
            </div>
        </div>
     
        <h1 className='hold_txt'>Страны для Отдыха</h1>
        <div className="holder_relax">
          {data?.map((value, index) => (
            <div className="card_relax" key={index}>
              <img src={value.image} alt="" />
              <div className="position_txt">
                <h1>{value.destination}</h1>
                <p>{value.description}</p>
                <Link to={`/relaxCountry/${value.date}`}>
                  <button>More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RelaxCountry;