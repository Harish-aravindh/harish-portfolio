import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";
import { contactInfo } from "../data/portfolioData";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable transmission & feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading center">
          <div className="section-tag">
            <span>06.</span> CONTACT &amp; CONNECT
          </div>
          <h2>
            Let&apos;s create something <span>amazing together.</span>
          </h2>
          <p>
            Whether you have a technical opportunity, a project to build, or
            simply want to talk about full-stack systems and Generative AI.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="contact-layout-grid">
          {/* Left Column: Direct Reach */}
          <div className="contact-info-col">
            {/* Email Channel Card */}
            <div className="contact-channel-card">
              <div className="channel-left">
                <div className="channel-icon">
                  <FaEnvelope />
                </div>
                <div className="channel-text">
                  <small>Email Address</small>
                  <strong>{contactInfo.email}</strong>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="copy-email-btn"
                title="Copy email to clipboard"
              >
                {copied ? <FaCheck /> : <FaCopy />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Location Channel Card */}
            <div className="contact-channel-card">
              <div className="channel-left">
                <div className="channel-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="channel-text">
                  <small>Location</small>
                  <strong>{contactInfo.location}</strong>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="hero-eyebrow" style={{ alignSelf: "flex-start" }}>
              <span className="pulse-indicator" />
              <span>{contactInfo.availability}</span>
            </div>

            {/* Social Links */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                }}
              >
                Connect on Social Networks
              </p>
              <div className="socials-row">
                <a
                  href={contactInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-circle-link"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>

                <a
                  href={contactInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-circle-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-card">
            <div className="form-header">
              <h3>Send a Direct Message</h3>
              <p>I typically respond within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="interactive-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Opportunity / Engineering Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell me about your project, timeline, and goals..."
                  required
                />
              </div>

              <button
                type="submit"
                className="primary-btn"
                disabled={isSubmitting}
                style={{ width: "100%", padding: "14px" }}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </>
                )}
              </button>

              {/* Success Notification */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="toast-alert toast-success"
                  >
                    <FaCheck />
                    <span>
                      Thank you! Your message has been prepared. You can also
                      email directly at harish18aravindh@gmail.com.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
