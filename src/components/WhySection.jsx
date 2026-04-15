import { useEffect, useState } from 'react';

export default function WhySection() {

  return (
			<section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden"
				style={{backgroundImage: "url(/images/background/bg1.webp)", backgroundRepeat: "no-repeat", backgroundPosition: "right center", backgroundSize: "cover"}}>
				<div className="container">
					<div className="row content-wrapper style-7 align-items-center">
						<div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
							<div className="content-media">
								<div className="dz-media">
									<img src="/images/about/img5.webp" alt="" />
								</div>
								<div className="item1">
									<div className="info-widget style-11 bg-primary text-center">
										<span className="content-text text-white"><span className="counter">20</span>+</span>
										<h3 className="title m-b0 text-white">Years <br /> Experienced</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 m-b30">
							<div className="section-head style-1 m-b30">
								<h2 className="title text-white m-b0 wow fadeInUp" data-wow-delay="0.2s"
									data-wow-duration="0.7s">Why My Sehat Point? </h2>
							</div>
							<div className="row row-wrapper g-5">
								<div className="col-sm-6">
									<div className="icon-bx-wraper style-4 text-center text-white wow fadeInUp"
										data-wow-delay="0.4s" data-wow-duration="0.7s">
										<div className="icon-bx bg-primary">
											<span className="icon-cell">
												<i className="flaticon-check"></i>
											</span>
										</div>
										<div className="icon-content">
											<h3 className="dz-title">One-Stop Healthcare Solution </h3>
											<p>
												From medicines to lab tests, doctor consultations, and home visits – all
												in one place. </p>
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="icon-bx-wraper style-4 text-center text-white wow fadeInUp"
										data-wow-delay="0.6s" data-wow-duration="0.7s">
										<div className="icon-bx bg-primary">
											<span className="icon-cell">
												<i className="flaticon-check"></i>
											</span>
										</div>
										<div className="icon-content">
											<h3 className="dz-title">Fast Delivery & Service</h3>
											<p>
												Get medicines in as little as 15 minutes and lab tests done at your
												doorstep. </p>
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="icon-bx-wraper style-4 text-center text-white wow fadeInUp"
										data-wow-delay="0.8s" data-wow-duration="0.7s">
										<div className="icon-bx bg-primary">
											<span className="icon-cell">
												<img src="/images/svg/check.svg" alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="dz-title">Experienced Doctors & Lab Technicians </h3>
											<p>
												Reliable medical advice and accurate reports from trusted professionals.
											</p>
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="icon-bx-wraper style-4 text-center text-white wow fadeInUp"
										data-wow-delay="1.0s" data-wow-duration="0.7s">
										<div className="icon-bx bg-primary">
											<span className="icon-cell">
												<img src="/images/svg/check.svg" alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="dz-title">Centralised Stock Supply for Franchise </h3>
											<p>
												We provide all medicine and product stock directly – no purchase
												headache. </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  );
}
