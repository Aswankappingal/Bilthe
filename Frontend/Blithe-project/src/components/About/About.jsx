import React from 'react';
import creatorsImg from '../../assets/creators.png';
import './About.scss';

const About = () => {
  return (
    <section className="about" id="creators">
      <div className="container about-grid">
        <div className="about-content">
          <span className="badge">Our Mission</span>
          <h2>We Empower <br />Modern Creators.</h2>
          <p>
            Blithe is more than just a platform; it's a movement to democratize event hosting. 
            Whether you're a yoga instructor, a digital artist, or a professional hobbyist, 
            we provide the tools you need to grow your community and turn your passion into a thriving profession.
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h4>50k+</h4>
              <p>Active Seekers</p>
            </div>
            <div className="stat-card">
              <h4>1.2k</h4>
              <p>Daily Events</p>
            </div>
          </div>
        </div>

        <div className="about-image-container">
          <div className="image-wrapper">
            <img src={creatorsImg} alt="Creators collaborating" className="main-image" />
            <div className="floating-card-about">
              <p>Join 1,000+ creators hosting today</p>
              <div className="avatars">
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;