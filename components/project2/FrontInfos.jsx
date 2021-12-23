import React from 'react';
import '/styles/project2.module.scss';

const FrontInfos = () => {
  return (
    <section className={"frontInfos"}>
      <div className={"sectionContent"}>
        <div className={"container-xxl"}>
          <h3 className={"text-center mb-4"}>Our Infos and How to Contact us</h3>
          <div className={"row w-75 mx-auto socials"}>
            <div className={"col-6 col-lg-3 mb-4"}>
              <div className={"card shadowBox"}>
                <a href="tel:02-1111-1111">
                  <img src="/project2/images/icon-phone.png" alt="Phone"
                       className="card-img"/>
                </a>
              </div>
            </div>
            <div className={"col-6 col-lg-3 mb-4"}>
              <div className={"card shadowBox"}>
                <a href="#">
                  <img src="/project2/images/icon-kakao-channel.png" alt="kakao-channel"
                       className="card-img"/>
                </a>
              </div>
            </div>
            <div className={"col-6 col-lg-3 mb-4"}>
              <div className={"card shadowBox"}>
                <a href="#">
                  <img src="/project2/images/icon-youtube.png" alt="youtube"
                       className="card-img"/>
                </a>
              </div>
            </div>
            <div className={"col-6 col-lg-3 mb-4"}>
              <div className={"card shadowBox"}>
                <a href="#">
                  <img src="/project2/images/icon-facebook.png" alt="facebook"
                       className="card-img"/>
                </a>
              </div>
            </div>
          </div>
          <div className={"row justify-content-center infos"}>
            <div className={"col-md-4 mb-3"}>
              <div className={"card card-body shadow-sm p-4 text-center box-bg"}>
                <i className={"fas fa-map-marked-alt fa-4x"}/>
                <h4 className={"mb-4"}>How to find</h4>
                <hr/>
                <div className={"fw-light"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur eius excepturi id officiis pariatur possimus ratione
                    repellat repudiandae voluptatem voluptatibus.</p>
                </div>
              </div>
            </div>
            <div className={"col-md-4 mb-3"}>
              <div className={"card card-body shadow-sm p-4 text-center box-bg"}>
                <i className={"fas fa-clock fa-4x"}/>
                <h4 className={"mb-4"}>Business hour</h4>
                <hr/>
                <div className={"fw-light"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur eius excepturi id officiis pariatur possimus ratione
                    repellat repudiandae voluptatem voluptatibus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontInfos;
