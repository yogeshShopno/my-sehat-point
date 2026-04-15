import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (
		<footer className="site-footer style-1 overlay-primary-light"
			style={{backgroundImage: "url(/images/background/bg4.webp)"}}>

			{/* <div className="footer-head">
				<div className="container">
					<div className="fh-inner">
						<div className="row g-3 align-items-center">
							<div className="col-xl-3 col-md-12 col-sm-6 wow fadeInUp" data-wow-delay="0.2s"
								data-wow-duration="0.8s">
								<h3 className="title">Get in Touch with us</h3>
								<p className="text">Book your visit today or start your own My Sehat Point franchise.</p>
							</div>
							<div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s"
								data-wow-duration="0.8s">
								<div className="icon-bx-wraper style-1">
									<div className="icon-bx bg-secondary">
										<span className="icon-cell">
											<i className="feather icon-phone"></i>
										</span>
									</div>
									<div className="icon-content">
										<h5 className="dz-title">Call Us</h5>
										<p><a href="tel:+919090257373" className="text-body">+91 90902 57373</a></p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.6s"
								data-wow-duration="0.8s">
								<div className="icon-bx-wraper style-1">
									<div className="icon-bx bg-secondary">
										<span className="icon-cell">
											<i className="feather icon-mail"></i>
										</span>
									</div>
									<div className="icon-content">
										<h5 className="dz-title">Send us a Mail</h5>
										<p><a href="mailto:support@mysehatpoint.com"
												className="text-body">support@mysehatpoint.com</a></p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.8s"
								data-wow-duration="0.8s">
								<div className="icon-bx-wraper style-1">
									<div className="icon-bx bg-secondary">
										<span className="icon-cell">
											<i className="feather icon-clock"></i>
										</span>
									</div>
									<div className="icon-content">
										<h5 className="dz-title">Opening Time</h5>
										<p>365 Days | 7:00 AM – 11:00 PM</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			
				<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-sm-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<div className="widget widget_about me-2">
								<div className="footer-logo logo-white">
									<Link to="/"><img src="/images/mysharepoint2.png" alt="" /></Link>
								</div>
								<p> We support<span className="text-primary"> entrepreneurs and medical</span> professionals
									to run successful healthcare franchises with simple and profitable models. </p>
							</div>
						</div>
						<div className="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.4s"
							data-wow-duration="0.8s">
							<div className="widget widget_services">
								<h2 className="footer-title">Our Services </h2>
								<ul className="list-hover1">
									<li><Link to="/our-story-who-we-are"><span> Our Story Who We Are </span></Link></li>
									<li><Link to="/rent-your-property"><span> Rent Your Property </span></Link></li>
									<li><Link to="/franchise-investor"><span> Franchise Investor </span></Link></li>
									<li><Link to="/membership-plans"><span> Membership Plan </span></Link></li>
									<li><Link to="/faqs"><span>FAQs</span></Link></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.6s"
							data-wow-duration="0.8s">
							<div className="widget widget_services">
								<h2 className="footer-title">Useful Links</h2>
								<ul className="list-hover1">
									<li><Link to="/privacy-policy"><span>Privacy Policy</span></Link></li>
									<li><Link to="/terms-and-conditions"><span>Terms & Conditions</span></Link></li>
									<li><Link to="/blog-grid"><span>Latest News</span></Link></li>
									<li><Link to="/contact-us"><span>Contact Us</span></Link></li>
									
								</ul>
							</div>
						</div>
						

						<div className="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="1.0s"
							data-wow-duration="0.8s">
							<div className="widget widget_services">
								<h2 className="footer-title">Quick Links</h2>
								<ul className="list-hover1">
									<li><Link to="/"><span>Home</span></Link></li>
									<li><Link to="/about-us"><span>About Us</span></Link></li>
									<li><Link to="/services"><span>Our Services</span></Link></li>
									<li><Link to="/testimonial"><span>Testimonial</span></Link></li>
									
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.8s"
							data-wow-duration="0.8s">
							<div className="widget widget_services">
								<h2 className="footer-title">Business Hours</h2>
								<ul className="list-hover1">
									<li><a href="#" onClick={(e) => e.preventDefault()}><span>Mon-Friday:
												08.00 am to 08.00 pm</span></a></li>
									<li><a href="#" onClick={(e) => e.preventDefault()}><span>Satday:
												09.00 am to 03.00 pm</span></a></li>

								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			

			
			{/* <div className="footer-middle">
				<div className="container">
					<div className="fm-inner">
						<div className="row align-items-center g-lg-5 g-4">
							<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
								<h2 className="title">Important Updates Waiting for you</h2>
								<p>Get our latest and best contents right into your inbox</p>
							</div>
							<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
								<form className="dzSubscribe style-1"
									action="https://clinicmaster.vercel.app/assets/script/mailchimp.php" method="post">
									<div className="dzSubscribeMsg"></div>
									<div className="form-group">
										<div className="input-group mb-0">
											<input name="dzEmail" required="required" type="email" className="form-control"
												placeholder="Your Email Address" />
											<div className="input-group-addon">
												<button name="submit" value="Submit" type="submit"
													className="btn btn-primary btn-hover1">
													<span className="btn-text">Subscribe Now</span>
													<span className="btn-icon">
														<i className="fa-solid fa-paper-plane"></i>
													</span>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			
			<div className="footer-bottom">
				<div className="container">
					<div className="fb-inner">
						<div className="row">
							<div className="col-lg-6 col-md-12 text-start">
								<p className="copyright-text">© Copyright <span className="current-year">2025,</span> <Link
										to="/">All Rights Sehat Point |</Link>
									<a href="https://shopnoecommerce.com/" target="_blank">Designed by: Shopno
										Ecommerce</a>
								</p>
							</div>
							<div className="col-lg-6 col-md-12 text-end">
								<div
									className="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end">
									<div className="widget-rating1">
										<img src="/images/google.svg" alt="" />
										<ul className="star-list">
											<li><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
										</ul>
										<span className="rating">(4.8)</span>
										<span className="text">12k+ ratings on google</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
				</footer>
  );
}
