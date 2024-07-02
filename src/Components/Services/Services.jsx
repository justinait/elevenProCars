import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Services.css'

function Services() {
  const [isDesktopScreen, setIsDesktopScreen] = useState(window.innerWidth >= 1200);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktopScreen(window.innerWidth >= 1200);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
    };
    
    const images = !isDesktopScreen ? [
      {
        url: '/home/housemallorca3.jpg',
        text: 'We manage your stay in villas, chales, houses.',
      },
      {
        url: '/home/aerop.jpg',
        text: 'Private transport Mallorca. Airports, Hotels, or wherever you need.'
      },
      {
        url: '/home/bar3.jpg',
        text: 'Reservations at NightClubs and Restaurants.'
      },
      {
        url: '/home/driver2.jpg',
        text: 'Logistics for easy parking in high-demand areas.'
      },
      {
        url: '/home/yacht.jpg',
        text: 'Unique experiences in the island.',
        className: 'blackText'
      },
    ] : [
      {
        url: '/home/house2.jpg',
        text: 'We manage your stay in villas, chales, houses.',
      },
      {
        url: '/home/aerop.jpg',
        text: 'Private transport Mallorca. Airports, Hotels, or wherever you need.'
      },
      {
        url: '/home/bar2.jpg',
        text: 'Reservations at NightClubs and Restaurants.'
      },
      {
        url: '/home/driver2.jpg',
        text: 'Logistics for easy parking in high-demand areas.'
      },
      {
        url: '/home/yacht.jpg',
        text: 'Unique experiences in the island.'
      },
    ]
      

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