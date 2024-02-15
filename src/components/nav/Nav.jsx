// Nav.js
import React, { useState } from 'react';
import './Nav.scss'; // Załóżmy, że masz taki plik ze stylami

import Logo from '../../assets/Logo.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const phoneNumber = '+48 58 506 65 65';

  return (
    <nav>
      <div className='container'>
        <a href='#'>
          <img src={Logo} alt='CUPRA' className='colo' />
        </a>

 
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className='menu-list'>
            <ul>
              <li>
                <a href='#'>Samochody</a>
              </li>
              <li>
                <a href='#'>Jazda próbna</a>
              </li>
              <li>
                <a href='#'>Oferta</a>
              </li>
              <li>
                <a href='#'>Salony Cupra</a>
              </li>
            </ul>
          </div>

          <div className='contact'>
            <a className='phoneNumber' href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>
            <a href='#' className='btn squere transparent dark'>
              Zapytaj o ofertę
            </a>
            <a href='#' className='btn squere dark'>
              Umów jazdę próbną
            </a>
          </div>
        </div>

      
        <div className='mobile-menu-toggle' onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Nav;
