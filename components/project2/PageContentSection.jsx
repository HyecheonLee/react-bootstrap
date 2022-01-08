import React from 'react';

const PageContentSection = () => {
  return (
    <section id={"pageContent"}>
      <div className={"section-content"}>
        <div className={"container"}>
          <div className={"row"}>
            <aside className={"col-md-3 mb-4"}>
              <div className={"list-group shadow"}>
                <p className={"list-group-item list-group-item-action active mb-0"}
                   aria-current={"true"}>Current item</p>
                <a className={"list-group-item list-group-item-action"}>Sub Page 1</a>
                <a className={"list-group-item list-group-item-action"}>Sub Page 2 <span
                  className={"badge rounded-pill bg-danger float-end"}>New</span></a>
                <a className={"list-group-item list-group-item-action"}>Sub Page 3</a>
              </div>
            </aside>
            <article className={"col-md-9 mb-4 fw-light"}><p>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. A
              aspernatur blanditiis debitis, deleniti dignissimos ea fugiat id illum ipsam
              iste laborum magnam magni nam necessitatibus neque nulla odit officia
              pariatur perspiciatis quae, quaerat quam quas quidem repellendus
              reprehenderit repudiandae suscipit voluptatibus? Accusantium, cumque dicta
              dolorem eius eligendi itaque officiis suscipit.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContentSection;
