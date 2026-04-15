import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FranchiseInquiry() {
  const [formData, setFormData] = useState({
    full_name: '',
    age: '',
    gender: '',
    mobile: '',
    alt_mobile: '',
    email: '',
    address: '',
    city: '',
    state: '',
    occupation: '',
    own_property: '',
    property_details: '',
    healthcare_exp: '',
    investment: '',
    store_name: '',
    store_address: '',
    store_area: '',
    ownership: '',
    monthly_rent: '',
    monthly_sales: '',
    footfall: '',
    already_sell: [],
    staff_count: '',
    pharmacist: '',
    upgrade_interest: [],
    growth_goal: '',
    why_msp: '',
    start_when: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prev => ({ ...prev, [name]: [...prev[name], value] }));
      } else {
        setFormData(prev => ({ ...prev, [name]: prev[name].filter(item => item !== value) }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      alert("Inquiry submitted successfully! We will contact you soon.");
    }, 1500);
  };

  return (
    <>
      <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md"
        style={{ backgroundImage: "url(/images/banner/bnr1.webp)" }}>
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Franchise Inquiry Form</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Franchise Inquiry Form</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-12">
              <h2 className="title mb-4">My Sehat Point <span className="text-primary">– Franchise Inquiry Form</span></h2>
              <p className="lead mb-5">Fill the details below. Our team will review your application and get back to you within 48 hours.</p>
            </div>

            <div className="col-lg-12">
              <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 rounded-4 shadow-sm border">
                {/* 1) Personal Details */}
                <div className="mb-5">
                  <h4 className="mb-4 border-bottom pb-2 text-secondary">1) Personal Details</h4>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input type="text" className="form-control" name="full_name" placeholder="Full Name*" required onChange={handleChange} />
                        <label>Full Name*</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input type="number" className="form-control" name="age" placeholder="Age*" required onChange={handleChange} />
                        <label>Age*</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex h-100 align-items-center gap-3 ps-2">
                        <label className="mb-0 fw-medium">Gender:*</label>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Male" required onChange={handleChange} />
                          <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Female" onChange={handleChange} />
                          <label className="form-check-label">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input type="tel" className="form-control" name="mobile" placeholder="Mobile Number*" required onChange={handleChange} />
                        <label>Mobile Number*</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input type="email" className="form-control" name="email" placeholder="Email ID*" required onChange={handleChange} />
                        <label>Email ID*</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input type="text" className="form-control" name="city" placeholder="City*" required onChange={handleChange} />
                        <label>City*</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2) Business / Background */}
                <div className="mb-5">
                  <h4 className="mb-4 border-bottom pb-2 text-secondary">2) Business / Background</h4>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" name="occupation" placeholder="Current Occupation*" required onChange={handleChange} />
                        <label>Current Occupation / Business*</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex h-100 align-items-center gap-3 ps-2">
                        <label className="mb-0 fw-medium">Own commercial property?</label>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="own_property" value="Yes" required onChange={handleChange} />
                          <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="own_property" value="No" onChange={handleChange} />
                          <label className="form-check-label">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3) Investment Details */}
                <div className="mb-5">
                  <h4 className="mb-4 border-bottom pb-2 text-secondary">3) Investment Details</h4>
                  <div className="row g-4">
                    {['Mini (1500 sq.ft.)', 'Standard (2500 sq.ft.)', 'Mega (5000 sq.ft.)', 'Upgrade Existing Store'].map((plan, idx) => (
                      <div key={idx} className="col-md-3">
                        <div className={`p-3 rounded-3 border text-center h-100 cursor-pointer ${formData.investment === plan ? 'bg-primary text-white border-primary' : 'bg-white'}`}
                          onClick={() => setFormData(prev => ({ ...prev, investment: plan }))}>
                          <div className="fw-bold mb-1">{plan.split(' ')[0]}</div>
                          <small className="opacity-75">{plan.includes('(') ? plan.split('(')[1].replace(')', '') : 'Transformation'}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4) Upgrade Specifics (Conditional) */}
                {formData.investment === 'Upgrade Existing Store' && (
                  <div className="mb-5 wow fadeIn">
                    <h4 className="mb-4 border-bottom pb-2 text-info">4) Store Upgrade Information</h4>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" name="store_name" placeholder="Store Name" required onChange={handleChange} />
                          <label>Current Store Name*</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="number" className="form-control" name="store_area" placeholder="Area" required onChange={handleChange} />
                          <label>Store Area (sq.ft.)*</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Final Section */}
                <div className="mt-5 pt-4 border-top">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                       <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="declare" required />
                          <label className="form-check-label" htmlFor="declare">
                            I hereby declare that all the information provided is true to the best of my knowledge.
                          </label>
                        </div>
                    </div>
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                      <button type="submit" className="btn btn-primary btn-lg px-5" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="content-inner-1 bg-white">
        <div className="container">
          <div className="row align-items-center bg-primary text-white p-5 rounded-4 g-4 mx-0">
            <div className="col-lg-8">
              <h2 className="text-white">Need a call first?</h2>
              <p className="mb-0 opacity-75">Our franchise consultants are available to guide you through the process and answer technical questions.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="tel:+919090257373" className="btn btn-white btn-lg p-3 px-4"><i className="feather icon-phone-call me-2"></i> +91 90902 57373</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
