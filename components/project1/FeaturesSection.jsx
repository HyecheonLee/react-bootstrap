import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="section-content">
        <div className={"container feature"}>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-body shadow border-0 features-card">
                <h4 className="card-title mb-3">
                  <span className="fw-bold">1</span>
                  Feature 1
                </h4>
                <p className={"card-text fw-light"}>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Doloremque ex ipsam iusto magnam maiores
                  maxime qui quidem recusandae tempora voluptatum!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body shadow border-0 features-card">
                <h4 className="card-title mb-3">
                  <span className="fw-bold">2</span>
                  Feature 2
                </h4>
                <p className={"card-text fw-light"}>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Doloremque ex ipsam iusto magnam maiores
                  maxime qui quidem recusandae tempora voluptatum!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body shadow border-0 features-card">
                <h4 className="card-title mb-3">
                  <span className="fw-bold">3</span>
                  Feature 3
                </h4>
                <p className={"card-text fw-light"}>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Doloremque ex ipsam iusto magnam maiores
                  maxime qui quidem recusandae tempora voluptatum!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
