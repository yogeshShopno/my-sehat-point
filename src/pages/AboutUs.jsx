import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
    
    // Initialize lightGallery if present
    if (window.lightGallery && document.getElementById('lightgallery')) {
        window.lightGallery(document.getElementById('lightgallery'), {
            thumbnail: true,
            selector: '.lg-item'
        });
    }

    if (typeof Swiper !== 'undefined') {
        document.querySelectorAll('.swiper').forEach(el => {
          if (!el.swiper) new Swiper(el, { loop: true, autoplay: { delay: 3000 } });
        });
    }
  }, []);

  return (
    <>
      <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md"
        style={{ backgroundImage: "url(/images/banner/bnr1.webp)" }}>
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">About Us</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">About Us</li>
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
                <div className="item1" data-bottom-top="transform: translateY(-50px)"
                  data-top-bottom="transform: translateY(50px)">
                  <div className="info-widget style-7">
                    <div className="widget-content bg-secondary">
                      Video Call Support
                    </div>
                    <div className="widget-media">
                      <img src="/images/about/img2.webp" alt="" />
                      <div className="call-widget">
                        <a href="#">
                          <img src="/images/svg/camra.svg" alt="" />
                        </a>
                        <a href="#">
                          <img src="/images/svg/message.svg" alt="" />
                        </a>
                        <a href="#" className="active">
                          <img src="/images/svg/call.svg" alt="" />
                        </a>
                        <a href="#">
                          <img src="/images/svg/mike.svg" alt="" />
                        </a>
                        <a href="#">
                          <img src="/images/svg/video.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item2" data-bottom-top="transform: translateY(50px)"
                  data-top-bottom="transform: translateY(-50px)">
                  <div className="info-widget style-6 bg-primary">
                    <div className="info-icon bg-secondary">
                      <img src="/images/svg/clock.svg" alt="" />
                    </div>
                    <div className="widget-content">
                      <h4 className="title">Open Hours</h4>
                      <ul>
                        <li>Monday <strong>7:00 AM – 11:00 PM</strong></li>
                        <li>Tuesday <strong>7:00 AM – 11:00 PM</strong></li>
                        <li>Wednesday <strong>7:00 AM – 11:00 PM</strong></li>
                        <li>Thursday <strong>7:00 AM – 11:00 PM</strong></li>
                        <li>Friday <strong>7:00 AM – 11:00 PM</strong></li>
                        <li>Saturday <strong>7:00 AM – 11:00 PM</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 m-b30">
              <div className="section-head style-1 m-b30">
                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Aapki
                  Sehat, Hamari Zimmedari </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">At My Sehat
                  Point, we are redefining healthcare by bringing all essential medical services under
                  one roof. Our goal is to make healthcare accessible, reliable, and affordable for
                  every individual and family. </p>
                <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">We combine modern
                  technology, professional healthcare services, and community-focused care to provide
                  an all-in-one health solution for our customers. </p>
              </div>
              <ul className="list-check text-secondary grid-2 fw-medium m-b30 wow fadeInUp"
                data-wow-delay="0.6s" data-wow-duration="0.8s">
                <li>Digital Health Records </li>
                <li>Affordable Memberships </li>
                <li>Home Lab Collection </li>
                <li>Online Doctor Consults </li>
                <li>Preventive Vaccinations </li>
                <li>Genuine Medicines </li>
                <li>24×7 Customer Support</li>
                <li>Franchise Opportunities </li>
                <li>Community Health Camps</li>
                <li>Smart Billing System </li>
              </ul>
              <div className="d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay="0.8s"
                data-wow-duration="0.8s">
                <Link to="/franchise-investor"
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

      <section id="offer" className="content-inner bg-light">
        <div className="container">
          <div className="offer-shell">
            <div className="section-head style-1 text-center m-b20">
              <h2 className="title m-b0 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.8s">
                What We Offer
              </h2>
            </div>

            <div className="row g-4">
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.15s" data-wow-duration="0.8s">
                <div className="offer-card h-100">
                  <div className="icon-bx"><span className="icon-cell"><i
                    className="feather icon-shopping-bag"></i></span></div>
                  <h5 className="m-b5"> Pharmacy Services </h5>
                  <p className="m-b0">Genuine medicines & wellness products </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <div className="offer-card h-100">
                  <div className="icon-bx"><span className="icon-cell"><i
                    className="feather icon-activity"></i></span></div>
                  <h5 className="m-b5">Lab Tests</h5>
                  <p className="m-b0"> Accurate reports with home collection </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.25s" data-wow-duration="0.8s">
                <div className="offer-card h-100">
                  <div className="icon-bx"><span className="icon-cell"><i
                    className="feather icon-user"></i></span></div>
                  <h5 className="m-b5">Doctor Consultation </h5>
                  <p className="m-b0">OPD & online video consults</p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.8s">
                <div className="offer-card h-100">
                  <div className="icon-bx"><span className="icon-cell"><i
                    className="feather icon-truck"></i></span></div>
                  <h5 className="m-b5">Home Delivery & App</h5>
                  <p className="m-b0">Medicines & health tracking </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.35s" data-wow-duration="0.8s">
                <div className="offer-card h-100">
                  <div className="icon-bx"><span className="icon-cell"><i
                    className="feather icon-heart"></i></span></div>
                  <h5 className="m-b5">Health Plans</h5>
                  <p className="m-b0"> Affordable membership benefits</p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div className="offer-card h-100">
                  <div className="icon-bx"><span className="icon-cell"><i
                    className="feather icon-trending-up"></i></span></div>
                  <h5 className="m-b5">Franchise Support </h5>
                  <p className="m-b0">Grow with My Sehat Point</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner bg-light gradient-top-light">
        <div className="container">
          <div className="row g-lg-5 align-items-center">
            <div className="col-lg-7 m-b10">
              <div className="section-head style-1 m-b30 max-w600">
                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                  Inspiring Health – Our Vision & Mission </h2>
                <p className="small wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">At My Sehat
                  Point, we aim to improve the health and well-being of our community by delivering
                  compassionate, high-quality, and affordable healthcare. With a team of dedicated
                  professionals and advanced medical practices, we are committed to making healthcare
                  more accessible, reliable, and patient-focused for everyone.
                </p>
              </div>
              <div className="icon-bx-wraper style-9 m-b20 m-r25 wow fadeInUp" data-wow-delay="0.2s"
                data-wow-duration="0.8s">
                <div className="icon-bx">
                  <img src="/images/svg/icon1.svg" style={{width: '50px'}} alt="" />
                </div>
                <div className="icon-content">
                  <h3 className="dz-title">Mission </h3>
                  <p>At My Sehat Point, we aim to improve the health and well-being of our community
                    by delivering compassionate, high-quality, and affordable healthcare.
                  </p>
                </div>
              </div>
              <div className="icon-bx-wraper style-9 m-b20 wow fadeInUp" data-wow-delay="0.4s"
                data-wow-duration="0.8s">
                 <div className="icon-bx">
                  <img src="/images/svg/icon2.svg" style={{width: '50px'}} alt="" />
                </div>
                <div className="icon-content">
                  <h3 className="dz-title">Vision</h3>
                  <p>To become India’s leading healthcare network, ensuring that every community has
                    easy access to quality medicines, diagnostics, and medical consultation. </p>
                </div>
              </div>

            </div>

            <div className="col-lg-5 m-b30">
              <div className="dz-media radius-md height-lg">
                <img src="/images/about/img8.webp" alt="" className="object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="content-inner-1">
        <div className="container">
           <div className="section-head style-1 text-center">
                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Our Promise</h2>
           </div>
           <div className="row">
                <div className="col-lg-12">
                    <p className="text-center wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        At My Sehat Point, we care for your health with trust and responsibility. We promise 100% authentic medicines, quick delivery, accurate lab tests, and expert consultation.
                    </p>
                </div>
           </div>
        </div>
      </section>
    </>
  );
}
