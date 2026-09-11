import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { navItems } from "../data/portfolioData";

export const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-top-row">
            {/* Brand Logo */}
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="nav-logo"
            >
              <span className="logo-symbol">&lt;/&gt;</span>
              <span>Harish.dev</span>
            </Link>

            {/* Quick Links */}
            <div className="footer-nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="footer-nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-bottom-row">
            <p>
              &copy; {new Date().getFullYear()} Harish Aravindh. All rights
              reserved.
            </p>
            <p>
              Designed &amp; Engineered with React <span>&hearts;</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Scroll back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};
