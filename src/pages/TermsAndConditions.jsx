import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
  }, []);

  return (
    <>
      <div className="dz-bnr-inr dz-banner-dark overlay-secondary-middle dz-bnr-inr-md"
        style={{ backgroundImage: "url(/images/banner/bnr2.webp)" }}>
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Terms & Conditions</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Terms & Conditions</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner" style={{ backgroundImage: "url(/images/background/bg3.png)", backgroundPosition: "right bottom", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <div className="terms-container bg-white p-5 rounded-4 shadow-sm border">
            <h2 className="mb-4 text-primary">Terms & Conditions – My Sehat Point</h2>
            <p className="text-muted mb-4 text-end"><strong>Effective Date:</strong> August 13, 2025</p>
            
            <p>Welcome to My Sehat Point (“Company”, “We”, “Our”, “Us”). By accessing or using our website, mobile application, or services, you (“User”, “You”, “Your”) agree to abide by the following Terms & Conditions. Please read them carefully before using our services.</p>

            <div className="mb-4 mt-5">
              <h4 className="text-secondary mb-3">1. Scope of Services</h4>
              <ul className="list-unstyled ps-3">
                <li className="mb-2"><i className="feather icon-check text-primary me-2"></i> Pharmacy and medicine sales & delivery</li>
                <li className="mb-2"><i className="feather icon-check text-primary me-2"></i> Doctor consultation (online/OPD)</li>
                <li className="mb-2"><i className="feather icon-check text-primary me-2"></i> Diagnostic lab test booking and home sample collection</li>
                <li><i className="feather icon-check text-primary me-2"></i> Health membership plans (Sehat Sathi, Sehat Plus, Sehat Health)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary mb-3">2. Eligibility</h4>
              <p>Users must be at least 18 years of age. A valid prescription is required for purchase of prescription medicines.</p>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary mb-3">3. Membership Plans</h4>
              <p>Plans are valid for 12 months and are non-refundable and non-transferable. Benefits are strictly as per plan limits.</p>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary mb-3">4. Refunds & Cancellations</h4>
              <p><strong>Medicines:</strong> Open packet returns are not allowed. <strong>Lab Tests:</strong> ₹50 home visit charge deducted if cancelled. <strong>Membership:</strong> Strictly non-refundable.</p>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary mb-3">5. Limitation of Liability</h4>
              <p>We are not responsible for technical glitches or delays caused by third-party providers. Our liability is limited to the amount paid for the service in dispute.</p>
            </div>

            <div className="bg-light p-4 rounded-3 mt-5">
              <h5 className="mb-3">Contact Information</h5>
              <p className="mb-1"><strong>Email:</strong> <a href="mailto:support@mysehatpoint.com">support@mysehatpoint.com</a></p>
              <p className="mb-1"><strong>Phone:</strong> <a href="tel:+919090257373">+91 90902 57373</a></p>
              <p className="mb-0"><strong>Address:</strong> Healthcare Street, Ahmedabad, Gujarat, India – 380001</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
