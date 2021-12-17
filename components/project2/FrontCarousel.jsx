import React from 'react';
import {Carousel} from "react-bootstrap";
import style from '../../styles/project2.module.scss';

const FrontCarousel = () => {
  return (
    <div className={`${style.frontCarousel} container-xxl`}>
      <Carousel className={style.carouselInner}>
        <Carousel.Item className={style.carouseItem}
                       style={{backgroundImage: "url('/images/bg1.jpg')"}}>
          <div
            className={`${style.carouselOverlay} text-white d-flex justify-content-center align-items-center`}>
            <div className={`${style.carouselText} text-center px-md-5`}>
              <h1 className={`${style.carouselTitle} display-4`}>Slide1</h1>
              <h3 className={`${style.carouselSubtitle}`}>Slide 1 Description. Lorem ipsum
                dolor
                sit.</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={style.carouseItem}
                       style={{backgroundImage: "url('/images/bg2.jpg')"}}>
          <div
            className={`${style.carouselOverlay} text-white d-flex justify-content-center align-items-center`}>
            <div className={`${style.carouselText} text-center px-md-5`}>
              <h1 className={`${style.carouselTitle} display-4`}>Slide2</h1>
              <h3 className={`${style.carouselSubtitle}`}>Slide 2 Description. Lorem ipsum
                dolor
                sit.</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={style.carouseItem}
                       style={{backgroundImage: "url('/images/bg3.jpg')"}}>
          <div
            className={`${style.carouselOverlay} text-white d-flex justify-content-center align-items-center`}>
            <div className={`${style.carouselText} text-center px-md-5`}>
              <h1 className={`${style.carouselTitle} display-4`}>Slide3</h1>
              <h3 className={`${style.carouselSubtitle}`}>Slide 3 Description. Lorem ipsum
                dolor
                sit.</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FrontCarousel;
