import { useEffect, useState } from 'react';

export default function Section2() {

  return (
			<section className="clearfix">
				<div className="container">
					<div className="row content-wrapper style-16" style={{backgroundImage: "url(/images/call-action.webp)"}}>
						<div className="col-xl-6 col-md-7 col-sm-9">
							<div className="section-head style-3  position-relative mb-0 z-2">
								
								<h4 className="title m-b10 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
									Join the Future of Healthcare </h4>
								<p>
									Download our Patient App for easy medicine orders, lab test booking & doctor
									consultations – or become our Franchise Partner and grow with us. </p>
								<div className="call-action">
									<a href="appointment.html"
										className="btn btn-lg btn-icon btn-primary btn-shadow wow fadeInUp"
										data-wow-delay="0.4s" data-wow-duration="0.8s">
										<span className="w-100">Download Patient App</span> <span className="right-icon"><i
												className="feather icon-arrow-right"></i></span>
									</a>
									<a href="franchiseInquiryForm.html" className="btn btn-lg btn-icon btn-secondary wow fadeInUp"
										data-wow-delay="0.6s" data-wow-duration="0.8s">
										Apply for Franchise
										<span className="right-icon"><i className="feather icon-arrow-right"></i></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  );
}
