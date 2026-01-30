import React from 'react';
import './AdminSubscriptionsList.css';

const AdminSubscriptionsList = () => {
  const subscriptions = [
    { id: 'SUB001', customer: 'Raj Kumar', plan: 'Monthly', amount: '₹1,200', startDate: '2024-01-01', endDate: '2024-02-01', status: 'Active' },
    { id: 'SUB002', customer: 'Priya Singh', plan: 'Yearly', amount: '₹12,000', startDate: '2023-06-15', endDate: '2024-06-15', status: 'Active' },
    { id: 'SUB003', customer: 'Arun Patel', plan: 'Monthly', amount: '₹1,200', startDate: '2024-01-10', endDate: '2024-02-10', status: 'Active' },
    { id: 'SUB004', customer: 'Sneha Verma', plan: 'Monthly', amount: '₹1,200', startDate: '2023-12-20', endDate: '2024-01-20', status: 'Expired' },
  ];

  const [filter, setFilter] = React.useState('All');

  const filteredSubscriptions = filter === 'All' ? subscriptions : subscriptions.filter(s => s.status === filter);

  return (
    <div className="admin-subscriptions">
      <div className="container">
        <div className="page-header">
          <h1>Subscription Management</h1>
          <p>Monitor and manage all customer subscriptions</p>
        </div>

        {/* Filter */}
        <div className="filter-section">
          <div className="filter-buttons">
            {['All', 'Active', 'Expired'].map((status) => (
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
                <th>Subscription ID</th>
                <th>Customer</th>
                <th>Plan Type</th>
                <th>Monthly Amount</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscriptions.map((sub) => (
                <tr key={sub.id}>
                  <td className="sub-id">{sub.id}</td>
                  <td>{sub.customer}</td>
                  <td>{sub.plan}</td>
                  <td className="amount">{sub.amount}</td>
                  <td>{new Date(sub.startDate).toLocaleDateString()}</td>
                  <td>{new Date(sub.endDate).toLocaleDateString()}</td>
                  <td>
                    <span className={`status-badge status-${sub.status.toLowerCase()}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">👁️</button>
                      <button className="btn-icon" title="Modify">✎</button>
                      <button className="btn-icon" title="Pause">⏸️</button>
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

export default AdminSubscriptionsList;
