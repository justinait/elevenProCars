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

function Home() {
  return (
    <div>
        <Hero/>
        <div className='homeContainerDiv'>
            <p className='ourFocus'>OUR FOCUS</p>
            <p className='ourFocusText'>
                We aim to provide our clients with a unique and exclusive service, offering 
                luxury cars at your convenience. <br /> <strong>Whenever and wherever you need them.</strong></p>
        </div>
        <div className='homeDiv'>

            <div className='aboutDiv'>
                <div className='overlay darkerOverlay'></div>
                <div className='aboutDivContainer'>
                    <p className='ourFocus '>ABOUT US</p>
                    <div className='aboutInfoContainer'>
                        <div>
                            <div className='aboutInfoContainerDiv'>
                                <p className='aboutUsTitles'><LocationOnIcon fontSize='medium'/> Mallorca, Spain</p>
                                <p className='aboutItemsText'>Airports, Hotels, or wherever you need.</p>
                            </div>
                            <div className='aboutInfoContainerDiv'>
                                <p className='aboutUsTitles'><BedIcon fontSize='medium'/> Other services</p>
                                <p className='aboutItemsText'>We manage your stay in <br /> villas, chalets, houses. </p>
                            </div>
                            <div className='aboutInfoContainerDiv'>
                                <p className='aboutUsTitles'><CalendarMonthIcon fontSize='medium'/>Reservations</p>
                                <p className='aboutItemsText'> <a  style={{cursor: 'pointer', textDecoration: 'underline', color: 'white' }} target='_blank' href='https://wa.link/qva9cx'> Click here</a> or <br /> <strong> +34 634 18 70 73</strong></p>
                            </div>

                            <div className='aboutInfoContainerDiv'>
                                <p className='aboutUsTitles'><LoyaltyIcon fontSize='medium'/>Why us?</p>
                                <ul> 
                                    <li>Reservations at <strong>Nightclubs</strong> and Restaurants.</li>
                                    <li>Logistics for easy parking in <strong>high-demand areas.</strong></li>
                                    <li>Unforgettable unique experience.</li>
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className='homeImageContainer'>
                <div className='overlay'></div>
                <p className='homeImagePhrase'>Let's get you on the road.<br /> Expertise. Commitment. Value.</p>
                <LazyLoadImage src={image3} alt="" className='homeServicesImage mobileOnly'/>
                <LazyLoadImage src={image5} alt="" className='homeServicesImage desktopOnly'/>
            </div>

        </div>
        <Starred/>
    </div>
  )
}

export default Home