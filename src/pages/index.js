import React from 'react';
import './styles.css'; // Custom CSS for styling

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <a href="#home">Your Brand Logo</a>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to [Your Company Name]</h1>
          <p>Your tagline or brief description here.</p>
          <a href="#services" className="cta-button">Explore More</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>Provide a detailed description about your company, mission, or product offerings.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service">
            <h3>Service 1</h3>
            <p>Details about service 1.</p>
          </div>
          <div className="service">
            <h3>Service 2</h3>
            <p>Details about service 2.</p>
          </div>
          <div className="service">
            <h3>Service 3</h3>
            <p>Details about service 3.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 [Your Company Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

