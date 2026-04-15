import { useEffect, useState } from 'react';

export default function LabTestSection() {

	return (
		<section className="content-inner-2 bg-light z-2" style={{ backgroundImage: "url(/images/background/bg5.png)" }}>
			<div className="container">
				<div className="row align-items-end content-wrapper style-8">
					<div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
						<img src="/images/about/img3.png" alt="/" />
					</div>
					<div className="col-lg-6" data-bottom-top="transform: translateY(100px)"
						data-top-bottom="transform: translateY(-10px)">
						<div className="form-wrapper style-1 text-vr-wrapper">
							<div className="text-vertical">Become Member</div>
							<div className="form-body bg-primary background-blend-burn"
								style={{ backgroundImage: "url(/images/background/bg2.png)", backgroundSize: "cover" }}>
								<div className="title-head">
									<h2 className="form-title m-b0">Apply For The <span> - Franchise </span></h2>
									<p style={{ color: "#FFF" }}>
										Get your samples collected at home with accurate reports delivered online.
									</p>
								</div>
								<form action="https://clinicmaster.vercel.app/assets/script/contact_smtp.php"
									className="dzForm" method="POST">
									<input type="hidden" className="form-control" name="dzToDo" value="Appointment" />
									<input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
									<div className="dzFormMsg"></div>
									<div className="row">
										<div className="col-sm-6 m-b30">
											<div className="form-floating floating-underline input-light">
												<input name="dzName" type="text" className="form-control"
													id="inputYourName" placeholder="Enter Your Full Name" />
												<label htmlFor="inputYourName">Full Name </label>
											</div>
										</div>
										<div className="col-sm-6 m-b30">
											<div className="form-floating floating-underline input-light">
												<input name="dzEmail" type="email" className="form-control"
													id="inputYourEmail" placeholder="Your Email" />
												<label htmlFor="inputYourEmail">Your Email</label>
											</div>
										</div>
										<div className="col-sm-6 m-b30">
											<div className="form-floating floating-underline input-light">
												<input name="dzPhoneNumber" type="text"
													className="form-control dz-number" id="inputPhoneNumber"
													placeholder="Phone Number" />
												<label htmlFor="inputPhoneNumber">Phone Number</label>
											</div>
										</div>


										<div className="col-sm-12 m-b30">
											<div className="form-floating floating-underline input-light">
												<input name="dzOther[PreferredDateTime]" type="datetime-local"
													className="form-control" id="inputPreferredDateTime"
													placeholder="Select preferred date & time" required />
												<label htmlFor="inputPreferredDateTime">Preferred Date &amp;
													Time</label>
											</div>
										</div>

										<div className="col-sm-12 m-b30">
											<div className="form-floating floating-underline input-light">
												<textarea name="dzMessage" className="form-control" id="inputMessage"
													rows="6" placeholder="Select Service"></textarea>
												<label htmlFor="inputMessage">Message</label>
											</div>
										</div>

										<div className="col-sm-12">
											<button type="submit" name="submit" value="submit"
												className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
												Submit <span className="right-icon"><i
													className="feather icon-arrow-right"></i></span>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
