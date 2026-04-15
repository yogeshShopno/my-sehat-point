import { useEffect, useState } from 'react';

export default function Section1() {

  return (
			<section className="content-inner"
				style={{backgroundImage: "url(/images/background/bg3.png)", backgroundPosition: "right bottom", backgroundRepeat: "no-repeat"}}>
				<div className="container">
					<div className="row content-wrapper style-5">
						<div className="col-xxl-7 col-xl-6 col-lg-5 m-b30 align-self-center">
							<div className="content-info">
								<div className="section-head style-1 m-b30">
									<h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
										Frequently Asked Questions (FAQ)
									</h2>
									
								</div>

								
								<div className="accordion dz-accordion style-1" id="accordionFAQ">

									
									<div className="accordion-item wow fadeInUp" data-wow-delay="0.5s"
										data-wow-duration="0.7s">
										<h2 className="accordion-header" id="headingGeneral">
											<button className="accordion-button" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapseGeneral" aria-expanded="true"
												aria-controls="collapseGeneral">
												1. General Information
											</button>
										</h2>
										<div id="collapseGeneral" className="accordion-collapse collapse show"
											aria-labelledby="headingGeneral" data-bs-parent="#accordionFAQ">
											<div className="accordion-body">

												
												<div className="accordion dz-accordion style-1" id="accordionGeneral">
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="gq1">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#gc1"
																aria-expanded="false" aria-controls="gc1">
																Q: What is My Sehat Point?
															</button>
														</h2>
														<div id="gc1" className="accordion-collapse collapse"
															aria-labelledby="gq1" data-bs-parent="#accordionGeneral">
															<div className="accordion-body">
																A: My Sehat Point is India’s first and largest
																multi-service healthcare mall. We offer
																pharmacy services, doctor consultations, lab tests,
																health membership plans, home delivery,
																and more — all under one roof.
															</div>
														</div>
													</div>
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="gq2">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#gc2"
																aria-expanded="false" aria-controls="gc2">
																Q: Where are you located?
															</button>
														</h2>
														<div id="gc2" className="accordion-collapse collapse"
															aria-labelledby="gq2" data-bs-parent="#accordionGeneral">
															<div className="accordion-body">
																A: Our main healthcare mall is located in Kadi, Gujarat,
																and we are expanding through
																franchises across India.
															</div>
														</div>
													</div>
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="gq3">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#gc3"
																aria-expanded="false" aria-controls="gc3">
																Q: What services do you provide?
															</button>
														</h2>
														<div id="gc3" className="accordion-collapse collapse"
															aria-labelledby="gq3" data-bs-parent="#accordionGeneral">
															<div className="accordion-body">
																A: We provide a complete range of healthcare services
																including:
																<ul className="m-0 ps-3">
																	<li>Pharmacy (allopathic, ayurvedic, homeopathic
																		medicines)</li>
																	<li>Lab tests &amp; diagnostic services</li>
																	<li>Doctor consultations (in-person &amp; online)
																	</li>
																	<li>Home delivery for medicines &amp; lab tests</li>
																	<li>Health membership plans</li>
																	<li>Patient admission &amp; healthcare facilities
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												

											</div>
										</div>
									</div>

									
									<div className="accordion-item wow fadeInUp" data-wow-delay="0.55s"
										data-wow-duration="0.7s">
										<h2 className="accordion-header" id="headingOrders">
											<button className="accordion-button collapsed" type="button"
												data-bs-toggle="collapse" data-bs-target="#collapseOrders"
												aria-expanded="false" aria-controls="collapseOrders">
												2. Orders &amp; Delivery
											</button>
										</h2>
										<div id="collapseOrders" className="accordion-collapse collapse"
											aria-labelledby="headingOrders" data-bs-parent="#accordionFAQ">
											<div className="accordion-body">

												<div className="accordion dz-accordion style-1" id="accordionOrders">
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="odq1">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#odc1"
																aria-expanded="false" aria-controls="odc1">
																Q: How can I place an order for medicines?
															</button>
														</h2>
														<div id="odc1" className="accordion-collapse collapse"
															aria-labelledby="odq1" data-bs-parent="#accordionOrders">
															<div className="accordion-body">
																A: You can place your order by visiting our store,
																calling our helpline at
																<a href="tel:9090257373"
																	className="text-secondary">9090257373</a>, or ordering
																via our mobile
																app/website.
															</div>
														</div>
													</div>
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="odq2">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#odc2"
																aria-expanded="false" aria-controls="odc2">
																Q: Is there a minimum order value for delivery?
															</button>
														</h2>
														<div id="odc2" className="accordion-collapse collapse"
															aria-labelledby="odq2" data-bs-parent="#accordionOrders">
															<div className="accordion-body">
																A: Yes. The minimum order value is ₹500 for home
																delivery.
															</div>
														</div>
													</div>
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="odq3">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#odc3"
																aria-expanded="false" aria-controls="odc3">
																Q: How long does delivery take?
															</button>
														</h2>
														<div id="odc3" className="accordion-collapse collapse"
															aria-labelledby="odq3" data-bs-parent="#accordionOrders">
															<div className="accordion-body">
																A: Same-day delivery for orders placed before 5 PM in
																our local service area. Orders placed
																after 5 PM are delivered the next day.
															</div>
														</div>
													</div>
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="odq4">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#odc4"
																aria-expanded="false" aria-controls="odc4">
																Q: Do you offer free delivery?
															</button>
														</h2>
														<div id="odc4" className="accordion-collapse collapse"
															aria-labelledby="odq4" data-bs-parent="#accordionOrders">
															<div className="accordion-body">
																A: Yes, free delivery is available for all members of
																our health plans. For non-members,
																delivery charges apply depending on the location.
															</div>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>

									
									<div className="accordion-item wow fadeInUp" data-wow-delay="0.6s"
										data-wow-duration="0.7s">
										<h2 className="accordion-header" id="headingMembership">
											<button className="accordion-button collapsed" type="button"
												data-bs-toggle="collapse" data-bs-target="#collapseMembership"
												aria-expanded="false" aria-controls="collapseMembership">
												3. Membership Plans
											</button>
										</h2>
										<div id="collapseMembership" className="accordion-collapse collapse"
											aria-labelledby="headingMembership" data-bs-parent="#accordionFAQ">
											<div className="accordion-body">

												<div className="accordion dz-accordion style-1" id="accordionMembership">
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="mpq1">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#mpc1"
																aria-expanded="false" aria-controls="mpc1">
																Q: What are your health membership plans?
															</button>
														</h2>
														<div id="mpc1" className="accordion-collapse collapse"
															aria-labelledby="mpq1"
															data-bs-parent="#accordionMembership">
															<div className="accordion-body">
																A: We have three plans:
																<ul className="m-0 ps-3">
																	<li>Sehat Sathi – ₹199/year</li>
																	<li>Sehat Plus – ₹399/year</li>
																	<li>Sehat Health – ₹599/year</li>
																</ul>
															</div>
														</div>
													</div>
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="mpq2">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#mpc2"
																aria-expanded="false" aria-controls="mpc2">
																Q: What benefits do members get?
															</button>
														</h2>
														<div id="mpc2" className="accordion-collapse collapse"
															aria-labelledby="mpq2"
															data-bs-parent="#accordionMembership">
															<div className="accordion-body">
																A: Benefits include free medicine delivery, free home
																lab visits, free doctor consultations
																(plan-based), and discounts up to 25% on lab tests.
															</div>
														</div>
													</div>
													
													<div className="accordion-item">
														<h2 className="accordion-header" id="mpq3">
															<button className="accordion-button collapsed" type="button"
																data-bs-toggle="collapse" data-bs-target="#mpc3"
																aria-expanded="false" aria-controls="mpc3">
																Q: How can I buy a membership?
															</button>
														</h2>
														<div id="mpc3" className="accordion-collapse collapse"
															aria-labelledby="mpq3"
															data-bs-parent="#accordionMembership">
															<div className="accordion-body">
																A: Membership can be purchased directly from our store,
																online, or through our mobile app.
															</div>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>

									
									

									
									

									
									

								</div>
								

								<div className="mt-4 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.7s">
									<a href="faqs.html" className="btn btn-lg btn-icon btn-primary btn-shadow">
										<span className="w-100">Read More</span>
										<span className="right-icon"><i className="feather icon-arrow-right"></i></span>
									</a>
								</div>
							</div>
						</div>

						<div className="col-xxl-5 col-xl-6 col-lg-7 m-b30">
							<div className="content-media" data-bottom-top="transform: translateY(50px)"
								data-top-bottom="transform: translateY(-50px)">
								<div className="dz-media">
									<img src="/images/about/ChatGPT Image Jul 20, 2025, 09_30_42 AM.png" alt="" />
								</div>
								<div className="item1">
									<div className="info-widget style-5">
										<div className="widget-media text-primary">
											<i className="feather icon-phone-call dz-ring-effect"></i>
										</div>
										<div className="widget-content">
											<h6 className="title">Contact us?</h6>
											<a href="tel:9090257373" className="text-secondary">+91 90902 57373</a>
										</div>
									</div>
									<a href="franchiseInquiryForm.html" className="btn btn-sm btn-icon btn-primary btn-shadow">
										<span className="w-100">Apply For Franchise</span>
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
