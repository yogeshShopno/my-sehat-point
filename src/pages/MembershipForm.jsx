import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MembershipForm() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    plan: 'Sehat Plus',
    name: '',
    email: '',
    phone: '',
    address: '',
    memberCount: 1
  });

  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Membership Application Submitted!');
  };

  return (
    <>
      <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md"
        style={{ backgroundImage: "url(/images/banner/bnr1.webp)" }}>
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Membership Application</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Membership</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm wow fadeInUp">
                <h2 className="mb-4">Select Your Plan & Provide Details</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <label className="form-label">Chosen Plan</label>
                      <select name="plan" className="form-select" value={formData.plan} onChange={handleChange}>
                        <option>Sehat Sathi</option>
                        <option>Sehat Plus</option>
                        <option>Sehat Health</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Full Name</label>
                      <input type="text" name="name" className="form-control" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" className="form-control" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" name="phone" className="form-control" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Number of Family Members</label>
                      <input type="number" name="memberCount" className="form-control" min="1" max="6" value={formData.memberCount} onChange={handleChange} />
                    </div>
                    <div className="col-md-12 mb-4">
                      <label className="form-label">Permanent Address</label>
                      <textarea name="address" className="form-control" rows="3" placeholder="Street, City, State, ZIP" value={formData.address} onChange={handleChange} required></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100">Submit Application</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
