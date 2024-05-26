import React from 'react'
import './Cars.css'
import Mercedesg63 from '/cars/mercedes-benz-g63-amg (3).jpg'
import Mercedesg63Back from '/cars/mercedes-benz-g63-amg (1).jpg'
import RangeRoverSport from '/cars/RangeRoverSportBlanca (2).jpg'
import RangeRoverSportSVG from '/cars/RangeRoverSportSVGBlanca (2).jpg'
import mercedesCamioneta from '/cars/mercedes camioneta blanca (2).jpg'
import mercedesCamionetaBack from '/cars/mercedes camioneta blanca (1).jpg'
import negro from '/cars/negro.jpg'


function Cars() {
  return (
    <div>
      <p className='ourCars'>OUR CARS</p>
      <p className='sloganCars'>Drive the car you want</p>

      <div className='carsContainer'>
        <div className='carCard'>
          <img src={Mercedesg63} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>Mercedes Benz G63 AMG</p>
            <p className='detailCarItem'>Luxury & Comfort</p>
          </div>
        </div>
        <div className='carCard'>
          <img src={RangeRoverSport} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>Range Rover Sport</p>
            <p></p>
          </div>
        </div>
        <div className='carCard'>
          <img src={RangeRoverSportSVG} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>Range Rover Sport SVG</p>
            <p></p>
          </div>
        </div>
        <div className='carCard'>
          <img src={mercedesCamioneta} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>Mercedes Benz GL63 AMG</p>
            <p className='detailCarItem'>Luxury & Comfort</p>
          </div>
        </div>
        <div className='carCard'>
          <img src={negro} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>Mercedes Benz GLC 220D</p>
            <p className='detailCarItem'>Luxury & Comfort</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars