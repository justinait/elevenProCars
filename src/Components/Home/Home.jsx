import React from 'react'
import image from '/cars/maclaren naranja (1) cut.jpg'
import image2 from '/cars/tres autos (2).jpg'
import image3 from '/cars/mercedes camioneta blanca (2).jpg'
import image4 from '/cars/mercedes deportivo gris.jpg'


import './Home.css'

function Home() {
  return (
    <div>
        <div className='homeContainerDiv'>
            <p className='ourFocus'>OUR FOCUS</p>
            <p className='ourFocusText'>We aim to provide our clients with a unique and exclusive service, offering 
                luxury cars at your convenience. <br /> <strong>Whenever and wherever you need them.</strong></p>
        </div>
        <div className='homeImageContainer'>
            <div className='overlay'></div>
            <p className='homeImagePhrase'>Let's get you on the road.<br /> Expertise. Commitment. Value.</p>
            <img src={image3} alt="" className='homeServicesImage'/>
        </div>
            <p className='ourFocus ourServices'>OUR SERVICES</p>
        <div className='homeImageContainer'>
            <div className='overlay'></div>
            <img className='homeServicesImage' src={image4} alt="" />
            <div className='homeImagePhrase'>
                <p className='homeImageP'>Unforgettable Unique Experience. </p>
                <p className='homeImageP'>Reservations at Nightclubs and Restaurants.</p>
                <p className='homeImageP'>Logistics for Easy Parking in High-Demand Areas.</p>
            </div>
        </div>
    </div>
  )
}

export default Home