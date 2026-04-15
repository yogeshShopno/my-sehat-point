import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RentProperty() {
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
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Rent your property</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Rent your property</li>
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

      <section className="content-inner bg-light overflow-hidden" 
        style={{ backgroundImage: "url(/images/background/bg7.webp)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row content-wrapper style-2 align-items-center">
            <div className="col-xl-6 m-b30">
              <div className="section-head style-1 m-b30">
                <span className="sub-title m-b0 wow fadeInUp text-primary fw-bold" data-wow-delay="0.2s">Transform Your Space into India’s First Healthcare Mall</span>
                <h2 className="title m-b0 wow fadeInUp" data-wow-delay="0.3s">Why Partner with Us?</h2>
              </div>
              <div className="row">
                <div className="col-sm-6 m-b20">
                  <div className="icon-bx-wraper style-15 wow fadeInUp bg-white p-4 rounded-4 shadow-sm h-100" data-wow-delay="0.4s">
                    <div className="icon-bx mb-3">
                       <i className="feather icon-award text-primary fs-2"></i>
                    </div>
                    <div className="icon-content">
                      <h4 className="dz-title fw-bold">Long-Term Partnership</h4>
                      <p className="small text-muted">Secure & profitable collaboration with a growing brand.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 m-b20">
                  <div className="icon-bx-wraper style-15 wow fadeInUp bg-white p-4 rounded-4 shadow-sm h-100" data-wow-delay="0.5s">
                    <div className="icon-bx mb-3">
                       <i className="feather icon-dollar-sign text-primary fs-2"></i>
                    </div>
                    <div className="icon-content">
                      <h4 className="dz-title fw-bold">Zero Rent Burden</h4>
                      <p className="small text-muted">No upfront lease payment; we share the success.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 m-b20">
                  <div className="icon-bx-wraper style-15 wow fadeInUp bg-white p-4 rounded-4 shadow-sm h-100" data-wow-delay="0.6s">
                    <div className="icon-bx mb-3">
                       <i className="feather icon-trending-up text-primary fs-2"></i>
                    </div>
                    <div className="icon-content">
                      <h4 className="dz-title fw-bold">Multiple Revenue Streams</h4>
                      <p className="small text-muted">Earn from Pharmacy, Lab, Doctor OPD, and more.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 m-b20">
                  <div className="icon-bx-wraper style-15 wow fadeInUp bg-white p-4 rounded-4 shadow-sm h-100" data-wow-delay="0.7s">
                    <div className="icon-bx mb-3">
                       <i className="feather icon-briefcase text-primary fs-2"></i>
                    </div>
                    <div className="icon-content">
                      <h4 className="dz-title fw-bold">Revenue Sharing Model</h4>
                      <p className="small text-muted">Property owner earns 40% of monthly revenue.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 m-b30 ps-lg-5 wow fadeInUp" data-wow-delay="0.2s">
              <div className="twentytwenty-box shadow-lg rounded-4 overflow-hidden">
                <img src="/images/background/after1.webp" alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner bg-primary" style={{ backgroundImage: "url(/images/background/bg6.webp)", backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 p-b40">
              <div className="section-head style-14 m-b30">
                <h2 className="title m-b15 text-white wow fadeInUp" data-wow-delay="0.2s">What We Do</h2>
                <p className="text-white opacity-75 m-b10">We handle everything from transformation to operations, ensuring your property becomes a landmark of healthcare.</p>
              </div>
              <ul className="list-check text-white grid-1 fw-medium m-b30 wow fadeInUp list-unstyled" data-wow-delay="0.4s">
                <li className="mb-2"><i className="feather icon-check-circle me-2"></i> Complete interior & branding setup</li>
                <li className="mb-2"><i className="feather icon-check-circle me-2"></i> Staff hiring & training</li>
                <li className="mb-2"><i className="feather icon-check-circle me-2"></i> Software & digital tools for operations</li>
                <li className="mb-2"><i className="feather icon-check-circle me-2"></i> Marketing & customer acquisition support</li>
                <li><i className="feather icon-check-circle me-2"></i> Comprehensive healthcare services management</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="content-media wow fadeInUp rounded-4 overflow-hidden shadow" data-wow-delay="0.6s">
                <img src="/images/about/img3.webp" alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
               <div className="bg-light p-5 rounded-4 border">
                  <h3 className="dz-title mb-4">How to Partner Your Property</h3>
                  <div className="steps-vertical">
                     {[
                       "Fill the Property Partnership Form Online",
                       "Our Team Reviews & Shortlists Your Property",
                       "Site Visit & Assessment",
                       "Agreement & Revenue Sharing Terms Discussion",
                       "Setup & Launch with Full Support"
                     ].map((step, idx) => (
                       <div key={idx} className="d-flex mb-4">
                          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '30px', height: '30px', flexShrink: 0}}>{idx + 1}</div>
                          <div className="fw-medium">{step}</div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
               <div className="section-head style-1">
                  <h2 className="title mb-4">What We Are Looking For</h2>
                  <div className="mb-4 d-flex">
                     <div className="bg-secondary p-3 rounded-3 me-3"><i className="feather icon-map-pin text-white fs-4"></i></div>
                     <div>
                        <div className="fw-bold">Location</div>
                        <p className="small text-muted mb-0">Prime areas in Gujarat, Rajasthan, MP & Pan-India</p>
                     </div>
                  </div>
                  <div className="mb-4 d-flex">
                     <div className="bg-secondary p-3 rounded-3 me-3"><i className="feather icon-maximize text-white fs-4"></i></div>
                     <div>
                        <div className="fw-bold">Space</div>
                        <p className="small text-muted mb-0">1500 Sq.ft. minimum for Mini franchise; larger for Standard & Mega</p>
                     </div>
                  </div>
                  <div className="mb-4 d-flex">
                     <div className="bg-secondary p-3 rounded-3 me-3"><i className="feather icon-home text-white fs-4"></i></div>
                     <div>
                        <div className="fw-bold">Properties</div>
                        <p className="small text-muted mb-0">Commercial / Retail Shops, floors, or standalone buildings</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container">
           <div className="row g-4 justify-content-center text-center">
              <div className="col-md-4">
                 <div className="p-4 border border-secondary rounded-4">
                    <i className="feather icon-globe fs-1 text-primary mb-3"></i>
                    <h4>Visit</h4>
                    <p className="text-secondary mb-0">www.mysehatpoint.com</p>
                 </div>
              </div>
              <div className="col-md-4">
                 <div className="p-4 border border-secondary rounded-4">
                    <i className="feather icon-phone-call fs-1 text-primary mb-3"></i>
                    <h4>Call</h4>
                    <p className="text-secondary mb-0">+91 90902 57373</p>
                 </div>
              </div>
              <div className="col-md-4">
                 <div className="p-4 border border-secondary rounded-4">
                    <i className="feather icon-mail fs-1 text-primary mb-3"></i>
                    <h4>Email</h4>
                    <p className="text-secondary mb-0">franchise@mysehatpoint.com</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
}
