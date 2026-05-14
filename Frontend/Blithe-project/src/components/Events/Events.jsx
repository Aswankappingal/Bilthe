import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Calendar, Languages, Tag, Ticket, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_EVENTS } from '../../data/events';
import './Events.scss';

const FILTER_CATEGORIES = [
  "Workshops", "Comedy Shows", "Music Shows", "Kids", 
  "Performances", "Meetups", "Conferences", "Award shows", "Talks"
];

const FilterSection = ({ title, options, icon: Icon, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="filter-card glass">
      <div className="filter-card-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="title-with-icon">
          {Icon && <Icon size={18} className="icon" />}
          <span>{title}</span>
        </div>
        <div className="header-actions">
          <button className="clear-link" onClick={(e) => e.stopPropagation()}>Clear</button>
          <ChevronDown size={16} className={`chevron ${isOpen ? 'rotated' : ''}`} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="filter-card-content"
          >
            <div className="options-flex">
              {options.map((opt, i) => (
                <button key={i} className="opt-btn">{opt}</button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Events = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="events-page">
      <div className="container">
        {/* Header Section */}
        <header className="page-header">
          <div className="header-main">
            <div className="title-area">
              <h1 className="main-title">Events in <span className="gradient-text">Chennai</span></h1>
              <p className="subtitle">Discover {MOCK_EVENTS.length} handpicked experiences near you</p>
            </div>
            
            <div className="search-wrapper">
              <div className="search-bar glass">
                <Search size={20} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by event, artist or venue..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Centered Filters Grid */}
        <section className="filters-section-centered">
          <div className="filters-grid">
            <FilterSection 
              title="Categories" 
              icon={Tag}
              options={FILTER_CATEGORIES} 
            />
            <FilterSection 
              title="Date" 
              icon={Calendar}
              options={["Today", "Tomorrow", "This Weekend"]} 
            />
            <FilterSection 
              title="Languages" 
              icon={Languages}
              options={["Tamil", "English", "Hindi"]} 
            />
            <FilterSection 
              title="Price" 
              icon={Ticket}
              options={["Free", "0 - 500", "501 - 2000", "Above 2000"]} 
            />
          </div>
        </section>

        {/* Category Pills */}
        <div className="quick-categories">
          <div className="pills-container">
            {FILTER_CATEGORIES.map((cat, i) => (
              <button key={i} className="cat-pill">{cat}</button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <main className="events-main">
          <div className="events-grid">
            {MOCK_EVENTS.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="event-card-container"
              >
                <Link to={`/events/${event.id}`} className="event-card glass">
                  <div className="image-box">
                    <img src={event.image} alt={event.title} loading="lazy" />
                    <div className="overlays">
                      {event.promoted && <span className="promoted-badge">Promoted</span>}
                      <span className="price-badge glass-dark">{event.price}</span>
                    </div>
                  </div>
                  
                  <div className="content-box">
                    <div className="meta-row">
                      <span className="cat-tag">{event.category}</span>
                      <span className="date-tag">
                        <Calendar size={14} />
                        {event.date.split(',')[1] || event.date}
                      </span>
                    </div>
                    
                    <h3 className="event-title">{event.title}</h3>
                    
                    <div className="loc-row">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>

                    <div className="footer-row">
                      <div className="time-tag">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <span className="details-btn">
                        Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Events;