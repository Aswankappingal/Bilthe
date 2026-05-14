import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button/Button';
import AuthModal from '../AuthModal/AuthModal';
import './Navbar.scss';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

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
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="mobile-off-canvas"
          >
            <div className="menu-inner">
              <div className="menu-header">
                <span className="menu-logo">Blithe</span>
                <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close Menu">
                  <X size={32} />
                </button>
              </div>

              <div className="mobile-nav-links">
                {[
                  { name: 'How it Works', path: '/' },
                  { name: 'Our Events', path: '/events' },
                  { name: 'Pricing', path: '/pricing' }
                ].map((link, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Link to={link.path} className="mobile-nav-link" onClick={closeMenu}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants} className="mobile-auth-btn">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      closeMenu();
                    }}
                  >
                    Login / Signup <ArrowRight size={20} />
                  </Button>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="menu-footer">
                <p className="footer-label">Connect with us</p>
                <div className="social-links">
                  <Instagram size={24} />
                  <Twitter size={24} />
                  <Facebook size={24} />
                </div>
                <div className="contact-info">
                  <p>hello@blithe.com</p>
                  <p>© 2026 Blithe Studio</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
