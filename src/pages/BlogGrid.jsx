import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogGrid() {
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
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Latest News</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Blog Grid</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-12 m-b30 pe-xl-5">
              <div className="row">
                <div className="col-lg-6 col-md-6 m-b25 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.5s">
                  <div className="dz-card style-2 dz-card-overlay shadow-sm rounded-3 overflow-hidden" 
                    style={{ backgroundImage: "url(/images/blog/overlay/large/img1.webp)", height: '400px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div className="dz-info p-4" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                      <div className="post-date text-white-50 small mb-2">12 Jan 2024</div>
                      <div className="bottom-info d-flex justify-content-between align-items-end">
                        <h3 className="dz-title mb-0">
                          <Link to="#" className="text-white text-decoration-none">The Art of Managing Business and Patient Care</Link>
                        </h3>
                        <Link to="#" className="btn btn-square btn-white rounded-circle p-2">
                          <i className="feather icon-arrow-up-right text-primary"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 m-b25 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                  <div className="dz-card style-2 dz-card-overlay shadow-sm rounded-3 overflow-hidden" 
                    style={{ backgroundImage: "url(/images/blog/overlay/large/img2.webp)", height: '400px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div className="dz-info p-4" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                      <div className="post-date text-white-50 small mb-2">15 Jan 2024</div>
                      <div className="bottom-info d-flex justify-content-between align-items-end">
                        <h3 className="dz-title mb-0">
                          <Link to="#" className="text-white text-decoration-none">Successful Transitional Rehab: More Than Just Exercise</Link>
                        </h3>
                        <Link to="#" className="btn btn-square btn-white rounded-circle p-2">
                          <i className="feather icon-arrow-up-right text-primary"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 m-b25 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                  <div className="dz-card style-2 dz-card-overlay shadow-sm rounded-3 overflow-hidden" 
                    style={{ backgroundImage: "url(/images/blog/overlay/large/img3.webp)", height: '400px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div className="dz-info p-4" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                      <div className="post-date text-white-50 small mb-2">20 Jan 2024</div>
                      <div className="bottom-info d-flex justify-content-between align-items-end">
                        <h3 className="dz-title mb-0">
                          <Link to="#" className="text-white text-decoration-none">What is Respite Care and Why is it Important?</Link>
                        </h3>
                        <Link to="#" className="btn btn-square btn-white rounded-circle p-2">
                          <i className="feather icon-arrow-up-right text-primary"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 m-b25 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.5s">
                  <div className="dz-card style-2 dz-card-overlay shadow-sm rounded-3 overflow-hidden" 
                    style={{ backgroundImage: "url(/images/blog/overlay/large/img4.webp)", height: '400px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div className="dz-info p-4" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                      <div className="post-date text-white-50 small mb-2">25 Jan 2024</div>
                      <div className="bottom-info d-flex justify-content-between align-items-end">
                        <h3 className="dz-title mb-0">
                          <Link to="#" className="text-white text-decoration-none">Advanced Diagnostics for Modern Healthcare</Link>
                        </h3>
                        <Link to="#" className="btn btn-square btn-white rounded-circle p-2">
                          <i className="feather icon-arrow-up-right text-primary"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center m-t30 loadmore-btn wow fadeInUp" data-wow-delay="0.5s">
                <button className="btn btn-lg btn-icon btn-primary shadow">
                  Load More <span className="right-icon"><i className="feather icon-refresh-ccw"></i></span>
                </button>
              </div>
            </div>

            <div className="col-xl-3 col-lg-12">
              <aside className="side-bar sticky-top">
                <div className="widget wow fadeInUp" data-wow-delay="0.1s">
                  <div className="widget-title">
                    <h4 className="title">Search</h4>
                  </div>
                  <div className="search-bx">
                    <form role="search">
                      <div className="input-group">
                        <input name="text" className="form-control" placeholder="Search" type="text" />
                        <button type="submit" className="btn btn-primary"><i className="feather icon-search"></i></button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widget widget_categories style-1 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="widget-title">
                    <h4 className="title">Category</h4>
                  </div>
                  <ul className="list-unstyled">
                    <li className="cat-item d-flex justify-content-between mb-2 pb-2 border-bottom"><Link to="#" className="text-body text-decoration-none">Health</Link> <span>(10)</span></li>
                    <li className="cat-item d-flex justify-content-between mb-2 pb-2 border-bottom"><Link to="#" className="text-body text-decoration-none">Mental Care</Link> <span>(05)</span></li>
                    <li className="cat-item d-flex justify-content-between mb-2 pb-2 border-bottom"><Link to="#" className="text-body text-decoration-none">Diagnostics</Link> <span>(17)</span></li>
                    <li className="cat-item d-flex justify-content-between"><Link to="#" className="text-body text-decoration-none">Pharmacy</Link> <span>(13)</span></li>
                  </ul>
                </div>
                <div className="widget recent-posts-entry wow fadeInUp" data-wow-delay="0.3s">
                  <div className="widget-title">
                    <h4 className="title">Latest Post</h4>
                  </div>
                  <div className="widget-post-bx">
                    <div className="widget-post d-flex mb-3">
                      <div className="dz-media me-3" style={{width: '70px', height: '70px', flexShrink: 0}}>
                        <img src="/images/blog/small/img1.webp" alt="" className="rounded shadow-sm w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="dz-info">
                        <div className="dz-meta small text-muted mb-1">17 May 2024</div>
                        <h6 className="title mb-0"><Link to="#" className="text-body text-decoration-none">The Importance of Regular Checkups</Link></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
