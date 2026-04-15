import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MembershipPlans() {
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
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Membership Plans</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Membership Plans</li>
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
                        <li>Priority Member Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 m-b30">
              <div className="section-head style-1 m-b30">
                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">My Sehat Point – Health Membership Plans </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Save More, Stay Healthy, Get Priority Care </p>
                <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">At My Sehat Point, our membership plans give you affordable healthcare, convenience, and exclusive benefits on medicines, lab tests, and doctor consultations — all within 5 KM of My Sehat Point. </p>
              </div>

              <h3 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Standard Charges (Non-Members) </h3>
              <ul className="list-check text-secondary grid-1 fw-medium m-b30 wow fadeInUp"
                data-wow-delay="0.6s" data-wow-duration="0.8s">
                <li><strong>Medicine Delivery:</strong> ₹50 per delivery </li>
                <li><strong>Lab Home Visit: </strong> ₹50 per visit </li>
                <li><strong>Doctor Consultation: </strong> ₹100 per consult </li>
              </ul>
              
              <div className="d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay="0.8s"
                data-wow-duration="0.8s">
                <Link to="/contact-us"
                  className="btn btn-lg btn-icon btn-secondary btn-shadow m-r30 mb-3 mb-sm-0">
                  Join Membership
                  <span className="right-icon"><i className="feather icon-arrow-right"></i></span>
                </Link>
                <div className="info-widget style-5">
                  <div className="widget-media text-primary">
                    <i className="feather icon-phone-call dz-ring-effect"></i>
                  </div>
                  <div className="widget-content">
                    <h6 className="title">Inquiry?</h6>
                    <a href="tel:+919090257373" className="text-secondary">+91 90902 57373</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner bg-white membership-overview-table">
        <div className="container">
          <div className="section-head style-1 text-center m-b30">
            <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
              Membership Plans Overview
            </h2>
            <p className="text-muted wow fadeInUp" data-wow-delay="0.35s" data-wow-duration="0.8s">
              Compare features side-by-side and pick the right plan for you.
            </p>
          </div>

          <div className="table-wrapper wow fadeInUp" data-wow-delay="0.45s" data-wow-duration="0.8s">
            <div className="table-responsive">
              <table className="table table-plans align-middle">
                <thead>
                  <tr>
                    <th className="sticky-col">Plan Name</th>
                    <th>Price</th>
                    <th>Validity</th>
                    <th>Medicine Delivery</th>
                    <th>Lab Home Visit</th>
                    <th>Lab Test Discount</th>
                    <th>Doctor Consult</th>
                    <th>Users Covered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="sticky-col">
                      <span className="plan-title">Sehat Sathi</span>
                      <span className="plan-badge">Individual</span>
                    </td>
                    <td><span className="price"><span className="currency">₹</span>199</span></td>
                    <td>12 Months</td>
                    <td><span className="chip">6 Times</span></td>
                    <td><span className="chip">6 Times</span></td>
                    <td><span className="badge bg-soft-primary">10% OFF</span></td>
                    <td><span className="chip">6 Times</span></td>
                    <td>2 Persons</td>
                  </tr>
                  <tr className="table-primary">
                    <td className="sticky-col">
                      <span className="plan-title">Sehat Plus</span>
                      <span className="plan-badge bg-primary text-white">Popular</span>
                    </td>
                    <td><span className="price"><span className="currency">₹</span>399</span></td>
                    <td>12 Months</td>
                    <td><span className="chip">12 Times</span></td>
                    <td><span className="chip">12 Times</span></td>
                    <td><span className="badge bg-soft-primary">15% OFF</span></td>
                    <td><span className="chip">12 Times</span></td>
                    <td>3 Persons</td>
                  </tr>
                  <tr>
                    <td className="sticky-col">
                      <span className="plan-title">Sehat Health</span>
                      <span className="plan-badge">Family</span>
                    </td>
                    <td><span className="price"><span className="currency">₹</span>599</span></td>
                    <td>12 Months</td>
                    <td><span className="chip chip-unlimited bg-success text-white px-2 rounded">Unlimited</span></td>
                    <td><span className="chip chip-unlimited bg-success text-white px-2 rounded">Unlimited</span></td>
                    <td><span className="badge bg-soft-primary">25% OFF</span></td>
                    <td><span className="chip chip-unlimited bg-success text-white px-2 rounded">Unlimited</span></td>
                    <td>Up to 6 Users</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner bg-light">
        <div className="container">
          <div className="section-head style-1 text-center m-b30">
            <h2 className="title wow fadeInUp" data-wow-delay="0.2s">Why Take a Sehat Plan? – Compare & Save Big!</h2>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="pricing-card p-4 bg-white shadow-sm rounded-4 h-100">
                <div className="pc-head d-flex justify-content-between">
                  <h5 className="m-b0">Sehat Sathi</h5>
                  <i className="feather icon-user text-primary"></i>
                </div>
                <div className="pc-price my-4">
                  <span className="fs-2 fw-bold text-primary">₹199</span>
                  <span className="text-muted ml-2">/ Year</span>
                </div>
                <ul className="pc-list list-unstyled">
                  <li className="mb-2"><i className="feather icon-check text-success me-2"></i> 6 Deliveries</li>
                  <li className="mb-2"><i className="feather icon-check text-success me-2"></i> 6 Lab Visits</li>
                  <li className="mb-2"><i className="feather icon-check text-success me-2"></i> 6 Consults</li>
                  <li className="pt-3 border-top"><strong>You Save: ₹1,001</strong></li>
                </ul>
                <Link to="/contact-us" className="btn btn-outline-primary w-100 mt-4">Choose Plan</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="pricing-card p-4 bg-primary text-white shadow-lg rounded-4 h-100 border border-4 border-white">
                <div className="pc-head d-flex justify-content-between">
                  <h5 className="m-b0 text-white">Sehat Plus</h5>
                  <i className="feather icon-star text-warning"></i>
                </div>
                <div className="pc-price my-4">
                  <span className="fs-2 fw-bold white">₹399</span>
                  <span className="text-white-50 ml-2">/ Year</span>
                </div>
                <ul className="pc-list list-unstyled">
                  <li className="mb-2"><i className="feather icon-check text-white me-2"></i> 12 Deliveries</li>
                  <li className="mb-2"><i className="feather icon-check text-white me-2"></i> 12 Lab Visits</li>
                  <li className="mb-2"><i className="feather icon-check text-white me-2"></i> 12 Consults</li>
                  <li className="pt-3 border-top"><strong>You Save: ₹2,001</strong></li>
                </ul>
                <Link to="/contact-us" className="btn btn-white text-primary w-100 mt-4">Choose Plan</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="pricing-card p-4 bg-white shadow-sm rounded-4 h-100">
                <div className="pc-head d-flex justify-content-between">
                  <h5 className="m-b0">Sehat Health</h5>
                  <i className="feather icon-users text-primary"></i>
                </div>
                <div className="pc-price my-4">
                  <span className="fs-2 fw-bold text-primary">₹599</span>
                  <span className="text-muted ml-2">/ Year</span>
                </div>
                <ul className="pc-list list-unstyled">
                  <li className="mb-2"><i className="feather icon-check text-success me-2"></i> Unlimited Delivery</li>
                  <li className="mb-2"><i className="feather icon-check text-success me-2"></i> Unlimited Lab Visits</li>
                  <li className="mb-2"><i className="feather icon-check text-success me-2"></i> Unlimited Consults</li>
                  <li className="pt-3 border-top"><strong>You Save: ₹5,401</strong></li>
                </ul>
                <Link to="/contact-us" className="btn btn-outline-primary w-100 mt-4">Choose Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner-1 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
               <div className="section-head style-1">
                  <h3 className="dz-title">Special Activation Offers</h3>
                  <ul className="list-check mt-3">
                    <li><strong>Sehat Sathi (₹199)</strong> – Gift Worth ₹200 FREE</li>
                    <li><strong>Sehat Plus (₹399)</strong> – Gift Worth ₹400 FREE</li>
                    <li><strong>Sehat Health (₹599)</strong> – Gift Worth ₹600 FREE</li>
                  </ul>
               </div>
               <div className="section-head style-1 mt-5">
                  <h3 className="dz-title">How to Activate</h3>
                  <ul className="list-check mt-3">
                    <li><strong>Sign Up</strong>: Register via website or patient app</li>
                    <li><strong>Select Plan</strong>: Choose the plan that fits your needs</li>
                    <li><strong>Payment</strong>: Pay securely via online payment or in-store</li>
                    <li><strong>Enjoy Benefits</strong>: Start using all benefits immediately</li>
                  </ul>
               </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
               <div className="p-5 bg-light rounded-4 border border-2 border-primary">
                  <h4>Priority Support</h4>
                  <p>Membership holders get priority processing for all home visits and delivery requests.</p>
                  <div className="d-flex align-items-center mt-3">
                     <i className="feather icon-phone-call fs-4 text-primary me-3"></i>
                     <div>
                        <div className="small text-muted">Whatsapp Us</div>
                        <a href="https://Wa.me/919090257373" className="fw-bold text-dark">+91 90902 57373</a>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
