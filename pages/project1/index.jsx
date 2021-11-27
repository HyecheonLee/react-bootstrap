import React from 'react';
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Link from "next/link"
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button, Image
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const Index = () => {
  return (
    <>
      <Head>
        <title>My first Web</title>
      </Head>
      <>
        <Navbar expand="lg"
                className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-lg sticky-top">
          <div className="container">
            <Link href="/project1">
              <a className="navbar-brand align-middle">
                <h3 className="m-0">
                  <Image height="36" width={"auto"} src="/images/bootstrap-big-logo.png"
                         alt="Logo"/>
                  My BS5 web
                </h3>
              </a>
            </Link>
            <Navbar.Toggle aria-controls="navbarSupportedContent" aria-expanded="false"/>
            <NavbarCollapse id="navbarSupportedContent"
                            className="collapse navbar-collapse">
              <Nav className="ms-auto mb-2 mb-lg-0">
                <Nav.Item>
                  <Link href={"#top"}>
                    <a className="nav-link">Home</a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href={"#top"}>
                    <a className="nav-link">Intro</a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href={"#top"}>
                    <a className="nav-link">Services</a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href={"#top"}>
                    <a className="nav-link">Slogan</a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href={"#top"}>
                    <a className="nav-link">Gallery</a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href={"#top"}>
                    <a className="nav-link">Contact</a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href={"#top"}>
                    <a className="nav-link">Find us</a>
                  </Link>
                </Nav.Item>
              </Nav>
            </NavbarCollapse>
          </div>
        </Navbar>
      </>
    </>
  );
};

export default Index;
