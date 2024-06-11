import React from 'react';
import image3 from '/cars/hero.jpg';
import image5 from '/cars/2Backmercedesjeep (1).jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import './Home.css';
import Hero from '../Hero/Hero';
import Starred from '../Starred/Starred';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  const downloadPDF = () => {
    const pdfPath = 'https://drive.google.com/file/d/19Drxs_hA-NHrFKU717mxexuMp6hvFPj6/view?usp=sharing';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'CaseStudyBenefit.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Hero />
      <div className='homeContainerDiv'>
        <p className='ourFocus'>{t('home.ourFocus')}</p>
        <p className='ourFocusText'>{t('home.ourFocusText')}</p>
      </div>
      <div className='homeDiv'>
        <div className='aboutDiv'>
          <div className='overlay darkerOverlay'></div>
          <div className='aboutDivContainer'>
            <p className='ourFocus'>{t('home.aboutUs')}</p>
            <div className='aboutInfoContainer'>
              <div>
                <div className='aboutInfoContainerDiv'>
                  <p className='aboutUsTitles'><LocationOnIcon fontSize='medium' /> {t('home.location')}</p>
                  <p className='aboutItemsText'>{t('home.locationText')}</p>
                </div>
                <div className='aboutInfoContainerDiv'>
                  <p className='aboutUsTitles'><BedIcon fontSize='medium' /> {t('home.services')}</p>
                  <p className='aboutItemsText'>{t('home.servicesText')}</p>
                </div>
                <div className='aboutInfoContainerDiv'>
                  <p className='aboutUsTitles'><CalendarMonthIcon fontSize='medium' /> {t('home.reservations')}</p>
                  <p className='aboutItemsText'><a style={{ cursor: 'pointer', textDecoration: 'underline', color: 'white' }} target='_blank' href='https://wa.link/qva9cx'>{t('home.clickHere')}</a> <br /> <strong>{t('home.phoneNumber')}</strong></p>
                </div>
                <div className='aboutInfoContainerDiv'>
                  <p className='aboutUsTitles'><LoyaltyIcon fontSize='medium' /> {t('home.whyUs')}</p>
                  <ul>
                    <li>{t('home.whyUsText').split('. ')[0]}.</li>
                    <li>{t('home.whyUsText').split('. ')[1]}.</li>
                    <li>{t('home.whyUsText').split('. ')[2]}.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='homeImageContainer'>
          <div className='overlay'></div>
          <p className='homeImagePhrase'>{t('home.homeImagePhrase')}</p>
          <img src={image3} alt="" className='homeServicesImage mobileOnly' />
          <img src={image5} alt="" className='homeServicesImage desktopOnly' />
        </div>
      </div>
      <Starred />
    </div>
  );
}

export default Home;