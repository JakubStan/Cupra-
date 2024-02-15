import React from "react";
import "./About.scss";
import CupraFormentor from '../../assets/CUPRAFORMENTOR048.png';
import CupraFormentor2 from '../../assets/CUPRAFORMENTOR2.png';

const About = () => {
  return (
    <div id="about">
      <div className="container">

        <div className="col-large">
          <div>
          <h2>Wyprubuj</h2>
          <p className='lines white large' >
            <span>Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj</span>
            <span>samochody, które są wyjątkowym połączeniem technologii</span>
            <span>mocy, elegancji i komfortu. </span>
          </p>

          <img src={CupraFormentor} alt="CupraFormentor" />
          <p className="small white" >Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.</p>
          </div>
          <div className="test-drive">
            <h3 className="white">TYLKO DLA ODWAŻNYCH</h3>
            <p className="large white lines">
                <span>Model CUPRA, który idealnie wpisuje się w DNA marki.</span>
                <span>Unikalny SUV coupé, wyjątkowy, odważny i innowacyjny –</span>
                <span>zapewni Ci to, co najlepsze w marce CUPRA.</span>
            </p>
            <a href="#" className="btn squere light-beige">Umów jazdę próbną</a>
          </div>
        </div>

        <div className="col-small">
        <img src={CupraFormentor2} alt="CupraFormentor" />
            <p className="small white ">Podróżuj z rozmachem bez kompromisów.</p>
        </div>

      </div>
    </div>
  );
};
export default About;
