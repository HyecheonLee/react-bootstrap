import React from 'react';
import Head from "next/head";
import HeaderSection from "../../components/project2/HeaderSection";
import FooterSection from "../../components/project2/FooterSection";
import TopBannerSection from "../../components/project2/TopBannerSection";
import PageContentSection from "../../components/project2/PageContentSection";

const MyComponent = () => {
  return (
    <>
      <Head>
        <title>My Page Web</title>
      </Head>
      <body>
      <HeaderSection/>
      <TopBannerSection/>
      <PageContentSection/>
      <FooterSection/>
      </body>
    </>
  );
};

export default MyComponent;
