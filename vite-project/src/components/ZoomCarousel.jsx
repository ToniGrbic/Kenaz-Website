import React, {useState, useRef, useEffect} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ZoomCarousel.scss"
import MainNextArrow from './MainNextArrow';
import MainPrevArrow from './MainPrevArrow';
const images = ["Layer 36.png", "Layer 37.png", "Layer 39.png", "Layer 40.png", "Layer 41.png", "Layer 42.png"]

const ZoomCarousel = () => {
    
    
   const slider1 = useRef(null)
   const slider2 = useRef(null)

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
        <div>
        <div className="zoomCarouselContainer">
            
         <div className="zoomCarouselBg"/>   

            <Slider asNavFor={slider2.current}
                    ref={slider1}>
                 {images.map((image)=>{
                        return (
                            <div key={image} className="carouselImg">
                                <img src={image} />
                            </div>
                        )
                })} 
               
            </Slider>
       
            <Slider 
                asNavFor={slider1.current}
                ref={slider2}
                slidesToShow={6}
                swipeToSlide={false}
                focusOnSelect={true}
                className="navCarousel"
                
            >
                {images.map((image) => {
                    return (
                        <div key={image} className="navCarouselImg">
                            <img src={image} />
                        </div>
                    )
                })}
            </Slider>
        </div>         
     </div>   

    )
}

export default ZoomCarousel