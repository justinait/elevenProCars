import React, { useEffect, useState } from 'react'
import './Cars.css'
import Mercedesg63 from '/cars/mercedes-benz-g63-amg (3).jpg'
import Mercedesg63Back from '/cars/mercedes-benz-g63-amg (1).jpg'
import RangeRoverSport from '/cars/RangeRoverSportBlancaCut (2).jpg'
import RangeRoverSportBlack from '/cars/RangeRoverSportNegra (2).jpg'
import RangeRoverSportSVG from '/cars/RangeRoverSportSVGBlanca (2).jpg'
import mercedesCamioneta from '/cars/mercedesGL (1).jpg'
import mercedesCamionetaBack from '/cars/mercedesGL (2).jpg'
import negro from '/cars/negro.jpg'
import mercedesS63 from '/cars/mercedesS63Amg.jpg'
import mercedesGLC from '/cars/Glccoupeamglíneaamg.jpg'
import mercedesGLE from '/cars/Mercedesgle.jpg'
import mercedesGLCSUV from '/cars/MercedesGLCGris.jpg'
import mercedesGLC220 from '/cars/mercedesGLCNegro (1).jpg'
import jeepRubicon from '/cars/jeep (1).jpg'
import GLBAzul from  '/cars/glb.jpg'
import mercedesClaseA from '/cars/ClaseAMercedes2.jpg'
import mercedesGLA from '/cars/mercedesGLA (2).jpg'
import mercedesClaseC from '/cars/mercedesClassC3.jpg'

function Cars() {

  const [cars, setCars] = useState([])
  
  useEffect(() => {
      
    fetch('/data.json')
    .then((response) => response.json())
    .then((responseData) => {
        
      setCars(responseData.cars);
  
    });
  }, []);

  return (
    <div>
      <p className='ourCars'>OUR CARS</p>
      <p className='sloganCars'>Drive the car you want</p>

      <div className='carsContainer'>
        {
          cars.map((e, i)=> {
            return (
              <div className='carCard'>
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
              </div>
            )
          })
        }        
      </div>
    </div>
  )
}

export default Cars