import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowLeft, Share2, Heart, Info, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import { MOCK_EVENTS } from '../../data/events';
import Button from '../Button/Button';
import './EventDetails.scss';

const EventDetails = () => {
  const { id } = useParams();
  const event = MOCK_EVENTS.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="error-page container">
        <h2>Event not found</h2>
        <Link to="/events" className="back-link">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="event-details-page">
      <div className="hero-banner" style={{ backgroundImage: `url(${event.image})` }}>
        <div className="overlay"></div>
        <div className="container banner-content">
          <Link to="/events" className="back-btn">
            <ArrowLeft size={20} /> Back to Events
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="header-info"
          >
            <span className="category-badge">{event.category}</span>
            <h1 className="event-title">{event.title}</h1>
            <div className="quick-meta">
              <span><Calendar size={18} /> {event.date}</span>
              <span><MapPin size={18} /> {event.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container main-content">
        <div className="content-grid">
          <div className="details-area">
            <section className="about-section glass">
              <div className="section-header">
                <Info size={24} />
                <h2>About the Event</h2>
              </div>
              <p className="description">{event.description}</p>
            </section>

            <section className="venue-section glass">
              <div className="section-header">
                <MapPin size={24} />
                <h2>Venue & Location</h2>
              </div>
              <div className="venue-info">
                <div className="map-placeholder">
                  {/* In a real app, this would be a Google Map component */}
                  <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&fit=crop&q=60" alt="Map" />
                  <div className="map-overlay">
                    <MapPin size={32} color="#7C3AED" />
                  </div>
                </div>
                <div className="venue-details">
                  <h3>{event.location.split(':')[0]}</h3>
                  <p>{event.location.split(':')[1] || event.location}</p>
                  <Button variant="outline" size="sm">Get Directions</Button>
                </div>
              </div>
            </section>
          </div>

          <aside className="sticky-sidebar">
            <div className="booking-card glass">
              <div className="price-row">
                <span className="label">Price per person</span>
                <span className="amount">{event.price}</span>
              </div>

              <div className="info-list">
                <div className="info-item">
                  <Calendar size={20} className="icon" />
                  <div>
                    <p className="val">{event.date.split(',')[1] || event.date}</p>
                    <p className="sub">Event Date</p>
                  </div>
                </div>
                <div className="info-item">
                  <Clock size={20} className="icon" />
                  <div>
                    <p className="val">{event.time}</p>
                    <p className="sub">Start Time</p>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <Button variant="primary" size="lg" className="book-now-btn">
                  Book Now <Ticket size={20} />
                </Button>
                <div className="secondary-actions">
                  <button className="icon-action" aria-label="Share"><Share2 size={20} /></button>
                  <button className="icon-action" aria-label="Add to Favorites"><Heart size={20} /></button>
                </div>
              </div>

              <p className="guarantee">
                <Ticket size={14} /> 100% Secure Transaction
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
