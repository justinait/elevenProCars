import React from 'react'
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
  return (
    <div>
      <p className='ourCars'>OUR CARS</p>
      <p className='sloganCars'>Drive the car you want</p>

      <div className='carsContainer'>

        <div className='carCard'>
          <img src={Mercedesg63} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz G63 AMG</p>
            <p className='carDescription'>
              Experience the off-road luxury,
              a versatile and powerful SUV
              capable of connecting urban
              luxury with difficult terrain,
              designed to provide a smooth
              ride in the city and
              uncompromising control on the
              most difficult trails.</p>
            {/* <p className='detailCarItem desktopOnly'>Luxury & Comfort</p> */}
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesS63} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz S63 Viturbo v8 AMG</p>
          </div>
        </div>

        <div className='carCard'>
          <img src={RangeRoverSport} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Range Rover Sport</p>
            <p className='carDescription'>
              Rent a 2023 Range Rover Sport
              to experience the elegance,
              luxury and power of the car,
              designed to maneuver the
              steepest and most remotes treets
              with its powerful V8 engine and
              luxurious cabin.
            </p>
          </div>
        </div>

        <div className='carCard'>
          <img src={RangeRoverSportBlack} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Range Rover Sport</p>
            <p className='carDescription'>Designed for
            adventure. Featuring a 3.0L inline-6
            turbo engine that delivers 395
            horsepower and an 8-speed automatic
            transmission, the Range Rover Sport
            offers a comfortable and powerful ride,
            whether on the road or off it</p>
          </div>
        </div>
        
        <div className='carCard'>
          <img src={mercedesGLC} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLE coupe amg</p>
            <p className='detailCarItem'></p>
          </div>
        </div>

        <div className='carCard'>
          <img src={RangeRoverSportSVG} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Range Rover Sport SVR</p>
            <p className='carDescription'>
              The Range Rover SVR is a high-performance, prestige version of the legendary Range Rover. 
              It boasts a powerful 5.0-liter V8 Supercharged engine that generates 575 horsepower and 516 lb-ft of torque.
            </p>
            </div>
        </div>
        
        <div className='carCard'>
          <img src={mercedesGLE} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLC coupe amg</p>
            <p className='detailCarItem'></p>
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesCamioneta} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLE S63 AMG</p>
            <p className='carDescription'>
              A high-end sports SUV that offers
              unparalleled performance,
              control and luxury. Equipped with
              a turbo V8 engine, a 9-speed
              automatic transmission and a
              comfortable and elegant interior.</p>
          </div>
        </div>
        
        <div className='carCard'>
          <img src={mercedesGLCSUV} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLE SUV AMG</p>
            
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesGLC220} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLC 220D</p>
            <p className='carDescription'>
            With a 2.0L diesel engine and
            190 horsepower, this SUV offers a
            smooth and efficient ride, in
            addition to a series of features.
            luxury such as driving assistance
            systems and a premium interior.</p>
            {/* <p>Elegance & comfort</p> */}
          </div>
        </div>

        <div className='carCard'>
          <img src={jeepRubicon} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Jeep Rubicon</p>
            <p className='carDescription'>The Jeep Rubicon is a rugged and
              versatile SUV built for off-road
              adventures. Powered by a 3.6L V6 engine
              generating 285 horsepower and a 6-speed manual transmission,
              is built to handle the toughest terrains
              with ease, delivering a fun and exciting
              ride for adventurers .
            </p>
            
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesClaseA} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz A Class AMG</p>
            
          </div>
        </div>
        <div className='carCard'>
          <img src={GLBAzul} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLB AMG</p>
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesClaseC} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz C Class CABRIO AMG</p>
            <p className='carDescription'>
            A luxury convertible designed to combine
            comfortable handling with dynamic
            driving. Its 2.0L turbo four-cylinder
            engine delivers 184 horsepower, a 7-speed automatic transmission.
            </p>
          </div>
        </div>

        <div className='carCard'>
          <img src={mercedesGLA} alt="" className='carItemFirstImage'/>
          <div className='infoBlur'>
            <p className='titleCar'>Mercedes Benz GLA AMG</p>
            <p className='carDescription'>
              A powerful and efficient 2.0L inline-4 turbocharged engine. It delivers 
              221 horsepower at 5500 rpm and 258 lb-ft of torque at 1800 rpm, providing 
              smooth and responsive acceleration.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars