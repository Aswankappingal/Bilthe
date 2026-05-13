import React from 'react';
import './CTA.scss';
import Button from '../Button/Button';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Ready to experience the <span>magic</span>?</h2>
            <p>Join thousands of event enthusiasts and start your journey today. Sign up for exclusive updates and early access.</p>
            <div className="cta-actions">
              <Button variant="white" size="lg">Get Started Now</Button>
              <Button variant="outline-white" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="cta-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
