import React from 'react';
import './MyOrdersPage.css';
import { FaBox, FaTruck, FaCheckCircle } from 'react-icons/fa6';

const MyOrdersPage = ({ currentUser }) => {
  const mockOrders = [
    {
      id: 'ORD001',
      date: '2024-01-28',
      quantity: 2,
      coldWater: true,
      total: 120,
      status: 'Delivered',
      statusIcon: FaCheckCircle,
      village: currentUser?.village || 'Nandgaon'
    },
    {
      id: 'ORD002',
      date: '2024-01-25',
      quantity: 1,
      coldWater: false,
      total: 50,
      status: 'Delivered',
      statusIcon: FaCheckCircle,
      village: currentUser?.village || 'Nandgaon'
    },
    {
      id: 'ORD003',
      date: '2024-01-29',
      quantity: 3,
      coldWater: true,
      total: 180,
      status: 'Out for Delivery',
      statusIcon: FaTruck,
      village: currentUser?.village || 'Nandgaon'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'status-delivered';
      case 'Out for Delivery': return 'status-pending';
      default: return 'status-processing';
    }
  };

  return (
    <div className="my-orders-page">
      <div className="container">
        <div className="page-header">
          <h1>My Orders</h1>
          <p>View and track your water can orders</p>
        </div>

        {mockOrders.length > 0 ? (
          <div className="orders-list">
            {mockOrders.map((order) => {
              const StatusIcon = order.statusIcon;
              return (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div className="order-id-section">
                      <h3>Order #{order.id}</h3>
                      <p className="order-date">Placed on {new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div className={`order-status ${getStatusColor(order.status)}`}>
                      <StatusIcon className="status-icon" />
                      <span>{order.status}</span>
                    </div>
                  </div>

                  <div className="order-body">
                    <div className="order-details grid-2">
                      <div className="detail-item">
                        <span className="label">Water Cans (20L)</span>
                        <span className="value">{order.quantity} cans</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">Cold Water Service</span>
                        <span className="value">{order.coldWater ? '✓ Added' : '✗ Not added'}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">Delivery Location</span>
                        <span className="value">{order.village}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">Total Amount</span>
                        <span className="value price">₹{order.total}</span>
                      </div>
                    </div>

                    <div className="order-actions">
                      <button className="btn btn-outline btn-small">Track Order</button>
                      <button className="btn btn-secondary btn-small">Reorder</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <FaBox className="empty-icon" />
            <h3>No Orders Yet</h3>
            <p>You haven't placed any orders yet. Start by ordering water cans!</p>
            <a href="/order" className="btn btn-primary">Place Your First Order</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrdersPage;
