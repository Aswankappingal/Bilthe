import React from 'react';
import './Features.scss';

const features = [
  {
    title: 'Easy Discovery',
    description: 'Find the best events happening around you with our personalized recommendation engine.',
    icon: '🔍'
  },
  {
    title: 'Seamless Booking',
    description: 'Book your tickets in seconds with our optimized checkout process and secure payments.',
    icon: '🎟️'
  },
  {
    title: 'Exclusive Access',
    description: 'Get early bird access to the most anticipated events and member-only experiences.',
    icon: '✨'
  },
  {
    title: 'Community First',
    description: 'Join a vibrant community of event lovers and share your experiences with others.',
    icon: '🤝'
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Why Choose Blithe</span>
          <h2>Everything you need for an <span>extraordinary</span> experience</h2>
          <p>We provide the tools and community to make every event memorable.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
