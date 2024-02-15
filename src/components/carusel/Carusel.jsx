import React, { useState } from 'react';
import './Carusel.scss';

import CupraAtecaCarusel from './img/CupraAtecaCarusel.png';
import CUPRAFormentorCarusel from './img/CUPRAFormentorCarusel.png';
import CUPRAFormentorVZCarusel from './img/CUPRAFormentorVZCarusel.png';
import LeonCarusel from './img/LeonCarusel.png';
import LeonSportstourerCarusel from './img/LeonSportstourerCarusel.png';
import NowaCUPRABornCarusel from './img/NowaCUPRABornCarusel.png';

import ArrowLeft from './img/left.svg';
import ArrowRight from './img/right.svg';







const Carusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CarsData.length) % CarsData.length);
  };

  const getCurrentCar = (index) => {
    const carIndex = (index + CarsData.length) % CarsData.length;
    return CarsData[carIndex];
  };

  const displayedCarIndices = [
    (currentIndex + CarsData.length) % CarsData.length,
    (currentIndex + 1 + CarsData.length) % CarsData.length,
    (currentIndex + 2 + CarsData.length) % CarsData.length,
  ];



return (
  <div id="carusel">
    <div className="carusel-container">
      <div className='slider-item'>
        {displayedCarIndices.map((index, i) => (
          <div key={index} className={`car-slider ${i === 1 ? 'middle-slide' : (i === 0 ? 'first-slide' : 'third-slide')}`}>
            <div className='car-overlay'></div>
            <div className='carName'>
              <p>{getCurrentCar(index).nazwa}</p>
            </div>
            <div className="image-container">
              <img src={getCurrentCar(index).image} alt={getCurrentCar(index).nazwa} />
            </div>
            <div className='engineInfo'>
            <p className='info'>
              {getCurrentCar(index).nazwa === "Nowa CUPRA Born" ?
                `Akumulator: ${getCurrentCar(index).akumulator} kWh, Moc: ${getCurrentCar(index).moc_silnika} KM²` :
                `Maksymalna prędkość: ${getCurrentCar(index).maksymalna_predkosc} KM/H, Moc silnika: ${getCurrentCar(index).moc_silnika} KM`
              }
            
            </p>
          </div>
            <div className='pricing'>
              <p className='lines info'>
                <span>Dostępny w leasingu z </span>
                <span>0% opłaty własnej</span>
              </p>
              <p className='lines info'>
                <span>Rata netto/mies. od*</span>
                <span className='bold'>{getCurrentCar(index).rata_netto} zł</span>
              </p>
              <p className='lines info'>
                <span>Cena brutto:</span>
                <span className='bold'>{getCurrentCar(index).cena_brutto} zł</span>
              </p>
            </div>
       
      
            <a className='btn squere dark' href={`jazda-prubna${getCurrentCar(index).link}`}>
              Umów jazdę próbną
            </a>
          </div>
        ))}
        <div className='arrows'>
        <button onClick={handlePrev}><img src={ArrowLeft} alt='ArrowLeft' /></button>
        <button onClick={handleNext}><img src={ArrowRight} alt='ArrowRight' /></button>
      </div>
      </div>
      
    

    </div>
  </div>
);

  
};



const CarsData = [
  {
    "nazwa": "CUPRA Formentor",
    "maksymalna_predkosc": 204,
    "moc_silnika": 150,
    "rata_netto": 1439,
    "cena_brutto": 127800,
    "sciezka_obrazka": "./img/CupraAtecaCarusel.png",
    image: CUPRAFormentorCarusel

  },
  {
    "nazwa": "CUPRA Formentor VZ",
    "maksymalna_predkosc": 250,
    "moc_silnika": 310,
    "rata_netto": 1553,
    "cena_brutto": 152400,
    image: CUPRAFormentorVZCarusel,
  },
  {
    "nazwa": "CUPRA Ateca",
    "maksymalna_predkosc": 247,
    "moc_silnika": 300,
    "rata_netto": 2334,
    "cena_brutto": 220700,
    image: CupraAtecaCarusel
  },
  {
    "nazwa": "Nowa CUPRA Born",   
    "akumulator": 58,
    "moc_silnika": 204,
    "rata_netto": 1943,
    "cena_brutto": 179600,
    image: NowaCUPRABornCarusel
  },
  {
    "nazwa": "Leon",
    "maksymalna_predkosc": 245,
    "moc_silnika": 300,
    "rata_netto": 1553,
    "cena_brutto": 152400,
    image: LeonCarusel
 
  },
  {
    "nazwa": "Leon Sportstourer",
    "maksymalna_predkosc": 250,
    "moc_silnika": 310,
    "rata_netto": 1601,
    "cena_brutto": 156200,
    image: LeonSportstourerCarusel
    
  }
];

export default Carusel;
