import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQs() {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
  }, []);

  const faqData = [
    {
      category: "1. General Information",
      id: "general",
      questions: [
        { q: "What is My Sehat Point?", a: "My Sehat Point is India’s first and largest multi-service healthcare mall. We offer pharmacy services, doctor consultations, lab tests, health membership plans, home delivery, and more — all under one roof." },
        { q: "Where are you located?", a: "Our main healthcare mall is located in Kadi, Gujarat, and we are expanding through franchises across India." },
        { q: "What services do you provide?", a: "We provide a complete range of healthcare services including Pharmacy, Lab tests, Doctor consultations, Home delivery, and Health membership plans." }
      ]
    },
    {
      category: "2. Orders & Delivery",
      id: "orders",
      questions: [
        { q: "How can I place an order for medicines?", a: "You can place your order by visiting our store, calling our helpline at +91 90902 57373, or ordering via our website." },
        { q: "Is there a minimum order value for delivery?", a: "Yes. The minimum order value is ₹500 for home delivery." },
        { q: "How long does delivery take?", a: "Same-day delivery for orders placed before 5 PM in our local service area. Orders placed after 5 PM are delivered the next day." }
      ]
    },
    {
      category: "3. Membership Plans",
      id: "membership",
      questions: [
        { q: "What are your health membership plans?", a: "We have three plans: Sehat Sathi (₹199/year), Sehat Plus (₹399/year), and Sehat Health (₹599/year)." },
        { q: "What benefits do members get?", a: "Benefits include free medicine delivery, free home lab visits, free doctor consultations (plan-based), and discounts up to 25% on lab tests." }
      ]
    }
  ];

  const faqDataRight = [
    {
      category: "4. Lab Tests & Diagnostics",
      id: "lab",
      questions: [
        { q: "Do you provide home sample collection for lab tests?", a: "Yes, free for members and at nominal charges for non-members." },
        { q: "How do I book a lab test?", a: "Call us, visit our store, or book online via our website." }
      ]
    },
    {
      category: "5. Doctor Consultations",
      id: "doctors",
      questions: [
        { q: "Do you have in-house doctors?", a: "Yes, we have full-time MBBS, BHMS, BAMS, and Physiotherapy doctors available." },
        { q: "Can I book a consultation online?", a: "Yes, both in-person and online consultations can be booked via our website or helpline." }
      ]
    },
    {
      category: "6. Franchising",
      id: "franchise",
      questions: [
        { q: "Can I open a My Sehat Point franchise?", a: "Yes. We offer Mini, Standard, and Mega franchise models with full training, branding, and marketing support." },
        { q: "How do I apply for a franchise?", a: "Apply via the form on our website or contact our franchise team at +91 90902 57373." }
      ]
    }
  ];

  return (
    <>
      <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md"
        style={{ backgroundImage: "url(/images/banner/bnr1.webp)" }}>
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Frequently Asked Questions</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">FAQ's</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner" style={{ backgroundImage: "url(/images/background/bg3.png)", backgroundPosition: "right bottom", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <div className="section-head style-1 text-center m-b50">
            <h2 className="title wow fadeInUp" data-wow-delay="0.2s">Frequently Asked Questions (FAQ)</h2>
            <p className="wow fadeInUp" data-wow-delay="0.3s">Find answers to common questions about our services and healthcare plans.</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
               <div className="accordion dz-accordion style-1" id="accordionFAQLeft">
                  {faqData.map((cat, idx) => (
                    <div key={idx} className="accordion-item mb-4 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                       <h3 className="accordion-header bg-light p-3 rounded-3 mb-0" style={{cursor: 'pointer'}} onClick={() => setActiveTab(activeTab === `left-${idx}` ? null : `left-${idx}`)}>
                          <div className="d-flex justify-content-between align-items-center">
                             <span className="fw-bold text-secondary">{cat.category}</span>
                             <i className={`feather ${activeTab === `left-${idx}` ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
                          </div>
                       </h3>
                       {activeTab === `left-${idx}` && (
                         <div className="accordion-body p-3 border-top">
                            {cat.questions.map((q, qidx) => (
                              <div key={qidx} className="mb-3">
                                 <div className="fw-bold text-primary mb-1">Q: {q.q}</div>
                                 <div className="text-muted">A: {q.a}</div>
                              </div>
                            ))}
                         </div>
                       )}
                    </div>
                  ))}
               </div>
            </div>
            <div className="col-lg-6">
               <div className="accordion dz-accordion style-1" id="accordionFAQRight">
                  {faqDataRight.map((cat, idx) => (
                    <div key={idx} className="accordion-item mb-4 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                       <h3 className="accordion-header bg-light p-3 rounded-3 mb-0" style={{cursor: 'pointer'}} onClick={() => setActiveTab(activeTab === `right-${idx}` ? null : `right-${idx}`)}>
                          <div className="d-flex justify-content-between align-items-center">
                             <span className="fw-bold text-secondary">{cat.category}</span>
                             <i className={`feather ${activeTab === `right-${idx}` ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
                          </div>
                       </h3>
                       {activeTab === `right-${idx}` && (
                         <div className="accordion-body p-3 border-top">
                            {cat.questions.map((q, qidx) => (
                              <div key={qidx} className="mb-3">
                                 <div className="fw-bold text-primary mb-1">Q: {q.q}</div>
                                 <div className="text-muted">A: {q.a}</div>
                              </div>
                            ))}
                         </div>
                       )}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="bg-primary py-5 text-white">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-8">
                  <h2 className="mb-0">Join the Future of Healthcare</h2>
                  <p className="opacity-75">Start your own My Sehat Point franchise today and make a difference.</p>
               </div>
               <div className="col-md-4 text-md-end">
                  <Link to="/contact-us" className="btn btn-white btn-lg p-3 px-4">Apply For Franchise <i className="feather icon-arrow-right ms-2 text-primary"></i></Link>
               </div>
            </div>
         </div>
      </section> */}
    </>
  );
}
