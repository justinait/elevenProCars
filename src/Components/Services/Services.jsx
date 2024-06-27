import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Services.css'

function Services() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: false
    };
    
    const images = [
        {
          url: '/home/house2.jpg',
          text: 'We manage your stay in villas, chales, houses.',
          className: 'blackText'
        },
        {
          url: '/home/driver2.jpg',
          text: 'Private transport Mallorca. Airports, Hotels, or wherever you need.'
        },
        {
          url: '/home/bar.jpg',
          text: 'Reservations at NightClubs and Restaurants. Logistics for easy parking in high-demand areas.'
        },
      ];
      

  return (
    <div>
        
        <p className='ourFocus aboutUs'>ABOUT US</p>

        <Slider {...settings}>
          {images.map((e, index) => (
            <div key={index} className='carouselItemDiv'>
              <img className='imageServicesCarousel' src={e.url} alt={`Slide ${index + 1}`} loading="lazy" />
              <p className={`imageServicesText ${e.className || ''}`}>{e.text}</p>
            </div>
          ))}
        </Slider>

    </div>
  )
}

export default Services