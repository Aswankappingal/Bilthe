import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import AuthModal from '../AuthModal/AuthModal';
import './Navbar.scss';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <Link to="/" className="logo">
            Blithe
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">How it Works</Link>
            <Link to="/events" className="nav-link">Our Events</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => setIsAuthModalOpen(true)}
            >
              Login / Signup →
            </Button>
          </div> 
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
