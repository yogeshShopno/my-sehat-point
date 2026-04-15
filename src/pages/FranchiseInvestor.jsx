import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FranchiseInvestor() {
  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
  }, []);

  return (
    <>


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
                      <i className="feather icon-clock text-white" style={{ fontSize: '24px' }}></i>
                    </div>
                    <div className="widget-content">
                      <h4 className="title">Open Hours</h4>
                      <ul>
                        <li>Monday - Sunday <strong>7:00 AM – 11:00 PM</strong></li>
                        <li>365 Days Service</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 m-b30">
              <div className="section-head style-1 m-b30">
                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">My Sehat Point – India’s First Healthcare Mall Franchise </h2>
                <div className="chip-row m-t20 d-flex gap-2 flex-wrap">
                  <span className="chip1">Clinic </span>
                  <span className="chip1">Pharmacy </span>
                  <span className="chip1">Lab </span>
                  <span className="chip1"> Home Visit </span>
                  <span className="chip1"> Membership Plans </span>
                </div>
              </div>
              <h3 className="dz-title">Why Partner with Us? </h3>
              <ul className="list-check text-secondary grid-2 fw-medium m-b30 wow fadeInUp"
                data-wow-delay="0.6s" data-wow-duration="0.8s">
                <li> Trusted Healthcare Brand </li>
                <li> All Services Under One Roof </li>
                <li>Lifetime Software & App Access </li>
                <li>Multiple Income Streams</li>
                <li>Franchise Support from Day 1</li>
              </ul>
              <h3 className="dz-title">Franchise Process </h3>
              <ul className="list-check text-secondary grid-2 fw-medium m-b30 wow fadeInUp"
                data-wow-delay="0.6s" data-wow-duration="0.8s">
                <li> Fill Franchise Form Online</li>
                <li> Discussion & Location Shortlisting</li>
                <li>Sign Agreement & Initial Token </li>
                <li>Setup, Staff Hiring & Branding </li>
                <li>Launch with Marketing Support</li>
                <li>Start Earning from Day 1 </li>
              </ul>

              <div className="d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay="0.8s"
                data-wow-duration="0.8s">
                <Link to="/franchise-inquiry"
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

      <section id="franchise-models" className="p-b20"
        style={{ backgroundImage: "url(/images/background/bg2.png)", backgroundRepeat: "no-repeat", backgroundPosition: "left bottom" }}>
        <div className="container">
          <div className="section-head style-1 text-center m-b30">
            <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">New Franchise Business Models</h2>
            <p className="wow fadeInUp m-0 w-100" data-wow-delay="0.35s" data-wow-duration="0.8s">
              Choose the right size for your city and budget.
            </p>
            <span className="be-badge wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.8s">
              Break-even: <strong>6 Months</strong>
            </span>
          </div>

          <div className="row g-4">
            {/* MINI */}
            <div className="col-xl-4 col-md-6">
              <div className="plan-card plan--mini wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <div className="plan-head">
                  <span className="plan-dot" aria-hidden="true"></span>
                  <h3 className="dz-title m-0">Mini</h3>
                  <small className="plan-tag">Entry model</small>
                </div>
                <ul className="plan-list">
                  <li><i className="feather icon-map-pin"></i> Area: <strong>1500 Sq.ft.</strong></li>
                  <li><i className="feather icon-credit-card"></i> Investment: <strong>₹22 Lakhs</strong></li>
                </ul>
                <h3 className="dz-title mt-3" style={{ fontSize: '18px' }}>What’s Included: </h3>
                <ul className="partner-list">
                  <li><span className="tick"><i className="feather icon-check"></i></span>Store Interior & Furniture</li>
                  <li><span className="tick"><i className="feather icon-check"></i></span>Medicine & FMCG Stock (₹7–8L)</li>
                  <li><span className="tick"><i className="feather icon-check"></i></span>1 Doctor OPD Room</li>
                  <li><span className="tick"><i className="feather icon-check"></i></span>ERP Software Access</li>
                </ul>
                <Link to="/franchise-inquiry" className="btn btn-secondary w-100 mt-auto">Franchise Inquiry</Link>
              </div>
            </div>

            {/* STANDARD */}
            <div className="col-xl-4 col-md-6">
              <div className="plan-card plan--standard wow fadeInUp" data-wow-delay="0.35s" data-wow-duration="0.8s">
                <div className="plan-head">
                  <span className="plan-dot" aria-hidden="true"></span>
                  <h3 className="dz-title m-0">Standard</h3>
                  <small className="plan-tag">Balanced growth</small>
                </div>
                <ul className="plan-list">
                  <li><i className="feather icon-map-pin"></i> Area: <strong>2500 Sq.ft.</strong></li>
                  <li><i className="feather icon-credit-card"></i> Investment: <strong>₹36 Lakhs</strong></li>
                </ul>
                <h3 className="dz-title mt-3" style={{ fontSize: '18px' }}>What’s Included: </h3>
                <ul className="partner-list">
                  <li><span className="tick"><i className="feather icon-check"></i></span>Medicine & FMCG Stock (₹12–14L)</li>
                  <li><span className="tick"><i className="feather icon-check"></i></span>2 Doctor OPD Rooms</li>
                  <li><span className="tick"><i className="feather icon-check"></i></span>Patient Waiting Lounge</li>
                  <li><span className="tick"><i className="feather icon-check"></i></span>Full Marketing Support</li>
                </ul>
                <Link to="/franchise-inquiry" className="btn btn-secondary w-100 mt-auto">Franchise Inquiry</Link>
              </div>
            </div>

            {/* MEGA */}
            <div className="col-xl-4 col-md-6">
              <div className="plan-card plan--mega wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.8s">
                <div className="plan-head">
                  <span className="plan-dot" aria-hidden="true"></span>
                  <h3 className="dz-title m-0">Mega</h3>
                  <small className="plan-tag">High capacity</small>
                </div>
                <ul className="plan-list">
                  <li><i className="feather icon-map-pin"></i> Area: <strong>5000 Sq.ft.</strong></li>
                  <li><i className="feather icon-credit-card"></i> Investment: <strong>₹61 Lakhs</strong></li>
                </ul>
                <h3 className="dz-title mt-3" style={{ fontSize: '18px' }}>What’s Included: </h3>
                <ul className="partner-list">
                  <li><span className="tick"><i className="feather icon-check"></i></span>Medicine & FMCG Stock (₹20–22L)</li>
                  <li><span className="tick"><i className="feather icon-check"></i></span>Premium Interior & Modular Setup</li>
                  <li><span className="tick"><i className="feather icon-check"></i></span>Reception + Executive Lounge</li>
                  <li><span className="tick"><i className="feather icon-check"></i></span>Advance ERP + App Suite</li>
                </ul>
                <Link to="/franchise-inquiry" className="btn btn-secondary w-100 mt-auto">Franchise Inquiry</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner-1 bg-white">
        <div className="container">
          <div className="section-head style-1 text-center m-b30">
            <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Quick Comparison Table</h2>
          </div>
          <div className="table-responsive wow fadeInUp" data-wow-delay="0.4s">
            <table className="table table-plans align-middle">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Area</th>
                  <th>Investment</th>
                  <th>Stock Value</th>
                  <th>OPD Rooms</th>
                  <th>Software</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mini</td>
                  <td>1500 sq.ft.</td>
                  <td>₹22L</td>
                  <td>7–8L</td>
                  <td>1</td>
                  <td>Our ERP</td>
                </tr>
                <tr className="table-primary">
                  <td>Standard</td>
                  <td>2500 sq.ft.</td>
                  <td>₹36L</td>
                  <td>12-14L</td>
                  <td>2</td>
                  <td>Our ERP</td>
                </tr>
                <tr>
                  <td>Mega</td>
                  <td>5000 sq.ft.</td>
                  <td>₹61L</td>
                  <td>20-22L</td>
                  <td>2</td>
                  <td>Our ERP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <section className="content-inner bg-white">
        <div className="container">
          <div className="section-head style-1 text-center m-b30">
            <h2 className="title wow fadeInUp" data-wow-delay="0.2s">Earning Potential (Est.)</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="pricingtable-wrapper style-3 active p-5 shadow-lg rounded-4">
                <div className="pricingtable-list">
                  <ul className="pricingtable-features">
                    <li className="d-flex justify-content-between mb-3"><span>Pharmacy Sales</span> <strong>₹8 – ₹10 Lakhs</strong></li>
                    <li className="d-flex justify-content-between mb-3"><span>Lab Tests</span> <strong>₹3 – ₹5 Lakhs</strong></li>
                    <li className="d-flex justify-content-between mb-3"><span>Doctor Consultations</span> <strong>₹1 – ₹2 Lakhs</strong></li>
                    <li className="d-flex justify-content-between mb-3"><span>Membership Plans</span> <strong>₹3 – ₹5 Lakhs</strong></li>
                    <li className="d-flex justify-content-between pt-3 border-top border-2"><strong>Total Monthly Income Potential</strong> <strong>₹16 – ₹24 Lakhs</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
