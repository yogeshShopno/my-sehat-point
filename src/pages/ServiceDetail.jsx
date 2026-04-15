import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SERVICES = [
  { id: 'pharmacy', title: 'Pharmacy', content: 'In-clinic & Online OPD with Experienced MBBS & Specialist Doctors.', icon: 'img3.webp', details: ['General Medicine', 'Pediatrics', 'Gynecology', 'Dermatology', 'ENT', 'Orthopedics', 'Follow-up Reminders', 'E-Prescription'] },
  { id: 'lab', title: 'Diagnostic & Lab Tests', content: 'Accurate Diagnostic Tests, Online Reports, and Doorstep Sample Collection.', icon: 'img4.webp', details: ['Home Sample Pickup', 'Fasting Reminders', 'Same-day Reports', 'NABL Partners'] },
  { id: 'opd', title: 'Doctor OPD & Consultation', content: 'Save up to 25% on Medicines, Lab Tests & Consultations with Our Affordable Health Plans.', icon: 'img2.webp', details: ['Free OPD Visits', 'Lab Discounts', 'Medicine Cashback', 'Family Add-ons'] },
  { id: 'digital', title: 'Patient App & Digital Services', content: 'Quick Delivery of Medicines, Lab Reports & Healthcare Products within 5 km.', icon: 'img2.webp', details: ['Real-time Order Tracking', 'Rx Upload', 'Cold-chain Safe', 'Express Slots'] },
  { id: 'delivery', title: 'Home Delivery & Health Services', content: 'Get personalized diet plans from expert nutritionists for better health, fitness, and disease management.', icon: 'img2.webp', details: ['Wellness & Nutrition', 'Mother & Baby', 'Devices & Monitors', 'Rehab Aids'] },
  { id: 'diet', title: 'Diet & Nutrition Counseling', content: 'Easy access to wheelchairs, nebulizers, oxygen concentrators, and more at affordable rates.', icon: 'img2.webp', details: ['Care Plans', 'Remote Monitoring', 'Diet & Coaching', 'Periodic Labs'] },
  { id: 'devices', title: 'Medical Devices on Rent/Sale', content: 'Everything you need for daily health & care: Baby Care, Men Care, Women Care, Personal Care, and more.', icon: 'img2.webp', details: ['At-Home Sessions', 'Sports Injury Rehab', 'Post-Surgery Care', 'Ergonomic Coaching'] },
  { id: 'wellness', title: 'Wellness Products', content: 'Comprehensive wellness packages for you and your family.', icon: 'img2.webp', details: ['Health Screenings', 'Stress Management', 'Yoga Support', 'Organic Supplements'] }
];

export default function ServiceDetail() {
  const location = useLocation();
  const [activeService, setActiveService] = useState(SERVICES[0]);

  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
    // Check if ID is in hash
    const hash = location.hash.replace('#', '');
    const service = SERVICES.find(s => s.id === hash);
    if (service) setActiveService(service);
  }, [location]);

  return (
    <>
      <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md"
        style={{ backgroundImage: "url(/images/banner/bnr2.webp)" }}>
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{activeService.title}</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
                <li className="breadcrumb-item">Detail</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 single-inner order-lg-1">
               <div className="wow fadeIn">
                  <div className="single-media dz-media height-sm radius-lg mb-4">
                    <img src={`/images/blog/grid/${activeService.icon}`} alt="" className="object-fit-cover w-100" style={{height: '400px'}} />
                  </div>
                  <div className="content-item">
                    <h2>{activeService.title}</h2>
                    <p className="lead">{activeService.content}</p>
                    <ul className="list-check text-secondary grid-2 m-b30">
                      {activeService.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                    <div className="m-t30">
                       <Link to="/appointment" className="btn btn-primary btn-lg">Book Now</Link>
                    </div>
                  </div>
               </div>
            </div>

            <div className="col-lg-4 m-b30">
              <aside className="side-bar sticky-top">
                <div className="widget service_menu_nav bg-secondary rounded-4 shadow-sm p-4 wow fadeInUp" data-wow-delay="0.2s">
                  <h4 className="title text-white mb-4">All Services</h4>
                  <ul className="list-unstyled">
                    {SERVICES.map(service => (
                      <li key={service.id} 
                        className={`mb-2 p-3 rounded-3 cursor-pointer transition-all ${activeService.id === service.id ? 'bg-primary text-white' : 'bg-white text-secondary hover-bg-light'}`}
                        onClick={() => setActiveService(service)}>
                        {service.title}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="widget_contact mt-4 p-4 rounded-4 text-white text-center wow fadeInUp" 
                  style={{backgroundImage: "url(/images/background/bg3.png)", backgroundColor: '#031B4E', backgroundSize: 'cover'}}
                  data-wow-delay="0.4s">
                  <img src="/images/question.png" width="80" alt="" className="mb-3" />
                  <h4 className="title text-white">Need Any Help?</h4>
                  <div className="phone-number h5 mb-2">
                    <a href="tel:+919090257373" className="text-white">+91 90902 57373</a>
                  </div>
                  <div className="email mb-4">
                    <a href="mailto:support@mysehatpoint.com" className="text-white opacity-75">support@mysehatpoint.com</a>
                  </div>
                  <Link to="/contact-us" className="btn btn-white text-primary w-100 py-3 fw-bold">Contact Us</Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
