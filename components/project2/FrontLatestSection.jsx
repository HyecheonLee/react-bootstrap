import React from 'react';

const FrontLatestSection = () => {
  return (
    <section className={"frontLatest"}>
      <div className={"sectionContent"}>
        <div className={"container-xxl"}>
          <h3 className={"text-center mb-4 display-3 fw-bold"}>New Articles</h3>
          <p className={"lead text-center mb-5"}>Meet our New Articles</p>
          <div className={"row"}>
            <div className={"col-6 mb-5 latest-posts"}>
              <div className={"latest-posts-header mb-4"}>
                <h4>Latest posts</h4>
              </div>
              <div className={"card latest-post"}>
                <div className={"row g-0 align-items-center"}>
                  <div className={"col-md-4 latest-post-featured"}>
                    <img src="/project2/images/port1.jpg"/>
                  </div>
                  <div className={"col-md-8 latest-post-text"}>
                    <div className={"card-body"}>
                      <div className={"card-title fw-bold"}>
                        <a href={"/project2/posts"}>Sample Post</a>
                      </div>
                      <p className={"card-text"}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Accusamus adipisci aliquam deserunt eaque
                        eveniet harum hic iste obcaecati pariatur tenetur.</p>
                      <p className={"card-text"}><small
                        className={"text-muted"}>2021-12-28</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"card latest-post"}>
                <div className={"row g-0 align-items-center"}>
                  <div className={"col-md-4 latest-post-featured"}>
                    <img src="/project2/images/port2.jpg"/>
                  </div>
                  <div className={"col-md-8 latest-post-text"}>
                    <div className={"card-body"}>
                      <div className={"card-title fw-bold"}>
                        <a href={"/project2/posts"}>Sample Post</a>
                      </div>
                      <p className={"card-text"}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Accusamus adipisci aliquam deserunt eaque
                        eveniet harum hic iste obcaecati pariatur tenetur.</p>
                      <p className={"card-text"}><small
                        className={"text-muted"}>2021-12-28</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div className={"text-center"}>
                <a href={"/project2/blog"} className={"btn btn-outline-primary"}>
                  View more posts
                </a>
              </div>
            </div>
            <div className={"col-6 mb-5 latest-reviews"}>
              <div className={"latest-reviews-header mb-4"}>
                <h4>Latest reviews</h4>
              </div>
              <div className={"card latest-review"}>
                <div className={"row g-0 align-items-center"}>
                  <div className={"col-md-4 latest-review-featured"}>
                    <img src="/project2/images/port3.jpg"/>
                  </div>
                  <div className={"col-md-8 latest-review-text"}>
                    <div className={"card-body"}>
                      <div className={"card-title fw-bold"}>
                        <a href={"/project2/reviews"}>Sample Review</a>
                      </div>
                      <p className={"card-text"}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Accusamus adipisci aliquam deserunt eaque
                        eveniet harum hic iste obcaecati pariatur tenetur.</p>
                      <p className={"card-text"}><small
                        className={"text-muted"}>2021-12-28</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"card latest-review"}>
                <div className={"row g-0 align-items-center"}>
                  <div className={"col-md-4 latest-review-featured"}>
                    <img src="/project2/images/port4.jpg"/>
                  </div>
                  <div className={"col-md-8 latest-review-text"}>
                    <div className={"card-body"}>
                      <div className={"card-title fw-bold"}>
                        <a href={"/project2/reviews"}>Sample Post</a>
                      </div>
                      <p className={"card-text"}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Accusamus adipisci aliquam deserunt eaque
                        eveniet harum hic iste obcaecati pariatur tenetur.</p>
                      <p className={"card-text"}><small
                        className={"text-muted"}>2021-12-28</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div className={"text-center"}>
                <a href={"/project2/blog"} className={"btn btn-outline-primary"}>
                  View more reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontLatestSection;
