import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/SingleItemSliderMain.scss"
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

const SingleItemCarousel = () => {
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    
      return (
        
        <div className="sliderMain">
            <div className="sliderMainText">
                <p><span className="date">August 26, 2013</span> 
                    <img src="/comment ico.png"/> <span>22 Comments</span></p>
                <h2>'Margot' breathlessly reimagines Anne Frank's sister</h2>
            </div>
            <Slider {...settings}>
              <div className="slider-items">
                <img src="/Layer 48.png"/>
              </div>
              <div className="slider-items">
                <img src="/Layer 48.png"/>
              </div >
              <div className="slider-items">
                 <img src="/Layer 48.png"/>
              </div>
            </Slider>
        </div>
  )
}

export default SingleItemCarousel
