import React from "react";

const submit = () => {
  alert(
    "your message cannot be submit at this moment but It will be done soon Try another method using phone number or email"
  );
};
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <section class="mb-4">
              <h2 class="h1-responsive font-weight-bold text-center my-4">
                Contact us
              </h2>

              <p class="text-center w-responsive mx-auto mb-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </p>

              <div class="row">
                <div class="col-md-9 mb-md-0 mb-5">
                  <form
                    id="contact-form"
                    name="contact-form"
                    action="mail.php"
                    method="POST"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-control"
                            placeholder="exp Tariq Javed"
                          />
                          <label for="name" class="">
                            Your name
                          </label>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            class="form-control"
                            placeholder="mrAli33@gmail.com"
                          />
                          <label for="email" class="">
                            Your email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            class="form-control"
                            placeholder="subject"
                          />
                          <label for="subject" class="">
                            Subject
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form">
                          <textarea
                            type="text"
                            id="message"
                            name="message"
                            rows="10"
                            class="form-control md-textarea"
                            placeholder="write your message here"
                          ></textarea>
                          <label for="message">Your message</label>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div class="text-center text-md-left">
                    <a class="btn btn-outline-primary mt-3" onClick={submit}>
                      Send
                    </a>
                  </div>
                  <div class="status"></div>
                </div>

                <div class="col-md-3 text-center">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <i class="fas fa-map-marker-alt fa-2x"></i>
                      <p>Easy Contacting</p>
                    </li>

                    <li>
                      <i class="fas fa-phone mt-4 fa-2x"></i>
                      <p>+923087293542</p>
                    </li>

                    <li>
                      <i class="fas fa-envelope mt-4 fa-2x"></i>
                      <p>cstariqjaved@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
