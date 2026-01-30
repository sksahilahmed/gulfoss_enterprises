import React from 'react';
import './AdminCustomersList.css';

const AdminCustomersList = () => {
  const customers = [
    { id: 'CUST001', name: 'Raj Kumar', phone: '9876543210', village: 'Nandgaon', orders: 5, joined: '2024-01-01', status: 'Active' },
    { id: 'CUST002', name: 'Priya Singh', phone: '9876543211', village: 'Satara', orders: 3, joined: '2024-01-05', status: 'Active' },
    { id: 'CUST003', name: 'Arun Patel', phone: '9876543212', village: 'Koregaon', orders: 8, joined: '2023-12-20', status: 'Active' },
    { id: 'CUST004', name: 'Sneha Verma', phone: '9876543213', village: 'Vaduj', orders: 2, joined: '2024-01-25', status: 'Inactive' },
  ];

  const [filter, setFilter] = React.useState('All');

  const filteredCustomers = filter === 'All' ? customers : customers.filter(c => c.status === filter);

  return (
    <div className="admin-customers">
      <div className="container">
        <div className="page-header">
          <h1>Customer Management</h1>
          <p>View and manage all registered customers</p>
        </div>

        {/* Stats */}
        <div className="customer-stats">
          <div className="stat">
            <span className="stat-number">{customers.length}</span>
            <span className="stat-label">Total Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">{customers.filter(c => c.status === 'Active').length}</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat">
            <span className="stat-number">{customers.reduce((sum, c) => sum + c.orders, 0)}</span>
            <span className="stat-label">Total Orders</span>
          </div>
        </div>

        {/* Filter */}
        <div className="filter-section">
          <div className="filter-buttons">
            {['All', 'Active', 'Inactive'].map((status) => (
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
                <th>Customer ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Village</th>
                <th>Orders</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="customer-id">{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.village}</td>
                  <td className="orders-count">{customer.orders}</td>
                  <td>{new Date(customer.joined).toLocaleDateString()}</td>
                  <td>
                    <span className={`status-badge status-${customer.status.toLowerCase()}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">👁️</button>
                      <button className="btn-icon" title="Edit">✎</button>
                      <button className="btn-icon" title="Message">💬</button>
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

export default AdminCustomersList;
