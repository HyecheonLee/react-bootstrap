import React from 'react';
import Link from "next/link";

const TopSection = () => {
  return (
    <section id="top" className="position-relative">
      <div
        className="section-content overlay d-flex justify-content-center align-items-center">
        <div className="container-xxl text-white">
          <div className="row align-items-center">
            <div className="col-md-9 welcome">
              <h1 className="welcome-title fw-light">
                Welcom to <span
                className="text-warning fw-bold">my first website.</span>Lorem ipsum
                dolor sit amet,
                consectetur adipisicing elit. Incidunt, saepe!
              </h1>
              <div className="divider"/>
              <div className="row-cols-4 welcome-desc">
                <p className="col-sm-10 col-md-12 lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
                  recusandae!
                </p>
                <p className="col-sm-2 col-md-12">
                  <Link href="#">
                    <a className="btn btn-primary">Read more</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-none d-md-block letsgo">
              <div className="card card-body letsgo-card">
                <div className="letsgo my-3">
                  <h4 className="letsgo-title card-title text-dark mb-3">
                    Easy contact!
                  </h4>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                    voluptas!
                  </p>
                </div>
                <div className="letsgo-card-form">
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control"
                             placeholder="Your name"/>
                    </div>
                    <div className="mb-3">
                      <input type="tel" className="form-control"
                             placeholder="Your phone"/>
                    </div>
                    <div className="form-check mb-3">
                      <input type="checkbox" className="form-check-input"
                             id="flexCheckDefault"
                             placeholder="Your name"/>
                      <label htmlFor="flexCheckDefault"
                             className="form-check-label text-secondary">
                        I agree to provide privacy.
                      </label>
                    </div>
                    <p className="mb-3">
                      <button className="btn btn-primary w-100" type="button">Submit
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
