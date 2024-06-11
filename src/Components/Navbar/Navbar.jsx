import React from 'react';
import logo from '/logonegro3.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='navbarContainer'>
      <Link to={'/'} className='navbarBrand'><img src={logo} alt="" className='logoNavbar'/></Link>
      <Link to={'/cars'} className='carsNavbar'>{t('navbar.ourCars')}</Link>
      <p onClick={() => changeLanguage('en')}>En</p>
      <p onClick={() => changeLanguage('es')}>Es</p>
    </div>
  );
}

export default Navbar;
