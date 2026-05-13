import React from 'react';
import './Pricing.scss';
import Button from '../Button/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Perfect for individuals starting their hosting journey.',
    features: [
      'Host up to 2 events/month',
      'Basic event analytics',
      'Community support',
      'Public event listing',
      'Blithe branding on tickets'
    ],
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '1,499',
    description: 'For growing creators who need more power and insights.',
    features: [
      'Unlimited event hosting',
      'Advanced attendee analytics',
      'Priority email support',
      'Featured event placement',
      'Custom ticket branding',
      'Email marketing tools'
    ],
    buttonText: 'Try Pro Free',
    popular: true
  },
  {
    name: 'Business',
    price: '4,999',
    description: 'Complete solution for organizations and agencies.',
    features: [
      'Multiple host accounts',
      'API access for integrations',
      'Dedicated account manager',
      'White-label solution',
      'Custom domain support',
      'SLA & Premium support'
    ],
    buttonText: 'Contact Sales',
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="pricing-page">
      <div className="container">
        <div className="pricing-header">
          <span className="badge">Pricing Plans</span>
          <h1>Choose the plan that's <span>right</span> for you</h1>
          <p>Transparent pricing for every stage of your growth. No hidden fees.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="card-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
                <p>{plan.description}</p>
              </div>
              
              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                size="lg" 
                className="plan-btn"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="pricing-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I change plans later?</h4>
              <p>Yes, you can upgrade or downgrade your plan at any time from your dashboard settings.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a free trial for the Pro plan?</h4>
              <p>Absolutely! You can try all Pro features for 14 days without entering any credit card details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
