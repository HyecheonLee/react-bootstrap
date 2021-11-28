import React from 'react';
import Head from 'next/head'
import Link from "next/link"
import {Image, Nav, Navbar} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import TopSection from "../../components/project1/TopSection";
import IntroSection from "../../components/project1/IntroSection";
import NavbarSection from "../../components/project1/NavbarSection";

const Index = () => {
  return (
    <>
      <Head>
        <title>My first Web</title>
      </Head>
      <>
        <NavbarSection/>
        <TopSection/>
        <IntroSection/>
      </>
    </>
  );
};

export default Index;
