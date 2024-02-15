import React from 'react';
import './Info.scss';

import Technology from './img/Frame1976.png';
import PowerOfDesign from './img/Frame1977.png';
import InteriorDesign from './img/Frame1978.png';


const Info = () => {
  return (
    <div id="Info">
      <div className='container'>

          <div className="item">

              <div className='img-div rectangle image'>
                <img   src={Technology} alt="Technology" />
              </div>
              
              <div className='text' >

                <p className='small' >Technologia</p>

                <h4 className='lines'>
                  <span>Poczuj pełną wolność</span>
                  <span>jazdy dzięki licznym</span>
                  <span>innowacjom.</span>
                </h4>

                <a href="#" className='btn squere light-beige' >Umów jazdę próbną</a>

              </div>              

          </div>

          <div className="item middle">

              <div className='text'>

                <div>
                <p className='small' >Potęga Designu</p>

                  <h4 className='lines'>
                    <span>Idealny komfort. Unikalny</span>
                    <span>wystrój wnętrza stworzony</span>
                    <span>w stylu CUPRY.</span>
                  </h4>

                  <a href="#" className='btn squere light-beige' >Umów jazdę próbną</a>
                </div>             

              </div>

              <div className='img-div rectangle left-rectangle '>
                <img src={PowerOfDesign} alt="PowerOfDesign" />
              </div>              
              
          </div>

          <div className="item">

              <div className='img-div rectangle image'>
                <img src={InteriorDesign}alt="InteriorDesign" />
              </div>

              <div className='text'>

              <p className='small' >Design wnętrza</p>

                <h4 className='lines'>
                  <span>Crossover emanujący</span>
                  <span>gracją, dynamizmem</span>
                  <span>i czystym wyrafinowaniem.</span>
                </h4>

                <a href="#" className='btn squere light-beige' >Umów jazdę próbną</a>

              </div>              

          </div>

      </div>
    </div>
  )
}

export default Info;