import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {

  return (
    <>
			<div className="hero-banner style-1"
				style={{backgroundImage: "url(/images/hero-banner/bg1.webp)", backgroundSize: "cover"}}>
				<div className="container">
					<div className="inner-wrapper">
						
						<div className="row align-items-end h-100">
							<div className="col-lg-6 align-self-center">
								<div className="hero-content">
									<h1 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
										India’s First Healthcare Mall
										<span className="text-primary"> All Services Under One Roof</span> <img
											src="/images/hero-banner/line.png" alt="" />
									</h1>
									<p className="text wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Your
										health, our priority – Medicines, Doctors, Lab Tests, Memberships & More!
									</p>
									<Link to="/appointment"
										className="btn btn-lg btn-icon btn-primary m-r20 wow fadeInUp" data-wow-delay="0.6s"
										data-wow-duration="0.8s">
										Download Patient App
										<span className="right-icon"><i className="feather icon-arrow-right"></i></span>
									</Link>
									<Link to="/franchise-inquiry" className="btn btn-lg  mt-lg-0 mt-3 btn-icon btn-secondary wow fadeInUp"
										data-wow-delay="0.6s" data-wow-duration="0.8s">
										Apply For Franchise
										<span className="right-icon"><i className="feather icon-arrow-right"></i></span>
									</Link>
								</div>
							</div>
							<div className="col-lg-6 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
								<div className="hero-thumbnail" data-bottom-top="transform: translateY(-50px)"
									data-top-bottom="transform: translateY(50px)">
									<img className="thumbnail" src="/images/hero-banner/img1.webp" alt="" />
									<div className="circle-wrapper">
										<span className="circle1"></span>
										<span className="circle2"></span>
										<span className="circle3"></span>

										<div className="item1">
											<img src="/images/hero-banner/heart.png" alt="" />
										</div>
									</div>
									<div className="item2" data-bottom-top="transform: translateY(-50px)"
										data-top-bottom="transform: translateY(50px)">
										<div className="info-widget style-1 move-3">
											<div className="avatar-group">
												<img className="avatar rounded-circle avatar-sm border border-white border-2"
													src="/images/avatar/small/avatar1.webp" alt="" />
												<img className="avatar rounded-circle avatar-sm border border-white border-2"
													src="/images/avatar/small/avatar2.webp" alt="" />
												<img className="avatar rounded-circle avatar-sm border border-white border-2"
													src="/images/avatar/small/avatar3.webp" alt="" />
												<img className="avatar rounded-circle avatar-sm border border-white border-2"
													src="/images/avatar/small/avatar4.webp" alt="" />
											</div>
											<div className="clearfix ms-2">
												<span className="number text-primary">150k</span>
												<span>Patient recovers</span>
											</div>
										</div>
									</div>
									<div className="item3" data-bottom-top="transform: translateY(-50px)"
										data-top-bottom="transform: translateY(50px)">
										<div className="info-widget style-2 move-2">
											<div id="progressChart"></div>
											<div className="widget-content">
												<h6 className="mb-0">A modern healthcare mall interior</h6>
												<Link to="/about-us"
													className="btn btn-square btn-outline-light text-primary rounded-circle">
													<i className="feather icon-arrow-up-right"></i>
												</Link>
											</div>
										</div>
									</div>
									<div className="item4" data-bottom-top="transform: translateY(-50px)"
										data-top-bottom="transform: translateY(50px)">
										<div className="info-widget style-3 move-1">
											<div className="widget-head">
												<div className="widget-media">
													<img src="/images/avatar/small/avatar5.webp" alt="" />
												</div>
												<div className="widget-content">
													<h6 className="title">Dr. Natali jackson</h6>
													<ul className="star-list">
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
													</ul>
												</div>
											</div>
											<p>“It is a long established fact that a reader will be distracted by the
												readable content”</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="item5" data-bottom-top="transform: translateY(-30px)"
							data-top-bottom="transform: translateY(30px)">
							<div className="info-widget style-4 move-4">
								<div className="widget-media">
									<img src="/images/avatar/indian-woman.jpg" alt="" height="80px" width="40px" />
								</div>
								<div className="widget-content">
									<h6 className="title">Have a Question?</h6>
									<a href="mailto:mysehatpoint@gmail.com">mysehatpoint@gmail.com</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			
    </>
  );
}
