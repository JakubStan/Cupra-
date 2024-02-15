import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <div id="hero">
      <div className='container'>
        <div className='content'>
          <p className="large white">CUPRA Formentor</p>
          <h2 className='lines' >
            <span>Wejdź do świata Cupra.</span>
            <span>Poznaj prawdziwą moc</span>
            <span>i sportowego ducha marki.</span>
          </h2>
          <a href="#" className="btn squere light-beige">Ruszaj na jazde testową</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;