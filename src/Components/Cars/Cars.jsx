import React from 'react'
import './Cars.css'
import Mercedesg63 from '/cars/mercedes-benz-g63-amg (3).jpg'
import Mercedesg63Back from '/cars/mercedes-benz-g63-amg (1).jpg'
import RangeRoverSport from '/cars/RangeRoverSportBlancaCut (2).jpg'
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
import GLBAzul from  '/cars/GLBAzul.jpg'
import mercedesClaseA from '/cars/ClaseAMercedes2.jpg'
import mercedesGLA from '/cars/mercedesGLA (2).jpg'
import mercedesClaseC from '/cars/mercedesClassC3.jpg'

function Cars() {
  return (
    <div>
      <p className='ourCars'>OUR CARS</p>
      <p className='sloganCars'>Drive the car you want</p>

      <div className='carsContainer'>

        <div className='carCard'>
          <img src={Mercedesg63} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz G63 AMG</p>
            <p className='detailCarItem'>Luxury & Comfort</p>
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesS63} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz S63 Viturbo v8 AMG</p>
            <p className='detailCarItem'></p>
          </div>
        </div>

        <div className='carCard'>
          <img src={RangeRoverSport} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Range Rover Sport</p>
            {/* <p className='carDescription'>Rent a 2023 Range Rover Sport
              to experience the elegance,
              luxury and power of the car,
              designed to maneuver the
              steepest and most remotes treets
              with its powerful V8 engine and
              luxurious cabin.
            </p> */}
          </div>
        </div>

        
        <div className='carCard'>
          <img src={mercedesGLC} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz Glc coupe amg</p>
            <p className='detailCarItem'></p>
          </div>
        </div>

        <div className='carCard'>
          <img src={RangeRoverSportSVG} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Range Rover Sport SVG</p>
            <p></p>
          </div>
        </div>
        
        <div className='carCard'>
          <img src={mercedesGLE} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz Gle coupe amg</p>
            <p className='detailCarItem'></p>
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesCamioneta} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GL63 AMG</p>
          </div>
        </div>
        
        <div className='carCard'>
          <img src={mercedesGLCSUV} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLC SUV AMG</p>
            
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesGLC220} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLC 220D</p>
            
          </div>
        </div>

        <div className='carCard'>
          <img src={jeepRubicon} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Jeep Rubicon</p>
            
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesClaseA} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz Class A AMG</p>
            
          </div>
        </div>
        <div className='carCard'>
          <img src={GLBAzul} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLB</p>
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesClaseC} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz C Class Convertible</p>
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesGLA} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars