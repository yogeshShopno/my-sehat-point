import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookLabTest() {
  const [formData, setFormData] = useState({
    testName: '',
    patientName: '',
    age: '',
    gender: 'Male',
    phone: '',
    email: '',
    address: '',
    preferredDate: '',
    preferredTime: 'Morning'
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
    alert('Lab Test Booking Submitted!');
  };

  return (
    <>
      <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md"
        style={{ backgroundImage: "url(/images/banner/bnr1.webp)" }}>
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Book a Lab Test</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Lab Test</li>
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
                <div className="section-head style-1 mb-4">
                   <h2 className="title">Request Home Sample Collection</h2>
                   <p>Fill out the form below and our team will contact you for sample collection.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <label className="form-label">Test Name / Package</label>
                      <input type="text" name="testName" className="form-control" placeholder="e.g. Full Body Checkup, Blood Sugar" value={formData.testName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Patient Name</label>
                      <input type="text" name="patientName" className="form-control" placeholder="John Doe" value={formData.patientName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-3 mb-4">
                      <label className="form-label">Age</label>
                      <input type="number" name="age" className="form-control" placeholder="30" value={formData.age} onChange={handleChange} required />
                    </div>
                    <div className="col-md-3 mb-4">
                      <label className="form-label">Gender</label>
                      <select name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" name="phone" className="form-control" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Email (Optional)</label>
                      <input type="email" name="email" className="form-control" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="col-md-12 mb-4">
                      <label className="form-label">Full Address for Collection</label>
                      <textarea name="address" className="form-control" rows="3" placeholder="House No, Landmark, City, State" value={formData.address} onChange={handleChange} required></textarea>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Preferred Date</label>
                      <input type="date" name="preferredDate" className="form-control" value={formData.preferredDate} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Preferred Time Slot</label>
                      <select name="preferredTime" className="form-select" value={formData.preferredTime} onChange={handleChange}>
                        <option>Morning (7 AM - 11 AM)</option>
                        <option>Afternoon (11 AM - 3 PM)</option>
                        <option>Evening (3 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">Book Appointment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
