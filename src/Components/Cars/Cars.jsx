import React, { useEffect, useState } from 'react'
import './Cars.css'

function Cars() {

  const [cars, setCars] = useState([])
  
  useEffect(() => {
      
    fetch('/data.json')
    .then((response) => response.json())
    .then((responseData) => {
        
      setCars(responseData.cars);
  
    });
  }, []);
  const handleBook = (name) => {
    const whatsappMessage = `Quisiera reservar ${name}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+34634187073&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    
    <div>
      <p className='ourCars'>OUR CARS</p>
      <p className='sloganCars'>Drive the car you want</p>

      <div className='carsContainer'>
        {
          cars.map((e, i)=> {
            return (
              <div className='carCard' key={i}>
                <img src={e.image} alt="" className='carItemFirstImage'/>
                <div className='infoBlur'>
                  <p className='titleCar'>{e.name}</p>
                  {e.description &&
                    <p className='carDescription'>
                      {e.description}
                    </p>
                  }
                {/* <p className='detailCarItem desktopOnly'>Luxury & Comfort</p> */}
                </div>
                <button onClick={()=>handleBook(e.name)} style={{cursor: 'pointer', textDecoration: 'none', color: 'white' }} className='bookNowCarItem'>Book Now!</button>
              </div>
            )
          })
        }        
      </div>
    </div>
  )
}

export default Cars