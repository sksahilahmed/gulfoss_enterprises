import React from 'react';
import './AdminDashboard.css';
import { FaUsers, FaBox, FaShoppingCart, FaCalendarAlt } from 'react-icons/fa6';

const AdminDashboard = () => {
  const stats = [
    { icon: FaUsers, label: 'Total Customers', value: '542', color: 'stat-blue' },
    { icon: FaBox, label: 'Total Orders', value: '1,245', color: 'stat-green' },
    { icon: FaCalendarAlt, label: 'Active Subscriptions', value: '89', color: 'stat-purple' },
    { icon: FaShoppingCart, label: 'Monthly Revenue', value: '₹45,000', color: 'stat-orange' }
  ];

  const recentOrders = [
    { id: 'ORD001', customer: 'Raj Kumar', village: 'Nandgaon', amount: '₹100', status: 'Delivered' },
    { id: 'ORD002', customer: 'Priya Singh', village: 'Satara', amount: '₹150', status: 'Pending' },
    { id: 'ORD003', customer: 'Arun Patel', village: 'Koregaon', amount: '₹120', status: 'Processing' }
  ];

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Monitor your business metrics and performance</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`stat-box ${stat.color}`}>
                <div className="stat-icon">
                  <Icon />
                </div>
                <div className="stat-content">
                  <p className="stat-label">{stat.label}</p>
                  <h3 className="stat-value">{stat.value}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid grid-4">
            <button className="action-card">
              <span className="action-icon">📊</span>
              <span>View Reports</span>
            </button>
            <button className="action-card">
              <span className="action-icon">👥</span>
              <span>Manage Customers</span>
            </button>
            <button className="action-card">
              <span className="action-icon">📦</span>
              <span>View All Orders</span>
            </button>
            <button className="action-card">
              <span className="action-icon">🏘️</span>
              <span>Manage Villages</span>
            </button>
          </div>
        </section>

        {/* Recent Orders */}
        <section className="recent-orders">
          <div className="section-header">
            <h2>Recent Orders</h2>
            <a href="/admin/orders" className="view-all">View All</a>
          </div>

          <div className="table-responsive">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Village</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, idx) => (
                  <tr key={idx}>
                    <td><strong>{order.id}</strong></td>
                    <td>{order.customer}</td>
                    <td>{order.village}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`status-badge status-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
