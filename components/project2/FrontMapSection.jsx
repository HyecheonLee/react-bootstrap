import React, {useEffect} from 'react';
import Script from "next/script";
import {KakaoMapLauncher} from "./KakaoMapLauncher";

const FrontMapSection = () => {
  useEffect(() => {
    KakaoMapLauncher("map", 37.57599184507025, 126.9769613271878)
  }, []);
  return (
    <>
      <div id="frontMap">
        <div className="container-fluid mb-3 py-3">
          <div id="map"></div>
          <div className="container">
            <div className={"row"}>
              <div className={"col-md-4 offset-md-8 col-10 contact-us"}>
                <p className={"mb-0 fw-light"}>
                  <i className={"fas fa-phone-square me-2"}/>
                  <a href={"tel:02-1111-1111"}
                     className={"text-decoration-none link-success"}>02-1111-1111</a>
                  <br/>
                  <i className={"fas fa-home"}/>11-111 Gil-dong Jung-gu Seoul Korea
                  <br/>
                  <a href="#" className={"text-decoration-none link-success"}><i
                    className="fas fa-hand-point-right"/>Go to Kakao place</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontMapSection;
