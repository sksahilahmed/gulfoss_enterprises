import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
