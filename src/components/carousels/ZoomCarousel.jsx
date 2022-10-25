import React, {useState, useRef} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/ZoomCarousel.scss"

const images = ["Layer 36.png", "Layer 37.png", "Layer 39.png", "Layer 40.png", "Layer 41.png", "Layer 42.png","Layer 44.png"]

const ZoomCarousel = () => {
    const [isZoom, setIsZoom] = useState(false)
    const [currentImgIndex, setCurrentImgIndex] = useState(0)
    const slider = useRef(null)
    
    const toggleZoom= ()=>{
          setIsZoom((prev) => !prev)
    }
    const saveIndex = (i)=>{
        setCurrentImgIndex(i)
    }

    const handleNextClick = ()=>{
        setIsZoom(false)
        slider?.current.slickNext()
        if(currentImgIndex < images.length-1)
            setCurrentImgIndex(prev=>prev+1)
        else    
            setCurrentImgIndex(0)
    }

    const handlePrevClick = () => {
        setIsZoom(false)
        slider?.current.slickPrev()
        if (currentImgIndex > 0)
            setCurrentImgIndex(prev => prev - 1)
        else
            setCurrentImgIndex(images.length-1)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: Imgs => (
            <div style={{
                width: '920px',
                height: '120px',
                padding: '10px',
                display: 'flex',
                gap: '100px',
                zIndex:20,
                marginBottom:'40px',
                marginLeft: '5px',
            }}>
                {Imgs}
            </div>
        ),
        customPaging: i => (
                    
         <div key={i} 
              className="navigationImg">
                <img src={images[i]}
                     onClick={()=>saveIndex(i)} />
         </div>       
        )
      };
      
    return (
      <div className="zoomCarouselContainer">
        <div className="zoomCarouselBg" />
        <div className="zoomInDiv" onClick={toggleZoom} />

        <div className="prevBtnContainer" onClick={handlePrevClick} />

        <div className="nextBtnContainer" onClick={handleNextClick} />

        {isZoom && (
          <div className="modal">
            <div className="close" onClick={toggleZoom}>
              &times;
            </div>
            <div className="modal-content">
            <img
              src={images[currentImgIndex]}
            />
            </div>
          </div>
        )}

        <Slider {...settings} ref={slider}>
          {images.map((image, index) => {
            return (
              <div key={image} className="carouselImg">
                <img src={image} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
}

export default ZoomCarousel