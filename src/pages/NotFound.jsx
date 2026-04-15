import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }
  }, []);

  return (
    <section className="content-inner-2 bg-light error-page" style={{minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
      <div className="container text-center">
        <div className="error-inner wow fadeInUp">
          <h1 className="error-title text-primary" style={{fontSize: '120px', fontWeight: 'bold'}}>404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="mb-5 lead text-muted">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link to="/" className="btn btn-primary btn-lg px-5">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
