import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Cars.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function Cars() {
  const { t } = useTranslation();
  const [discountCode, setDiscountCode] = useState('');
  const [cars, setCars] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSelectedItem([]);
  };

  const handleShow = (e) => {
    setShow(true);
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
    let whatsappMessage = t('cars.whatsappMessage', { name });

    if (discountCode && discountCode !== '') {
      whatsappMessage += ` ${t('cars.discountMessage', { discountCode })}`;
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+34634187073&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    show && handleClose();
  };

  return (
    <div>
      <p className='ourCars'>{t('cars.ourCars')}</p>
      <p className='sloganCars'>{t('cars.slogan')}</p>

      <div className='carsContainer'>
        {cars.map((e, i) => {
          return (
            <div className='carCard' key={i} onClick={() => handleShow(e)}>
              <img src={e.image} alt="" className='carItemFirstImage' />
              <div className='infoBlur'>
                <p className='titleCar'>{e.name}</p>
                {e.description && <p className='carDescription'>{e.description}</p>}
              </div>
            </div>
          );
        })}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <p className='modalTitle'>{selectedItem.name}</p>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              <Carousel.Item>
                <img src={selectedItem.image} alt={selectedItem.name} className='imageModalCars' />
              </Carousel.Item>
              {selectedItem?.imageBack && (
                <Carousel.Item>
                  <img src={selectedItem.imageBack} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              )}
              {selectedItem?.imageInside && (
                <Carousel.Item>
                  <img src={selectedItem.imageInside} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              )}
              {selectedItem?.extraImage && (
                <Carousel.Item>
                  <img src={selectedItem.extraImage} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              )}
              {selectedItem?.extraImage2 && (
                <Carousel.Item>
                  <img src={selectedItem.extraImage2} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              )}
              {selectedItem?.extraImage3 && (
                <Carousel.Item>
                  <img src={selectedItem.extraImage3} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              )}
              {selectedItem?.extraImage4 && (
                <Carousel.Item>
                  <img src={selectedItem.extraImage4} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              )}
              {selectedItem?.extraImage5 && (
                <Carousel.Item>
                  <img src={selectedItem.extraImage5} alt={selectedItem.name} className='imageModalCars' />
                </Carousel.Item>
              )}
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
                placeholder={t('cars.discountPlaceholder')}
                className='inputContact'
              />
              <Button className='bookNowModal' onClick={() => handleBook(selectedItem.name, discountCode)}>
                {t('cars.bookNow')}
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Cars;
