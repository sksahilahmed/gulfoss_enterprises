import React from 'react';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import ServiceCard from '../components/ServiceCard';
import { FaWaterLadder, FaTruck, FaCalendarDays } from 'react-icons/fa6';
import './LandingPage.css';

const LandingPage = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const services = [
    {
      icon: FaWaterLadyer,
      title: '20-Liter Water Cans',
      description: 'Pure, clean drinking water delivered to your doorstep in convenient 20-liter cans.'
    },
    {
      icon: FaWaterLadyer,
      title: 'Cold Drinking Water',
      description: 'Chilled water perfectly cooled and ready to drink. Great for summers!'
    },
    {
      icon: FaTruck,
      title: 'Fast Delivery',
      description: 'Quick delivery within your village and nearby areas. Same-day delivery available.'
    }
  ];

  const pricingPlans = [
    {
      title: 'Daily Order',
      price: '50',
      period: 'can',
      features: ['One 20L can per delivery', 'Next-day delivery', 'Flexible cancellation']
    },
    {
      title: 'Monthly Plan',
      price: '1,200',
      period: 'month',
      features: ['30 liters weekly', 'Priority delivery', 'Cold water option', 'Discounted rate'],
      popular: true
    },
    {
      title: 'Yearly Plan',
      price: '12,000',
      period: 'year',
      features: ['Unlimited deliveries', 'Free cold water', 'Best pricing', '24/7 support']
    }
  ];

  const villages = [
    'Nandgaon', 'Mahabaleshwar', 'Satara', 'Koregaon',
    'Vaduj', 'Kasegaon', 'Lonand', 'Phaltan'
  ];

  const handleOrderClick = () => {
    if (isLoggedIn) {
      navigate('/order');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Pure Water, Fresh Life</h1>
            <p>Quality water can supply and cold drinking water services delivered to your village</p>
            <button className="btn btn-primary btn-large" onClick={handleOrderClick}>
              Order Water Now
            </button>
          </div>
          <div className="hero-image">
            <div className="hero-visual">💧</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="grid grid-3">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Our Pricing Plans</h2>
          <p className="section-subtitle">Choose the plan that fits your needs</p>
          <div className="grid grid-3">
            {pricingPlans.map((plan, idx) => (
              <PricingCard
                key={idx}
                {...plan}
                onAction={handleOrderClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Villages Section */}
      <section className="villages-section">
        <div className="container">
          <h2 className="section-title">Villages We Serve</h2>
          <div className="villages-grid">
            {villages.map((village, idx) => (
              <div key={idx} className="village-card">
                <span className="village-marker">📍</span>
                <span>{village}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Order?</h2>
          <p>Fresh water delivery at your doorstep in minutes</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large" onClick={handleOrderClick}>
              Place Order
            </button>
            <button className="btn btn-outline btn-large">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
