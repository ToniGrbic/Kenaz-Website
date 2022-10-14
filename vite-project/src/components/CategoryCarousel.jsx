import React, {useRef, useEffect, useState} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CategoryCarousel.scss"


const textItems = ['For Obama, MLKs shadow looms large ahead of sp', 'NASA releases portrait of a planet waving at Saturn', 'For Obama, MLKs shadow looms large ahead of sp', 'NASA releases portrait of a planet waving at Saturn']
const CategoryCarousel = ({ title, color, slidesToShow = 1, slidesToScroll = 1 }) => {
    const slider = useRef(null)
    const wrapperWidth = useRef(null)
    const [imageWidth, setImageWidth] = useState(null)

    useEffect(()=>{
        if(slidesToShow === 2){
            wrapperWidth.current = 620
            setImageWidth(260)
        }else if(slidesToShow === 1){
            wrapperWidth.current = 300
            setImageWidth(230)
        }
    },[])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
    }
    return (
        <div className='categoryDiv' 
            style={{ width: `${wrapperWidth.current}px` }}>

            <div className='stripe' 
                 style={{ background:`${color}`}}>
            </div>
            <h3>{title}</h3>
            
                <Slider {...settings} ref={slider} className="items">
                    {textItems.map((text, index) => {
                        return (
                            <div className='carouselItem' 
                                 key={index}>
                                <img src="Layer 52.png"
                                     alt="image"
                                     style={{width:`${imageWidth}px`}}
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
                        onClick={() => slider?.current?.slickPrev()}>
                    <img src={slidesToShow === 1 ? 'Shape 1 (2).png':'Shape 1.png'} />
                </button>
                <button className="sliderBtn"
                        onClick={() => slider?.current?.slickNext()}>
                    <img src={slidesToShow === 1 ? 'Shape 1 (3).png' : 'Shape 1 (1).png'} />
                </button>
            </div>
                    
        </div>
    )
}

export default CategoryCarousel