import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PartnerSection() {

  return (
			<section id="partner" className="content-inner partner-wrap">
				<div className="container">
					<div className="partner-shell">
						<div className="row align-items-center g-4">
							
							<div className="col-lg-7">
								<div className="wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.8s">
									<span className="pill">FRANCHISE & EXISTING STORE UPGRADE </span>
									<h2 className="title m-t10">
										Upgrade Your Existing Medical Store with My Sehat Point – Boost Growth & ROI
									</h2>
									<ul className="partner-list m-t20">
										<li><span className="tick"><i className="feather icon-check"></i></span>Transform
											underperforming stores into high-profit healthcare hubs. </li>
										<li><span className="tick"><i className="feather icon-check"></i></span> Complete setup
											& operational support for seamless transition. </li>
										<li><span className="tick"><i className="feather icon-check"></i></span> Expiry return &
											non-moving stock management to reduce losses.</li>
										<li><span className="tick"><i className="feather icon-check"></i></span>Strong marketing
											& brand presence to attract more customers</li>
									</ul>

									<div className="chip-row m-t20">
										<span className="chip">Pan-India Brand </span>
										<span className="chip">Zero Wastage Policy</span>
										<span className="chip">Training Included</span>
									</div>

									<div className="m-t25">

										<Link to="/franchise-inquiry" className="btn btn-lg btn-icon btn-secondary wow fadeInUp"
											data-wow-delay="0.6s" data-wow-duration="0.8s">
											Apply for Franchise
											<span className="right-icon"><i className="feather icon-arrow-right"></i></span>
										</Link>
									</div>
								</div>
							</div>

							
							<div className="col-lg-5">
								<div className="apply-card wow fadeInUp" data-wow-delay="0.15s" data-wow-duration="0.8s">
									<div className="apply-badge">High ROI</div>
									<h5 className="mb-1">How It Works: </h5>
									<p className="text-muted m-b15">Start fast with end-to-end assistance from site setup to
										launch day.</p>

									<div className="mini-steps">
										<div className="step">
											<span className="step-num">1</span>
											<div>
												<h6 className="m-b0">Apply for Upgrade </h6>
												<small className="text-muted">Share store details & growth
													challenges.</small>
											</div>
										</div>
										<div className="step">
											<span className="step-num">2</span>
											<div>
												<h6 className="m-b0">Get Setup Assistance </h6>
												<small className="text-muted"> Store redesign, inventory optimization,
													licenses. </small>
											</div>
										</div>
										<div className="step">
											<span className="step-num">3</span>
											<div>
												<h6 className="m-b0">Grow & Earn </h6>
												<small className="text-muted"> Training, marketing, and continuous support
													to maximize profits. </small>
											</div>
										</div>
									</div>

									<Link to="/franchise-inquiry" className="btn btn-secondary w-100 m-t10">
										Start Upgrade Application
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  );
}
