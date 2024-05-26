import React from 'react'
// import image from '/cars/azul maclaren(1).jpg'
import image3 from '/cars/RangeRoverSportBlanca (2).jpg'
// import image4 from '/cars/mercedes deportivo gris.jpg'
import image4 from '/cars/VolanteMercedes3.jpg'

import image from '/cars/maclarennaranja (1).jpg'
import image5 from '/cars/2Backmercedesjeep (1).jpg'


import './Home.css'

function Home() {
  return (
    <div>
        <div className='homeContainerDiv'>
            <p className='ourFocus'>OUR FOCUS</p>
            <p className='ourFocusText'>We aim to provide our clients with a unique and exclusive service, offering 
                luxury cars at your convenience. <br /> <strong>Whenever and wherever you need them.</strong></p>
        </div>
        <div className='homeDiv'>

            <div className='homeImageContainer'>
                <div className='overlay'></div>
                <p className='homeImagePhrase'>Let's get you on the road.<br /> Expertise. Commitment. Value.</p>
                <img src={image3} alt="" className='homeServicesImage mobileOnly'/>
                <img src={image5} alt="" className='homeServicesImage desktopOnly'/>
            </div>
            <p className='ourFocus ourServices'>OUR SERVICES</p>
            <div className='homeImageContainer'>
                <div className='overlay desktopOnly'></div>
                <img className='homeServicesImage mobileOnly' src={image4} alt="" />
                <img className='homeServicesImage desktopOnly' src={image} alt="" />
                <div className='homeImagePhrase homeImagePhraseTablet'>
                    <p className='homeImageP'>Unforgettable Unique Experience. </p>
                    <p className='homeImageP'>Reservations at Nightclubs and Restaurants.</p>
                    <p className='homeImageP'>Logistics for Easy Parking in High-Demand Areas.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home