import React from 'react';
import styles from '/styles/project2.module.scss'
import '/styles/project2.module.scss';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
  Offcanvas,
  FormControl,
  Button, Form
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
          <Navbar.Collapse className={`d-none d-md-block ${styles.navTop}`}>
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
          <Navbar.Toggle aria-controls="offcanvasNavbar"/>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            className={styles.offcanvas}
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">My Second web</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className={`list-unstyled ${styles.mobileMenu}`}>
                <li><a className="text-decoration-none link-dark active">Home</a></li>
                <li>
                  <a className="text-decoration-none link-dark">Intro</a>
                  <ul className={"list-unstyled ms-3"}>
                    <li><a className="text-decoration-none link-dark active">About us</a>
                    </li>
                    <li><a className="text-decoration-none link-dark active">Find us</a>
                    </li>
                  </ul>
                </li>
                <li><a className="text-decoration-none link-dark">Documents</a></li>
                <li><a className="text-decoration-none link-dark">Gallery</a></li>
                <li><a className="text-decoration-none link-dark">Blog</a></li>
                <li><a className="text-decoration-none link-dark">Events</a></li>
                <li><a className="text-decoration-none link-dark">Reviews</a></li>
                <li><a className="text-decoration-none link-dark">Reservation</a></li>
                <li><a className="btn btn-outline-secondary w-100"><i
                  className="fa fa-search"/></a></li>
              </ul>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderSection;
