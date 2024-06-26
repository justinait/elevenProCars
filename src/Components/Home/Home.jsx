import React from 'react'
// import image from '/cars/azul maclaren(1).jpg'
import image3 from '/cars/hero.jpg'
// import image4 from '/cars/mercedes deportivo gris.jpg'
import image4 from '/cars/VolanteMercedes3.jpg'
import image from '/cars/maclarennaranja (1).jpg'
import image5 from '/cars/2Backmercedesjeep (1).jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadIcon from '@mui/icons-material/Download';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import './Home.css'
import Hero from '../Hero/Hero'
import Starred from '../Starred/Starred'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import BedIcon from '@mui/icons-material/Bed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Services from '../Services/Services'

function Home() {
  return (
    <div>
        <Hero/>
        <div className='homeContainerDiv'>
            <p className='ourFocus'>OUR FOCUS</p>
            <p className='ourFocusText'>
                We aim to provide our clients with a unique and exclusive service, offering 
                luxury cars at your convenience. <br /> <strong>Whenever and wherever you need them.</strong>
            </p>
        </div>
        
        <Services />
        <Starred />

    </div>
  )
}

export default Home