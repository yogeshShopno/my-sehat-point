import { useEffect, useState } from 'react';

export default function Section3() {

  return (
			<section className="content-wrapper style-4">
				<div className="container">
					<div className="map-wrapper">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin"
							width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
					<div className="row">
						<div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8">
							<div className="content-info bg-secondary">
								<div className="section-head style-1 wow fadeInUp" data-wow-delay="0.2s"
									data-wow-duration="0.8s">
									<h2 className="title m-b0 text-white">Get in Touch with us</h2>
									<p className="text-white">Your Health, Just a Click Away</p>
								</div>
								<div className="icon-bx-wraper style-1 m-b20 wow fadeInUp" data-wow-delay="0.4s"
									data-wow-duration="0.8s">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="feather icon-map-pin"></i>
										</span>
									</div>
									<div className="icon-content">
										<h5 className="dz-title">Address</h5>
										<p>My Sehat Point 123, Healthcare Street, Ahmedabad, Gujarat, India – 380001</p>
									</div>
								</div>
								<div className="icon-bx-wraper style-1 m-b20 wow fadeInUp" data-wow-delay="0.6s"
									data-wow-duration="0.8s">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="feather icon-phone"></i>
										</span>
									</div>
									<div className="icon-content">
										<h5 className="dz-title">Call Us</h5>
										<p><a href="tel:+919090257373">+91 90902 57373</a></p>
									</div>
								</div>
								<div className="icon-bx-wraper style-1 m-b20 wow fadeInUp" data-wow-delay="0.8s"
									data-wow-duration="0.8s">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="feather icon-mail"></i>
										</span>
									</div>
									<div className="icon-content">
										<h5 className="dz-title">Send us a Mail</h5>
										<p><a href="mailto:support@mysehatpoint.com">support@mysehatpoint.com</a>
										</p>
									</div>
								</div>
								<div className="icon-bx-wraper style-1 m-b20 wow fadeInUp" data-wow-delay="1.0s"
									data-wow-duration="0.8s">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="feather icon-clock"></i>
										</span>
									</div>
									<div className="icon-content">
										<h5 className="dz-title">Opening Time</h5>
										<p>365 Days | 7:00 AM – 11:00 PM</p>
									</div>
								</div>
								<a href="https://maps.app.goo.gl/vyziq38uHKzjy4Fj7"
									className="btn btn-lg btn-icon btn-primary w-100 m-t20 btn-shadow wow fadeInUp"
									data-wow-delay="1.2s" data-wow-duration="0.8s">
									<span className="w-100">Direction </span>
									<span className="right-icon"><i className="feather icon-arrow-right"></i></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
  );
}
