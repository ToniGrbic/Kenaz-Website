import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SingleItemSliderMain.scss"
import MainNextArrow from './MainNextArrow';
import MainPrevArrow from './MainPrevArrow';

const SingleItemMainCarousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <MainNextArrow />,
    prevArrow: <MainPrevArrow />
  };

  return (

    <div className="sliderMain">
      <div className="sliderMainText">
        <p className="date"><span >August 26, 2013</span>
          <span className="comments"><img src="/comment ico.png" />  22 Comments</span></p>
        <h2>'Margot' breathlessly reimagines Anne Frank's sister</h2>
        <button type="button" className="readArticleBtn">Read Article</button>
      </div>
      
      <div className="backgroundWrapper"/>

      <Slider {...settings}>
        <div>
          <img src="Layer 48.png"/>
        </div>
        <div>
          <img src="Layer 48.png" />
        </div>
        <div>
          <img src="Layer 48.png" />
        </div>
      </Slider>
    </div>
  
  )
}

export default SingleItemMainCarousel
