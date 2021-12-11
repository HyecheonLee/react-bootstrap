import React from 'react';
import styles from '/styles/project2.module.scss'
import '/styles/project2.module.scss';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

const HeaderSection = () => {

  return (
    <header id="header" className={`${styles.wrapper}`}>
      <section id={"navTop"} className={`${styles.navTop} py-2 d-none d-md-block`}>
        <div className={"container"}>
          <div className={"row align-items-center justify-content-center"}>
            <div className={`col-3 text-start ${styles.fastCounsel}`}>
              <a href={"#"} className={"btn btn-outline-dark"}>Contact</a>
            </div>
            <div className={`col-4 logo`}>
              <div className={`navbar-brand d-flex`}>
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-bottom`}>
                      Tooltip on <strong>{"bottom"}</strong>.
                    </Tooltip>
                  }
                >
                  <img src="/project2/images/dummy-logo.png"
                       width="200px"
                       className={`img-fluid ms-auto`}/>
                </OverlayTrigger>
              </div>
            </div>
            <div className={`col-5 text-end ${styles.socials}`}>
              <a href="#" className={`mx-1 text-decoration-none`}>
                <img src="/project2/images/icon-phone.png" alt="Phone" width="40px"
                     className={styles.shadowBox}/>
              </a>
              <a href="#" className={`mx-1 text-decoration-none`}>
                <img src="/project2/images/icon-kakao-channel.png" alt="Kakao"
                     width="40px"
                     className={styles.shadowBox}/>
              </a>
              <a href="#" className={`mx-1 text-decoration-none`}>
                <img src="/project2/images/icon-facebook.png" alt="Facebook" width="40px"
                     className={styles.shadowBox}/>
              </a>
              <a href="#" className={`mx-1 text-decoration-none`}>
                <img src="/project2/images/icon-twitter.png" alt="Twitter" width="40px"
                     className={styles.shadowBox}/>
              </a>
              <a href="#" className={`mx-1 text-decoration-none`}>
                <img src="/project2/images/icon-youtube.png" alt="Youtube" width="40px"
                     className={styles.shadowBox}/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand className={"d-block d-md-none"}
                        href="/project2">
            <img className={"img-fluid"} src="/project2/images/dummy-logo.png"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className={styles.navTop} id="navPrimaryContent">
            <Nav className="mx-auto">
              <Nav.Link href="/project2">Home</Nav.Link>
              <NavDropdown title="Intro" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Find us</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/project2">Documents</Nav.Link>
              <Nav.Link href="/project2">Gallery</Nav.Link>
              <Nav.Link href="/project2">Blog</Nav.Link>
              <Nav.Link href="/project2">Events</Nav.Link>
              <Nav.Link href="/project2">Reviews</Nav.Link>
              <Nav.Link href="/project2">Reservation</Nav.Link>
              <Nav.Link href="/project2" className={"btn btn-outline-secondary"}><i
                className="fa fa-search"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderSection;
