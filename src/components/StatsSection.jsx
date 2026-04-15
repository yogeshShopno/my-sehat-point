import { useEffect, useState } from 'react';

export default function StatsSection() {

  return (
			<section className="content-inner-3 bg-secondary background-blend-multiply bg-img-fix"
				style={{backgroundImage: "url(/images/background/bg2.webp)", backgroundRepeat: "no-repeat", backgroundPosition: "right center", backgroundSize: "cover"}}>
				<div className="container">
					<div className="row align-items-sm-center">
						<div className="col-lg-3 col-12 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<div className="avatar-group m-b20">
								<img className="avatar rounded-circle border border-white border-3"
									src="/images/avatar/small/avatar1.webp" alt="" />
								<img className="avatar rounded-circle border border-white border-3"
									src="/images/avatar/small/avatar2.webp" alt="" />
								<img className="avatar rounded-circle border border-white border-3"
									src="/images/avatar/small/avatar3.webp" alt="" />
								<img className="avatar rounded-circle border border-white border-3"
									src="/images/avatar/small/avatar4.webp" alt="" />
							</div>
							<h2 className="text-white font-20 m-b0 fw-medium">300+ Appointment Booking Confirm for this Week
							</h2>
						</div>
						<div className="col-lg-3 col-4 m-b30 d-flex wow fadeInUp" data-wow-delay="0.4s"
							data-wow-duration="0.8s">
							<div className="content-bx style-1 mx-auto">
								<span className="content-text text-white"><span className="counter">200</span>+</span>
								<h3 className="title text-white m-b0">Specialists</h3>
							</div>
						</div>
						<div className="col-lg-3 col-4 m-b30 d-flex wow fadeInUp" data-wow-delay="0.6s"
							data-wow-duration="0.8s">
							<div className="content-bx style-1 mx-auto">
								<span className="content-text text-white"><span className="counter">45</span>K</span>
								<h3 className="title text-white m-b0">Happy Patients</h3>
							</div>
						</div>
						<div className="col-lg-3 col-4 m-b30 d-flex wow fadeInUp" data-wow-delay="0.8s"
							data-wow-duration="0.8s">
							<div className="content-bx style-1 mx-auto">
								<span className="content-text text-white"><span className="counter">150</span>+</span>
								<h3 className="title text-white m-b0">Winning Awards</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
  );
}
