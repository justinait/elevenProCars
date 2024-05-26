import React from 'react'
import './Cars.css'
import car1 from '/cars/mercedes-benz-g63-amg (1).jpg'
import car1back from '/cars/mercedes-benz-g63-amg (2).jpg'

function Cars() {
  return (
    <div>
      <p className='ourFocus'>OUR CARS</p>
      <p className='sloganCars'>Drive the car you want</p>
      <div className='carsContainer'>
        <img src={car1} alt="" className='homeImage'/>
      </div>
    </div>
  )
}

export default Cars