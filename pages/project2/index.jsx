import React from 'react';
import Head from "next/head";
import HeaderSection from "../../components/project2/HeaderSection";
import FrontCarousel from "../../components/project2/FrontCarousel";
import FrontPrograms from "../../components/project2/FrontPrograms";
import FrontInfos from "../../components/project2/FrontInfos";
import FrontLatestSection from "../../components/project2/FrontLatestSection";
import FrontMapSection from "../../components/project2/FrontMapSection";
import FooterSection from "../../components/project2/FooterSection";

const Index = () => {
  return (
    <>
      <Head>
        <title>My Second Web</title>
      </Head>
      <body>
      <HeaderSection/>
      <FrontCarousel/>
      <FrontPrograms/>
      <FrontInfos/>
      <FrontLatestSection/>
      <FrontMapSection/>
      <FooterSection/>
      </body>
    </>
  );
};

export default Index;
