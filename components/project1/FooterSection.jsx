import React from 'react';

const FooterSection = () => {
  return (
    <footer id="footer">
      <div className={"section-content container"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-3 mb-4  footer-1"}>
              <img src="/images/bootstrap-big-logo.png" alt={"Logo"}
                   className={"img-fluid footer-logo"}/>
              <div className={"sns mt-4"}>
                <a target="_blank" href="#"
                   className={"mx-1 text-decoration-none social"}>
                  <img src="/images/icon-facebook.png" alt={"Facebook"} width={"38px"}/>
                </a>
                <a target="_blank" href="#"
                   className={"mx-1 text-decoration-none social"}>
                  <img src="/images/icon-instagram.png" alt={"instagram"} width={"38px"}/>
                </a>
                <a target="_blank" href="#"
                   className={"mx-1 text-decoration-none social"}>
                  <img src="/images/icon-twitter.png" alt={"twitter"} width={"38px"}/>
                </a>
                <a target="_blank" href="#"
                   className={"mx-1 text-decoration-none social"}>
                  <img src="/images/icon-youtube.png" alt={"youtube"} width={"38px"}/>
                </a>
                <a target="_blank" href="#"
                   className={"mx-1 text-decoration-none social"}>
                  <img src="/images/icon-naver-block.png" alt={"naver-block"}
                       width={"38px"}/>
                </a>
                <a target="_blank" href="#"
                   className={"mx-1 text-decoration-none social"}>
                  <img src="/images/icon-kakao-channel.png" alt={"kakao-channel"}
                       width={"38px"}/>
                </a>
              </div>
            </div>
            <div className={"col-md-3 mb-4  footer-2"}>
              <h4 className={"mb-4"}>Footer 2</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className={"col-md-3 mb-4  footer-3"}>
              <h4 className={"mb-4"}>Footer 3</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className={"col-md-3 mb-4  footer-4"}>
              <h4 className={"mb-4"}>Our Infos</h4>
              <div className={"info-body"}>
                <p className={"mb-2"}>
                  <i className={"fas fa-user"}/>CEO: Hong Gil-dong
                </p>
                <p className={"mb-2"}>
                  <i className={"fas fa-map-marked-alt"}/>Address: 11-1111 Jung-gu
                </p>
                <p className={"mb-2"}>
                  <i className={"fas fa-phone-square-alt"}/>Telephone: 02-111-1111
                </p>
                <p className={"mb-2"}>
                  <i className={"fas fa-hospital"}/>Registered Business Number:
                  111-11-1111
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
