import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/CategoryCarousel.scss"

const SingleItemCategoryCarousel = ({color, title, textItems}) => {
    const slider = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className='categoryDiv singleItemDiv'>

            <div className='stripe'
                style={{ background: `${color}` }}>
            </div>
            <h3>{title}</h3>

            <Slider {...settings} ref={slider} className="items">
                {textItems?.map((text, index) => {
                    return (
                        <div className='carouselItem'
                             key={index}>
                            <img src="Layer 50.png"
                                alt="image"

                            />
                            <div className="carouselItemText">
                                <p className="date">August 26, 2013</p>
                                <p>{text}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>

            <div className="carouselBtnsDiv">
                <button className="sliderBtn"
                    onClick={() => slider?.current.slickPrev()}>
                    <img src={'Shape 1 (2).png' } />
                </button>
                <button className="sliderBtn"
                    onClick={() => slider?.current.slickNext()}>
                    <img src={'Shape 1 (3).png'} />
                </button>
            </div>

        </div>
    )
}

export default SingleItemCategoryCarousel