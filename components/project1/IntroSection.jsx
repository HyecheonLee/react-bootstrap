import React from 'react';
import Link from "next/link";

const IntroSection = () => {
  return (
    <section id="intro">
      <div className="section-content">
        <div className="container intro">
          <div className="row align-items-center">
            <div className="col-md-6 intro-first">
              <div className="row px-md-3">
                <div className="col-6">
                  <div className="card card-body my-3 position-relative rounded-3 shadow-lg intro-first-card">
                    <div className="overlay d-flex justify-content-center align-items-center position-absolute h-100 w-100 shadow-lg">
                      <h3 className="fw-light">
                        <Link href="#">
                          <a className="link-light text-decoration-none">Link 1</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="card card-body my-3 position-relative rounded-3 shadow-lg intro-first-card">
                    <div
                      className="overlay d-flex justify-content-center align-items-center position-absolute h-100 w-100 shadow-lg">
                      <h3 className="fw-light">
                        <Link href="#">
                          <a className="link-light text-decoration-none">Link 2</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="card card-body my-3 position-relative rounded-3 shadow-lg intro-first-card">
                    <div
                      className="overlay d-flex justify-content-center align-items-center position-absolute h-100 w-100 shadow-lg">
                      <h3 className="fw-light">
                        <Link href="#">
                          <a className="link-light text-decoration-none">Link 3</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="card card-body my-3 position-relative rounded-3 shadow-lg intro-first-card">
                    <div
                      className="overlay d-flex justify-content-center align-items-center position-absolute h-100 w-100 shadow-lg">
                      <h3 className="fw-light">
                        <Link href="#">
                          <a className="link-light text-decoration-none">Link 4</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 intro-second">
              <h5 className="fw-light">Greetings!</h5>
              <h1 className="mb-4">Introduce our website.</h1>
              <div className="intro-text">
                <p className="lead">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Culpa, reprehenderit.</p>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Accusantium dolor et impedit, libero minus
                  necessitatibus non nostrum officia provident repellat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
