import React from 'react';

const FindUsSection = () => {
  return (
    <section id={"find-us"}>
      <div className={"container-fluid px-0 mb-3"}>
        <div id={"map"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.302697828388!2d127.03567657717544!3d37.54409105659715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca37d51f4f62b%3A0xdd9b9865be0f469a!2z7ISc7Jq47Iiy6rO17JuQ!5e0!3m2!1sko!2skr!4v1638538839507!5m2!1sko!2skr"
            width="100%" height="600" style={{border: 0}} allowFullScreen=""
            loading="lazy"></iframe>
        </div>
      </div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-4 offset-md-8 col-10 find-us"}>
            <h3>Contact us!</h3>
            <div className={"divider"}/>
            <div className={"d-flex text-secondary"}>
              <p className={"fw-bold"}>
                <span className={"text-uppercase"}>phone</span>:
                <a href={"tel:02-111-1111"}
                   className={"text-decoration-none"}>02-111-1111</a>
              </p>
              <p className={"fw-bold"}>
                <span className={"text-uppercase"}>email</span>:
                <a href={"mailto:rainbow880616@gmail.com"}
                   className={"text-decoration-none"}>rainbow880616@gmail.com</a>
              </p>
            </div>
            <form action="">
              <div className={"mb-3"}>
                <input type={"text"} className={"form-control"}
                       placeholder={"Your name"}/>
              </div>
              <div className={"mb-3"}>
                <input type={"email"} className={"form-control"}
                       placeholder={"Your email"}/>
              </div>
              <div className={"mb-3"}>
                <textarea rows={3} className={"form-control"}
                          placeholder={"Please write down any questions you have."}/>
              </div>
              <div className={"mb-3"}>
                <input type={"checkbox"} className={"form-check"} id={"checkDefault"}/>
                <label className={"form-label text-secondary"}
                       htmlFor={"checkDefault"}>
                  I agree to provide privacy.
                </label>
              </div>
              <p className={"mb-3"}>
                <button className={"btn btn-primary w-100"}>Send!</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
