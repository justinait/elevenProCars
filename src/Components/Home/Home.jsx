import React from 'react'
import image from '/cars/maclaren naranja (1) cut.jpg'
import image2 from '/cars/tres autos (2).jpg'
import image3 from '/cars/mercedes camioneta blanca (2).jpg'

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
        <div>
            <p className='ourFocus ourServices'>OUR SERVICES</p>
            <div>
                <p className='ourFocusText'>
                    Unforgettable Unique Experience. <br />
                    Exclusive Car to Enjoy Mallorca's Coves and Beaches. <br />
                    Reservations at Nightclubs and Restaurants. <br />
                    Logistics for Easy Parking in High-Demand Areas.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home