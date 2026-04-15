import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: 'Paypal'
  });

  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
  }, []);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md"
        style={{ backgroundImage: "url(/images/banner/bnr1.webp)" }}>
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Book Appointment</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Appointment</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner bg-light">
        <div className="container">
          <div className="wizard-container bg-white rounded-4 shadow-sm overflow-hidden">
             <div className="row g-0">
                <div className="col-lg-4 bg-primary text-white p-4 p-md-5">
                   <h3 className="text-white mb-4">Steps</h3>
                   <div className="d-flex flex-column gap-4">
                      {['Select Service', 'Date & Time', 'Your Info', 'Payment'].map((label, idx) => (
                        <div key={idx} className={`d-flex align-items-center gap-3 ${step === idx + 1 ? 'opacity-100' : 'opacity-50'}`}>
                           <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold ${step === idx + 1 ? 'bg-white text-primary' : 'border border-white text-white'}`} style={{width: '35px', height: '35px'}}>
                              {idx + 1}
                           </div>
                           <span className="fw-medium">{label}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="col-lg-8 p-4 p-md-5">
                   <form onSubmit={(e) => e.preventDefault()}>
                      {step === 1 && (
                        <div className="wow fadeIn">
                           <h4 className="mb-4">Select Department & Doctor</h4>
                           <div className="mb-4">
                              <label className="form-label">Department</label>
                              <select name="department" className="form-select" value={formData.department} onChange={handleChange}>
                                 <option value="">Select Department</option>
                                 <option value="Cardiology">Cardiology</option>
                                 <option value="Dental">Dental</option>
                                 <option value="Physiotherapy">Physiotherapy</option>
                              </select>
                           </div>
                           <div className="mb-4">
                              <label className="form-label">Doctor Name</label>
                              <select name="doctor" className="form-select" value={formData.doctor} onChange={handleChange}>
                                 <option value="">Select Doctor</option>
                                 <option value="Dr. Nashid">Dr. Nashid Martines</option>
                                 <option value="Dr. Fong">Dr. Kenneth Fong</option>
                              </select>
                           </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="wow fadeIn">
                           <h4 className="mb-4">Select Date & Time</h4>
                           <div className="row">
                              <div className="col-md-6 mb-4">
                                 <label className="form-label">Date</label>
                                 <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} />
                              </div>
                              <div className="col-md-6 mb-4">
                                 <label className="form-label">Time Slot</label>
                                 <select name="time" className="form-select" value={formData.time} onChange={handleChange}>
                                    <option value="">Select Time</option>
                                    <option value="09:00">09:00 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="wow fadeIn">
                           <h4 className="mb-4">Your Contact Information</h4>
                           <div className="row">
                              <div className="col-md-6 mb-4">
                                 <label className="form-label">First Name</label>
                                 <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} />
                              </div>
                              <div className="col-md-6 mb-4">
                                 <label className="form-label">Last Name</label>
                                 <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} />
                              </div>
                              <div className="col-md-6 mb-4">
                                 <label className="form-label">Email</label>
                                 <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                              </div>
                              <div className="col-md-6 mb-4">
                                 <label className="form-label">Phone</label>
                                 <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                              </div>
                           </div>
                        </div>
                      )}

                      {step === 4 && (
                        <div className="wow fadeIn">
                           <h4 className="mb-4">Payment Method</h4>
                           <div className="row g-3">
                              {['Paypal', 'Debit Card', 'Bank Transfer'].map(method => (
                                <div key={method} className="col-md-4">
                                   <div className={`p-3 border rounded-3 text-center cursor-pointer ${formData.paymentMethod === method ? 'border-primary bg-light' : ''}`}
                                     onClick={() => setFormData(prev => ({...prev, paymentMethod: method}))}>
                                      {method}
                                   </div>
                                </div>
                              ))}
                           </div>
                           <div className="mt-5 p-4 bg-light rounded-3">
                              <h5>Summary</h5>
                              <p className="mb-1"><strong>Doctor:</strong> {formData.doctor || 'Not selected'}</p>
                              <p className="mb-0"><strong>Appointment:</strong> {formData.date || 'TBD'} at {formData.time || 'TBD'}</p>
                           </div>
                        </div>
                      )}

                      <div className="mt-5 d-flex justify-content-between">
                         <button type="button" className={`btn btn-outline-secondary px-4 ${step === 1 ? 'invisible' : ''}`} onClick={prevStep}>Previous</button>
                         {step < 4 ? (
                           <button type="button" className="btn btn-primary px-5" onClick={nextStep}>Continue</button>
                         ) : (
                           <button type="submit" className="btn btn-primary px-5" onClick={() => alert('Appointment Booked!')}>Book Appointment</button>
                         )}
                      </div>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
