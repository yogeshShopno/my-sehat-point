import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Privacy Policy</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
              data-wow-duration="0.8s">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Privacy Policy</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner" style={{ backgroundImage: "url(/images/background/bg3.png)", backgroundPosition: "right bottom", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <div className="policy-container bg-white p-5 rounded-4 shadow-sm border">
            <h2 className="mb-4 text-primary">Privacy Policy – My Sehat Point</h2>
            <p className="text-muted mb-4 text-end"><strong>Effective Date:</strong> August 13, 2025</p>
            
            <p>My Sehat Point (“Company”, “We”, “Our”, “Us”) is committed to protecting the privacy and security of your personal information. This Privacy Policy describes in detail how we collect, use, disclose, and safeguard your information when you use our services through our website, mobile application, or offline platforms.</p>
            
            <p className="mb-5">By using our services, you agree to the terms of this Privacy Policy.</p>

            <div className="mb-4">
              <h4 className="text-secondary mb-3">1. Information We Collect</h4>
              <p>We may collect the following types of information from you:</p>
              <ul className="list-unstyled ps-3">
                <li className="mb-2"><strong className="text-dark">Personal Information:</strong> Full Name, Contact Number, Email Address, Residential/Delivery Address, Date of Birth.</li>
                <li className="mb-2"><strong className="text-dark">Health & Medical Information:</strong> Prescription details, medical history provided voluntarily, lab test results.</li>
                <li className="mb-2"><strong className="text-dark">Payment Information:</strong> Payment mode, Transaction ID (processed securely via third-party gateways).</li>
                <li><strong className="text-dark">Usage Information:</strong> Device info (IP address, browser type), App/Website activity logs, Cookies.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary mb-3">2. How We Use Your Information</h4>
              <p>Your information is used only for legitimate business purposes, including:</p>
              <ul className="list-unstyled ps-3">
                <li className="mb-2"><i className="feather icon-check text-primary me-2"></i> To process medicine orders and deliveries</li>
                <li className="mb-2"><i className="feather icon-check text-primary me-2"></i> To schedule doctor consultations and lab tests</li>
                <li className="mb-2"><i className="feather icon-check text-primary me-2"></i> To manage membership plans</li>
                <li className="mb-2"><i className="feather icon-check text-primary me-2"></i> To send order confirmations and health-related notifications</li>
                <li><i className="feather icon-check text-primary me-2"></i> To comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary mb-3">3. Information Sharing and Disclosure</h4>
              <p>We do not sell or rent your personal data. We may share limited info with Doctors, Diagnostic Labs, Delivery Partners, and Payment Gateways to fulfill services.</p>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary mb-3">4. Data Security</h4>
              <p>We implement SSL encryption, secure server storage, and OTP-based verification to protect your sensitive data.</p>
            </div>

            <div className="mb-4">
              <h4 className="text-secondary mb-3">5. User Rights</h4>
              <p>You have the right to access, correct, or request deletion of your data (subject to legal requirements).</p>
            </div>

            <div className="bg-light p-4 rounded-3 mt-5">
              <h5 className="mb-3">Grievance Redressal</h5>
              <p className="mb-1"><strong>Email:</strong> <a href="mailto:support@mysehatpoint.com">support@mysehatpoint.com</a></p>
              <p className="mb-1"><strong>Phone:</strong> <a href="tel:+919090257373">+91 90902 57373</a></p>
              <p className="mb-0"><strong>Office:</strong> Healthcare Street, Ahmedabad, Gujarat, India – 380001</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
