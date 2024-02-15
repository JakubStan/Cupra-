import React from 'react';
import './Footer.scss';
import Instagram from '../../assets/instagram.png';
import ВКонтакте from '../../assets/vimeo.png'; 


const Footer = () => {
  return (
    <footer>

        <div className="inner-wrapper">
          <div className='container' >

        <div>
          <p>SEAT CUPRA S.A.U 2022</p>
        </div>

        <div>
          <a href="#">Obowiązek informacyjny</a>
          |
          <a href='#' >Polityka cookies</a>
        </div>
        
        <div>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="">
            <img src={ВКонтакте} alt="ВКонтакте" />
          </a>
        </div>

      </div>
      </div>
    </footer>
  )
}

export default Footer;