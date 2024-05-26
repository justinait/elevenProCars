import React from 'react'
import './Cars.css'
import car1 from '/cars/mercedes-benz-g63-amg (2).jpg'
import car1back from '/cars/mercedes-benz-g63-amg (1).jpg'
import rangeoverblanca from '/cars/range over camioneta blanca.jpg'
import rangeoversvg from '/cars/range over camioneta blanca 2.jpg'
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
          <img src={car1} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>Mercedes Benz <br /> G63 AMG</p>
            <p className='detailCarItem'>Luxury & Comfort</p>
          </div>
        </div>
        <div className='carCard'>
          <img src={rangeoverblanca} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>RANGE ROVER SPORT</p>
            <p></p>
          </div>
        </div>
        <div className='carCard'>
          <img src={rangeoversvg} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>RANGE ROVER SPORT SVG</p>
            <p></p>
          </div>
        </div>
        <div className='carCard'>
          <img src={mercedesCamioneta} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>Mercedes Benz <br /> GL63 AMG</p>
            <p className='detailCarItem'>Luxury & Comfort</p>
          </div>
        </div>
        <div className='carCard'>
          <img src={negro} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p>Mercedes Benz <br /> GLC 220D</p>
            <p className='detailCarItem'>Luxury & Comfort</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars