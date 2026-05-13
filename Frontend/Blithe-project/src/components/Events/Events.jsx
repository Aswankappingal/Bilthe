import React from 'react';
import { Search, ChevronDown, Filter, Calendar, Languages, Tag, Ticket } from 'lucide-react';
import './Events.scss';
import concertImg from '../../assets/concert.png';
import startupImg from '../../assets/startup.png';

const MOCK_EVENTS = [
  {
    id: 1,
    title: "MISMATCHED - A TAMIL COMEDY SHOW ft. Raja and ...",
    category: "Comedy Shows",
    date: "Sun, 17 May onwards",
    location: "Trinity Studio: Chennai",
    price: "₹ 299 onwards",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
    promoted: true
  },
  {
    id: 2,
    title: "VIKKALS COMEDY CAFE - A standup comedy mic",
    category: "Comedy Shows",
    date: "Wed, 13 May onwards",
    location: "The Lab: Royapettah",
    price: "₹ 150 onwards",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    promoted: true
  },
  {
    id: 3,
    title: "P.C.SORCAR & Dhayas International MAGIC SHOW",
    category: "Performances",
    date: "Sat, 16 May onwards",
    location: "Museum Theatre: Chennai",
    price: "₹ 500 onwards",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60",
    promoted: false
  },
  {
    id: 4,
    title: "Vijay Antony Live in Concert - Chennai",
    category: "Music Shows",
    date: "Sat, 13 Jun",
    location: "YMCA Nandanam: Chennai",
    price: "₹ 999 onwards",
    image: concertImg,
    promoted: false
  },
  {
    id: 5,
    title: "Art & Craft Workshop for Kids",
    category: "Workshops",
    date: "Sun, 24 May",
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

const FilterSection = ({ title, options, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="filter-section">
      <div 
        className="filter-header" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <span className="filter-title">
          <ChevronDown 
            size={16} 
            style={{ 
              transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
              transition: 'transform 0.2s'
            }} 
          />
          {title}
        </span>
        <button className="clear-btn" onClick={(e) => {
          e.stopPropagation();
          // Clear logic here
        }}>Clear</button>
      </div>
      {isOpen && (
        <div className="filter-options">
          {options.map((opt, i) => (
            <button key={i} className="filter-opt-btn">{opt}</button>
          ))}
        </div>
      )}
    </div>
  );
};

const Events = () => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  return (
    <div className="events-page">
      <div className="container events-container">
        {/* Mobile Filter Trigger */}
        <button 
          className="mobile-filter-trigger"
          onClick={() => setIsFilterOpen(true)}
        >
          <Filter size={20} />
          Filters
        </button>

        {/* Filters Section */}
        <section className={`filters-container-centered ${isFilterOpen ? 'open' : ''}`}>
          <div className="filters-wrapper">
            <div className="sidebar-header">
              <h2 className="section-title">Filters</h2>
              <button className="close-filters" onClick={() => setIsFilterOpen(false)}>✕</button>
            </div>
            
            <div className="filters-grid-centered">
              <FilterSection 
                title="Categories" 
                options={FILTER_CATEGORIES} 
              />
              
              <FilterSection 
                title="Date" 
                options={["Today", "Tomorrow", "This Weekend"]} 
              />
              
              <FilterSection 
                title="Languages" 
                options={["Tamil", "English", "Hindi"]} 
              />
              
              <FilterSection 
                title="Price" 
                options={["Free", "0 - 500", "501 - 2000", "Above 2000"]} 
              />
            </div>

            <div className="sidebar-footer">
              <button className="apply-filters-btn" onClick={() => setIsFilterOpen(false)}>Apply Filters</button>
            </div>
          </div>
        </section>

        {/* Backdrop for mobile */}
        {isFilterOpen && (
          <div className="filters-backdrop" onClick={() => setIsFilterOpen(false)} />
        )}

        {/* Main Content */}
        <main className="events-content">
          <div className="content-header">
            <h1 className="main-title">Events In Chennai</h1>
            <div className="category-pills">
              {FILTER_CATEGORIES.map((cat, i) => (
                <button key={i} className="pill">{cat}</button>
              ))}
            </div>
          </div>

          <div className="events-grid">
            {MOCK_EVENTS.map(event => (
              <div key={event.id} className="event-card">
                <div className="card-image-wrapper">
                  <img src={event.image} alt={event.title} />
                  {event.promoted && <span className="promoted-tag">PROMOTED</span>}
                  <div className="card-date-overlay">{event.date}</div>
                </div>
                <div className="card-info">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-location">{event.location}</p>
                  <p className="event-category">{event.category}</p>
                  <p className="event-price">{event.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Events;