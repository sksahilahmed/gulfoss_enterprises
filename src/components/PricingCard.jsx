import React from 'react';
import './PricingCard.css';
import { FaCheck } from 'react-icons/fa6';

const PricingCard = ({ title, price, period, features, popular = false, onAction }) => {
  return (
    <div className={`pricing-card ${popular ? 'popular' : ''}`}>
      {popular && <span className="popular-badge">POPULAR</span>}
      
      <h3>{title}</h3>
      
      <div className="price">
        <span className="amount">₹{price}</span>
        <span className="period">/{period}</span>
      </div>

      <button className="btn btn-primary btn-full" onClick={onAction}>
        {popular ? 'Subscribe Now' : 'Order Now'}
      </button>

      <div className="features">
        <h4>What's Included:</h4>
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>
              <FaCheck className="check-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
