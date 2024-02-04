import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data';
import './Singel.css';

const SingelPage = () => {
  const { id } = useParams();
  const relaxCountry = data?.find((i) => i.date === id);

  console.log(relaxCountry);
  console.log(id);
  if (!relaxCountry) {
    return <div>Страна не найдена</div>;
  }

  return (
    <>
      <div className="container hld_flex">
        <div className='h1_p_flex'>
            <h1 className='hold_text'>
          {relaxCountry.destination}
        </h1>
         <div className="more_txt">
                <h3>{relaxCountry.moreDescription}</h3>
        </div>
        </div>
      
        <div className="card_relax">
          <img src={relaxCountry.image} alt="" />
        <div className="position_txt">
            <p>{relaxCountry.description}</p>
        </div>
    
        </div>
           
      </div>
    </>
  );
};

export default SingelPage;