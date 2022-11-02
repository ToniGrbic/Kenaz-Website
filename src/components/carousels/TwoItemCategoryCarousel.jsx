import React, {useRef} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/CategoryCarousel.scss"

const TwoItemCategoryCarousel = ({ title, color, textItems }) => {
    const slider = useRef(null)
   
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    }
    return (
        <div className='categoryDiv'>
            <div className='stripe'
                 style={{background:`${color}`}}>
            </div>
            <h3>{title}</h3>
            
                <Slider {...settings} ref={slider} className="items">
                    {textItems?.map((text, index) => {
                        return (
                          <div className="carouselItem" key={index}>
                            <img
                              loading="lazy"
                              src="Layer 52.png"
                              alt={`image${index}`}
                              
                            />
                            <div className="carouselItemText">
                              <p className="date">August 26, 2013</p>
                              <p>{text}</p>
                            </div>
                          </div>
                        );
                    })}
                </Slider>
            
            <div className="carouselBtnsDiv">
                <button className="sliderBtn"
                        onClick={() => slider?.current.slickPrev()}>
                    <img src={'Shape 1.png'} alt="prev"/>
                </button>
                <button className="sliderBtn"
                        onClick={() => slider?.current.slickNext()}>
                    <img src={'Shape 1 (1).png'} alt="next"/>
                </button>
            </div>
                    
        </div>
    )
}

export default TwoItemCategoryCarousel