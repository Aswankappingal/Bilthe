import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          Blithe
        </div>
        <div className="nav-links">
          <a href="#how-it-works" className="nav-link">How it Works</a>
          <a href="#creators" className="nav-link">Our Events</a>
          <a href="#discover" className="nav-link">Pricing</a>
          <Button variant="primary" size="sm">Start Hosting Free →</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
