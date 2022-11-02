import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/SingleItemSliderMain.scss";
import { Link } from "react-router-dom";
import MainNextArrow from "../MainNextArrow";
import MainPrevArrow from "../MainPrevArrow";

const SingleItemMainCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <MainNextArrow />,
    prevArrow: <MainPrevArrow />,
  };

  return (
    <div className="sliderMain">
      <Slider {...settings}>
        {["1", "2", "3"].map((index) => {
          return (
            <div className="sliderItem" key={index}>
              <img
                src="/Layer 31.png"
                className="backgroundWrapper"
                alt="wrapper"
                loading="eager"
              />
              <img src="Layer 48.png" alt={`image${index}`} />
              <div className="sliderMainText">
                <div className="heading">
                  <div className="date">August 26, 2013</div>
                  <div className="comments">
                    <img src="/comment ico.png" alt="comment" /> 22 Comments
                  </div>
                </div>
                <h2>'Margot' breathlessly reimagines Anne Frank's sister</h2>
                <button className="readArticleBtn transparentBtn">
                  <Link to="/articles/1">Read Article</Link>
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SingleItemMainCarousel;
