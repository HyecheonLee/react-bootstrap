import React from 'react';

const PostContent = () => {
  return (
    <main id="postContent">
      <div className={"section-content"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-md-9"}>
              <div className="post-meta text-center mb-5 border-top border-bottom py-2">
                <span className={"text-muted fw-light"}>
                  <img src="project2/images/avatar.png" alt={"Avatar"}
                       className={"img-avatar"}/>CodingDIY | <i
                  className={"fa fa-calendar-alt"}/> 2021-8-24 | <i
                  className={"fas fa-folder-open"}/> Category1 | <i
                  className={"fas fa-tags"}/> Tag1, Tag2
                </span>
              </div>
              <article>
                <p className={"lead fst-italic text-center"}>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Dicta doloremque, earum eum iste nihil
                  numquam pariatur sapiente sunt tenetur voluptas.</p>
                <img src="/project2/images/project-4.jpg" className={"img-fluid my-3"}/>
                <br/>
                <h5 className={"display-5 text-center mb-3"}>This is display-5
                  heading</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                  cupiditate esse fuga necessitatibus, quos ratione saepe similique
                  tempora veritatis voluptas!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                  consequuntur dicta doloribus enim esse, eum facilis iste itaque laborum
                  libero nisi nobis non officiis optio rem sunt temporibus totam
                  voluptatum.</p>
                <br/>
                <figure className={"text-center"}>
                  <blockquote className={"blockquote"}>
                    <p>THis is a beautiful blockquote element.</p>
                  </blockquote>
                  <figcaption className={"blockquote-footer"}>
                    This paragraph is written in famous Book.
                  </figcaption>
                </figure>
                <br/>
                <h3 className={"mb-3"}>This is heading 4</h3>
                <img
                  className={"img-fluid float-md-start d-block mx-auto me-md-4 mb-4 mt-1 shadow"}
                  width="400px"
                  src="/project2/images/port2.jpg"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                  architecto deserunt doloribus, eaque eligendi et exercitationem harum
                  ipsa minima modi mollitia nesciunt, officia perspiciatis quidem quisquam
                  rem repellendus tempora ullam? Aperiam aspernatur assumenda commodi
                  consequuntur cum cupiditate deserunt distinctio dolore dolorum ducimus
                  ea eaque earum error excepturi fuga impedit, itaque maxime non obcaecati
                  perferendis quae quas quod repellat sunt suscipit unde vitae voluptatum!
                  At cumque dolores incidunt placeat similique ut. Accusantium adipisci
                  corporis dolorem error est hic iusto labore, maiores mollitia nam non
                  nostrum pariatur possimus quae quibusdam quod ratione reiciendis saepe
                  sapiente similique soluta tempore temporibus velit vitae voluptatum.</p>
              </article>
              <br/>
              <h3 className={"mb-3"}>This is heading 4</h3>
              <img src="/project2/images/project-3.jpg" width="300px"
                   className={"img-fluid float-md-end d-block mx-auto ms-md-4 mb-4 mt-1 shadow"}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias,
                blanditiis delectus deleniti deserunt dolores ducimus, eligendi error est
                excepturi fuga harum impedit incidunt inventore laborum libero minus non
                omnis quidem similique sint soluta tempore unde veritatis vitae. Aliquam
                animi delectus dicta, doloremque eum laudantium maiores mollitia natus
                nisi qui quidem quo quos. Corporis eveniet fugiat laboriosam ratione
                reiciendis! Ab commodi consectetur minus, mollitia non suscipit
                voluptatem? Cupiditate, perspiciatis tempore? A excepturi facilis fugiat
                magnam molestiae praesentium sit veritatis vitae.</p>
              <br/>
              <h5 className={"display-5 text-center mb-3"}>This is second display-5
                heading</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
                aperiam asperiores beatae consectetur, consequuntur, culpa esse fugiat
                officia porro quae quasi quibusdam recusandae, totam ullam! Asperiores
                beatae cupiditate, dignissimos dolores eaque obcaecati quaerat recusandae
                repudiandae sed sequi similique ullam! Accusantium adipisci aperiam
                debitis distinctio dolorum eius eum inventore iusto obcaecati odio quasi,
                qui, quis quos recusandae suscipit voluptas voluptate? Ab deleniti eos est
                eveniet ex molestiae nulla odit, quaerat quas quos, sequi veritatis.
                Explicabo, impedit optio. Aliquid animi deserunt ipsam iste maiores neque
                numquam praesentium ratione veniam? Ex fugit incidunt laboriosam nesciunt
                nulla, quam soluta tenetur. At blanditiis dolores eaque eveniet in
                obcaecati perspiciatis possimus rerum ullam veniam? At cum cupiditate
                deleniti dolore doloribus esse est eveniet ex facilis fuga harum hic
                inventore itaque iure laudantium natus neque nihil odio odit quia, ratione
                repellat repudiandae rerum sit tempore veniam veritatis voluptatum!
                Ducimus in laborum nobis placeat, possimus ratione velit.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostContent;
