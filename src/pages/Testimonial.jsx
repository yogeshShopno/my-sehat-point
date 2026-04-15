import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Testimonial() {
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
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Testimonial</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Testimonial</li>
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
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12 m-b20 wow fadeInUp" data-wow-delay="0.2s"
              data-wow-duration="0.7s">
              <div className="testimonial-1">
                <div className="dz-media">
                  <div className="media-inner">
                    <img src="/images/testimonial/img2.webp" alt="/" />
                    <div className="video-bx1 video-sm">
                      <a href="https://www.youtube.com/watch?v=o8OgzQdA70c"
                        target="_blank" rel="noreferrer"
                        className="video-btn bg-primary">
                        <i className="fa fa-play text-white"></i>
                      </a>
                      <span>Watch The Video</span>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">Ramesh Patel</h5>
                    <span className="testimonial-position">Patient</span>
                  </div>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-text">
                    <h3 className="title">Best Treatment</h3>
                    <p>Fast delivery and genuine medicines!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 m-b20 wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.7s">
              <div className="testimonial-1">
                <div className="dz-media">
                  <div className="media-inner">
                    <img src="/images/testimonial/img3.webp" alt="/" />
                    <div className="video-bx1 video-sm">
                      <a href="https://www.youtube.com/watch?v=o8OgzQdA70c"
                        target="_blank" rel="noreferrer"
                        className="video-btn bg-primary">
                        <i className="fa fa-play text-white"></i>
                      </a>
                      <span>Watch The Video</span>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">Priya Shah</h5>
                    <span className="testimonial-position">Patient</span>
                  </div>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-text">
                    <h3 className="title">Best Treatment</h3>
                    <p>One place for doctor, lab, and pharmacy – very convenient</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 m-b20 wow fadeInUp" data-wow-delay="0.6s"
              data-wow-duration="0.7s">
              <div className="testimonial-1">
                <div className="dz-media">
                  <div className="media-inner">
                    <img src="/images/testimonial/img4.webp" alt="/" />
                    <div className="video-bx1 video-sm">
                      <a href="https://www.youtube.com/watch?v=o8OgzQdA70c"
                        target="_blank" rel="noreferrer"
                        className="video-btn bg-primary">
                        <i className="fa fa-play text-white"></i>
                      </a>
                      <span>Watch The Video</span>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">Arjun Mehta</h5>
                    <span className="testimonial-position">Patient</span>
                  </div>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-text">
                    <h3 className="title">Best Treatment</h3>
                    <p>I saved so much on medicines with their membership plan.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 m-b20 wow fadeInUp" data-wow-delay="0.8s"
              data-wow-duration="0.7s">
              <div className="testimonial-1">
                <div className="dz-media">
                  <div className="media-inner">
                    <img src="/images/testimonial/img5.webp" alt="/" />
                    <div className="video-bx1 video-sm">
                      <a href="https://www.youtube.com/watch?v=o8OgzQdA70c"
                        target="_blank" rel="noreferrer"
                        className="video-btn bg-primary">
                        <i className="fa fa-play text-white"></i>
                      </a>
                      <span>Watch The Video</span>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">Kenneth Fong</h5>
                    <span className="testimonial-position">Patient</span>
                  </div>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-text">
                    <h3 className="title">Best Treatment</h3>
                    <p>Consistent support and reliable healthcare services every time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden"
        style={{ backgroundImage: "url(/images/background/bg3.webp)", backgroundRepeat: "no-repeat", backgroundPosition: "right center", backgroundSize: "cover" }}>
        <div className="container">
          <div className="row content-wrapper style-2 align-items-center">
            <div className="col-xl-6">
              <div className="content-media">
                <div className="dz-media">
                  <img src="/images/about/img2.png" alt="" />
                </div>
                <div className="item1">
                  <div className="info-widget style-1">
                    <div className="avatar-group d-flex">
                      <img className="avatar rounded-circle border border-white border-2" style={{width: '40px', height: '40px'}} src="/images/avatar/small/avatar1.webp" alt="" />
                      <img className="avatar rounded-circle border border-white border-2 ms-n2" style={{width: '40px', height: '40px'}} src="/images/avatar/small/avatar2.webp" alt="" />
                      <img className="avatar rounded-circle border border-white border-2 ms-n2" style={{width: '40px', height: '40px'}} src="/images/avatar/small/avatar3.webp" alt="" />
                    </div>
                    <div className="clearfix ms-2">
                      <span className="number text-primary fw-bold">150k+</span>
                      <div className="small">Patient recovers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10 align-self-center m-b30">
              <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s"
                data-wow-duration="0.7s">
                <h2 className="title text-white m-b0">Real Patients, Real Stories. Our Commitment to Health.</h2>
              </div>
              <p className="text-white opacity-75">We are proud to have served thousands of satisfied patients across various healthcare services. Our goal is to provide quality healthcare at your doorstep.</p>
              <div className="row mt-4">
                 <div className="col-sm-4 mb-3">
                   <div className="text-white text-center">
                      <h2 className="fw-bold mb-0">15+</h2>
                      <div className="small">Years Exp.</div>
                   </div>
                 </div>
                 <div className="col-sm-4 mb-3">
                   <div className="text-white text-center">
                      <h2 className="fw-bold mb-0">50k+</h2>
                      <div className="small">Medicines</div>
                   </div>
                 </div>
                 <div className="col-sm-4 mb-3">
                   <div className="text-white text-center">
                      <h2 className="fw-bold mb-0">100+</h2>
                      <div className="small">Doctors</div>
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
