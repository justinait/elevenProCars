import React, { useContext, useEffect, useState } from 'react'
import './Starred.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import { ReferenceContext } from '../../context/ReferenceContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Starred() {

    const [discountCode, setDiscountCode] = useState('')
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);
    const { referenceCode } = useContext(ReferenceContext);

    const handleClose = () => {
      setShow(false)
      setSelectedItem([])
    };
    const handleShow = (e) => {
      setShow(true)
      setSelectedItem(e);
    };

    const handleBook = (name, discountCode) => {
      let whatsappMessage = `Hello. I'd like to book ${name}.`;
      
      const finalDiscountCode = referenceCode || discountCode;
      if (finalDiscountCode) {
        whatsappMessage += ` Ref Code: ${finalDiscountCode}`;
      }
  
      const whatsappUrl = `https://api.whatsapp.com/send?phone=+34634187073&text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      show && handleClose();
    };

    const starredCars = [
      { "name": "MERCEDES BENZ G63 AMG Line", "image": "/cars/mercedesnuevo-g63amg (1).jpg", "detail": "", "className": "", "description": "Experience the off-road luxury, a versatile and powerful SUV capable of connecting urban luxury with difficult terrain, designed to provide a smooth ride in the city and uncompromising control on the most difficult trails.", "imageBack": "", "imageInside": "", "extraImage":"", "brand":"MERCEDES BENZ"},
      { "name": "MERCEDES BENZ S63 BITURBO V8 AMG", "image": "/cars/MercedesS63AMGCabrio (1).jpeg", "detail": "", "className": "", "description": "Exclusivity and Power at Its Finest. Enjoy luxury and power with the impressive 2024 Mercedes-AMG S63 Cabriolet. This high-performance convertible combines exclusivity, cutting-edge technology, and extraordinary performance.", "imageBack": "/cars/MercedesS63AMGCabrio (2).jpeg", "imageInside": "/cars/MercedesS63AMGCabrio (4).jpeg", "extraImage":"/cars/MercedesS63AMGCabrio (6).jpeg", "brand":"MERCEDES BENZ"},
      { "name": "MERCEDES BENZ CLE 300 AMG Line", "image": "/cars/CLE300 (1).jpeg", "detail": "", "className": "", "description": "Sleek Design and Dynamic Performance. This cabrio blends sporty elegance with advanced technology and superior handling. Exterior Design: Aerodynamic silhouette, LED headlights, and 19-inch alloy wheels. Refined Interior: Premium materials and cutting-edge infotainment.", "imageBack": "/cars/CLE300 (2).jpeg", "imageInside": "/cars/CLE300 (3).jpeg", "extraImage":"", "brand":"MERCEDES BENZ"},

      { "name": "RANGE ROVER SPORT", "image": "/cars/rangeRoverSportNegroAgosto (1).jpg", "detail": "", "className": "" , "description": "Designed for adventure. Featuring a 3.0L inline-6 turbo engine that delivers 395 horsepower and an 8-speed automatic transmission, the Range Rover Sport offers a comfortable and powerful ride, whether on the road or off it", "imageBack": "/cars/rangeRoverSportNegroAgosto (3).jpeg", "imageInside": "/cars/rangeRoverSportNegroAgosto (2).jpeg", "extraImage":"", "brand":""},
      { "name": "MERCEDES BENZ GLA 220D AMG Line", "image": "/cars/MercedesGLA220D (1).jpeg", "detail": "", "className": "", "description": "The embodiment of luxury and sophistication in the form of a convertible. With a powerful V6 biturbo engine, this car combines performance with refinement. Its exterior design is elegant and aerodynamic. The retractable top opens in seconds, offering the freedom to enjoy the sun and wind. Whether exploring the city or cruising highways, it offers an exceptionally gratifying experience.", "imageBack": "/cars/MercedesGLA220D (2).jpeg", "imageInside": "/cars/MercedesGLA220D (3).jpeg", "extraImage":"", "brand":"MERCEDES BENZ"},
      { "name": "MERCEDES BENZ GLB 200D AMG Line (7 seats)", "image": "/cars/MercedesGLB200DAMG (2).jpeg", "detail": "", "className": "", "description": "Versatility and Modern Style. We offer for rent the elegant and versatile 2024 Mercedes-Benz GLB 200d. This compact SUV combines modern style, advanced technology, and efficient performance. It features an exterior design with sleek lines, high-performance LED headlights, and 18-inch alloy wheels, along with a spacious interior", "imageBack": "/cars/MercedesGLB200DAMG (1).jpeg", "imageInside": "/cars/7seatsinterior6.jpeg", "extraImage4":"/cars/7seatsinterior2.jpeg", "brand":"MERCEDES BENZ"},

    ]
    return (
    
    <div>
      <p className='ourCars ourCarsStarred'>HIGHLIGHTS</p>
      <p className='sloganCars'>Drive the car you want</p>

      <div className='carsContainer'>
        {
          starredCars.map((e, i)=> {
            return (
              <div className='carCard' key={i}  onClick={()=>handleShow(e)}>
                <LazyLoadImage src={e.image} alt="" className='carItemFirstImage' threshold={200}/>
                <div className='infoBlur'>
                  <p className='titleCar'>{e.name}</p>
                  {e.description &&
                    <p className='carDescription'>
                      {e.description}
                    </p>
                  }
                </div>
                
              </div>
            )
          })
        }    
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <p className='modalTitle'>{selectedItem.name}</p>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              <Carousel.Item>
                <LazyLoadImage src={selectedItem.image} alt={selectedItem.name} className='imageModalCars' />
              </Carousel.Item>
              {
                selectedItem?.imageBack &&
                <Carousel.Item>
                  <LazyLoadImage src={selectedItem.imageBack} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.imageInside &&
                <Carousel.Item>
                  <LazyLoadImage src={selectedItem.imageInside} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage &&
                <Carousel.Item>
                  <LazyLoadImage src={selectedItem.extraImage} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage2 &&
                <Carousel.Item>
                  <LazyLoadImage src={selectedItem.extraImage2} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage3 &&
                <Carousel.Item>
                  <LazyLoadImage src={selectedItem.extraImage3} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage4 &&
                <Carousel.Item>
                  <LazyLoadImage src={selectedItem.extraImage4} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage5 &&
                <Carousel.Item>
                  <LazyLoadImage src={selectedItem.extraImage5} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
            </Carousel>
        
          </Modal.Body>
          <Modal.Footer>
            <div>
              <input 
                type="text" 
                id="discountCode" 
                value={discountCode} 
                onChange={(e) => setDiscountCode(e.target.value)} 
                required 
                placeholder='I have a discount code' 
                className='inputContact'
              />
              <Button className='bookNowModal' onClick={()=>handleBook(selectedItem.name, discountCode)}>
                BOOK NOW
              </Button>
            </div>
          </Modal.Footer>
        </Modal> 

      </div>
        <Link className='seeAllStarred ' to={'/cars'}>See all the cars</Link>
    </div>
  )
}

export default Starred