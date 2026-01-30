import React from 'react';
import './SubscriptionsPage.css';
import { FaCalendarAlt, FaCheckCircle, FaPause } from 'react-icons/fa6';

const SubscriptionsPage = ({ currentUser }) => {
  const mockSubscriptions = [
    {
      id: 'SUB001',
      planName: 'Monthly Plan',
      startDate: '2024-01-01',
      endDate: '2024-02-01',
      price: 1200,
      status: 'Active',
      features: ['30 liters weekly', 'Priority delivery', 'Cold water included'],
      icon: FaCheckCircle,
      nextDelivery: '2024-02-02'
    },
    {
      id: 'SUB002',
      planName: 'Yearly Plan',
      startDate: '2023-06-15',
      endDate: '2024-06-15',
      price: 12000,
      status: 'Active',
      features: ['Unlimited deliveries', 'Free cold water', '24/7 support'],
      icon: FaCheckCircle,
      nextDelivery: '2024-02-05'
    }
  ];

  const getStatusClass = (status) => {
    return status === 'Active' ? 'status-active' : 'status-paused';
  };

  return (
    <div className="subscriptions-page">
      <div className="container">
        <div className="page-header">
          <h1>My Subscriptions</h1>
          <p>Manage your active water subscription plans</p>
        </div>

        {mockSubscriptions.length > 0 ? (
          <div className="subscriptions-list">
            {mockSubscriptions.map((subscription) => {
              const StatusIcon = subscription.icon;
              return (
                <div key={subscription.id} className="subscription-card">
                  <div className="subscription-header">
                    <div className="plan-info">
                      <h3>{subscription.planName}</h3>
                      <div className={`subscription-status ${getStatusClass(subscription.status)}`}>
                        <StatusIcon />
                        <span>{subscription.status}</span>
                      </div>
                    </div>
                    <div className="plan-price">
                      <span className="price-label">Monthly Cost</span>
                      <span className="price-amount">₹{subscription.price}</span>
                    </div>
                  </div>

                  <div className="subscription-details grid-2">
                    <div className="detail">
                      <span className="detail-label">Start Date</span>
                      <span className="detail-value">{new Date(subscription.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-label">Expiry Date</span>
                      <span className="detail-value">{new Date(subscription.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-label">Next Delivery</span>
                      <span className="detail-value">{new Date(subscription.nextDelivery).toLocaleDateString()}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-label">Days Remaining</span>
                      <span className="detail-value">
                        {Math.ceil((new Date(subscription.endDate) - new Date()) / (1000 * 60 * 60 * 24))} days
                      </span>
                    </div>
                  </div>

                  <div className="subscription-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {subscription.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="check-mark">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="subscription-actions">
                    <button className="btn btn-secondary btn-small">Modify Subscription</button>
                    <button className="btn btn-outline btn-small">Pause Plan</button>
                    <button className="btn btn-outline btn-small">Cancel</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <FaCalendarAlt className="empty-icon" />
            <h3>No Active Subscriptions</h3>
            <p>Subscribe to a plan for regular water deliveries at discounted rates!</p>
            <a href="/#pricing" className="btn btn-primary">View Plans</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionsPage;
