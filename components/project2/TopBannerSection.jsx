import React from 'react';

const TopBannerSection = () => {
  return <section id="topBanner" className={"mx-3"}>
    <div
      className={"section-content overlay d-flex justify-content-center align-items-center"}>
      <div className={"container"}>
        <div className={"text-center"}>
          <h1 className={"display-4"}>Page Title</h1>
          <h4 className={"fw-light"}>Page subtitle here</h4>
        </div>
      </div>
    </div>
  </section>
};

export default TopBannerSection;
