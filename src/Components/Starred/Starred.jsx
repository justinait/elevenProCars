import React, { useEffect, useState } from 'react'
import './Starred.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';

function Starred() {

    const [discountCode, setDiscountCode] = useState('')
    const [cars, setCars] = useState([])
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);

    const handleClose = () => {
        setShow(false)
        setSelectedItem([])
    };
    const handleShow = (e) => {
        setShow(true)
        setSelectedItem(e);
    };

    useEffect(() => {
        
        fetch('/data.json')
        .then((response) => response.json())
        .then((responseData) => {
            
        setCars(responseData.cars);
    
        });
    }, []);

    const handleBook = (name, discountCode) => {
        let whatsappMessage = `Quisiera reservar ${name}`;
        
        if (discountCode && discountCode !== '') {
            whatsappMessage += ` Tengo un código de descuento: ${discountCode}`;
        }
        
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+34634187073&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        show && handleClose();
    };

    const starredCars = [
      { "name": "MERCEDES BENZ G63 AMG Line", "image": "/cars/mercedes-benz-g63-amg (3).jpg", "detail": "", "className": "", "description": "Experience the off-road luxury, a versatile and powerful SUV capable of connecting urban luxury with difficult terrain, designed to provide a smooth ride in the city and uncompromising control on the most difficult trails.", "imageBack": "/cars/mercedes-benz-g63-amg (1).jpg", "imageInside": "", "extraImage":"", "brand":"MERCEDES BENZ"},
      { "name": "MERCEDES BENZ S63 BITURBO V8 AMG", "image": "/cars/MercedesS63AMGCabrio (1).jpeg", "detail": "", "className": "", "description": "Exclusivity and Power at Its Finest. Enjoy luxury and power with the impressive 2024 Mercedes-AMG S63 Cabriolet. This high-performance convertible combines exclusivity, cutting-edge technology, and extraordinary performance.", "imageBack": "/cars/MercedesS63AMGCabrio (2).jpeg", "imageInside": "/cars/MercedesS63AMGCabrio (4).jpeg", "extraImage":"/cars/MercedesS63AMGCabrio (6).jpeg", "brand":"MERCEDES BENZ"},
      { "name": "MERCEDES BENZ GLE SUV AMG Line", "image": "/cars/MercedesGLCGris.jpg", "detail": "", "className": "", "description": "Elegance and Cutting-Edge Technology. This SUV combines sophisticated design, advanced technology, and exceptional performance. Exterior Design: Imposing grille, Multibeam LED headlights, and 20-inch alloy wheels. Luxury Interior", "imageBack": "", "imageInside": "", "extraImage":"", "brand":"MERCEDES BENZ"},
      { "name": "RANGE ROVER SPORT", "image": "/cars/RangeRoverSportNegra (2).jpg", "detail": "", "className": "" , "description": "Designed for adventure. Featuring a 3.0L inline-6 turbo engine that delivers 395 horsepower and an 8-speed automatic transmission, the Range Rover Sport offers a comfortable and powerful ride, whether on the road or off it", "imageBack": "/cars/RangeRoverSportNegra (1).jpg", "imageInside": "", "extraImage":"", "brand":""},
      { "name": "MERCEDES BENZ GLA 220D AMG Line", "image": "/cars/MercedesGLA220D (1).jpeg", "detail": "", "className": "", "description": "The embodiment of luxury and sophistication in the form of a convertible. With a powerful V6 biturbo engine, this car combines performance with refinement. Its exterior design is elegant and aerodynamic. The retractable top opens in seconds, offering the freedom to enjoy the sun and wind. Whether exploring the city or cruising highways, it offers an exceptionally gratifying experience.", "imageBack": "/cars/MercedesGLA220D (2).jpeg", "imageInside": "", "extraImage":"", "brand":"MERCEDES BENZ"},
      { "name": "MERCEDES BENZ GLB 200D AMG Line (7 seats)", "image": "/cars/MercedesGLB200DAMG (2).jpeg", "detail": "", "className": "", "description": "Versatility and Modern Style. We offer for rent the elegant and versatile 2024 Mercedes-Benz GLB 200d. This compact SUV combines modern style, advanced technology, and efficient performance. It features an exterior design with sleek lines, high-performance LED headlights, and 18-inch alloy wheels, along with a spacious interior", "imageBack": "/cars/MercedesGLB200DAMG (1).jpeg", "imageInside": "/cars/7seatsinterior6.jpeg", "extraImage":"/cars/7seatsinterior5.jpeg", "extraImage2":"/cars/7seatsinterior4.jpeg", "extraImage3":"/cars/7seatsinterior3.jpeg", "extraImage4":"/cars/7seatsinterior2.jpeg", "extraImage5":"/cars/7seatsinterior1.jpeg", "brand":"MERCEDES BENZ"}
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
                <img src={e.image} alt="" className='carItemFirstImage'/>
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
                <img src={selectedItem.image} alt={selectedItem.name} className='imageModalCars' />
              </Carousel.Item>
              {
                selectedItem?.imageBack &&
                <Carousel.Item>
                  <img src={selectedItem.imageBack} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.imageInside &&
                <Carousel.Item>
                  <img src={selectedItem.imageInside} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage &&
                <Carousel.Item>
                  <img src={selectedItem.extraImage} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage2 &&
                <Carousel.Item>
                  <img src={selectedItem.extraImage2} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage3 &&
                <Carousel.Item>
                  <img src={selectedItem.extraImage3} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage4 &&
                <Carousel.Item>
                  <img src={selectedItem.extraImage4} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              }
              {
                selectedItem?.extraImage5 &&
                <Carousel.Item>
                  <img src={selectedItem.extraImage5} alt={selectedItem.name} className='imageModalCars' />
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

        <Link className='seeAllStarred animate__animated animate__backInLeft' to={'/cars'}>See all the cars</Link>
      </div>
    </div>
  )
}

export default Starred