import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MembershipSection() {

  const [isYearly, setIsYearly] = useState(false);

  const prices = {
    sathi: isYearly ? 1990 : 199,
    plus: isYearly ? 3990 : 399,
    health: isYearly ? 5990 : 599,
  };

  return (
			<section className="content-inner bg-light pricing-section">
				<div className="container">
					<div className="section-head style-1 text-center m-b30">
						<h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							Affordable Healthcare, Anytime, Anywhere
						</h2>
						<p className="text-muted m-b15">
							Choose the right Health Membership Plan for your family – enjoy free medicine deliveries,
							lab test discounts, and doctor consultations. </p>

						
					</div>

					<div className="row g-4 align-items-stretch">
						<div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<div className="pricing-card h-100">
								<div className="pc-head">
									<h5 className="m-b0">Sehat Sathi</h5>
									<button className="pc-fab" aria-label="Open plan"><i
											className="feather icon-arrow-up-right"></i></button>
								</div>
								<div className="pc-price">
									<span className="currency">₹</span>
									<span className="amount" data-monthly="199" data-yearly="199">199</span>
									<span className="year">/ Year </span>

									<span className="unit">USD</span>
								</div>
								<h6 className="pc-inc-title">What’s Included :</h6>
								<ul className="pc-list">
									<li><i className="feather icon-check"></i> 6 Free Medicine Deliveries </li>
									<li><i className="feather icon-check"></i> 6 Free Lab Home Visits </li>
									<li><i className="feather icon-check"></i> 10% OFF on Lab Tests </li>
									<li><i className="feather icon-check"></i> 6 Free Doctor Consultations </li>
									<li><i className="feather icon-check"></i> Covers 2 Persons </li>
								</ul>
								<Link to="/membership-form" className="btn btn-outline-primary w-100 pc-cta">Choose This Plan</Link>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.35s" data-wow-duration="0.8s">
							<div className="pricing-card featured h-100">
								<div className="pc-box">
									<div className="pc-head">
										<h5 className="m-b0">Sehat Plus</h5>
										<button className="pc-fab" aria-label="Open plan"><i
												className="feather icon-arrow-up-right"></i></button>
									</div>

									<div className="pc-price">
										<span className="currency">₹</span>
										<span className="amount" data-monthly="399" data-yearly="399">399</span>
										<span className="year">/ Year </span>
										<span className="unit">USD</span>
									</div>

									<h6 className="pc-inc-title">What’s Included :</h6>
									<ul className="pc-list">
										<li><i className="feather icon-check"></i> 12 Free Medicine Deliveries </li>
										<li><i className="feather icon-check"></i> 12 Free Lab Home Visits </li>
										<li><i className="feather icon-check"></i> 15% OFF on Lab Tests </li>
										<li><i className="feather icon-check"></i> 12 Free Doctor Consultations </li>
										<li><i className="feather icon-check"></i> Covers 3 Persons (Couple)</li>

									</ul>

									<Link to="/membership-form" className="btn w-100 pc-cta">Choose This Plan</Link>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.8s">
							<div className="pricing-card h-100">
								<div className="pc-head">
									<h5 className="m-b0">Sehat Health</h5>
									<button className="pc-fab" aria-label="Open plan"><i
											className="feather icon-arrow-up-right"></i></button>
								</div>
								<div className="pc-price">
									<span className="currency">₹</span>
									<span className="amount" data-monthly="599" data-yearly="599">599</span>
									<span className="year">/ Year </span>
									<span className="unit">USD</span>
								</div>
								<h6 className="pc-inc-title">What’s Included :</h6>
								<ul className="pc-list">
									<li><i className="feather icon-check"></i> Unlimited Free Medicine Deliveries </li>
									<li><i className="feather icon-check"></i> Unlimited Free Lab Home Visits</li>
									<li><i className="feather icon-check"></i> 25% OFF on Lab Tests</li>
									<li><i className="feather icon-check"></i> Unlimited Free Doctor Consultations</li>
									<li><i className="feather icon-check"></i> Covers Family (Up to 6 Users)</li>

								</ul>
								<Link to="/membership-form" className="btn btn-outline-primary w-100 pc-cta">Choose This Plan</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
  );
}
