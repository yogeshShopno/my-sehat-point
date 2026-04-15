import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OurStory() {
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
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s"> Our story who we are</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"> Our story who we are </li>
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

      <section className="content-inner"
        style={{ backgroundImage: "url(/images/background/bg1.png)", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}>
        <div className="container">
          <div className="row content-wrapper style-1 align-items-center">
            <div className="col-xl-6 m-b30">
              <div className="content-media">
                <div className="dz-media">
                  <img src="/images/about/img1.webp" alt="" />
                </div>
                <div className="item2">
                  <div className="info-widget style-6 bg-primary">
                    <div className="info-icon bg-secondary">
                      <i className="feather icon-clock text-white" style={{fontSize: '24px'}}></i>
                    </div>
                    <div className="widget-content">
                      <h4 className="title">Open Hours</h4>
                      <ul>
                        <li>Monday - Sunday <strong>7:00 AM – 11:00 PM</strong></li>
                        <li>365 Days a Year</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 m-b30">
              <div className="section-head style-1 m-b30">
                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Who We Are</h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">At My Sehat Point, we are redefining the way healthcare is delivered in India. We are India’s First Healthcare Mall — a one-stop destination where you’ll find everything you need for your health, wellness, and medical care under one roof. </p>
                <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">From medicines, lab tests, and doctor consultations to health memberships and home healthcare services, we bring it all together — making healthcare faster, easier, and more affordable for everyone. </p>
                <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">We are more than just a pharmacy or clinic — we are your healthcare partner for life. </p>
              </div>
              <ul className="list-check text-secondary grid-2 fw-medium m-b30 wow fadeInUp"
                data-wow-delay="0.6s" data-wow-duration="0.8s">
                <li>24×7 Customer Support</li>
                <li>Franchise Opportunities </li>
                <li>Community Health Camps</li>
                <li>Smart Billing System </li>
              </ul>
              <div className="d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay="0.8s"
                data-wow-duration="0.8s">
                <Link to="/contact-us"
                  className="btn btn-lg btn-icon btn-secondary btn-shadow m-r30 mb-3 mb-sm-0">
                  Franchise Enquiry
                  <span className="right-icon"><i className="feather icon-arrow-right"></i></span>
                </Link>
                <div className="info-widget style-5">
                  <div className="widget-media text-primary">
                    <i className="feather icon-phone-call dz-ring-effect"></i>
                  </div>
                  <div className="widget-content">
                    <h6 className="title">Contact us?</h6>
                    <a href="tel:+919090257373" className="text-secondary">+91 90902 57373</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row gap-4 align-items-stretch justify-content-center">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="p-4 bg-white shadow-sm rounded-4 h-100 border-top border-4 border-primary">
                 <div className="d-flex align-items-center mb-3">
                    <div className="bg-secondary p-3 rounded-circle me-3"><i className="feather icon-target text-white fs-4"></i></div>
                    <h3 className="dz-title mb-0">Our Mission</h3>
                 </div>
                 <p>To bring all essential healthcare services under one roof, supported by technology, expert care, and affordable pricing — so that no one in India has to delay treatment due to time, distance, or cost.</p>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.2s">
              <div className="p-4 bg-white shadow-sm rounded-4 h-100 border-top border-4 border-primary">
                 <div className="d-flex align-items-center mb-3">
                    <div className="bg-secondary p-3 rounded-circle me-3"><i className="feather icon-eye text-white fs-4"></i></div>
                    <h3 className="dz-title mb-0">Our Vision</h3>
                 </div>
                 <p>To become India’s most trusted healthcare brand, with a presence in every city and town, and to transform the way people experience medical care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner partner-wrap">
        <div className="container">
          <div className="partner-shell">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                  <span className="badge bg-secondary mb-3">Our Brand Story</span>
                  <p className="mt-2">Healthcare in India is often scattered — medicines from one place, tests from another, and doctors somewhere else. This means wasted time, higher costs, and unnecessary stress for patients. </p>
                  <p>We saw this problem up close in our own community. Families had to visit 3–4 different places to get complete treatment, and many delayed care because it was inconvenient or too expensive. </p>
                  <h2 className="title m-t10" style={{fontSize: '28px'}}>“Why can’t healthcare be like a mall — where everything is in one place?” </h2>
                  <ul className="partner-list m-t20">
                    <li><span className="tick"><i className="feather icon-check text-success"></i></span><strong>Pharmacy</strong> – All types of medicines & health products</li>
                    <li><span className="tick"><i className="feather icon-check text-success"></i></span><strong>Laboratory</strong> – All diagnostic & preventive health tests</li>
                    <li><span className="tick"><i className="feather icon-check text-success"></i></span><strong>Doctors</strong> – OPD consultations across specialties</li>
                    <li><span className="tick"><i className="feather icon-check text-success"></i></span><strong>Home Services</strong> – Delivery, sample collection, nurse visits</li>
                  </ul>
                  <div className="m-t25">
                    <Link to="/contact-us" className="btn btn-lg btn-icon btn-secondary">
                      Apply for Franchise <span className="right-icon"><i className="feather icon-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="apply-card p-4 bg-white shadow-lg rounded-4 wow fadeInUp" data-wow-delay="0.2s">
                  <h5 className="mb-3">Why Choose Us</h5>
                  <div className="mini-steps">
                    <div className="step d-flex mb-3 align-items-center"><span className="badge bg-primary me-3">1</span> <div>Complete Healthcare Hub</div></div>
                    <div className="step d-flex mb-3 align-items-center"><span className="badge bg-primary me-3">2</span> <div>Trusted Professionals</div></div>
                    <div className="step d-flex mb-3 align-items-center"><span className="badge bg-primary me-3">3</span> <div>Affordable Plans</div></div>
                    <div className="step d-flex mb-3 align-items-center"><span className="badge bg-primary me-3">4</span> <div>Quick & Easy Access</div></div>
                    <div className="step d-flex align-items-center"><span className="badge bg-primary me-3">5</span> <div>Nationwide Network</div></div>
                  </div>
                  <Link to="/contact-us" className="btn btn-secondary w-100 mt-4">Start Upgrade Application</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="container">
          <div className="section-head style-1 text-center m-b30">
            <h2 className="title wow fadeInUp" data-wow-delay="0.1s">Our Core Values</h2>
          </div>
          <div className="row g-4">
             {[
               { title: "Care with Compassion", desc: "Patients first, always." },
               { title: "One-Stop Convenience", desc: "Everything you need in one place." },
               { title: "Affordable for All", desc: "Quality healthcare at fair prices." },
               { title: "Technology Driven", desc: "Faster, smarter, and more efficient service." },
               { title: "Community Focused", desc: "Improving health at the local level." }
             ].map((val, idx) => (
                <div key={idx} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 * (idx + 1)}s`}>
                   <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                      <div className="bg-primary p-2 rounded-circle me-3"><i className="feather icon-check text-white"></i></div>
                      <div>
                         <div className="fw-bold">{val.title}</div>
                         <div className="small text-muted">{val.desc}</div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
}
