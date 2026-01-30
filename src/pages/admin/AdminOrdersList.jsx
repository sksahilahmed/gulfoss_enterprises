import React from 'react';
import './AdminOrdersList.css';

const AdminOrdersList = () => {
  const orders = [
    { id: 'ORD001', customer: 'Raj Kumar', phone: '9876543210', village: 'Nandgaon', cans: 2, coldWater: 'Yes', amount: '₹120', date: '2024-01-28', status: 'Delivered' },
    { id: 'ORD002', customer: 'Priya Singh', phone: '9876543211', village: 'Satara', cans: 1, coldWater: 'No', amount: '₹50', date: '2024-01-25', status: 'Delivered' },
    { id: 'ORD003', customer: 'Arun Patel', phone: '9876543212', village: 'Koregaon', cans: 3, coldWater: 'Yes', amount: '₹180', date: '2024-01-29', status: 'Out for Delivery' },
    { id: 'ORD004', customer: 'Sneha Verma', phone: '9876543213', village: 'Vaduj', cans: 2, coldWater: 'No', amount: '₹100', date: '2024-01-30', status: 'Pending' },
  ];

  const [filter, setFilter] = React.useState('All');

  const filteredOrders = filter === 'All' ? orders : orders.filter(o => o.status === filter);

  return (
    <div className="admin-orders">
      <div className="container">
        <div className="page-header">
          <h1>All Orders</h1>
          <p>Manage and track all customer orders</p>
        </div>

        {/* Filter */}
        <div className="filter-section">
          <div className="filter-buttons">
            {['All', 'Pending', 'Out for Delivery', 'Delivered'].map((status) => (
              <button
                key={status}
                className={`filter-btn ${filter === status ? 'active' : ''}`}
                onClick={() => setFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Village</th>
                <th>Cans</th>
                <th>Cold Water</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.phone}</td>
                  <td>{order.village}</td>
                  <td>{order.cans}</td>
                  <td>{order.coldWater}</td>
                  <td className="amount">{order.amount}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>
                    <span className={`status-badge status-${order.status.toLowerCase().replace(' ', '-')}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="Edit">✎</button>
                      <button className="btn-icon" title="Delete">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersList;
