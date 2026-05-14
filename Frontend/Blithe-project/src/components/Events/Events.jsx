import React from 'react';
import { Search, ChevronDown, Filter, Calendar, Languages, Tag, Ticket, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Events.scss';
import concertImg from '../../assets/concert.png';
import startupImg from '../../assets/startup.png';

const MOCK_EVENTS = [
  {
    id: 1,
    title: "MISMATCHED - A TAMIL COMEDY SHOW ft. Raja and ...",
    category: "Comedy Shows",
    date: "Sun, 17 May onwards",
    time: "6:00 PM",
    location: "Trinity Studio: Chennai",
    price: "₹ 299",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
    promoted: true
  },
  {
    id: 2,
    title: "VIKKALS COMEDY CAFE - A standup comedy mic",
    category: "Comedy Shows",
    date: "Wed, 13 May onwards",
    time: "7:30 PM",
    location: "The Lab: Royapettah",
    price: "₹ 150",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    promoted: true
  },
  {
    id: 3,
    title: "P.C.SORCAR & Dhayas International MAGIC SHOW",
    category: "Performances",
    date: "Sat, 16 May onwards",
    time: "4:00 PM",
    location: "Museum Theatre: Chennai",
    price: "₹ 500",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60",
    promoted: false
  },
  {
    id: 4,
    title: "Vijay Antony Live in Concert - Chennai",
    category: "Music Shows",
    date: "Sat, 13 Jun",
    time: "6:30 PM",
    location: "YMCA Nandanam: Chennai",
    price: "₹ 999",
    image: concertImg,
    promoted: false
  },
  {
    id: 5,
    title: "Art & Craft Workshop for Kids",
    category: "Workshops",
    date: "Sun, 24 May",
    time: "10:00 AM",
    location: "Creative Space: Adyar",
    price: "₹ 450",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60",
    promoted: false
  },
  {
    id: 6,
    title: "Startup Founders Meetup",
    category: "Meetups",
    date: "Fri, 22 May",
    time: "5:00 PM",
    location: "IITM Research Park",
    price: "Free",
    image: startupImg,
    promoted: true
  }
];

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
                <div className="event-card glass">
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
                      <button className="details-btn">
                        Details <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Events;