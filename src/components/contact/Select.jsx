import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './Select.scss';

import CupraFormentorImage from './selectImgs/CupraFormentor.png';
import CupraLeonImage from './selectImgs/CupraLeon.png';
import CupraLeonSportstourer from './selectImgs/CupraLeonSportstourer.png';
import CupraAteca from './selectImgs/CupraAteca.png';
import NowaCupraBorn from './selectImgs/NowaCupraBorn.png';

import Arrow from './selectImgs/arrow.png'

const carsData = [
  {
    label: <div className='select-details'><img src={CupraFormentorImage} alt='Cupra Formentor' /><p>Cupra Formentor</p></div>,
    value: 'CupraFormentor',
    image: CupraFormentorImage,
  },
  {
    label: <div className='select-details'><img src={CupraLeonImage} alt='Cupra Leon' /><p>Cupra Leon</p></div>,
    value: 'CupraLeon',
    image: CupraLeonImage,
  },
  {
    label: <div className='select-details'><img src={CupraLeonSportstourer} alt='Cupra Leon Sportstourer' /><p>Cupra Leon Sportstourer</p></div>,
    value: 'CupraLeonSportstourer',
    image: CupraLeonSportstourer,
  },
  {
    label: <div className='select-details'><img src={CupraAteca} alt='Cupra Ateca' /><p>Cupra Ateca</p></div>,
    value: 'CupraAteca',
    image: CupraAteca,
  },
  {
    label: <div className='select-details'><img src={NowaCupraBorn} alt='Nowa Cupra Born' /><p>Nowa Cupra Born</p></div>,
    value: 'NowaCupraBorn',
    image: NowaCupraBorn,
  },
];

const MyDropdown = () => {
  const options = carsData.map((car) => ({
    value: car.label,
    label: car.label,
    image: car.image,
  }));

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
    }),
  };

  useEffect(() => {
    const inputElement = document.getElementById('react-select-3-input');
  
    if (inputElement) {
      inputElement.readOnly = true;
    }
  
    const targetElement = document.getElementById('react-select-3-option-0');
  
    if (targetElement) {
      const selectDetailsElement = targetElement.querySelector('.select-details');
  
      if (selectDetailsElement) {
        const newImg = document.createElement('img');
        newImg.src = Arrow; 
        newImg.alt = 'Arrow';
        newImg.classList.add('arrow');
  

        if (selectDetailsElement.querySelectorAll('img[alt="Arrow"]').length === 0) {
          selectDetailsElement.appendChild(newImg);
        }
      }
    }
  }, []);
  

  return (
    <Select options={options} defaultValue={selectedOption} styles={customStyles} />
  );
};

export default MyDropdown;
