import React from 'react';
import Head from "next/head";
import HeaderSection from "../../components/project2/HeaderSection";
import FrontCarousel from "../../components/project2/FrontCarousel";

const Index = () => {
  return (
    <>
      <Head>
        <title>My Second Web</title>
      </Head>
      <body>
      <HeaderSection/>
      <FrontCarousel/>
      </body>
    </>
  );
};

export default Index;
