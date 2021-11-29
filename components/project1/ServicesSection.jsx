import React from 'react';
import Slider from "react-slick";
import {Image} from "react-bootstrap";

const ServicesSection = () => {
  const setting = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <section id="services">
      <div className="section-content">
        <div className="container services">
          <div className="services-header text-center mb-5">
            <h1 className="display-5">Our amazing services</h1>
            <div className="divider"></div>
            <p className="lead text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
              dignissimos dolorum eius est excepturi hic minus reprehenderit repudiandae
              velit veniam?
            </p>
          </div>
          <div className="services-body">
            <Slider {...setting}>
              <div className="services-col mx-0 my-3">
                <div className="card">
                  <a href="#">
                    <img src="/images/port1.jpg" className="card-img-top" alt=""/>
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Slide title</h4>
                    <p className="card-text fw-light mb-4">Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Accusantium beatae delectus dolore
                      dolores excepturi illo optio reiciendis, repellat sit velit?</p>
                    <a href="#" className="btn btn-primary">View more...</a>
                  </div>
                </div>
              </div>
              <div className="services-col mx-0 my-3">
                <div className="card">
                  <a href="#">
                    <img src="/images/port2.jpg" className="card-img-top" alt=""/>
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Slide title</h4>
                    <p className="card-text fw-light mb-4">Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Accusantium beatae delectus dolore
                      dolores excepturi illo optio reiciendis, repellat sit velit?</p>
                    <a href="#" className="btn btn-primary">View more...</a>
                  </div>
                </div>
              </div>
              <div className="services-col mx-0 my-3">
                <div className="card">
                  <a href="#">
                    <img src="/images/port3.jpg" className="card-img-top" alt=""/>
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Slide title</h4>
                    <p className="card-text fw-light mb-4">Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Accusantium beatae delectus dolore
                      dolores excepturi illo optio reiciendis, repellat sit velit?</p>
                    <a href="#" className="btn btn-primary">View more...</a>
                  </div>
                </div>
              </div>
              <div className="services-col mx-0 my-3">
                <div className="card">
                  <a href="#">
                    <img src="/images/port4.jpg" className="card-img-top" alt=""/>
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Slide title</h4>
                    <p className="card-text fw-light mb-4">Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Accusantium beatae delectus dolore
                      dolores excepturi illo optio reiciendis, repellat sit velit?</p>
                    <a href="#" className="btn btn-primary">View more...</a>
                  </div>
                </div>
              </div>
              <div className="services-col mx-0 my-3">
                <div className="card">
                  <a href="#">
                    <img src="/images/port5.jpg" className="card-img-top" alt=""/>
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Slide title</h4>
                    <p className="card-text fw-light mb-4">Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Accusantium beatae delectus dolore
                      dolores excepturi illo optio reiciendis, repellat sit velit?</p>
                    <a href="#" className="btn btn-primary">View more...</a>
                  </div>
                </div>
              </div>
              <div className="services-col mx-0 my-3">
                <div className="card">
                  <a href="#">
                    <img src="/images/port6.jpg" className="card-img-top" alt=""/>
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Slide title</h4>
                    <p className="card-text fw-light mb-4">Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Accusantium beatae delectus dolore
                      dolores excepturi illo optio reiciendis, repellat sit velit?</p>
                    <a href="#" className="btn btn-primary">View more...</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
