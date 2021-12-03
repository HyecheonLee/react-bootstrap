import React from 'react';

const CtaSection = () => {
  return (
    <section id={"cta"} className={"position-relative"}>
      <div
        className={"section-content position-absolute h-100 w-100 start-0 top-0 overlay d-flex flex-column justify-content-center align-items-center"}>
        <div className={"container text-center cta"}>
          <h3 className={"display-6 text-primary"}>
            Contact us anytime!
          </h3>
          <h2 className={"display-4 text-light"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <p className={"lead text-light mb-4"}>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Adipisci ducimus, natus nihil optio quasi temporibus veniam
            vero. Eos, nobis, quas.</p>
          <h1 className={"m-0"}>
            <a href="tel:02-111-1111"
               className="link-warning text-decoration-none">02-111-1111</a>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
