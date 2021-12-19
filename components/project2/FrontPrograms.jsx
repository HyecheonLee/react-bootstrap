import React from 'react';
import styles from '/styles/project2.module.scss'

const FrontPrograms = () => {
  return (
    <section className={styles.frontPrograms}>
      <div className={styles.sectionContent}>
        <div className={"container-xxl"}>
          <div className={"row justify-content-center"}>
            <div className={"col-md-10 text-center"}>
              <h3 className={"mb-3"}>Our programs!</h3>
              <p className={"lead"}>Wow! Below are our amazing special programs.</p>
              <br/>
              <div className="row justify-content-center px-2">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div
                    className={`${styles.programItem} bg-white border p-2 shadow-box`}>
                    <a href={"#"} className={"text-decoration-none"}>
                      <img src="/project2/images/project-1.jpg" alt={"Project 1"}
                           className={"img-fluid"}/>
                    </a>
                    <p className="mb-0">Program 1</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div
                    className={`${styles.programItem} bg-white border p-2 shadow-box`}>
                    <a href={"#"} className={"text-decoration-none"}>
                      <img src="/project2/images/project-2.jpg" alt={"Project 2"}
                           className={"img-fluid"}/>
                    </a>
                    <p className="mb-0">Program 2</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div
                    className={`${styles.programItem} bg-white border p-2 shadow-box`}>
                    <a href={"#"} className={"text-decoration-none"}>
                      <img src="/project2/images/project-3.jpg" alt={"Project 3"}
                           className={"img-fluid"}/>
                    </a>
                    <p className="mb-0">Program 3</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div
                    className={`${styles.programItem} bg-white border p-2 shadow-box`}>
                    <a href={"#"} className={"text-decoration-none"}>
                      <img src="/project2/images/project-4.jpg" alt={"Project 4"}
                           className={"img-fluid"}/>
                    </a>
                    <p className="mb-0">Program 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontPrograms;
