import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { navItems } from "../data/portfolioData";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="nav-logo"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="logo-symbol">&lt;/&gt;</span>
          <span>Harish.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="active-nav"
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="nav-actions">
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="hire-btn"
          >
            <span>Get in Touch</span>
            <FaArrowRight />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            aria-label="Mobile Navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setMobileMenuOpen(false)}
              className="primary-btn"
              style={{ marginTop: "10px", width: "100%" }}
            >
              Get in Touch <FaArrowRight />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
