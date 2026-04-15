import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
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
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Services</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Services</li>
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

      <section className="content-inner bg-light" style={{ backgroundImage: "url(/images/background/bg5.png)" }}>
        <div className="container">
          <div className="row">
            {/* Pharmacy */}
            <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.8s">
              <div className="icon-bx-wraper style-3 box-hover">
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="feather icon-shopping-bag" style={{fontSize: '40px'}}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">Pharmacy</h3>
                    <p>Allopathic, Ayurvedic & Homeopathic medicines, FMCG products & baby care with fast, safe home delivery. </p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                  <Link to="/contact-us" className="btn btn-square btn-primary rounded-circle">
                    <i className="feather icon-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Diagnostic */}
            <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
              <div className="icon-bx-wraper style-3 active box-hover">
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                       <i className="feather icon-activity" style={{fontSize: '40px'}}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">Diagnostic & Lab Tests </h3>
                    <p>Accurate blood, urine & full-body tests with home collection and quick online reports. </p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                   <Link to="/contact-us" className="btn btn-square btn-primary rounded-circle">
                    <i className="feather icon-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Doctor Consultation */}
            <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.8s">
              <div className="icon-bx-wraper style-3 box-hover">
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="feather icon-user" style={{fontSize: '40px'}}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">Doctor OPD & Consultation </h3>
                    <p>General & specialist doctors available in-clinic or via video consultation at affordable fees. </p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                   <Link to="/contact-us" className="btn btn-square btn-primary rounded-circle">
                    <i className="feather icon-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* App & Digital */}
            <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
              <div className="icon-bx-wraper style-3 box-hover">
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="feather icon-smartphone" style={{fontSize: '40px'}}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">Patient App & Digital Services</h3>
                    <p>Order medicines, book tests, download reports & manage memberships from one app. </p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                   <Link to="/contact-us" className="btn btn-square btn-primary rounded-circle">
                    <i className="feather icon-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

             {/* Home Delivery */}
             <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.8s">
              <div className="icon-bx-wraper style-3 box-hover">
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="feather icon-truck" style={{fontSize: '40px'}}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">Home Delivery</h3>
                    <p>Same-day medicine delivery, lab sample collection, doctor visits & nursing care at home. </p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                   <Link to="/contact-us" className="btn btn-square btn-primary rounded-circle">
                    <i className="feather icon-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Diet & Nutrition */}
            <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
              <div className="icon-bx-wraper style-3 box-hover">
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="feather icon-heart" style={{fontSize: '40px'}}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">Diet & Nutrition</h3>
                    <p>Get personalized diet plans from expert nutritionists for better health, fitness, and disease management.</p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                   <Link to="/contact-us" className="btn btn-square btn-primary rounded-circle">
                    <i className="feather icon-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Medical Devices */}
            <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="0.8s">
              <div className="icon-bx-wraper style-3 box-hover">
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="feather icon-package" style={{fontSize: '40px'}}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">Medical Devices</h3>
                    <p>Easy access to wheelchairs, nebulizers, oxygen concentrators, and more at affordable rates.</p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                   <Link to="/contact-us" className="btn btn-square btn-primary rounded-circle">
                    <i className="feather icon-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Wellness Products */}
            <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
              <div className="icon-bx-wraper style-3 box-hover">
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="feather icon-sun" style={{fontSize: '40px'}}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">Wellness Products</h3>
                    <p>Everything you need for daily health & care: Baby Care, Men Care, Women Care, Personal Care, and more.</p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                   <Link to="/contact-us" className="btn btn-square btn-primary rounded-circle">
                    <i className="feather icon-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="unique" className="p-b20 bg-light">
        <div className="container">
          <div className="unique-shell">
            <div className="section-head style-1 m-b20 text-center">
              <h2 className="title m-b0 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.8s">
                Why My Sehat Point is Unique
              </h2>
            </div>

            <ul className="unique-list wow fadeInUp" data-wow-delay="0.15s" data-wow-duration="0.8s">
              <li>
                <span className="check"><i className="feather icon-check" aria-hidden="true"></i></span>
                <div><strong> Complete Healthcare Hub </strong> Pharmacy, Doctors, Diagnostics & Home Services</div>
              </li>
              <li>
                <span className="check"><i className="feather icon-check" aria-hidden="true"></i></span>
                <div><strong>Transparent & Affordable</strong> Genuine pricing with extra membership savings</div>
              </li>
              <li>
                <span className="check"><i className="feather icon-check" aria-hidden="true"></i></span>
                <div><strong>Trusted Care </strong> Skilled doctors, certified labs & quality medicines</div>
              </li>
              <li>
                <span className="check"><i className="feather icon-check" aria-hidden="true"></i></span>
                <div><strong>Convenience First </strong> App-based booking, home delivery & digital reports</div>
              </li>
              <li>
                <span className="check"><i className="feather icon-check" aria-hidden="true"></i></span>
                <div><strong>Community Focused </strong> Health camps, awareness drives & loyalty programs</div>
              </li>
              <li>
                <span className="check"><i className="feather icon-check" aria-hidden="true"></i></span>
                <div><strong>Business Growth Support</strong> Franchise model with full guidance & 0% royalty </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
