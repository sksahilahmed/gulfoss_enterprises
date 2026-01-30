import React from 'react';
import './AboutPage.css';
import { FaCheckCircle } from 'react-icons/fa6';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '10', label: 'Villages Served' },
    { number: '2000+', label: 'Cans Delivered' },
    { number: '4.8★', label: 'Customer Rating' }
  ];

  const values = [
    { icon: '💧', title: 'Quality', description: 'Pure, clean water tested and verified' },
    { icon: '🚚', title: 'Reliability', description: 'On-time delivery, always' },
    { icon: '💰', title: 'Affordability', description: 'Best prices for quality water' },
    { icon: '🤝', title: 'Trust', description: 'Customer satisfaction is our priority' }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>About Gulfoss Enterprises</h1>
          <p>Delivering Pure Water, Pure Trust</p>
        </div>

        {/* Story Section */}
        <section className="about-section">
          <div className="section-content grid-2">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Gulfoss Enterprises was founded with a simple mission: to provide clean, 
                affordable drinking water to rural and semi-urban areas. We understand the 
                challenges of accessing quality water in villages, and we're committed to 
                making a difference.
              </p>
              <p>
                With years of experience and a dedicated team, we've built a reputation 
                for reliability, quality, and customer care. Every water can we deliver 
                comes with our promise of purity and excellence.
              </p>
              <div className="values-list">
                <div className="value-item">
                  <FaCheckCircle /> Established in 2020
                </div>
                <div className="value-item">
                  <FaCheckCircle /> 100% Pure Water Guarantee
                </div>
                <div className="value-item">
                  <FaCheckCircle /> ISO Certified Processes
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">💧 Water Pure & Fresh</div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-emoji">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="section-content grid-2">
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>
                To ensure every household in rural and semi-urban areas has access to 
                pure, affordable drinking water through innovative delivery services 
                and sustainable practices.
              </p>
            </div>
            <div className="mission-box">
              <h3>Our Vision</h3>
              <p>
                To be the trusted water supply partner for villages across the region, 
                known for quality, reliability, and customer care that transforms 
                lives and communities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
