import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button/Button';
import AuthModal from '../AuthModal/AuthModal';
import './Navbar.scss';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            Blithe
          </Link>
          
          <div className="nav-links desktop-only">
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

          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-off-canvas"
            >
              <div className="mobile-nav-links">
                <Link to="/" className="mobile-nav-link" onClick={closeMenu}>How it Works</Link>
                <Link to="/events" className="mobile-nav-link" onClick={closeMenu}>Our Events</Link>
                <Link to="/pricing" className="mobile-nav-link" onClick={closeMenu}>Pricing</Link>
                <div className="mobile-auth-btn">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      closeMenu();
                    }}
                  >
                    Login / Signup →
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
