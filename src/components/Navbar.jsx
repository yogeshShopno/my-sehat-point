import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
		<header className="site-header header style-1">
			<div className="header-info-bar d-none d-xxl-block">
				<div className="container-fluid">
					<div className="row">
						<div className="col">
							<div className="icon-bx-wraper style-5">
								<div className="icon-bx">
									<span className="icon-cell1">
										<img src="/images/svg/icon1.svg" alt="" />
									</span>
								</div>
								<div className="icon-content">
									<h2 className="dz-title text-primary">Contatc Us</h2>
									<p><a href="tel:+919090257373" className="text-secondary">+91 90902 57373</a></p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="icon-bx-wraper style-5">
								<div className="icon-bx">
									<span className="icon-cell1">
										<img src="/images/svg/icon2.svg" alt="" />
									</span>
								</div>
								<div className="icon-content">
									<h2 className="dz-title text-primary">Email Supports</h2>
									<p><a href="mailto:support@mysehatpoint.com"
											className="text-secondary">support@mysehatpoint.com</a></p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="icon-bx-wraper style-5">
								<div className="icon-bx">
									<span className="icon-cell1">
										<img src="/images/svg/icon3.svg" alt="" />
									</span>
								</div>
								<div className="icon-content">
									<Link to="/franchise-investor">
										<h2 className="dz-title text-primary">Online Appointment </h2>
									<p>Apply For Franchise <i className="feather icon-arrow-right"></i></p>
									</Link>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="icon-bx-wraper style-5">
								<div className="icon-bx">
									<span className="icon-cell1">
										<img src="/images/svg/icon4.svg" alt="" />
									</span>
								</div>
								<div className="icon-content">
									<h2 className="dz-title text-primary">Supports</h2>
									<p>24x7 Supports</p>
								</div>
							</div>
						</div>
						
						
					</div>
				</div>
			</div>

			
			<div className={`sticky-header main-bar-wraper${scrolled ? " sticky" : ""}`}>
				<div className="main-bar clearfix bg-secondary text-white">
					<div className="container-fluid clearfix inner-bar">

						
						<div className="logo-header logo-dark">
							<Link to="/"><img src="/images/mysharepoint.png" alt="logo" /></Link>
						</div>

						
						<button className="w3menu-toggler navicon" onClick={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</button>

						
						<div className="menu-close fade-overlay" onClick={closeMenu}></div>
						<div className={`header-nav w3menu w3menu-end mo-left${menuOpen ? " menu-active" : ""}`} id="W3Menu">
							<div className="logo-header logo-dark">
								<Link to="/"><img src="/images/My Sehat Point - F-03.jpg" alt="" /></Link>
							</div>
							<ul className="nav navbar-nav">
								<li className="has-mega-menu homedemo full-width">
									<Link to="/" onClick={closeMenu}><span>Home</span></Link>
								</li>
								<li className="has-mega-menu homedemo full-width">
									<Link to="/about-us" onClick={closeMenu}><span>About Us</span></Link>
								</li>
								<li className="has-mega-menu homedemo full-width">

									<Link to="/services" onClick={closeMenu}><span>Service</span>
									</Link>

								</li>

								<li className="has-mega-menu homedemo full-width">
									<Link to="/testimonial" onClick={closeMenu}><span>Testimonial</span></Link>
								</li>
                              <li className="has-mega-menu homedemo full-width">
									<Link to="/blog-grid" onClick={closeMenu}><span>Blog</span></Link>
								</li>
								<li className="sub-menu-down">
									<a href="#" onClick={(e) => e.preventDefault()}><span>Menu</span> <i
											className="fas fa-chevron-down tabindex"></i></a>
									<ul className="sub-menu">
										<li><Link to="/our-story-who-we-are" onClick={closeMenu}> Our Story </Link></li>
										<li><Link to="/brand-profile" onClick={closeMenu}> Brand Profile </Link></li>
										<li><Link to="/roi-brochure" onClick={closeMenu}> ROI Brochure </Link></li>
										<li><Link to="/franchise-model" onClick={closeMenu}> Franchise Model </Link></li>
										<li><Link to="/membership-plans" onClick={closeMenu}> Membership Plan </Link></li>
										<li><Link to="/faqs" onClick={closeMenu}>FAQs</Link></li>
										<li><Link to="/rent-your-property" onClick={closeMenu}> Rent Your Property </Link></li>
									</ul>
								</li>
								<li><Link to="/contact-us" onClick={closeMenu}><span>Contact Us</span></Link></li>
							</ul>

							<div className="dz-social-icon">
								<ul>
									<li>
										<a href="https://www.facebook.com/" target="_blank">
											<i className="fa-brands fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/" target="_blank">
											<i className="fa-brands fa-x-twitter"></i>
										</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/" target="_blank">
											<i className="fa-brands fa-linkedin"></i>
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/" target="_blank">
											<i className="fa-brands fa-instagram"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						
						<div className="extra-nav">
							<div className="extra-cell">
								<ul className="header-right">
									<li className="nav-item">
										<Link to="/franchise-inquiry" className="btn btn-primary btn-hover1">
											Franchise Inquiry
										</Link>
									</li>
									<li className="nav-item">
										<button type="button" className="toggle-nav-btn" onClick={() => setSidebarOpen(true)}>
											<span></span>
											<span></span>
											<span></span>
										</button>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</div>
			</div>
			

			
			<div className={`offcanvas dz-offcanvas offcanvas offcanvas-end${sidebarOpen ? " show" : ""}`} tabIndex="-1" id="headerSidebar">
				<button type="button" className="btn-close m-t10 m-l10" onClick={() => setSidebarOpen(false)}
					aria-label="Close"></button>
				<div className="offcanvas-body">
					<div className="widget">
						<div className="sidebar-header m-b20">
							<Link to="/" onClick={() => setSidebarOpen(false)}><img src="/images/mysharepoint2.png" alt="/" /></Link>
						</div>
						<p>We started My Sehat Point with a single goal: affordable, accessible, and reliable care for
							everyone. From preventive check-ups to chronic care management, our expert team, modern
							equipment, and clean, patient-first spaces ensure a smooth experience every time.
						</p>
					</div>

					<div className="widget">
						<div className="widget-title">
							<h4 className="title">Contact Us</h4>
						</div>
						<ul className="list-check">
							<li>My Sehat Point 123, Healthcare Street, Ahmedabad, Gujarat, India – 380001</li>
							<li><a href="mailto:support@mysehatpoint.com" className="text-body">support@mysehatpoint.com</a>
							</li>
							<li><a href="tel:+919090257373" className="text-body">+91 90902 57373</a></li>
						</ul>
					</div>

					<div className="widget">
						<div className="widget-title">
							<h4 className="title">Newsletter</h4>
						</div>
						<form className="dzSubscribe style-2"
							action="https://clinicmaster.vercel.app/assets/script/mailchimp.php" method="post">
							<div className="dzSubscribeMsg"></div>
							<div className="form-group">
								<div className="input-group mb-0">
									<input name="dzEmail" required="required" type="email" className="form-control"
										placeholder="Your Email Address" />
									<div className="input-group-addon">
										<button name="submit" value="Submit" type="submit"
											className="btn text-primary btn-transparent p-2">
											<i className="fa-solid fa-paper-plane"></i>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>

					<div className="widget">
						<div className="widget-title">
							<h4 className="title">Follow Us</h4>
						</div>
						<div className="dz-social-icon style-1">
							<ul>
								<li>
									<a href="https://www.linkedin.com/" target="_blank">
										<i className="fa-brands fa-linkedin"></i>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/" target="_blank">
										<i className="fa-brands fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href="https://www.facebook.com/" target="_blank">
										<i className="fa-brands fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/" target="_blank">
										<i className="fa-brands fa-x-twitter"></i>
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/" target="_blank">
										<i className="fa-brands fa-youtube"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			

		</header>
  );
}
