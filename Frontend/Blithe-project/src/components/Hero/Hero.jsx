import React from 'react';
import Button from '../Button/Button';
import { CheckCircle2 } from 'lucide-react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">₹0 to Host. Always.</div>
          <h1 className="hero-title">
            Turn Your <span className="desktop-br"><br /></span>
            <span className="text-gradient">Passion</span> into <span className="desktop-br"><br /></span>
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
          <div className="dashboard-preview">
            <div className="main-window">
              <div className="window-header">
                <div className="dots"><span></span><span></span><span></span></div>
                <div className="address-bar">blithe.com/dashboard</div>
              </div>
              <div className="window-content">
                <div className="sidebar">
                  <div className="s-item active"></div>
                  <div className="s-item"></div>
                  <div className="s-item"></div>
                  <div className="s-item"></div>
                </div>
                <div className="main-view">
                  <div className="view-header">
                    <div className="h-title">Upcoming Events</div>
                    <div className="h-user"></div>
                  </div>
                  <div className="view-cards">
                    <div className="v-card">
                      <div className="v-icon">🎨</div>
                      <div className="v-text">
                        <div className="v-line long"></div>
                        <div className="v-line short"></div>
                      </div>
                    </div>
                    <div className="v-card">
                      <div className="v-icon">📸</div>
                      <div className="v-text">
                        <div className="v-line long"></div>
                        <div className="v-line short"></div>
                      </div>
                    </div>
                  </div>
                  <div className="view-chart">
                    <div className="chart-bars">
                      <div className="bar" style={{height: '40%'}}></div>
                      <div className="bar" style={{height: '70%'}}></div>
                      <div className="bar" style={{height: '50%'}}></div>
                      <div className="bar" style={{height: '90%'}}></div>
                      <div className="bar" style={{height: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Advanced Elements */}
            <div className="glass-card analytics-card">
              <div className="g-title">Live Attendance</div>
              <div className="g-value">842</div>
              <div className="g-badge">+12% this week</div>
            </div>

            <div className="glass-card success-card">
              <div className="g-icon-circle">✅</div>
              <div className="g-text">
                <div className="g-title">Event Published</div>
                <div className="g-subtitle">Your event is now live!</div>
              </div>
            </div>

            <div className="glass-card revenue-card">
              <div className="g-title">Total Revenue</div>
              <div className="g-value">₹42,850</div>
              <div className="spark-line">
                <svg viewBox="0 0 100 30">
                  <path d="M0 25 L20 15 L40 20 L60 5 L80 15 L100 10" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
          </div>
        </div>
      </div>
      
      <div className="trusted-by">
        <div className="container">
          <p>Trusted by creators from</p>
          <div className="logo-cloud">
            <span className="logo-item">Techstars</span>
            <span className="logo-item">Y Combinator</span>
            <span className="logo-item">Product Hunt</span>
            <span className="logo-item">Vercel</span>
            <span className="logo-item">Design Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
