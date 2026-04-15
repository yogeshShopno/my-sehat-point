import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SERVICES_DATA = [
  { 
    title: 'Medicines & Daily Essentials', 
    desc: '100% Genuine Medicines, Ayurvedic & Homeopathic Products, and Everyday Health Essentials at the Best Prices, with Fast Home Delivery.',
    icon: 'medicines',
    id: 'pharmacy'
  },
  { 
    title: 'Doctor Consultation', 
    desc: 'In-clinic & Online OPD with Experienced MBBS & Specialist Doctors.',
    icon: 'doctor',
    id: 'opd'
  },
  { 
    title: 'Lab Test & Home Visit', 
    desc: 'Accurate Diagnostic Tests, Online Reports, and Doorstep Sample Collection.',
    icon: 'lab',
    id: 'lab'
  },
  { 
    title: 'Membership Plans', 
    desc: 'Save up to 25% on Medicines, Lab Tests & Consultations with Our Affordable Health Plans.',
    icon: 'membership',
    id: 'membership'
  },
  { 
    title: 'Home Delivery', 
    desc: 'Quick Delivery of Medicines, Lab Reports & Healthcare Products within 5 km.',
    icon: 'delivery',
    id: 'delivery'
  },
  { 
    title: 'Diet & Nutrition Counseling', 
    desc: 'Get personalized diet plans from expert nutritionists for better health, fitness, and disease management.',
    icon: 'diet',
    id: 'diet'
  },
  { 
    title: 'Medical Devices on Rent/Sale', 
    desc: 'Easy access to wheelchairs, nebulizers, oxygen concentrators, and more at affordable rates.',
    icon: 'devices',
    id: 'devices'
  },
  { 
    title: 'Wellness Products', 
    desc: 'Everything you need for daily health & care: Baby Care, Men Care, Women Care, Personal Care, and more.',
    icon: 'wellness',
    id: 'wellness'
  }
];

export default function ServicesSection() {
  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
  }, []);

  return (
    <section className="content-inner-2 bg-light">
      <div className="container">
        <div className="section-head style-1 m-b30 row align-items-end">
          <div className="col-xl-7 col-md-9 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <h2 className="title m-b0">Our Services</h2>
          </div>
          <div className="col-xl-5 col-md-3 text-lg-end d-none d-md-block wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <Link to="/services" className="btn btn-icon btn-secondary">
              View All
              <span className="right-icon"><i className="feather icon-arrow-right"></i></span>
            </Link>
          </div>
        </div>
        <div className="row">
          {SERVICES_DATA.map((item, idx) => (
            <div key={idx} className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay={`${0.1 * (idx % 4 + 1)}s`} data-wow-duration="0.8s">
              <div className={`icon-bx-wraper style-3 box-hover ${idx === 1 ? 'active' : ''}`}>
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="feather icon-activity text-primary" style={{fontSize: '40px'}}></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                  <Link to={item.id === 'lab' ? '/book-lab-test' : `/service-detail#${item.id}`} className="btn btn-square btn-primary rounded-circle">
                    <i className="feather icon-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
