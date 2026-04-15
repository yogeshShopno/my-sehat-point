import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
  }, []);

  return (
    <>
      <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md"
        style={{ backgroundImage: "url(/images/banner/bnr1.webp)" }}>
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Contact Us</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Contact Us</li>
              </ul>
            </nav>
            <div className="dz-btn">
              <a href="tel:+919090257373"
                className="btn btn-lg btn-icon btn-sec radius-xl btn-shadow mb-3 mb-sm-0">
                <span className="left-icon">
                  <i className="feather icon-phone-call"></i>
                </span>
                +91 90902 57373
              </a>
            </div>
          </div>
        </div>
        <ul className="dz-social">
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>

      <section className="content-inner">
        <div className="container">
          <div className="row g-xl-4 align-items-center">
            <div className="col-xl-6 pe-xl-4 m-b10">
              <div className="section-head style-1 m-b30">
                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">We’re Here to Help You 24/7 </h2>
                <p className="small wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.5s">At My Sehat Point, your health and queries are our top priority. Whether you have questions about medicines, lab tests, doctor consultations, home delivery, memberships, or franchise opportunities, we are just a call or message away.</p>
              </div>
              
              <div className="row">
                <div className="col-md-6 m-b20 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                  <div className="icon-bx-wraper style-8 box-hover">
                    <div className="icon-bx">
                      <span className="icon-cell">
                        <i className="feather icon-map-pin"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="dz-title">Address</h4>
                      <p>My Sehat Point 123, Healthcare Street, Ahmedabad, Gujarat, India – 380001 </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 m-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.5s">
                  <div className="icon-bx-wraper style-8 box-hover">
                    <div className="icon-bx">
                      <span className="icon-cell">
                        <i className="feather icon-phone"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="dz-title">Call Us</h4>
                      <p><a href="tel:+919090257373" className="text-body">+91 90902 57373</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 m-b20 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.5s">
                  <div className="icon-bx-wraper style-8 box-hover">
                    <div className="icon-bx">
                      <span className="icon-cell">
                        <i className="feather icon-mail"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="dz-title">Send us a Mail</h4>
                      <p>
                        <a href="mailto:support@mysehatpoint.com" className="text-body">support@mysehatpoint.com</a><br/>
                        <a href="mailto:franchise@mysehatpoint.com" className="text-body">franchise@mysehatpoint.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 m-b20 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.5s">
                  <div className="icon-bx-wraper style-8 box-hover">
                    <div className="icon-bx">
                      <span className="icon-cell">
                        <i className="feather icon-clock"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="dz-title">Opening Time</h4>
                      <p>365 Days | 7:00 AM – 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 m-b30">
              <div className="form-wrapper style-1">
                <div className="form-body bg-primary background-blend-burn"
                  style={{ backgroundImage: "url(/images/background/bg2.png)", backgroundSize: "cover" }}>
                  <div className="section-head style-1 m-b30">
                    <h2 className="title text-white m-b0">Get in Touch</h2>
                    <p className="text-white m-b0 fw-medium">You can reach us anytime</p>
                  </div>
                  <form target="_blank" action="https://formsubmit.co/krinalishopno@gmail.com" method="POST">
                    <div className="row">
                      <div className="col-sm-6 m-b30">
                        <div className="form-floating floating-underline input-light">
                          <input name="name" type="text" className="form-control" id="inputFirstName" placeholder="Full Name" required />
                          <label htmlFor="inputFirstName">Full Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6 m-b30">
                        <div className="form-floating floating-underline input-light">
                          <input name="email" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" required />
                          <label htmlFor="inputYourEmail">Your Email</label>
                        </div>
                      </div>
                      <div className="col-sm-6 m-b30">
                        <div className="form-floating floating-underline input-light">
                          <input name="phone" type="text" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" required />
                          <label htmlFor="inputPhoneNumber">Phone Number</label>
                        </div>
                      </div>
                      <div className="col-sm-6 m-b30">
                        <div className="form-floating floating-underline input-light">
                          <input name="city" type="text" className="form-control" id="inputLastName" placeholder="City & State" required />
                          <label htmlFor="inputLastName">City & State</label>
                        </div>
                      </div>
                      <div className="col-sm-12 m-b30">
                        <div className="form-floating floating-underline input-light">
                          <textarea name="message" className="form-control" id="inputMessage" rows="4" placeholder="Message" required></textarea>
                          <label htmlFor="inputMessage">Message</label>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <button type="submit" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                          Submit <span className="right-icon"><i className="feather icon-arrow-right"></i></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="content-inner-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
               <div className="map-wrapper style-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29382.672381618522!2d72.48759217431639!3d22.99312920000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85b626a18c9f%3A0x865eaefa552b49bc!2sSehat%20Hospital!5e0!3m2!1sen!2sin!4v1755249989689!5m2!1sen!2sin"
                    style={{ border: 0, width: '100%', height: '450px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
               </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
