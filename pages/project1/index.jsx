import React from 'react';
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const Index = () => {
  return (
    <>
      <Head>
        <title>My first Web</title>
      </Head>
      <>
        <h1 className="display-1"><i className="fas fa-home"/>hello world</h1>
      </>
    </>
  );
};

export default Index;
