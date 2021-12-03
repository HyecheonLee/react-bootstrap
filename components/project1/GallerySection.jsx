import React from 'react';

const GallerySection = () => {
  return (
    <section id="gallery">
      <div className={"section-content"}>
        <div className={"container gallery"}>
          <div className={"gallery-header text-center mb-5"}>
            <h1 className={"display-4"}>Our gallery</h1>
            <p className={"lead text-secondary"}>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A autem consectetur corporis dolore ea eaque illum
              obcaecati odit officia tempore.
            </p>
          </div>
          <div className={"divider"}/>
          <div className={"gallery-body row"}>
            <div className={"col-md-4 col-sm-6 mb-4 gallery-item"}>
              <div className={"card card-body border-0 p-0"}>
                <div
                  className={"overlay d-flex flex-column justify-content-center align-items-center h-100 w-100 border-2"}>
                  <h2 className={"gallery-title"}>Gallery 1</h2>
                  <a href={"#"} className={"link-warning text-decoration-none"}>View
                    this gallery</a>
                </div>
              </div>
            </div>
            <div className={"col-md-4 col-sm-6 mb-4 gallery-item"}>
              <div className={"card card-body border-0 p-0"}>
                <div
                  className={"overlay d-flex flex-column justify-content-center align-items-center h-100 w-100 border-2"}>
                  <h2 className={"gallery-title"}>Gallery 2</h2>
                  <a href={"#"} className={"link-warning text-decoration-none"}>View
                    this gallery</a>
                </div>
              </div>
            </div>
            <div className={"col-md-4 col-sm-6 mb-4 gallery-item"}>
              <div className={"card card-body border-0 p-0"}>
                <div
                  className={"overlay d-flex flex-column justify-content-center align-items-center h-100 w-100 border-2"}>
                  <h2 className={"gallery-title"}>Gallery 3</h2>
                  <a href={"#"} className={"link-warning text-decoration-none"}>View
                    this gallery</a>
                </div>
              </div>
            </div>
            <div className={"col-md-4 col-sm-6 mb-4 gallery-item"}>
              <div className={"card card-body border-0 p-0"}>
                <div
                  className={"overlay d-flex flex-column justify-content-center align-items-center h-100 w-100 border-2"}>
                  <h2 className={"gallery-title"}>Gallery 4</h2>
                  <a href={"#"} className={"link-warning text-decoration-none"}>View
                    this gallery</a>
                </div>
              </div>
            </div>
            <div className={"col-md-4 col-sm-6 mb-4 gallery-item"}>
              <div className={"card card-body border-0 p-0"}>
                <div
                  className={"overlay d-flex flex-column justify-content-center align-items-center h-100 w-100 border-2"}>
                  <h2 className={"gallery-title"}>Gallery 5</h2>
                  <a href={"#"} className={"link-warning text-decoration-none"}>View
                    this gallery</a>
                </div>
              </div>
            </div>
            <div className={"col-md-4 col-sm-6 mb-4 gallery-item"}>
              <div className={"card card-body border-0 p-0"}>
                <div
                  className={"overlay d-flex flex-column justify-content-center align-items-center h-100 w-100 border-2"}>
                  <h2 className={"gallery-title"}>Gallery 6</h2>
                  <a href={"#"} className={"link-warning text-decoration-none"}>View
                    this gallery</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
