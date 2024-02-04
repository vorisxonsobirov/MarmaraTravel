import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Data';
import '../main.css';

const RelaxCountry = () => {  
  return (
    <>
      <div className="container">
             <div className="maldivas">
               <div className="black_bg">
                <p>МАРМАРА ТРЭВЕЛ</p>
                <h1>Cтраны для отдыха</h1>
                <div className="btns_homePage">
                   <a href="https://t.me/voris01"> <button>Написать в ТГ</button></a>
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