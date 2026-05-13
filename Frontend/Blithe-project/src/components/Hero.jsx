import React from 'react';
import Button from './Button';
import { CheckCircle2, Zap, Trophy, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">₹0 to Host. Always.</div>
          <h1 className="hero-title">
            Turn Your <br />
            <span className="text-gradient">Passion</span> into <br />
            a Profession.
          </h1>
          <p className="hero-description">
            The risk-free platform for creators to host events and 
            seekers to find experiences based on their mood.
          </p>
          
          <ul className="benefit-list">
            <li>
              <CheckCircle2 className="icon" />
              <span>Host your event in 3 simple steps</span>
            </li>
            <li>
              <CheckCircle2 className="icon" />
              <span>Beginner-friendly. Zero confusion</span>
            </li>
            <li>
              <CheckCircle2 className="icon" />
              <span>You keep 100% of your listed price</span>
            </li>
          </ul>

          <div className="hero-actions">
            <Button variant="primary" size="lg">Start Hosting for Free — ₹0 Upfront</Button>
            <Button variant="outline" size="lg">Find Your Companion →</Button>
          </div>
          
          <p className="hero-footer-text">
            <span className="dot"></span> No credit card required. Live in under 10 minutes.
          </p>
        </div>

        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-header">
                <span className="app-logo">Blithe</span>
              </div>
              <div className="app-content">
                <div className="greeting">
                  <h3>Hey Riya 👋</h3>
                  <p>What's your mood today?</p>
                </div>
                <div className="vibe-selector">
                  <span className="vibe active">Adventurous</span>
                  <span className="vibe">Creative</span>
                  <span className="vibe">Chill</span>
                  <span className="vibe">Social</span>
                </div>
                <div className="curated-section">
                  <p className="section-label">CURATED FOR YOU</p>
                  <div className="event-card">
                    <div className="event-icon pink">🎨</div>
                    <div className="event-info">
                      <h4>Watercolour Worksho...</h4>
                      <p>Sun • 4 PM • 12 spots left</p>
                    </div>
                    <span className="event-tag">₹349</span>
                  </div>
                  <div className="event-card">
                    <div className="event-icon orange">🧘</div>
                    <div className="event-info">
                      <h4>Zen Mornings — Cubb...</h4>
                      <p>Sat • 7 AM • Free</p>
                    </div>
                    <span className="event-tag free">Free</span>
                  </div>
                  <div className="event-card">
                    <div className="event-icon purple">📸</div>
                    <div className="event-info">
                      <h4>Street Photography W...</h4>
                      <p>Mon • 6 PM • 8 going</p>
                    </div>
                    <span className="event-tag">₹199</span>
                  </div>
                </div>
              </div>
              <div className="app-tab-bar">
                <span className="tab active">🔍</span>
                <span className="tab">📍</span>
                <span className="tab">🎫</span>
                <span className="tab">👤</span>
              </div>
            </div>
            
            {/* Floating elements from the reference image */}
            <div className="floating-card top-right">
              <div className="floating-icon">⚡</div>
              <div>
                <p className="f-title">3 steps to go live</p>
                <p className="f-subtitle">No setup fee ever</p>
              </div>
            </div>
            <div className="floating-card bottom-left">
              <div className="floating-icon blue">🌐</div>
              <div>
                <p className="f-title">1.4k Communities</p>
                <p className="f-subtitle">active near you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
