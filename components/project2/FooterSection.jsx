import React from 'react';

const FooterSection = () => {
  const nowDate = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className={"sectionContent"}>
        <div className={"container"}>
          <div className={"nav-footer"}>
            <a href={"/project2/page"}
               className={"link-light text-decoration-none fw-light"}>
              Privacy policy
            </a> |
            <a href={"/project2/page"}
               className={"link-light text-decoration-none fw-light"}>
              Terms of use
            </a> |
            <a href={"/project2/page"}
               className={"link-light text-decoration-none fw-light"}>
              Business hour
            </a>
            <hr className={"hr-white"}/>
            <div className={"row align-items-center"}>
              <div className={"col-md-3 text-center mb-3 mb-md-0"}>
                <img src="/project2/images/dummy-logo.png" alt="Logo"
                     width="200px"
                     className={"img-fluid"}/>
              </div>
              <div className={"col-md-9 footer-information"}>
                <p><strong>My BS5 web</strong> | CEO Name: Gil-dong Hong | Business No:
                  111-11-1111 | TEL: 02-111-1111 <br/>Address: 11-111 Gil-dong Jung-gu
                  Seoul Korea
                  <br/>
                </p>
                <a href="tel:02-111-1111"
                   className={"mx-1 text-decoration-none socials"}>
                  <img src="/project2/images/icon-phone.png" className={"shadow-box"}
                       width={"48px"}/>
                </a>
                <a href="#"
                   className={"mx-1 text-decoration-none socials"}>
                  <img src="/project2/images/icon-facebook.png" className={"shadow-box"}
                       width={"48px"}/>
                </a>
                <a href="#"
                   className={"mx-1 text-decoration-none socials"}>
                  <img src="/project2/images/icon-kakao-channel.png"
                       className={"shadow-box"}
                       width={"48px"}/>
                </a>
                <a href="#"
                   className={"mx-1 text-decoration-none socials"}>
                  <img src="/project2/images/icon-twitter.png" className={"shadow-box"}
                       width={"48px"}/>
                </a>
                <a href="#"
                   className={"mx-1 text-decoration-none socials"}>
                  <img src="/project2/images/icon-youtube.png" className={"shadow-box"}
                       width={"48px"}/>
                </a>
                <br/>
                <span className={"copyright"}>Copyright &copy; My BS5 web - Amazing website. {nowDate}. All right Reserved. | Designed by <span
                  className={"text-warning"}>Hyecheon</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
